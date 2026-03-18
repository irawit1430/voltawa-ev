'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShieldCheck, Link2, TrendingUp, CheckCircle2 } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function AboutPage() {
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
              Building EV infrastructure for the next 500 cities.
            </h1>
            <p className="text-lg md:text-xl text-voltava-text/70 leading-relaxed max-w-2xl mx-auto">
              Voltava focuses on interoperability, uptime, and scalable deployment beyond metro cities. We believe the true EV revolution happens in the districts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-6">Our Core Values</h2>
            <p className="text-voltava-text/70 text-lg max-w-2xl mx-auto">
              The principles that guide every station we build and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Reliability', desc: 'A charger that doesn\'t work is worse than no charger. We design for 99% uptime with predictive maintenance.' },
              { icon: Link2, title: 'Interoperability', desc: 'Open standards, universal connectors, and seamless payment gateways. EV charging should be as easy as buying fuel.' },
              { icon: TrendingUp, title: 'Scalability', desc: 'Our franchise model and centralized tech stack allow us to deploy rapidly across diverse geographies.' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-voltava-bg p-10 rounded-3xl border border-voltava-primary/5 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm mx-auto">
                  <value.icon size={32} className="text-voltava-accent" />
                </div>
                <h3 className="text-2xl font-bold text-voltava-primary mb-4">{value.title}</h3>
                <p className="text-voltava-text/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-voltava-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12">
                The Journey So Far
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {[
                  { title: 'Policy-aligned deployment plan', desc: 'Mapped high-density corridors and district headquarters in Bihar.' },
                  { title: 'District rollout strategy', desc: 'Finalized standard operating procedures for rapid franchise onboarding.' },
                  { title: 'Franchise model development', desc: 'Created transparent revenue-sharing and SLA frameworks.' },
                  { title: 'One Card fintech readiness', desc: 'Integrated UPI and RFID backend for seamless user transactions.' },
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-voltava-accent bg-voltava-primary text-voltava-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hidden lg:block">
              <Image
                src="https://picsum.photos/seed/about/800/1200"
                alt="Voltava Team"
                fill
                className="object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Join us in building the future of mobility."
        primaryButtonText="View Open Roles"
        primaryButtonLink="#"
        secondaryButtonText="Partner with Us"
        secondaryButtonLink="/partners"
        theme="light"
      />
    </>
  );
}
