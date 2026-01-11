import React, { useState } from 'react';
import { BookOpen, Mountain, Users, Calendar, Church, Scroll, MapPin, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import heroImage from "../assets/stanet.jpeg";

export default function Discover() {
  const [language, setLanguage] = useState('al');
  const [activeTab, setActiveTab] = useState('history');

  const content = {
    en: {
      hero: {
        title: 'Discover',
        subtitle: 'Unveiling 2,000 Years of Sacred Heritage'
      },
      tabs: ['History', 'Sacred Sites', 'Cultural Traditions'],
      history: {
        title: 'A Journey Through Time',
        intro: 'The Pashtrik Mountain has been a sacred destination for over two millennia, with the pilgrimage tradition deeply woven into the cultural fabric of the Has region and beyond.',
        timeline: [
          {
            period: 'Ancient Times (Pre-13th Century)',
            title: 'Sacred Mountain Worship',
            desc: 'For more than 2,000 years, Pashtrik has been considered a sacred place, with pre-Islamic spiritual practices and natural veneration of the mountain.',
            icon: Mountain
          },
          {
            period: '13th Century',
            title: 'Sari Saltik Era',
            desc: 'The Sufi saint Sari Saltik, a dervish in the court of Sultan Orhan (1326-1360) and disciple of Haji Bektash Veli, established one of his 72 sacred sites (ziafete) in the Balkans at Pashtrik.',
            icon: BookOpen
          },
          {
            period: '1948-1999',
            title: 'Communist Prohibition',
            desc: 'The pilgrimage was banned during the Communist Regime in 1948. This 50-year interruption did not diminish the sacred significance of the site in the hearts of believers.',
            icon: Scroll
          },
          {
            period: '2000-Present',
            title: 'Revival and Continuity',
            desc: 'The pilgrimage resumed in 2000, a year after the Kosovo War. Today, it continues as a vibrant three-week gathering every August, drawing pilgrims from Kosovo, Albania, and beyond.',
            icon: Users
          }
        ]
      },
      sacredSites: {
        title: 'Sacred Locations',
        sites: [
          {
            name: 'Holy Tomb of Pashtrik',
            desc: 'The central pilgrimage destination, a tomb erected to pay tribute to Sari Saltik. Pilgrims leave gifts (nezër) such as towels, shirts, and coins, and light candles while praying for their wishes.',
            location: 'Pashtrik Peak (1,989m)',
            icon: Mountain
          },
          {
            name: 'The Cave / Women\'s Rock',
            desc: 'A peculiar rock formation about 50 meters from the main tomb. Legend tells that when surrounded by enemies, Sari Saltik leaned against the rock and it opened into a cave. Historically used for purification rituals by couples seeking fertility.',
            location: 'Near Summit',
            icon: Church
          },
          {
            name: 'Mountain Shelters',
            desc: 'Two newly constructed buildings near the Holy Tomb serve pilgrims during the three-week period. One provides shelter for overnight stays, the other serves as a food pantry.',
            location: 'Summit Area',
            icon: MapPin
          },
          {
            name: 'Great Tekke of Sadii',
            desc: 'The Autocephalous Great Tekke of the Balkan, headquarters of the Sadii Order, was founded by Sulejman Axhiza Baba (1537-1652). Located in Gjakovë, it oversees the Pashtrik pilgrimage.',
            location: 'Gjakovë, Kosovo',
            icon: Church
          }
        ]
      },
      traditions: {
        title: 'Living Cultural Traditions',
        practices: [
          {
            name: 'August Pilgrimage Period',
            desc: 'The pilgrimage lasts three weeks (August 2-22), with the peak of Pashtrik transformed into a spiritual gathering place. Dervishes and Tekke staff remain throughout, with some rotating based on daily duties.',
            icon: Calendar
          },
          {
            name: 'Community Organization',
            desc: 'Villages in the Has region organize neighborhood groups that journey together. Families travel by tractor and car to accessible points, then walk together to the summit, maintaining centuries-old communal bonds.',
            icon: Users
          },
          {
            name: 'Ritual Offerings',
            desc: 'Pilgrims bring gifts (nezër) to the Holy Tomb—towels, shirts, coins, and items of nominal value. They light candles both at the main tomb and in the sacred cave, praying for health, fertility, and blessings.',
            icon: Mountain
          },
          {
            name: 'Sacred Talismans',
            desc: 'Similar to practices at other sacred sites in the region, some visitors collect pebbles from Pashtrik as talismans—either to give to those unable to make the journey or to keep until needed.',
            icon: Scroll
          },
          {
            name: 'Interfaith Harmony',
            desc: 'While primarily associated with the Bektashi Order, Pashtrik holds significance for Orthodox and Catholic communities as well, representing a remarkable example of interfaith pilgrimage.',
            icon: Church
          }
        ]
      }
    },
    al: {
      hero: {
        title: 'Zbulo',
        subtitle: 'Duke zbuluar 2,000 vjet trashëgimi të shenjtë'
      },
      tabs: ['Historia', 'Vendet e Shenjta', 'Traditat Kulturore'],
      history: {
        title: 'Një Udhëtim Nëpër Kohë',
        intro: 'Mali i Pashtrikut ka qenë një destinacion i shenjtë për më shumë se dy mijëvjeçarë, me traditën e pelegrinazhit thellësisht të thurur në pëlhurën kulturore të rajonit të Hasit dhe më gjerë.',
        timeline: [
          {
            period: 'Koha e Lashtë (Para shekullit të 13-të)',
            title: 'Adhurimi i Malit të Shenjtë',
            desc: 'Për më shumë se 2,000 vjet, Pashtrik u konsiderua vend i shenjtë, me praktika shpirtërore para-Islame dhe veneracion natyror të malit.',
            icon: Mountain
          },
          {
            period: 'Shekulli i 13-të',
            title: 'Epoka e Sari Saltikut',
            desc: 'Shenjti sufi Sari Saltik, një dervish në oborrin e Sulltan Orhanit (1326-1360) dhe dishepull i Haxhi Bektash Veliut, themeloi një nga 72 vendet e tij të shenjta (ziafetet) në Ballkan në Pashtrik.',
            icon: BookOpen
          },
          {
            period: '1948-1999',
            title: 'Ndalimi Komunist',
            desc: 'Pelegrinazhi u ndalua gjatë Regjimit Komunist në 1948. Kjo ndërprerje 50-vjeçare nuk e zvogëloi rëndësinë e shenjtë të vendit në zemrat e besimtarëve.',
            icon: Scroll
          },
          {
            period: '2000-Sot',
            title: 'Rigjallërimi dhe Vazhdimësia',
            desc: 'Pelegrinazhi u rifillua në 2000, një vit pas Luftës së Kosovës. Sot vazhdon si një tubim i gjallë tre-javor çdo gusht, duke tërhequr pelegrinë nga Kosova, Shqipëria dhe më gjerë.',
            icon: Users
          }
        ]
      },
      sacredSites: {
        title: 'Vendet e Shenjta',
        sites: [
          {
            name: 'Tyrbe e Shenjtë e Pashtrikut',
            desc: 'Destinacioni qendror i pelegrinazhit, një tyrbe e ngritur për t\'i dhënë nderim Sari Saltikut. Pelegrinët lënë dhurata (nezër) si peshqirë, këmisha dhe monedha, dhe ndezin qirinj duke u lutur për dëshirat e tyre.',
            location: 'Maja e Pashtrikut (1,989m)',
            icon: Mountain
          },
          {
            name: 'Shpella / Guri i Gruas',
            desc: 'Një formacion shkëmbor veçantë rreth 50 metra nga tyrja kryesore. Legjenda thotë se kur u rrethua nga armiqtë, Sari Saltiku u mbështet në shkëmb dhe ai u hap në shpellë. Historikisht përdorur për rituale pastrimi nga çiftet që kërkojnë fertilitet.',
            location: 'Pranë Majës',
            icon: Church
          },
          {
            name: 'Strehimoret Malore',
            desc: 'Dy ndërtesa të reja të ndërtuara pranë Tyrbes së Shenjtë shërbejnë pelegrinëve gjatë periudhës tre-javore. Njëra ofron strehim për qëndrime natën, tjetra shërben si magazine ushqimi.',
            location: 'Zona e Majës',
            icon: MapPin
          },
          {
            name: 'Teqeja e Madhe e Sadiut',
            desc: 'Teqeja e Madhe Autokefale e Ballkanit, selia e Urdhrit Sadi, u themelua nga Sulejman Axhiza Baba (1537-1652). E vendosur në Gjakovë, mbikëqyr pelegrinazhin e Pashtrikut.',
            location: 'Gjakovë, Kosovë',
            icon: Church
          }
        ]
      },
      traditions: {
        title: 'Traditat e Gjalla Kulturore',
        practices: [
          {
            name: 'Periudha e Pelegrinazhit në Gusht',
            desc: 'Pelegrinazhi zgjat tre javë (2-22 gusht), me majën e Pashtrikut të transformuar në vend tubimi shpirtëror. Dervishët dhe stafi i Teqesë mbeten gjatë gjithë kohës, me disa që rrotullohen bazuar në detyrat ditore.',
            icon: Calendar
          },
          {
            name: 'Organizimi i Komunitetit',
            desc: 'Fshatrat në rajonin e Hasit organizojnë grupe fqinjësie që udhëtojnë së bashku. Familjet udhëtojnë me traktor dhe makinë deri në pika të aksesueshme, pastaj ecin së bashku drejt majës, duke ruajtur lidhjet komunale shekullore.',
            icon: Users
          },
          {
            name: 'Ritualet',
            desc: 'Pelegrinët sjellin dhurata (nezër) në Tyrben e Shenjtë—peshqirë, këmisha, monedha dhe sende me vlerë nominale. Ndezin qirinj si në tyrben kryesore ashtu edhe në shpellën e shenjtë, duke u lutur për shëndet, fertilitet dhe bekime.',
            icon: Mountain
          },
          {
            name: 'Talismanet e Shenjta',
            desc: 'Në mënyrë të ngjashme me praktikat në vende të tjera të shenjta në rajon, disa vizitorë mbledhin guralecë nga Pashtrik si talismanë—ose për t\'ua dhënë atyre që nuk mund ta bëjnë udhëtimin ose për t\'i mbajtur derisa të nevojiten.',
            icon: Scroll
          },
          {
            name: 'Harmonia Ndërfetare',
            desc: 'Megjithëse kryesisht i lidhur me Urdhrin Bektashi, Pashtrik ka rëndësi edhe për komunitetet ortodokse dhe katolike, duke përfaqësuar një shembull të jashtëzakonshëm të pelegrinazhit ndërfetar.',
            icon: Church
          }
        ]
      }
    }
  };

  const t = content[language];
  const tabs = t.tabs;

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
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }
      `}</style>

      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(44, 62, 106, 0.75), rgba(53, 71, 99, 0.75)), url(${heroImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>

        
        <div className="text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-2xl md:text-3xl font-light text-[#d4a574]">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-8 py-6">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(['history', 'sacred', 'traditions'][idx])}
                className={`text-lg font-semibold pb-2 border-b-3 transition-colors ${
                  activeTab === ['history', 'sacred', 'traditions'][idx]
                    ? 'border-[#c45b3f] text-[#c45b3f]'
                    : 'border-transparent text-gray-600 hover:text-[#1a4d2e]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* History Tab */}
      {activeTab === 'history' && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#1a4d2e] mb-6">{t.history.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.history.intro}
            </p>
          </div>

          <div className="space-y-12">
            {t.history.timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#1a4d2e] flex items-center justify-center">
                    <Icon className="w-12 h-12 text-[#d4a574]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#c45b3f] mb-2">{item.period}</p>
                    <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Sacred Sites Tab */}
      {activeTab === 'sacred' && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-5xl font-bold text-center text-[#1a4d2e] mb-16">{t.sacredSites.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.sacredSites.sites.map((site, idx) => {
              const Icon = site.icon;
              return (
                <div key={idx} className="card-hover bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#c45b3f]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#f5f1e8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1a4d2e]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1a4d2e] mb-2">{site.name}</h3>
                      <p className="text-sm text-[#c45b3f] font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {site.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{site.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Traditions Tab */}
      {activeTab === 'traditions' && (
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-5xl font-bold text-center text-[#1a4d2e] mb-16">{t.traditions.title}</h2>
          
          <div className="space-y-6">
            {t.traditions.practices.map((practice, idx) => {
              const Icon = practice.icon;
              return (
                <div key={idx} className="card-hover bg-white rounded-xl p-8 shadow-md border-l-4 border-[#d4a574]">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#1a4d2e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1a4d2e] mb-3">{practice.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{practice.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <Footer language={language} />
    </div>
  );
}