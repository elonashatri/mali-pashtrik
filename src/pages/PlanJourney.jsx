import React, { useState } from 'react';
import { Map, Compass, Calendar, Users, Navigation as NavIcon, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PlanJourney() {
  const [language, setLanguage] = useState('al');

  const content = {
    en: {
      hero: {
        title: 'Plan Your Journey',
        subtitle: 'Design Your Pilgrimage'
      },
      heading: 'Choose Your Route',
      guided: {
        title: 'Guided Routes',
        desc: 'Join experienced guides from local communities. Learn about history, traditions, and sacred sites along the traditional pilgrimage paths.',
        features: [
          'Expert local guides',
          'Group departures from Gjakovë & Prizren',
          '2-3 day itineraries'
        ],
        cta: 'View Guided Tours'
      },
      custom: {
        title: 'Custom Journey',
        desc: 'Create your own pilgrimage based on your schedule, fitness level, and spiritual interests. Access maps, accommodation info, and transportation options.',
        features: [
          'Flexible scheduling',
          'Interactive route planning tool',
          'Downloadable maps & guides'
        ],
        cta: 'Plan Custom Route'
      }
    },
    al: {
      hero: {
        title: 'Planifiko Udhëtimin',
        subtitle: 'Dizajno Pelegrinazhin Tënd'
      },
      heading: 'Zgjidh Rrugën Tënde',
      guided: {
        title: 'Rrugët e Udhëzuara',
        desc: 'Bashkohu me udhëzues me përvojë nga komunitetet lokale. Mëso për historinë, traditat dhe vendet e shenjta përgjatë rrugëve tradicionale të pelegrinazhit.',
        features: [
          'Udhëzues lokalë ekspertë',
          'Nisje grupore nga Gjakova dhe Prizreni',
          'Itinerare 2-3 ditore'
        ],
        cta: 'Shiko Turat e Udhëzuara'
      },
      custom: {
        title: 'Udhëtim i Personalizuar',
        desc: 'Krijo pelegrinazhin tënd bazuar në orarin, nivelin e kondicionit fizik dhe interesat shpirtërore. Akses në harta, informacione për akomodim dhe opsione transporti.',
        features: [
          'Orare fleksibël',
          'Mjet interaktiv për planifikim të rrugës',
          'Harta dhe udhëzues për shkarkime'
        ],
        cta: 'Planifiko Rrugën Tënde'
      }
    }
  };

  const t = content[language];

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Lora', Georgia, serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}</style>

      <Navigation language={language} setLanguage={setLanguage} />
      
      <section className="relative h-[60vh] flex items-center justify-center" style={{
        backgroundImage: "linear-gradient(rgba(130, 101, 130, 0.75), rgba(77, 6, 68, 0.75)), url('/assets/planifiko-udhtimin.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-2xl md:text-3xl text-[#d4a574] font-light">{t.hero.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center text-[#1a4d2e] mb-16">
          {t.heading}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Guided Routes Card */}
          <div className="card-hover bg-white rounded-2xl p-10 shadow-xl border-t-4 border-[#c45b3f]">
            <Compass className="w-16 h-16 text-[#1a4d2e] mb-6" />
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">
              {t.guided.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t.guided.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {t.guided.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#c45b3f] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#c45b3f] text-white py-4 rounded-full font-semibold hover:bg-[#a84a32] transition-all duration-300 transform hover:scale-105">
              {t.guided.cta}
            </button>
          </div>

          {/* Custom Journey Card */}
          <div className="card-hover bg-white rounded-2xl p-10 shadow-xl border-t-4 border-[#d4a574]">
            <Map className="w-16 h-16 text-[#1a4d2e] mb-6" />
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">
              {t.custom.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t.custom.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {t.custom.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#d4a574] text-[#1a4d2e] py-4 rounded-full font-semibold hover:bg-[#c49563] transition-all duration-300 transform hover:scale-105">
              {t.custom.cta}
            </button>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}