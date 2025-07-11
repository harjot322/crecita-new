import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[rgb(26,28,30)] to-[rgb(17,17,19)] border-t border-[rgb(63,63,63)] pt-20 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fadeInUp">
            <Logo className="w-12 h-12 mb-6" textClassName="text-3xl" />
            <p className="text-[rgb(161,161,170)] text-lg mb-6 max-w-md leading-relaxed">
              Streamlining DevOps & MLOps for scalable, reliable solutions. 
              We empower businesses to accelerate their digital transformation with cutting-edge practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/crecita" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110 group">
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://github.com/crecita" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110 group">
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://twitter.com/crecita" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-xl flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110 group">
                <Twitter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animation-delay-200">
            <h4 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[rgb(218,255,1)] rounded-full"></div>
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Industries', href: '#industries' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp animation-delay-400">
            <h4 className="text-white font-semibold text-lg mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[rgb(218,255,1)] rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-[rgb(218,255,1)]/10 rounded-lg flex items-center justify-center group-hover:bg-[rgb(218,255,1)]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[rgb(218,255,1)]" />
                </div>
                <div>
                  <p className="text-[rgb(161,161,170)] text-sm">Email</p>
                  <a href="mailto:contact@crecita.com" className="text-white hover:text-[rgb(218,255,1)] transition-colors duration-300">
                    contact@crecita.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-[rgb(218,255,1)]/10 rounded-lg flex items-center justify-center group-hover:bg-[rgb(218,255,1)]/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[rgb(218,255,1)]" />
                </div>
                <div>
                  <p className="text-[rgb(161,161,170)] text-sm">Phone</p>
                  <a href="tel:+1-555-123-4567" className="text-white hover:text-[rgb(218,255,1)] transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-[rgb(218,255,1)]/10 rounded-lg flex items-center justify-center group-hover:bg-[rgb(218,255,1)]/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[rgb(218,255,1)]" />
                </div>
                <div>
                  <p className="text-[rgb(161,161,170)] text-sm">Location</p>
                  <p className="text-white">Global Remote Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgb(63,63,63)] pt-8 animate-fadeInUp animation-delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(161,161,170)] text-center md:text-left">
              © 2024 Crecita. All rights reserved. Built with ❤️ for the DevOps community.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-all duration-300 hover:translate-y-1 group">
                <span className="relative">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-all duration-300 hover:translate-y-1 group">
                <span className="relative">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-all duration-300 hover:translate-y-1 group">
                <span className="relative">
                  Cookie Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;