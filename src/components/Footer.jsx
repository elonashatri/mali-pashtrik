import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ language }) {
  return (
    <footer className="bg-[#1a4d2e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
              {language === 'en' ? 'Discover' : 'Zbulo'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/discover" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'History & Heritage' : 'Historia & Trashëgimia'}
              </Link></li>
              <li><Link to="/discover#sacred-sites" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Sacred Sites' : 'Vendet e Shenjta'}
              </Link></li>
              <li><Link to="/discover#cultural-traditions" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Cultural Traditions' : 'Traditat Kulturore'}
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
              {language === 'en' ? 'Plan' : 'Planifiko'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/plan-journey" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Route Maps' : 'Hartat e Rrugës'}
              </Link></li>
              <li><Link to="/on-the-route#accommodation" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Accommodation' : 'Akomodimi'}
              </Link></li>
              <li><Link to="/on-the-route#transportation" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Transportation' : 'Transporti'}
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
              {language === 'en' ? 'Resources' : 'Resurset'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/on-the-route#mobile-app" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Mobile App' : 'Aplikacioni Mobil'}
              </Link></li>
              <li><Link to="/prepare#trail-guides" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Trail Guides' : 'Udhëzuesit e Shtegut'}
              </Link></li>
              <li><Link to="/prepare#safety" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Safety Info' : 'Info të Sigurisë'}
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-[#d4a574]">
              {language === 'en' ? 'Contact' : 'Kontakti'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'About Us' : 'Rreth Nesh'}
              </Link></li>
              <li><Link to="/about#partners" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Partners' : 'Partnerët'}
              </Link></li>
              <li><Link to="/about#contact" className="hover:text-[#d4a574] transition-colors">
                {language === 'en' ? 'Contact' : 'Na Kontaktoni'}
              </Link></li>
            </ul>
          </div>
        </div>

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

        <div className="text-center text-sm text-white/60 border-t border-white/20 pt-8">
          <p>© 2026 Pashtrik Mountain Cultural Route. {language === 'en' ? 'All rights reserved.' : 'Të gjitha të drejtat e rezervuara.'}</p>
          <p className="mt-2">
            <Link to="/accessibility" className="hover:text-[#d4a574] transition-colors">
              {language === 'en' ? 'Accessibility Statement' : 'Deklarata e Aksesibilitetit'}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}