'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Landmark, FileText, Zap, Users, CheckCircle2 } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function GovernmentPage() {
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
              Policy-aligned EV infrastructure with a PPP-ready model.
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/70 leading-relaxed max-w-2xl mx-auto">
              Voltava partners with governments, DISCOMs, and PSUs to deploy EV infrastructure efficiently, transparently, and at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-6">Driving public impact.</h2>
            <p className="text-voltava-text/70 text-lg max-w-2xl mx-auto">
              We align our deployment strategy with state and central EV policies to maximize societal benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Faster EV adoption', desc: 'Overcoming range anxiety by ensuring reliable charging access across districts.' },
              { icon: Users, title: 'Job creation', desc: 'Fostering local entrepreneurship and technical employment in Tier-2/3 cities.' },
              { icon: FileText, title: 'Transparent monitoring', desc: 'Real-time dashboards for government bodies to track utilization and uptime.' },
              { icon: Landmark, title: 'Improved public convenience', desc: 'Safe, well-lit, and accessible charging hubs for all citizens.' },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-voltava-bg p-8 rounded-3xl border border-voltava-primary/5"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon size={24} className="text-voltava-accent" />
                </div>
                <h3 className="text-xl font-bold text-voltava-primary mb-3">{benefit.title}</h3>
                <p className="text-voltava-text/70 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Voltava Requests */}
      <section className="py-24 bg-voltava-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <Image
                src="https://picsum.photos/seed/gov/800/1000"
                alt="Government Partnership"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                A collaborative approach to infrastructure.
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                To accelerate deployment and ensure project viability, we seek strategic support from our public sector partners.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Single-window approvals for rapid deployment',
                  'Access to public land on revenue-share models',
                  'DISCOM coordination for dedicated EV tariffs and grid upgrades',
                  'Policy and subsidy alignment for capital expenditure',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-voltava-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-voltava-accent" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to electrify your state or district?"
        primaryButtonText="Request a Government Briefing"
        primaryButtonLink="/contact"
        secondaryButtonText="View Policy Framework"
        secondaryButtonLink="#"
        theme="light"
      />
    </>
  );
}
