'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Building2, MapPin, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function PartnersPage() {
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
              Build your district.<br />
              <span className="text-voltava-accent">Own your revenue.</span><br />
              Powered by Voltava.
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/70 leading-relaxed max-w-2xl mx-auto">
              A scalable franchise model with centralized technology and billing. We provide the playbook, you build the network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-6">Choose your partnership model.</h2>
            <p className="text-voltava-text/70 text-lg max-w-2xl mx-auto">
              Whether you want to own a district, host a single charger, or electrify your fleet, we have a model for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'District Franchise Partner',
                desc: 'Own the rollout and operations for an entire district or city. High investment, high return, exclusive territory rights.',
              },
              {
                icon: MapPin,
                title: 'Site Host',
                desc: 'Monetize your location and charging demand. Perfect for hotels, malls, restaurants, and residential societies.',
              },
              {
                icon: Truck,
                title: 'Fleet Partner',
                desc: 'Reliable access with centralized billing for your commercial vehicles. Ensure uptime and reduce operational costs.',
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-voltava-bg p-10 rounded-3xl border border-voltava-primary/5 hover:border-voltava-accent/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-voltava-accent group-hover:text-white transition-colors text-voltava-primary">
                  <type.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-voltava-primary mb-4">{type.title}</h3>
                <p className="text-voltava-text/70 leading-relaxed mb-8">{type.desc}</p>
                <a href="#apply" className="inline-flex items-center gap-2 text-voltava-accent font-medium hover:text-voltava-primary transition-colors">
                  Learn more <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-voltava-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12">
                The Voltava Advantage
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Station design and branding', desc: 'Premium, standardized aesthetics that build trust and visibility.' },
                  { title: 'Billing and settlement systems', desc: 'Automated, transparent daily payouts directly to your account.' },
                  { title: 'Monitoring and analytics', desc: 'Real-time dashboard to track utilization, revenue, and charger health.' },
                  { title: 'SOPs, training, and audits', desc: 'Comprehensive operational playbook to ensure quality and safety.' },
                  { title: 'SLA-based performance framework', desc: 'Guaranteed uptime and rapid response maintenance support.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-voltava-accent/20 flex items-center justify-center text-voltava-accent mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src="https://picsum.photos/seed/franchise/800/1200"
                alt="Franchise Dashboard"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-voltava-primary to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to build the infrastructure of tomorrow?"
        primaryButtonText="Apply to become a Partner"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Franchise Deck"
        secondaryButtonLink="#"
        theme="light"
      />
    </>
  );
}
