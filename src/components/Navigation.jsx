import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X, Globe } from 'lucide-react';

export default function Navigation({ language, setLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { label: 'Discover', path: '/discover' },
      { label: 'Prepare', path: '/prepare' },
      { label: 'Plan Your Journey', path: '/plan-journey' },
      { label: 'On the Route', path: '/on-the-route' },
      { label: 'About', path: '/about' }
    ],
    al: [
      { label: 'Zbulo', path: '/discover' },
      { label: 'Përgatitu', path: '/prepare' },
      { label: 'Planifiko Udhëtimin', path: '/plan-journey' },
      { label: 'Në Rrugë', path: '/on-the-route' },
      { label: 'Rreth Nesh', path: '/about' }
    ]
  };

  const items = navItems[language];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#1a4d2e] shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Mountain className="w-8 h-8 text-[#d4a574]" />
            <span className="text-white text-xl font-semibold tracking-wide">
              {language === 'en' ? 'Pashtrik Route' : 'Udha e Pashtrikut'}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className={`nav-link text-white hover:text-[#d4a574] text-sm font-medium ${
                  location.pathname === item.path ? 'text-[#d4a574]' : ''
                }`}
              >
                {item.label}
              </Link>
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

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
            {items.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className={`block text-white hover:text-[#d4a574] text-sm font-medium py-2 ${
                  location.pathname === item.path ? 'text-[#d4a574]' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}