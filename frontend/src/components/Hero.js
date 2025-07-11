import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Clock, Shield, Sparkles } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[rgb(17,17,19)] via-[rgb(17,17,19)] to-[rgb(26,28,30)] overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-3 blur-2xl animate-bounce animation-delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[rgb(218,255,1)] rounded-full animate-ping"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-[rgb(218,255,1)] rounded-full animate-ping animation-delay-500"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-[rgb(218,255,1)] rounded-full animate-ping animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:scale-105 group">
              <CheckCircle className="w-4 h-4 text-[rgb(218,255,1)] group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-[rgb(218,218,218)] text-sm font-medium">Trusted by 200+ Companies</span>
              <Sparkles className="w-4 h-4 text-[rgb(218,255,1)] animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp drop-shadow-2xl">
              <span className="inline-block hover:scale-110 transition-transform duration-300">Streamlining</span>
              <br />
              <span className="text-[rgb(218,255,1)] relative inline-block hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                DevOps, MLOps & Security
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] opacity-50 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200 drop-shadow-lg">
              {company.tagline}
            </p>
            
            <p className="text-lg text-[rgb(230,230,240)] mb-12 max-w-3xl mx-auto animate-fadeInUp animation-delay-400 drop-shadow-md">
              We empower businesses to accelerate their digital transformation through cutting-edge DevOps, MLOps, Data Analytics, and Cybersecurity practices, 
              delivering scalable, reliable, and efficient solutions that drive innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp animation-delay-600">
              <Button
                onClick={() => scrollToSection('#services')}
                className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/40 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(218,255,1)] via-[rgb(200,240,0)] to-[rgb(166,190,21)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                onClick={() => scrollToSection('#about')}
                variant="outline"
                className="border-2 border-[rgb(218,255,1)]/50 bg-[rgb(17,17,19)]/70 backdrop-blur-sm text-white hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)]/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                  Watch Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(218,255,1)]/10 to-[rgb(166,190,21)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = { CheckCircle, Users, Clock, Shield }[stat.icon];
              return (
                <div key={index} className="text-center group animate-fadeInUp" style={{ animationDelay: `${800 + index * 100}ms` }}>
                  <div className="bg-gradient-to-br from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20 group-hover:scale-105 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <IconComponent className="w-8 h-8 text-[rgb(218,255,1)] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-[rgb(218,255,1)] transition-colors duration-300">{stat.value}</div>
                    <div className="text-[rgb(200,200,210)] text-sm font-medium group-hover:text-[rgb(218,218,218)] transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="text-center animate-fadeInUp animation-delay-1200">
            <p className="text-[rgb(200,200,210)] mb-8 font-medium bg-[rgb(17,17,19)]/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'].map((tech, index) => (
                <div key={index} className="bg-[rgb(26,28,30)]/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20 group">
                  <span className="text-[rgb(230,230,240)] font-semibold group-hover:text-[rgb(218,255,1)] transition-colors duration-300">{tech}</span>
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