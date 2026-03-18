'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, BarChart3, MapPin, CreditCard, Car } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/evcharging/1920/1080"
            alt="EV Charging Station"
            fill
            className="object-cover opacity-15"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-voltava-bg via-voltava-bg/80 to-voltava-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-voltava-primary leading-[1.05] mb-8">
              Powering Bihar.<br />
              <span className="text-voltava-accent">Scaling India.</span>
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/80 leading-relaxed mb-10 max-w-2xl">
              Voltava is building a reliable, interoperable EV charging network across Tier-2 and Tier-3 India—starting with Bihar—powered by a franchise-led model and unified payments via UPI + RFID.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/partners"
                className="w-full sm:w-auto px-8 py-4 bg-voltava-primary text-white rounded-full font-medium hover:bg-voltava-accent transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Become a Partner
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/network"
                className="w-full sm:w-auto px-8 py-4 bg-white text-voltava-primary border border-voltava-primary/10 rounded-full font-medium hover:bg-voltava-bg transition-colors flex items-center justify-center shadow-sm"
              >
                Find a Charger
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-voltava-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-voltava-text/50 mb-8">
            Designed for partnerships with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {['Government Bodies', 'DISCOMs', 'PSUs', 'Fleets', 'Site Hosts'].map((partner, i) => (
              <div key={i} className="text-xl font-bold text-voltava-primary">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 md:py-32 bg-voltava-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-voltava-primary max-w-2xl">
              Infrastructure that works for everyone.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Build Faster',
                desc: 'Standard rollout playbook with district prioritization for rapid deployment.',
              },
              {
                icon: BarChart3,
                title: 'Earn Better',
                desc: 'Multiple revenue streams with transparent settlement and daily payouts.',
              },
              {
                icon: ShieldCheck,
                title: 'Operate Smarter',
                desc: 'Remote monitoring, guaranteed uptime SLAs, and predictive analytics.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-voltava-primary/5 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-voltava-accent/10 rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon size={28} className="text-voltava-accent" />
                </div>
                <h3 className="text-2xl font-bold text-voltava-primary mb-4">{feature.title}</h3>
                <p className="text-voltava-text/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Pillars */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-voltava-primary mb-12">
                A unified ecosystem for modern mobility.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: 'EV Charging Network',
                    desc: 'AC + DC charging across cities, highways, and districts.',
                  },
                  {
                    icon: Zap,
                    title: 'Highway Corridors',
                    desc: 'Fast charging hubs at strategic intervals for inter-city travel.',
                  },
                  {
                    icon: Car,
                    title: 'Fleet Solutions',
                    desc: 'Ensuring base utilization through a dedicated fleet-first strategy.',
                  },
                  {
                    icon: CreditCard,
                    title: 'Voltava One Card',
                    desc: 'RFID tap + UPI wallet for seamless, instant payments.',
                  },
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-voltava-primary/10 flex items-center justify-center text-voltava-primary">
                      <pillar.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-voltava-primary mb-2">{pillar.title}</h4>
                      <p className="text-voltava-text/70">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-voltava-bg">
              <Image
                src="https://picsum.photos/seed/evcharger/800/1200"
                alt="Voltava Ecosystem"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-voltava-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Partnering made simple.
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From site identification to revenue generation, our franchise model is designed for scale and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-white/20" />
            
            {[
              { step: '01', title: 'Identify Site', desc: 'We help evaluate your location for optimal utilization and grid capacity.' },
              { step: '02', title: 'Install Infrastructure', desc: 'End-to-end deployment of chargers, branding, and safety equipment.' },
              { step: '03', title: 'Operate Efficiently', desc: 'Centralized monitoring, automated billing, and 24/7 support.' },
              { step: '04', title: 'Earn Revenue', desc: 'Transparent daily settlements directly to your bank account.' },
            ].map((item, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                <div className="w-24 h-24 rounded-full bg-voltava-accent/20 border border-voltava-accent/30 flex items-center justify-center text-3xl font-bold text-voltava-accent mb-8 mx-auto md:mx-0 relative z-10 backdrop-blur-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4 text-center md:text-left">{item.title}</h4>
                <p className="text-white/60 text-center md:text-left leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 md:py-32 bg-voltava-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-voltava-primary mb-8 max-w-4xl mx-auto leading-[1.1]">
            Jobs in districts.<br />
            Cleaner mobility.<br />
            Stronger infrastructure.
          </h2>
          <p className="text-xl text-voltava-text/70 max-w-3xl mx-auto leading-relaxed">
            Voltava enables EV adoption beyond metros, supporting two-wheelers, three-wheelers, cars, buses, and commercial fleets. We are building the backbone of India&apos;s electric future.
          </p>
        </div>
      </section>

      <CTAStrip 
        title="Ready to host a charger or build a district franchise?"
        primaryButtonText="Partner with Voltava"
        primaryButtonLink="/partners"
        secondaryButtonText="Talk to the Team"
        secondaryButtonLink="/contact"
        theme="dark"
      />
    </>
  );
}
