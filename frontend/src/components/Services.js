import React from 'react';
import { GitBranch, Code, Container, Activity, Brain, RefreshCw, Database, Workflow, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const Services = () => {
  const { services } = mockData;

  const iconMap = {
    GitBranch,
    Code,
    Container,
    Activity,
    Brain,
    RefreshCw,
    Database,
    Workflow
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[rgb(17,17,19)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)] px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)]">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="text-[rgb(218,255,1)]"> Solutions</span>
          </h2>
          
          <p className="text-xl text-[rgb(161,161,170)] max-w-3xl mx-auto">
            From DevOps automation to MLOps infrastructure, we provide end-to-end solutions 
            that accelerate your digital transformation journey.
          </p>
        </div>

        {/* DevOps Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{services.devops.title}</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">{services.devops.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.devops.items.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[rgb(218,255,1)]/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-[rgb(218,255,1)]" />
                    </div>
                    <CardTitle className="text-white text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[rgb(161,161,170)] mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(218,255,1)] rounded-full"></div>
                          <span className="text-[rgb(218,218,218)] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* MLOps Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{services.mlops.title}</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">{services.mlops.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.mlops.items.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[rgb(218,255,1)]/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-[rgb(218,255,1)]" />
                    </div>
                    <CardTitle className="text-white text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[rgb(161,161,170)] mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(218,255,1)] rounded-full"></div>
                          <span className="text-[rgb(218,218,218)] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[rgb(26,28,30)] rounded-2xl p-8 md:p-12 border border-[rgb(63,63,63)]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Crecita?</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Our solutions deliver measurable results that transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mockData.benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold text-[rgb(218,255,1)] mb-2 group-hover:scale-110 transition-transform">
                  {benefit.percentage}
                </div>
                <div className="text-[rgb(161,161,170)] text-sm mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.title}</div>
                <div className="text-[rgb(161,161,170)] text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;