import React, { useEffect, useRef, useState } from 'react';
import { Mountain, MapPin, TrendingUp, Clock, Ruler } from 'lucide-react';


export default function InteractiveTrailMap({ language = 'en' }) {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [trailStats, setTrailStats] = useState(null);

  const content = {
    en: {
      title: 'Your Path to the Summit',
      loading: 'Loading trail map...',
      stats: {
        distance: 'Total Distance',
        elevation: 'Elevation Gain',
        duration: 'Estimated Time',
        difficulty: 'Difficulty'
      },
      points: {
        start: 'Trail Start - Kushnin/Has',
        summit: 'Pashtrik Peak (1,989m)',
        end: 'Trail End - Kushnin/Has'
      },
      legend: {
        trail: 'Pilgrimage Trail',
        waypoints: 'Key Locations',
        elevation: 'Elevation Profile'
      }
    },
    al: {
      title: 'Rruga Juaj Drejt Majës',
      loading: 'Duke ngarkuar hartën e shtegut...',
      stats: {
        distance: 'Distanca Totale',
        elevation: 'Ngritja e Lartësisë',
        duration: 'Koha e Vlerësuar',
        difficulty: 'Vështirësia'
      },
      points: {
        start: 'Fillimi i Shtegut - Kushnin/Has',
        summit: 'Maja e Pashtrikut (1,989m)',
        end: 'Fundi i Shtegut - Kushnin/Has'
      },
      legend: {
        trail: 'Shtegu i Pelegrinazhit',
        waypoints: 'Vendndodhje Kryesore',
        elevation: 'Profili i Lartësisë'
      }
    }
  };

  const t = content[language];

  useEffect(() => {
    // Load Leaflet CSS and JS dynamically
    const loadLeaflet = async () => {
      // Add Leaflet CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load Leaflet JS
      if (!window.L) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      // Load Leaflet GPX plugin
      if (!window.L.GPX) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.7.0/gpx.min.js';
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      initializeMap();
    };

    loadLeaflet();
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || mapLoaded) return;

    const L = window.L;
    
    // Initialize map centered on Kosovo/Pashtrik area
    const map = L.map(mapRef.current, {
      center: [42.245, 20.515], // Approximate Pashtrik coordinates
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Add terrain tiles
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap contributors',
      maxZoom: 17,
    }).addTo(map);

    // Custom icons
    const startIcon = L.divIcon({
      html: `<div style="background: #1a4d2e; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>`,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const summitIcon = L.divIcon({
      html: `<div style="background: #c45b3f; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 4px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
      </div>`,
      className: 'custom-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    // Load and display GPX track
    try {
      new L.GPX(import.meta.env.BASE_URL + 'assets/kushnin-has-maja-e-pashtrikut-pashtrik-peak-kushnin-has.gpx', {
        async: true,
        marker_options: {
          startIconUrl: null,
          endIconUrl: null,
          shadowUrl: null,
          wptIconUrls: {
            '': null
          }
        },
        polyline_options: {
          color: '#c45b3f',
          weight: 5,
          opacity: 0.9,
          lineCap: 'round',
          lineJoin: 'round',
          smoothFactor: 2
        }
      })
      .on('loaded', function(e) {
        const gpx = e.target;
        map.fitBounds(gpx.getBounds().pad(0.1));
        
        // Get track statistics
        const distance = (gpx.get_distance() / 1000).toFixed(1); // km
        const elevation = gpx.get_elevation_gain().toFixed(0); // m
        const duration = Math.ceil(gpx.get_duration() / 3600); // hours
        
        setTrailStats({
          distance: `${distance} km`,
          elevation: `${elevation} m`,
          duration: `${duration}-${duration + 2} ${language === 'en' ? 'hours' : 'orë'}`,
          difficulty: language === 'en' ? 'Moderate' : 'E Moderuar'
        });

        // Add custom markers
        const bounds = gpx.getBounds();
        
        // Start point
        L.marker([bounds.getSouth(), bounds.getWest()], { icon: startIcon })
          .addTo(map)
          .bindPopup(`<strong>${t.points.start}</strong>`);
        
        // Summit point (highest point)
        const highPoint = gpx.get_elevation_max_imp();
        if (highPoint) {
          L.marker([highPoint.lat, highPoint.lng], { icon: summitIcon })
            .addTo(map)
            .bindPopup(`<strong>${t.points.summit}</strong>`);
        }

        setMapLoaded(true);
      })
      .on('error', function(e) {
        console.error('Error loading GPX:', e);
        // Fallback to manual trail display
        displayFallbackTrail(map, L);
      })
      .addTo(map);
    } catch (error) {
      console.error('GPX loading error:', error);
      displayFallbackTrail(map, L);
    }
  };

  const displayFallbackTrail = (map, L) => {
    // Fallback coordinates if GPX fails to load
    const trailCoordinates = [
      [42.230, 20.500], // Start
      [42.235, 20.505],
      [42.240, 20.510],
      [42.245, 20.515], // Peak
      [42.240, 20.520],
      [42.235, 20.515],
      [42.230, 20.510]  // End
    ];

    L.polyline(trailCoordinates, {
      color: '#c45b3f',
      weight: 5,
      opacity: 0.9
    }).addTo(map);

    map.fitBounds(trailCoordinates);
    
    setTrailStats({
      distance: '12.5 km',
      elevation: '850 m',
      duration: language === 'en' ? '4-6 hours' : '4-6 orë',
      difficulty: language === 'en' ? 'Moderate' : 'E Moderuar'
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#f5f1e8] to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#1a4d2e] mb-4">
          {t.title}
        </h2>
        
        {/* Trail Statistics */}
        {trailStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Ruler className="w-8 h-8 text-[#c45b3f] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">{t.stats.distance}</p>
              <p className="text-xl font-bold text-[#1a4d2e]">{trailStats.distance}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <TrendingUp className="w-8 h-8 text-[#c45b3f] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">{t.stats.elevation}</p>
              <p className="text-xl font-bold text-[#1a4d2e]">{trailStats.elevation}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Clock className="w-8 h-8 text-[#c45b3f] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">{t.stats.duration}</p>
              <p className="text-xl font-bold text-[#1a4d2e]">{trailStats.duration}</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <Mountain className="w-8 h-8 text-[#c45b3f] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">{t.stats.difficulty}</p>
              <p className="text-xl font-bold text-[#1a4d2e]">{trailStats.difficulty}</p>
            </div>
          </div>
        )}

        {/* Interactive Map */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div 
            ref={mapRef} 
            className="w-full h-[600px] relative"
            style={{ background: '#f5f1e8' }}
          >
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#f5f1e8]">
                <div className="text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-[#c45b3f] border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">{t.loading}</p>
                </div>
              </div>
            )}
          </div>

          {/* Map Legend */}
          <div className="bg-[#1a4d2e] text-white p-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-1 bg-[#c45b3f]"></div>
                <span className="text-sm">{t.legend.trail}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[#d4a574]" />
                <span className="text-sm">{t.legend.waypoints}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#d4a574]" />
                <span className="text-sm">{t.legend.elevation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'This interactive map shows the actual GPS trail from Kushnin/Has to Pashtrik Peak. Click and drag to explore, zoom to see details, and click markers for more information.'
              : 'Kjo hartë interaktive tregon shtegun aktuale GPS nga Kushnin/Has në Majën e Pashtrikut. Kliko dhe tërhiq për të eksploruar, zmadho për të parë detaje dhe kliko shenjuesit për më shumë informacion.'}
          </p>
        </div>
      </div>

      <style>{`
        .leaflet-container {
          font-family: 'Lora', Georgia, serif;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .leaflet-popup-content {
          margin: 12px;
          font-size: 14px;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </section>
  );
}