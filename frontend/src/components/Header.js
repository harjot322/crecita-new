import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ darkMode, toggleDarkMode }) => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(17,17,19)]/95 backdrop-blur-sm border-b border-[rgb(63,63,63)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[rgb(218,255,1)] rounded-lg flex items-center justify-center">
              <span className="text-[rgb(17,17,19)] font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-white">Crecita</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[rgb(26,28,30)] hover:bg-[rgb(38,40,42)] transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[rgb(218,255,1)]" />
              ) : (
                <Moon className="w-5 h-5 text-[rgb(218,255,1)]" />
              )}
            </button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold px-6 py-2 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-0.5"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[rgb(26,28,30)] hover:bg-[rgb(38,40,42)] transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[rgb(218,255,1)]" />
              ) : (
                <Moon className="w-5 h-5 text-[rgb(218,255,1)]" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-[rgb(26,28,30)] hover:bg-[rgb(38,40,42)] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[rgb(63,63,63)] pt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold px-6 py-2 rounded-xl transition-all duration-200 mt-4 w-full"
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