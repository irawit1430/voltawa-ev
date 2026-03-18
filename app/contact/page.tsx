'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-voltava-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-voltava-primary leading-[1.1] mb-8">
              Let’s build EV infrastructure—<span className="text-voltava-accent">together.</span>
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/70 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re looking to host a charger, electrify your fleet, or partner on a district level, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-voltava-primary mb-8">Get in touch</h2>
              <p className="text-voltava-text/70 mb-12 leading-relaxed">
                Fill out the form and our infrastructure specialists will get back to you within 24 hours to discuss your requirements.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltava-bg rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-voltava-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-voltava-primary mb-1">Email Us</h4>
                    <p className="text-voltava-text/70">partnerships@voltava.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltava-bg rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-voltava-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-voltava-primary mb-1">Call Us</h4>
                    <p className="text-voltava-text/70">+91 1800-XXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltava-bg rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-voltava-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-voltava-primary mb-1">Headquarters</h4>
                    <p className="text-voltava-text/70">Patna, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-voltava-bg p-8 md:p-12 rounded-3xl border border-voltava-primary/5">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-voltava-accent/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-voltava-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-voltava-primary mb-4">Request Received</h3>
                  <p className="text-voltava-text/70">
                    Thanks — we’ve received your request. Our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-voltava-accent font-medium hover:text-voltava-primary transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-voltava-primary">Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-voltava-primary">Phone <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-voltava-primary">Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium text-voltava-primary">City/District</label>
                      <input 
                        type="text" 
                        id="city" 
                        className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all"
                        placeholder="Patna"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium text-voltava-primary">Category</label>
                    <select 
                      id="category" 
                      className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all appearance-none"
                    >
                      <option value="partnerships">Partnerships</option>
                      <option value="government">Government / PSU</option>
                      <option value="fleets">Fleets</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-voltava-primary">Message <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full bg-white border border-voltava-primary/10 rounded-xl px-4 py-3 text-voltava-text focus:outline-none focus:border-voltava-accent focus:ring-1 focus:ring-voltava-accent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-voltava-primary text-white font-medium py-4 rounded-xl hover:bg-voltava-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {formStatus !== 'submitting' && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
