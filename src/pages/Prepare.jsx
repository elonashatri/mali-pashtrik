import React, { useState } from 'react';
import { Heart, Mountain, Book, Users, Activity, Calendar, CheckCircle, Backpack } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Prepare() {
  const [language, setLanguage] = useState('al');

  const content = {
    en: {
      hero: {
        title: 'Prepare',
        subtitle: 'Physical, Spiritual & Practical Preparation'
      },
      physical: {
        title: 'Physical Preparation',
        subtitle: 'Pashtrik Peak rises to 1,989 meters. Proper preparation ensures a safe and meaningful journey.',
        cards: [
          {
            title: 'Fitness Level',
            desc: 'Moderate fitness required. The ascent involves 4-6 hours of hiking with 800m+ elevation gain.',
            tips: ['Start training 2-3 months before', 'Practice with loaded backpack', 'Build cardiovascular endurance'],
            icon: Activity
          },
          {
            title: 'What to Pack',
            desc: 'Essential gear for mountain conditions',
            tips: ['Sturdy hiking boots', 'Layered clothing', 'Water (2L minimum)', 'Sun protection', 'First aid kit', 'Rain gear'],
            icon: Backpack
          },
          {
            title: 'Best Season',
            desc: 'August 2-22 is the traditional pilgrimage period. Summer months offer the best weather conditions.',
            tips: ['Peak season: August', 'Avoid winter (snow/ice)', 'Check weather forecast', 'Start early in the day'],
            icon: Calendar
          }
        ]
      },
      spiritual: {
        title: 'Spiritual Preparation',
        intro: 'Approaching the pilgrimage with respect and intention enhances the sacred experience.',
        practices: [
          {
            name: 'Understanding the Tradition',
            desc: 'Learn about Sari Saltik, the Bektashi Order, and the 700-year history of this pilgrimage. Respect for the sacred nature of the site is paramount.',
            icon: Book
          },
          {
            name: 'Interfaith Respect',
            desc: 'While rooted in Bektashi Sufism, Pashtrik welcomes pilgrims of all faiths. Approach the site with reverence regardless of your own spiritual tradition.',
            icon: Users
          },
          {
            name: 'Mental Preparation',
            desc: 'The pilgrimage is both physically demanding and spiritually significant. Take time to reflect on your intentions and prepare mentally for the journey.',
            icon: Heart
          },
          {
            name: 'Ritual Understanding',
            desc: 'Familiarize yourself with traditional practices such as leaving offerings (nezër), lighting candles, and respecting sacred spaces. Observe and learn from experienced pilgrims.',
            icon: Mountain
          }
        ]
      }
    },
    al: {
      hero: {
        title: 'Përgatitu',
        subtitle: 'Përgatitje Fizike, Shpirtërore dhe Praktike'
      },
      physical: {
        title: 'Përgatitja Fizike',
        subtitle: 'Maja e Pashtrikut ngrihet në 1,989 metra. Përgatitja e duhur siguron një udhëtim të sigurt dhe kuptimplotë.',
        cards: [
          {
            title: 'Niveli i Kondicionit',
            desc: 'Kërkohet kondicion i moderuar. Ngjitja përfshin 4-6 orë ecje me rritje të lartësisë mbi 800m.',
            tips: ['Filloni stërvitjen 2-3 muaj para', 'Praktikoni me çantë të ngarkuar', 'Ndërtoni rezistencën kardiovaskulare'],
            icon: Activity
          },
          {
            title: 'Çfarë të Merrni',
            desc: 'Pajisje thelbësore për kushtet malore',
            tips: ['Këpucë të forta malësorësh', 'Veshje me shtresa', 'Ujë (min. 2L)', 'Mbrojtje nga dielli', 'Kit i ndihmës së parë', 'Pajisje për shi'],
            icon: Backpack
          },
          {
            title: 'Sezoni më i Mirë',
            desc: '2-22 Gusht është periudha tradicionale e pelegrinazhit. Muajt e verës ofrojnë kushtet më të mira të motit.',
            tips: ['Sezoni kryesor: Gusht', 'Shmangni dimrin (borë/akull)', 'Kontrolloni parashikimin e motit', 'Filloni herët në mëngjes'],
            icon: Calendar
          }
        ]
      },
      spiritual: {
        title: 'Përgatitja Shpirtërore',
        intro: 'Afrohu ndaj pelegrinazhit me respekt dhe qëllim për të përmirësuar përvojën e shenjtë.',
        practices: [
          {
            name: 'Kuptimi i Traditës',
            desc: 'Mësoni për Sari Saltikun, Urdhrin Bektashi dhe historinë 700-vjeçare të këtij pelegrinazhi. Respekti për natyrën e shenjtë të vendit është thelbësor.',
            icon: Book
          },
          {
            name: 'Respekti Ndërfetar',
            desc: 'Megjithëse i rrënjosur në Sufizmin Bektashi, Pashtriku pret pelegrinë të të gjitha feve. Afrohu ndaj vendit me nderim pavarësisht nga tradita jote shpirtërore.',
            icon: Users
          },
          {
            name: 'Përgatitja Mendore',
            desc: 'Pelegrinazhi është si fizikisht kërkues ashtu edhe shpirtërisht i rëndësishëm. Merre kohë për të reflektuar mbi qëllimet tuaja dhe përgatitu mendërisht për udhëtimin.',
            icon: Heart
          },
          {
            name: 'Kuptimi i Ritualeve',
            desc: 'Familjarizo me praktikat tradicionale si lënia e ofertave (nezër), ndezja e qirinjve dhe respektimi i hapësirave të shenjta. Vëzhgo dhe mëso nga pelegrinët me përvojë.',
            icon: Mountain
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-800 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Lora', Georgia, serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }
      `}</style>

      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center" style={{
        backgroundImage: "linear-gradient(rgba(196, 91, 63, 0.8), rgba(196, 91, 63, 0.8)), url('/assets/home-page-1.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-2xl md:text-3xl font-light">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Physical Preparation */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1a4d2e] mb-4">{t.physical.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.physical.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {t.physical.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="card-hover bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#f5f1e8] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#c45b3f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>
                <ul className="space-y-2">
                  {card.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Spiritual Preparation */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1a4d2e] mb-4">{t.spiritual.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.spiritual.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.spiritual.practices.map((practice, idx) => {
            const Icon = practice.icon;
            return (
              <div key={idx} className="card-hover bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#d4a574]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#1a4d2e]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a4d2e] mb-3">{practice.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{practice.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}