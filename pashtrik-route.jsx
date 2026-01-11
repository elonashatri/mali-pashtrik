import React, { useState, useEffect } from 'react';
import { Mountain, Map, Compass, PenTool, Home, Navigation, Smartphone, Cross, Sunset, MapPin, ChevronRight, Menu, X, Globe } from 'lucide-react';

export default function PashtrikRoute() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [language, setLanguage] = useState('al');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: ['Discover', 'Prepare', 'Plan Your Journey', 'On the Route', 'About'],
      hero: {
        title: 'Udha e Pashtrikut',
        subtitle: '2,000 years of sacred tradition',
        dates: 'August 2-22',
        cta: 'Begin Your Journey'
      },
      journey: {
        guided: {
          title: 'Explore Guided Routes',
          desc: 'Follow traditional pilgrimage paths with expert local guides'
        },
        custom: {
          title: 'Create Custom Journey',
          desc: 'Design your own route based on time, fitness, and interests'
        }
      },
      features: [
        {
          title: 'Accommodation',
          desc: 'Mountain shelters and traditional guest houses along the route',
          icon: Home
        },
        {
          title: 'Transportation',
          desc: 'Shuttle services connecting villages to trailheads',
          icon: Navigation
        },
        {
          title: 'Mobile App',
          desc: 'GPS navigation, offline maps, and cultural information',
          icon: Smartphone
        }
      ],
      heritage: {
        title: 'Sacred Heritage',
        subtitle: 'A Journey Through Time and Faith',
        cards: [
          {
            title: 'Sari Saltik Tomb',
            desc: 'The shrine of the 13th-century Sufi saint has drawn pilgrims for over 700 years',
            icon: Mountain
          },
          {
            title: 'August Pilgrimage',
            desc: 'Annual gathering during the first three weeks of August, continuing ancient traditions',
            icon: Sunset
          },
          {
            title: 'Interfaith Significance',
            desc: 'A sacred site for Bektashi, Orthodox, and Catholic communities alike',
            icon: Cross
          }
        ]
      },
      map: {
        title: 'Your Path to the Summit',
        locations: [
          { name: 'Gjakovë', type: 'Starting Point' },
          { name: 'Prizren', type: 'Starting Point' },
          { name: 'Has Villages', type: 'Rest Stop' },
          { name: 'Pashtrik Peak', type: 'Summit (1,989m)' }
        ]
      }
    },
    al: {
      nav: ['Zbulo', 'Përgatitu', 'Planifiko Udhëtimin', 'Në Rrugë', 'Rreth Nesh'],
      hero: {
        title: 'Rruga e Pashtrikut',
        subtitle: '2,000 vjet traditë e shenjtë',
        dates: '2-22 Gusht',
        cta: 'Fillo Udhëtimin'
      },
      journey: {
        guided: {
          title: 'Eksploroni Rrugët e Udhëzuara',
          desc: 'Ndiqni rrugët tradicionale të pelegrinimit me udhëzues vendas ekspertë'
        },
        custom: {
          title: 'Krijoni Udhëtimin Tuaj',
          desc: 'Dizajnoni rrugën tuaj bazuar në kohë, kondicion fizik dhe interesa'
        }
      },
      features: [
        {
          title: 'Akomodimi',
          desc: 'Strehimore malore dhe shtëpi tradicionale gjatë rrugës',
          icon: Home
        },
        {
          title: 'Transporti',
          desc: 'Shërbime autobuzi që lidhin fshatrat me shtegjet',
          icon: Navigation
        },
        {
          title: 'Aplikacioni Mobil',
          desc: 'Navigim GPS, harta offline dhe informacione kulturore',
          icon: Smartphone
        }
      ],
      heritage: {
        title: 'Trashëgimia e Shenjtë',
        subtitle: 'Një Udhëtim Nëpër Kohë dhe Besim',
        cards: [
          {
            title: 'Tyrbe e Sari Saltikut',
            desc: 'Varri i shenjtit sufi të shekullit të 13-të ka tërhequr pelegrinë për mbi 700 vjet',
            icon: Mountain
          },
          {
            title: 'Pelegrinazhi i Gushtit',
            desc: 'Tubim vjetor gjatë tre javëve të para të gushtit, duke vazhduar traditat e lashta',
            icon: Sunset
          },
          {
            title: 'Rëndësia Ndërfetare',
            desc: 'Një vend i shenjtë për komunitetet bektashiane, ortodokse dhe katolike',
            icon: Cross
          }
        ]
      },
      map: {
        title: 'Rruga Juaj Drejt Majës',
        locations: [
          { name: 'Gjakovë', type: 'Pika Fillestare' },
          { name: 'Prizren', type: 'Pika Fillestare' },
          { name: 'Fshatrat e Hasit', type: 'Pushim' },
          { name: 'Maja e Pashtrikut', type: 'Maja (1,989m)' }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Crimson+Text:wght@400;600;700&family=Lora:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Lora', Georgia, serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        
        .hero-title {
          font-family: 'Crimson Text', Georgia, serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
        
        .text-shadow-soft {
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #d4a574;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        
        .marker-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .dotted-path {
          stroke-dasharray: 5, 5;
          animation: dash 20s linear infinite;
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }

        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1a4d2e] shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mountain className="w-8 h-8 text-[#d4a574]" />
              <span className="text-white text-xl font-semibold tracking-wide">
                {language === 'en' ? 'Pashtrik Route' : 'Rruga e Pashtrikut'}
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {t.nav.map((item, idx) => (
                <a key={idx} href="#" className="nav-link text-white hover:text-[#d4a574] text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'al' : 'en')}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'SQ' : 'EN'}</span>
              </button>
              
              <button 
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
              {t.nav.map((item, idx) => (
                <a key={idx} href="#" className="block text-white hover:text-[#d4a574] text-sm font-medium py-2">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen parallax-bg overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')"
      }}>
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="hero-title text-white text-7xl md:text-8xl mb-6 text-shadow-soft fade-in-up">
              {t.hero.title}
            </h1>
            <p className="text-white text-2xl md:text-3xl mb-2 font-light fade-in-up stagger-1">
              {t.hero.subtitle}
            </p>
            <p className="text-[#d4a574] text-xl mb-10 font-medium fade-in-up stagger-2">
              {t.hero.dates}
            </p>
            <button className="bg-[#c45b3f] hover:bg-[#a84a32] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl fade-in-up stagger-3 inline-flex items-center space-x-2">
              <span>{t.hero.cta}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Journey Planning Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="card-hover bg-white rounded-2xl p-10 shadow-lg border-l-4 border-[#1a4d2e] cursor-pointer"
            onMouseEnter={() => setHoveredRoute('guided')}
            onMouseLeave={() => setHoveredRoute(null)}
          >
            <Compass className={`w-16 h-16 mb-6 transition-all duration-300 ${
              hoveredRoute === 'guided' ? 'text-[#c45b3f] transform rotate-12' : 'text-[#1a4d2e]'
            }`} />
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">{t.journey.guided.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.journey.guided.desc}</p>
            <a href="#" className="inline-flex items-center text-[#c45b3f] font-semibold hover:gap-3 transition-all duration-300">
              Learn More <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div 
            className="card-hover bg-white rounded-2xl p-10 shadow-lg border-l-4 border-[#c45b3f] cursor-pointer"
            onMouseEnter={() => setHoveredRoute('custom')}
            onMouseLeave={() => setHoveredRoute(null)}
          >
            <PenTool className={`w-16 h-16 mb-6 transition-all duration-300 ${
              hoveredRoute === 'custom' ? 'text-[#d4a574] transform -rotate-12' : 'text-[#c45b3f]'
            }`} />
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">{t.journey.custom.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.journey.custom.desc}</p>
            <a href="#" className="inline-flex items-center text-[#c45b3f] font-semibold hover:gap-3 transition-all duration-300">
              Learn More <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Route Map Section */}
      <section className="bg-gradient-to-b from-[#f5f1e8] to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-[#1a4d2e] mb-16">
            {t.map.title}
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a4d2e" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative">
              {/* Illustrated Map */}
              <svg className="w-full h-96" viewBox="0 0 800 400">
                {/* Mountain Silhouette */}
                <path 
                  d="M 50 350 L 200 100 L 350 180 L 500 80 L 650 150 L 750 350 Z" 
                  fill="#1a4d2e" 
                  opacity="0.1"
                />
                
                {/* Pilgrimage Path */}
                <path 
                  d="M 100 300 Q 250 250 350 220 T 600 120" 
                  fill="none" 
                  stroke="#c45b3f" 
                  strokeWidth="3"
                  className="dotted-path"
                />

                {/* Location Markers */}
                {[
                  { x: 100, y: 300, label: t.map.locations[0].name, type: t.map.locations[0].type },
                  { x: 250, y: 250, label: t.map.locations[1].name, type: t.map.locations[1].type },
                  { x: 420, y: 200, label: t.map.locations[2].name, type: t.map.locations[2].type },
                  { x: 600, y: 120, label: t.map.locations[3].name, type: t.map.locations[3].type }
                ].map((loc, idx) => (
                  <g key={idx} className="cursor-pointer">
                    <circle 
                      cx={loc.x} 
                      cy={loc.y} 
                      r="12" 
                      fill="#c45b3f" 
                      className="marker-pulse"
                    />
                    <circle cx={loc.x} cy={loc.y} r="6" fill="#d4a574" />
                    
                    {/* Tooltip on hover */}
                    <g className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <rect 
                        x={loc.x - 60} 
                        y={loc.y - 60} 
                        width="120" 
                        height="45" 
                        rx="8" 
                        fill="white" 
                        stroke="#1a4d2e" 
                        strokeWidth="2"
                      />
                      <text 
                        x={loc.x} 
                        y={loc.y - 40} 
                        textAnchor="middle" 
                        className="text-xs font-bold fill-[#1a4d2e]"
                      >
                        {loc.label}
                      </text>
                      <text 
                        x={loc.x} 
                        y={loc.y - 25} 
                        textAnchor="middle" 
                        className="text-xs fill-gray-600"
                      >
                        {loc.type}
                      </text>
                    </g>
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-[#c45b3f]" />
                  <span className="text-sm text-gray-600">Holy Sites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4 text-[#1a4d2e]" />
                  <span className="text-sm text-gray-600">Shelters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#d4a574]" />
                  <span className="text-sm text-gray-600">Starting Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {t.features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="card-hover bg-white rounded-2xl p-8 text-center shadow-lg cursor-pointer"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredFeature === idx 
                    ? 'bg-[#c45b3f] transform scale-110' 
                    : 'bg-[#f5f1e8]'
                }`}>
                  <Icon className={`w-10 h-10 transition-colors duration-300 ${
                    hoveredFeature === idx ? 'text-white' : 'text-[#1a4d2e]'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                <a href="#" className="inline-flex items-center text-[#c45b3f] font-semibold hover:gap-2 transition-all duration-300">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sacred Heritage Section */}
      <section className="relative parallax-bg py-32" style={{
        backgroundImage: "linear-gradient(rgba(26, 77, 46, 0.85), rgba(26, 77, 46, 0.9)), url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80')"
      }}>
        <div className="grain-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.heritage.title}
            </h2>
            <p className="text-[#d4a574] text-2xl font-light">
              {t.heritage.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.heritage.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#d4a574]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/80 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <button className="bg-[#d4a574] hover:bg-[#c49563] text-[#1a4d2e] px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center space-x-2">
              <span>{language === 'en' ? 'Discover the Sacred History' : 'Zbulo Historinë e Shenjtë'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d2e] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
                {language === 'en' ? 'Discover' : 'Zbulo'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'History & Heritage' : 'Historia & Trashëgimia'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Sacred Sites' : 'Vendet e Shenjta'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Cultural Traditions' : 'Traditat Kulturore'}
                </a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
                {language === 'en' ? 'Plan' : 'Planifiko'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Route Maps' : 'Hartat e Rrugës'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Accommodation' : 'Akomodimi'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Transportation' : 'Transporti'}
                </a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
                {language === 'en' ? 'Resources' : 'Resurset'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Mobile App' : 'Aplikacioni Mobil'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Trail Guides' : 'Udhëzuesit e Shtegut'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Safety Info' : 'Info të Sigurisë'}
                </a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
                {language === 'en' ? 'Contact' : 'Kontakti'}
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'About Us' : 'Rreth Nesh'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Partners' : 'Partnerët'}
                </a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">
                  {language === 'en' ? 'Contact' : 'Na Kontaktoni'}
                </a></li>
              </ul>
            </div>
          </div>

          {/* Partners */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <p className="text-center text-sm text-white/60 mb-4">
              {language === 'en' ? 'Partners' : 'Partnerët'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <span>Ministry of Culture</span>
              <span>University of Prishtina</span>
              <span>Tourism Kosovo</span>
              <span>UNESCO</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/60 border-t border-white/20 pt-8">
            <p>© 2026 Pashtrik Mountain Cultural Route. {language === 'en' ? 'All rights reserved.' : 'Të gjitha të drejtat e rezervuara.'}</p>
            <p className="mt-2">
              <a href="#" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Accessibility Statement' : 'Deklarata e Aksesibilitetit'}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
