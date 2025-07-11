import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { mockData } from '../mockData';

const Footer = () => {
  const { contact } = mockData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgb(63,63,63)] pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[rgb(218,255,1)] rounded-lg flex items-center justify-center">
                <span className="text-[rgb(17,17,19)] font-bold text-xl">C</span>
              </div>
              <span className="text-3xl font-bold text-white">Crecita</span>
            </div>
            <p className="text-[rgb(161,161,170)] text-lg mb-6 max-w-md">
              Streamlining DevOps & MLOps for scalable, reliable solutions. 
              We empower businesses to accelerate their digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:transform hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200 hover:transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
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
                  className="block text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[rgb(218,255,1)] mt-0.5" />
                <div>
                  <p className="text-[rgb(161,161,170)]">Email</p>
                  <p className="text-white">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(218,255,1)] mt-0.5" />
                <div>
                  <p className="text-[rgb(161,161,170)]">Phone</p>
                  <p className="text-white">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(218,255,1)] mt-0.5" />
                <div>
                  <p className="text-[rgb(161,161,170)]">Address</p>
                  <p className="text-white">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgb(63,63,63)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(161,161,170)] text-center md:text-left">
              © 2024 Crecita. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;