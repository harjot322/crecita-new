import React from 'react';
import { Star, Users, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const About = () => {
  const { team, testimonials } = mockData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[rgb(17,17,19)] to-[rgb(26,28,30)] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[rgb(127,74,142)] rounded-full opacity-5 blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* About Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)]">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Meet the
            <span className="text-[rgb(218,255,1)]"> Experts</span>
          </h2>
          
          <p className="text-xl text-[rgb(200,200,210)] max-w-3xl mx-auto bg-[rgb(17,17,19)]/50 backdrop-blur-sm rounded-lg px-6 py-3">
            Our team of seasoned DevOps, MLOps, Data Analytics, and Cybersecurity professionals brings decades of experience 
            from leading tech companies to accelerate your digital transformation.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-lg text-[rgb(200,200,210)] max-w-2xl mx-auto">
              Don't just take our word for it - hear from the leaders who've transformed their businesses with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 backdrop-blur-sm border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[rgb(218,255,1)] fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-[rgb(180,180,190)] text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[rgb(38,40,42)] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[rgb(218,255,1)]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-[rgb(180,180,190)] text-sm">{testimonial.role}</div>
                      <div className="text-[rgb(218,255,1)] text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[rgb(63,63,63)]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h3>
            <p className="text-lg text-[rgb(200,200,210)] max-w-2xl mx-auto">
              We work with the latest and most reliable technologies across DevOps, MLOps, Data Analytics, and Cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* DevOps Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">DevOps</h4>
              <div className="space-y-3">
                {mockData.technologies.devops.slice(0, 6).map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)]/70 backdrop-blur-sm rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MLOps Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">MLOps</h4>
              <div className="space-y-3">
                {mockData.technologies.mlops.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)]/70 backdrop-blur-sm rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Analytics Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Analytics</h4>
              <div className="space-y-3">
                {mockData.technologies.dataAnalytics.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)]/70 backdrop-blur-sm rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cybersecurity Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Security</h4>
              <div className="space-y-3">
                {mockData.technologies.cybersecurity.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)]/70 backdrop-blur-sm rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Cloud</h4>
              <div className="space-y-3">
                {mockData.technologies.cloud.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)]/70 backdrop-blur-sm rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 group"
            >
              Let's Build Something Amazing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;