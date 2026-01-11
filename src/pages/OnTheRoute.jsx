import React, { useState } from 'react';
import { Home, Bus, Smartphone, Utensils, MapPin, Heart, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import heroImage from "../assets/ne-rruge.jpeg";

export default function OnTheRoute() {
  const [language, setLanguage] = useState('al');

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-800">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <section className="relative h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(212, 165, 116, 0.85), rgba(212, 165, 116, 0.85)), url(${heroImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-4">
            {language === 'en' ? 'On the Route' : 'Në Rrugë'}
          </h1>
          <p className="text-2xl">
            {language === 'en' ? 'Services & Support' : 'Shërbime dhe Mbështetje'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: language === 'en' ? 'Accommodation' : 'Akomodimi',
              desc: language === 'en' 
                ? 'Mountain shelters at the summit and traditional guest houses in Has villages provide rest for pilgrims.'
                : 'Strehimoret malore në majë dhe shtëpitë e mysafirëve tradicionale në fshatrat e Hasit ofrojnë pushim për pelegrinë.'
            },
            {
              icon: Bus,
              title: language === 'en' ? 'Transportation' : 'Transporti',
              desc: language === 'en'
                ? 'Shuttle services connect Gjakovë and Prizren to trailheads. Local transport available in Has region.'
                : 'Shërbimet e autobus lidhin Gjakovën dhe Prizrenin me pikat fillestare. Transport lokal i disponueshëm në rajonin e Hasit.'
            },
            {
              icon: Smartphone,
              title: language === 'en' ? 'Mobile App' : 'Aplikacioni Mobil',
              desc: language === 'en'
                ? 'GPS navigation, offline maps, cultural information, and safety features available on our mobile app.'
                : 'Navigim GPS, harta offline, informacione kulturore dhe veçori sigurie të disponueshme në aplikacionin tonë mobil.'
            },
            {
              icon: Utensils,
              title: language === 'en' ? 'Food & Water' : 'Ushqimi dhe Uji',
              desc: language === 'en'
                ? 'Food pantry at summit shelter. Carry sufficient water and snacks. Villages offer meals and supplies.'
                : 'Magazine ushqimore në strehimoren e majës. Mbani ujë dhe ushqime të mjaftueshme. Fshatrat ofrojnë vakte dhe furnizime.'
            },
            {
              icon: Heart,
              title: language === 'en' ? 'Medical Support' : 'Mbështetja Mjekësore',
              desc: language === 'en'
                ? 'First aid available at shelters during August pilgrimage. Nearest hospitals in Gjakovë and Prizren.'
                : 'Ndihmë e parë e disponueshme në strehimore gjatë pelegrinazhit të gushtit. Spitalet më të afërta në Gjakovë dhe Prizren.'
            },
            {
              icon: Phone,
              title: language === 'en' ? 'Emergency Contact' : 'Kontakti i Emergjencës',
              desc: language === 'en'
                ? 'Emergency services: 112. Route support hotline available during pilgrimage season.'
                : 'Shërbimet e emergjencës: 112. Linja e mbështetjes së rrugës e disponueshme gjatë sezonit të pelegrinazhit.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#f5f1e8] flex items-center justify-center">
                  <Icon className="w-10 h-10 text-[#1a4d2e]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}