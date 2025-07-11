import React from 'react';
import { Heart, DollarSign, ShoppingCart, Factory, Phone, Store, Zap, Car, Truck, Shield, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Industries = () => {
  const { industries } = mockData;

  const iconMap = {
    Heart,
    DollarSign,
    ShoppingCart,
    Factory,
    Phone,
    Store,
    Zap,
    Car,
    Truck,
    Shield,
    GraduationCap
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-[rgb(26,28,30)] to-[rgb(17,17,19)] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(17,17,19)]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:scale-105 group">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full animate-ping"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Powering
            <span className="text-[rgb(218,255,1)]"> Innovation</span>
            <br />
            Across Industries
          </h2>
          
          <p className="text-xl text-[rgb(200,200,210)] max-w-3xl mx-auto bg-[rgb(17,17,19)]/50 backdrop-blur-sm rounded-lg px-6 py-3">
            From healthcare to fintech, we deliver specialized DevOps, MLOps, Data Analytics, and Cybersecurity solutions 
            tailored to your industry's unique challenges and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <Card key={index} className="bg-gradient-to-br from-[rgb(17,17,19)]/90 to-[rgb(26,28,30)]/90 backdrop-blur-sm border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[rgb(218,255,1)]/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-[rgb(218,255,1)]" />
                  </div>
                  <CardTitle className="text-white text-xl font-semibold">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[rgb(180,180,190)] leading-relaxed group-hover:text-[rgb(218,218,218)] transition-colors duration-300">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-[rgb(17,17,19)]/90 to-[rgb(26,28,30)]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[rgb(63,63,63)]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-lg text-[rgb(200,200,210)] max-w-2xl mx-auto">
              Real results from real companies across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="text-5xl font-bold text-[rgb(218,255,1)] mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-[rgb(180,180,190)] text-sm mb-2">reduction in deployment time</div>
              <div className="text-white font-semibold mb-2">Healthcare Provider</div>
              <div className="text-[rgb(160,160,170)] text-sm">HIPAA-compliant CI/CD pipeline with enhanced security</div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold text-[rgb(218,255,1)] mb-2 group-hover:scale-110 transition-transform">
                10x
              </div>
              <div className="text-[rgb(180,180,190)] text-sm mb-2">faster model deployment</div>
              <div className="text-white font-semibold mb-2">FinTech Startup</div>
              <div className="text-[rgb(160,160,170)] text-sm">Real-time fraud detection with advanced analytics</div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl font-bold text-[rgb(218,255,1)] mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-[rgb(180,180,190)] text-sm mb-2">uptime achieved</div>
              <div className="text-white font-semibold mb-2">E-commerce Platform</div>
              <div className="text-[rgb(160,160,170)] text-sm">Black Friday traffic with zero security incidents</div>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 group"
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;