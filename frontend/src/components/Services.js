import React from 'react';
import { GitBranch, Code, Container, Activity, Brain, RefreshCw, Database, Workflow, ArrowRight, Sparkles, BarChart3, GitMerge, TrendingUp, Shield, Eye, FileCheck, Lock } from 'lucide-react';
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
    Workflow,
    BarChart3,
    GitMerge,
    TrendingUp,
    Shield,
    Eye,
    FileCheck,
    Lock
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderServiceSection = (serviceType, title, description, delay = 0) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4 animate-slideInFromLeft" style={{ animationDelay: `${delay}ms` }}>{title}</h3>
        <p className="text-lg text-[rgb(200,200,210)] max-w-2xl mx-auto animate-slideInFromRight" style={{ animationDelay: `${delay + 100}ms` }}>{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceType.items.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <Card key={service.id} className="bg-gradient-to-br from-[rgb(26,28,30)] to-[rgb(38,40,42)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:transform hover:-translate-y-4 hover:scale-105 group interactive-card animate-fadeInUp" style={{ animationDelay: `${delay + 200 + index * 100}ms` }}>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[rgb(218,255,1)]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <IconComponent className="w-7 h-7 text-[rgb(218,255,1)] group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-white text-xl font-semibold group-hover:text-[rgb(218,255,1)] transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[rgb(180,180,190)] mb-6 leading-relaxed group-hover:text-[rgb(218,218,218)] transition-colors duration-300">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                      <div className="w-1.5 h-1.5 bg-[rgb(218,255,1)] rounded-full animate-ping"></div>
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
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[rgb(17,17,19)] to-[rgb(26,28,30)] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 hover:scale-105 group animate-fadeIn">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full animate-ping"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">Our Services</span>
            <Sparkles className="w-4 h-4 text-[rgb(218,255,1)] animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp drop-shadow-lg">
            Comprehensive
            <span className="text-[rgb(218,255,1)] gradient-text"> Solutions</span>
          </h2>
          
          <p className="text-xl text-[rgb(200,200,210)] max-w-3xl mx-auto animate-fadeInUp animation-delay-200 bg-[rgb(17,17,19)]/50 backdrop-blur-sm rounded-lg px-6 py-3">
            From DevOps automation to MLOps infrastructure, Data Analytics, and Cybersecurity - we provide end-to-end solutions 
            that accelerate your digital transformation journey.
          </p>
        </div>

        {/* DevOps Services */}
        {renderServiceSection(services.devops, services.devops.title, services.devops.description, 0)}

        {/* MLOps Services */}
        {renderServiceSection(services.mlops, services.mlops.title, services.mlops.description, 200)}

        {/* Data Analytics Services */}
        {renderServiceSection(services.dataAnalytics, services.dataAnalytics.title, services.dataAnalytics.description, 400)}

        {/* Cybersecurity Services */}
        {renderServiceSection(services.cybersecurity, services.cybersecurity.title, services.cybersecurity.description, 600)}

        {/* Enhanced Benefits Section */}
        <div className="bg-gradient-to-r from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 animate-fadeInUp">Why Choose Crecita?</h3>
            <p className="text-lg text-[rgb(200,200,210)] max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
              Our solutions deliver measurable results that transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mockData.benefits.map((benefit, index) => (
              <div key={index} className="text-center group animate-fadeInUp" style={{ animationDelay: `${400 + index * 100}ms` }}>
                <div className="text-5xl font-bold text-[rgb(218,255,1)] mb-2 group-hover:scale-125 transition-all duration-500 gradient-text">
                  {benefit.percentage}
                </div>
                <div className="text-[rgb(180,180,190)] text-sm mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2 group-hover:text-[rgb(218,255,1)] transition-colors duration-300">{benefit.title}</div>
                <div className="text-[rgb(160,160,170)] text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/40 group interactive-button animate-bounce"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;