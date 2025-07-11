import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(17,17,19)]/95 backdrop-blur-sm border-b border-[rgb(63,63,63)] transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo className="w-8 h-8" textClassName="text-2xl" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/30 group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-[rgb(26,28,30)] hover:bg-[rgb(38,40,42)] transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-white transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[rgb(63,63,63)] pt-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium text-left p-2 rounded-lg hover:bg-[rgb(26,28,30)] group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold px-6 py-3 rounded-xl transition-all duration-300 mt-4 w-full animate-bounce"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;