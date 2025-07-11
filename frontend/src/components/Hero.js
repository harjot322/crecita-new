import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Hero = () => {
  const { company, stats } = mockData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[rgb(17,17,19)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)] px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)]">
              <CheckCircle className="w-4 h-4 text-[rgb(218,255,1)]" />
              <span className="text-[rgb(218,218,218)] text-sm font-medium">Trusted by 200+ Companies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Streamlining
              <span className="text-[rgb(218,255,1)] relative">
                {' '}DevOps{' '}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[rgb(218,255,1)] opacity-30 rounded-full"></div>
              </span>
              &
              <span className="text-[rgb(218,255,1)] relative">
                {' '}MLOps{' '}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[rgb(218,255,1)] opacity-30 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[rgb(218,218,218)] mb-8 max-w-4xl mx-auto leading-relaxed">
              {company.tagline}
            </p>
            
            <p className="text-lg text-[rgb(161,161,170)] mb-12 max-w-3xl mx-auto">
              We empower businesses to accelerate their digital transformation through cutting-edge DevOps and MLOps practices, 
              delivering scalable, reliable, and efficient solutions that drive innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => scrollToSection('#services')}
                className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('#about')}
                variant="outline"
                className="border-2 border-[rgb(63,63,63)] text-white hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)]/5 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = { CheckCircle, Users, Clock, Shield }[stat.icon];
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[rgb(26,28,30)] p-6 rounded-2xl border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
                    <IconComponent className="w-8 h-8 text-[rgb(218,255,1)] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-[rgb(161,161,170)] text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-[rgb(161,161,170)] mb-8 font-medium">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'].map((tech, index) => (
                <div key={index} className="bg-[rgb(26,28,30)] px-6 py-3 rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300">
                  <span className="text-[rgb(218,218,218)] font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;