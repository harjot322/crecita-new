import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { contact } = mockData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[rgb(26,28,30)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(17,17,19)] px-4 py-2 rounded-full mb-8 border border-[rgb(63,63,63)]">
            <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full"></span>
            <span className="text-[rgb(218,218,218)] text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="text-[rgb(218,255,1)]"> Transform</span>
            <br />
            Your Business?
          </h2>
          
          <p className="text-xl text-[rgb(161,161,170)] max-w-3xl mx-auto">
            Let's discuss how we can help you accelerate your DevOps and MLOps journey. 
            Our experts are ready to design a solution tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send Us a Message</CardTitle>
              <CardDescription className="text-[rgb(161,161,170)]">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[rgb(218,218,218)] font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Richard Johnson"
                      required
                      className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[rgb(218,218,218)] font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-[rgb(218,218,218)] font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[rgb(218,218,218)] font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements..."
                    rows={4}
                    required
                    className="bg-[rgb(26,28,30)] border-[rgb(63,63,63)] text-white placeholder-[rgb(161,161,170)] focus:border-[rgb(218,255,1)]"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-bold py-4 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
                <CardDescription className="text-[rgb(161,161,170)]">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-[rgb(161,161,170)]">{contact.email}</p>
                    <p className="text-[rgb(161,161,170)] text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-[rgb(161,161,170)]">{contact.phone}</p>
                    <p className="text-[rgb(161,161,170)] text-sm">{contact.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(218,255,1)]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-[rgb(161,161,170)]">{contact.address}</p>
                    <p className="text-[rgb(161,161,170)] text-sm">Visit us for in-person consultation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-[rgb(17,17,19)] border-[rgb(63,63,63)]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Quick Response Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(218,255,1)]" />
                    <span className="text-[rgb(161,161,170)]">Initial response within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(218,255,1)]" />
                    <span className="text-[rgb(161,161,170)]">Detailed proposal within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(218,255,1)]" />
                    <span className="text-[rgb(161,161,170)]">Free consultation call scheduled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;