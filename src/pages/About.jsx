import React, { useState } from 'react';
import { Users, Heart, Target, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import heroImage from "../assets/rreth-nesh.jpeg";

export default function About() {
  const [language, setLanguage] = useState('al');

  return (
    <div className="font-sans bg-[#f5f1e8] text-gray-800">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <section className="relative h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(26, 77, 46, 0.75), rgba(26, 77, 46, 0.75)), url(${heroImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-4">
            {language === 'en' ? 'About' : 'Rreth Nesh'}
          </h1>
          <p className="text-2xl text-[#d4a574]">
            {language === 'en' ? 'Our Mission & Vision' : 'Misioni dhe Vizioni Ynë'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {[
            {
              icon: Target,
              title: language === 'en' ? 'Our Mission' : 'Misioni Ynë',
              desc: language === 'en'
                ? 'To preserve, protect, and promote the Pashtrik Mountain Cultural Route as a living heritage site, ensuring its accessibility and spiritual significance for future generations.'
                : 'Të ruajmë, mbrojmë dhe promovojmë Rrugën Kulturore të Malit të Pashtrikut si vend trashëgimie të gjallë, duke siguruar aksesin dhe rëndësinë e saj shpirtërore për brezat e ardhshëm.'
            },
            {
              icon: Heart,
              title: language === 'en' ? 'Our Values' : 'Vlerat Tona',
              desc: language === 'en'
                ? 'Respect for tradition, interfaith harmony, environmental sustainability, and community engagement guide our work in managing this sacred pilgrimage route.'
                : 'Respekti për traditën, harmonia ndërfetare, qëndrueshmëria mjedisore dhe angazhimi i komunitetit udhëheqin punën tonë në menaxhimin e kësaj rruge të shenjtë pelegrinazhi.'
            },
            {
              icon: Users,
              title: language === 'en' ? 'Community Partnership' : 'Konuniteti',
              desc: language === 'en'
                ? 'We work closely with local communities, religious institutions, and cultural organizations to maintain the authenticity and spiritual character of the pilgrimage.'
                : 'Punojmë ngushtë me komunitetet lokale, institucionet fetare dhe organizatat kulturore për të ruajtur autenticitetin dhe karakterin shpirtëror të pelegrinazhit.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1a4d2e] flex items-center justify-center">
                  <Icon className="w-12 h-12 text-[#d4a574]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-[#1a4d2e] mb-12">
            {language === 'en' ? 'Our Partners' : 'Partnerët Tanë'}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              'Ministry of Culture, Youth and Sport',
              'University of Prishtina',
              'Tourism Board of Kosovo',
              'UNESCO Kosovo Office'
            ].map((partner, idx) => (
              <div key={idx} className="text-center p-6 border border-gray-200 rounded-xl hover:border-[#c45b3f] transition-colors">
                <p className="font-semibold text-[#1a4d2e]">{partner}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-3xl font-bold text-center text-[#1a4d2e] mb-8">
              {language === 'en' ? 'Contact Us' : 'Na Kontaktoni'}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#c45b3f] mx-auto mb-3" />
                <p className="font-semibold text-[#1a4d2e] mb-2">
                  {language === 'en' ? 'Address' : 'Adresa'}
                </p>
                <p className="text-gray-600">
                  Gjakovë, Kosovo<br />
                  Tekke e Madhe e Sadive
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-[#c45b3f] mx-auto mb-3" />
                <p className="font-semibold text-[#1a4d2e] mb-2">Email</p>
                <p className="text-gray-600">info@pashtrikroute.org</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-[#c45b3f] mx-auto mb-3" />
                <p className="font-semibold text-[#1a4d2e] mb-2">
                  {language === 'en' ? 'Phone' : 'Telefoni'}
                </p>
                <p className="text-gray-600">+383 XX XXX XXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}