'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Zap, BatteryCharging, CheckCircle2, MapPin } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function NetworkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-voltava-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-voltava-primary leading-[1.1] mb-8">
              A charging network built for real India—cities, highways, and districts.
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/70 leading-relaxed max-w-2xl mx-auto">
              Designed for uptime, transparent billing, and interoperability. We are bringing reliable EV infrastructure to every corner of the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Charger Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-voltava-bg rounded-3xl p-10 border border-voltava-primary/5"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <BatteryCharging size={32} className="text-voltava-accent" />
              </div>
              <h3 className="text-3xl font-bold text-voltava-primary mb-4">AC Charging</h3>
              <p className="text-voltava-primary/60 font-mono text-sm mb-6">7.4–22 kW</p>
              <p className="text-voltava-text/80 mb-8 leading-relaxed">
                Perfect for long-duration parking. Ideal for workplaces, hotels, residential clusters, and mall parking lots.
              </p>
              <ul className="space-y-3">
                {['Cost-effective deployment', 'Low grid impact', 'Overnight fleet charging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-voltava-text/80">
                    <CheckCircle2 size={18} className="text-voltava-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-voltava-primary text-white rounded-3xl p-10"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">DC Fast Charging</h3>
              <p className="text-white/60 font-mono text-sm mb-6">30–120 kW</p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Rapid charging for users on the go. Strategically placed along highways, transit hubs, and for commercial fleet operations.
              </p>
              <ul className="space-y-3">
                {['Quick turnaround times', 'Highway corridor ready', 'High-utilization fleet hubs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-voltava-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compatibility & Reliability */}
      <section className="py-24 bg-voltava-bg border-y border-voltava-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-voltava-primary mb-8">Universal Compatibility</h2>
              <div className="space-y-6">
                {[
                  { title: 'OCPP-Compliant Backend', desc: 'Seamless integration with global standards for hardware and software.' },
                  { title: 'CCS2 / Type-2 Connectors', desc: 'Supporting the majority of electric vehicles on Indian roads.' },
                  { title: 'Multi-Vehicle Support', desc: 'Infrastructure designed for 2W, 3W, 4W, and commercial fleets.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-voltava-primary/5">
                    <h4 className="font-bold text-voltava-primary mb-2">{item.title}</h4>
                    <p className="text-voltava-text/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-voltava-primary mb-8">Uncompromising Reliability</h2>
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
                <Image
                  src="https://picsum.photos/seed/reliability/800/600"
                  alt="Network Monitoring"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Remote monitoring',
                  'Preventive maintenance',
                  'Uptime SLAs',
                  '24/7 Customer support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-voltava-primary font-medium">
                    <div className="w-2 h-2 rounded-full bg-voltava-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section (Mockup) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-4">Network Map</h2>
              <p className="text-voltava-text/70">Find a Voltava charger near you.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <select className="bg-voltava-bg border border-voltava-primary/10 rounded-full px-4 py-2 text-sm text-voltava-primary focus:outline-none focus:border-voltava-accent">
                <option>All Districts</option>
                <option>Patna</option>
                <option>Gaya</option>
                <option>Muzaffarpur</option>
              </select>
              <select className="bg-voltava-bg border border-voltava-primary/10 rounded-full px-4 py-2 text-sm text-voltava-primary focus:outline-none focus:border-voltava-accent">
                <option>All Types</option>
                <option>AC Charging</option>
                <option>DC Fast Charging</option>
              </select>
              <select className="bg-voltava-bg border border-voltava-primary/10 rounded-full px-4 py-2 text-sm text-voltava-primary focus:outline-none focus:border-voltava-accent">
                <option>Status: Live</option>
                <option>Coming Soon</option>
              </select>
            </div>
          </div>

          <div className="bg-voltava-bg rounded-3xl h-[500px] flex items-center justify-center border border-voltava-primary/10 relative overflow-hidden">
            <Image
              src="https://picsum.photos/seed/map/1200/600"
              alt="Map Placeholder"
              fill
              className="object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-voltava-primary/5" />
            
            {/* Mock Map Pins */}
            <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-voltava-primary animate-bounce">
              <MapPin size={24} className="text-voltava-accent" />
            </div>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-voltava-primary">
              <MapPin size={24} className="text-voltava-accent" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-voltava-primary">
              <MapPin size={24} className="text-voltava-accent" />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Have a prime location? Turn your parking space into a revenue stream."
        primaryButtonText="List your site for installation"
        primaryButtonLink="/partners"
        secondaryButtonText="Learn about hosting"
        secondaryButtonLink="/partners"
        theme="light"
      />
    </>
  );
}
