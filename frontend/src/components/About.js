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
    <section id="about" className="py-20 bg-[rgb(17,17,19)]">
      <div className="container mx-auto px-6">
        {/* About Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(26,28,30)] px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)]">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the
            <span className="text-[rgb(218,255,1)]"> Experts</span>
          </h2>
          
          <p className="text-xl text-[rgb(161,161,170)] max-w-3xl mx-auto">
            Our team of seasoned DevOps and MLOps professionals brings decades of experience 
            from leading tech companies to accelerate your digital transformation.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Leadership Team</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Industry veterans who've scaled systems for millions of users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-[rgb(38,40,42)] rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-[rgb(218,255,1)]/10 transition-colors">
                    <Users className="w-12 h-12 text-[rgb(218,255,1)]" />
                  </div>
                  <CardTitle className="text-white text-xl font-semibold">{member.name}</CardTitle>
                  <CardDescription className="text-[rgb(218,255,1)] font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[rgb(161,161,170)] mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="w-8 h-8 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.github} className="w-8 h-8 bg-[rgb(38,40,42)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] transition-all duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              Don't just take our word for it - hear from the leaders who've transformed their businesses with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[rgb(218,255,1)] fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-[rgb(161,161,170)] text-base leading-relaxed italic">
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
                      <div className="text-[rgb(161,161,170)] text-sm">{testimonial.role}</div>
                      <div className="text-[rgb(218,255,1)] text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-[rgb(26,28,30)] rounded-2xl p-8 md:p-12 border border-[rgb(63,63,63)]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h3>
            <p className="text-lg text-[rgb(161,161,170)] max-w-2xl mx-auto">
              We work with the latest and most reliable technologies in the DevOps and MLOps ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* DevOps Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">DevOps Tools</h4>
              <div className="space-y-3">
                {mockData.technologies.devops.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)] rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium">{tech.name}</span>
                    <span className="text-[rgb(161,161,170)] text-sm">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MLOps Tools */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">MLOps Tools</h4>
              <div className="space-y-3">
                {mockData.technologies.mlops.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)] rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium">{tech.name}</span>
                    <span className="text-[rgb(161,161,170)] text-sm">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Cloud Platforms</h4>
              <div className="space-y-3">
                {mockData.technologies.cloud.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[rgb(17,17,19)] rounded-lg border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] transition-colors">
                    <span className="text-[rgb(218,218,218)] font-medium">{tech.name}</span>
                    <span className="text-[rgb(161,161,170)] text-sm">{tech.category}</span>
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