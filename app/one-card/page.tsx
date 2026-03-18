'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, CheckCircle2, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import CTAStrip from '@/components/CTAStrip';

export default function OneCardPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-voltava-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/fintech/1920/1080"
            alt="Fintech Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-voltava-primary to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                One Card.<br />
                <span className="text-voltava-accent">One App.</span><br />
                One seamless EV payment experience.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                RFID tap-and-charge with UPI wallet integration, designed for simplicity and scalability. No more fumbling with multiple apps or payment gateways.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] flex justify-center items-center"
            >
              <div className="w-64 h-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl relative z-20 flex flex-col p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-12">
                  <Zap size={24} className="text-voltava-accent" />
                  <span className="font-mono text-xs text-white/50">RFID ENABLED</span>
                </div>
                <div className="mt-auto">
                  <p className="font-mono text-lg tracking-widest mb-2">•••• •••• •••• 4242</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/50 uppercase">Cardholder</p>
                      <p className="font-medium">Voltava User</p>
                    </div>
                    <div className="w-10 h-6 bg-voltava-accent/30 rounded" />
                  </div>
                </div>
              </div>
              
              <div className="w-64 h-96 bg-voltava-accent/20 backdrop-blur-md border border-voltava-accent/30 rounded-3xl shadow-xl absolute z-10 transform rotate-6 translate-x-12 translate-y-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-6">Designed for the driver.</h2>
            <p className="text-voltava-text/70 text-lg max-w-2xl mx-auto">
              We&apos;ve removed the friction from EV charging payments. Just tap, charge, and go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: 'Tap-to-start charging (RFID)', desc: 'Instant authentication at any Voltava station without needing a smartphone connection.' },
              { icon: Smartphone, title: 'UPI-linked wallet', desc: 'Top up your Voltava wallet instantly using any UPI app. Digital receipts for every session.' },
              { icon: BarChart3, title: 'Fleet controls and reporting', desc: 'Manage multiple drivers, set spending limits, and download GST-ready invoices.' },
              { icon: ShieldCheck, title: 'Subscription plans', desc: 'Unlock discounted charging rates and priority support with monthly subscriptions.' },
              { icon: Zap, title: 'Future-ready integrations', desc: 'Built to support upcoming NFC and in-car payment protocols.' },
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

      {/* How It Works */}
      <section className="py-24 bg-voltava-bg border-y border-voltava-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-16 text-center">The simplest charging experience.</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-voltava-primary/10 -translate-y-1/2 z-0" />
            
            {[
              { step: 'Tap', desc: 'Hold your card near the reader' },
              { step: 'Authorize', desc: 'Instant balance verification' },
              { step: 'Pay', desc: 'Funds reserved from wallet' },
              { step: 'Charge', desc: 'Session begins automatically' },
              { step: 'Receive receipt', desc: 'Digital invoice sent to app' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-voltava-bg p-4">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-voltava-accent flex items-center justify-center text-xl font-bold text-voltava-primary mb-4 shadow-sm">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-voltava-primary mb-2">{item.step}</h4>
                <p className="text-sm text-voltava-text/60 max-w-[150px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden bg-voltava-bg">
              <Image
                src="https://picsum.photos/seed/fintechpartner/800/1000"
                alt="Fintech Layer"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-voltava-primary mb-6">
                A fintech layer that strengthens your charging network.
              </h2>
              <p className="text-voltava-text/70 text-lg mb-10 leading-relaxed">
                Voltava One Card isn&apos;t just for drivers. It&apos;s a powerful tool for franchise partners to build loyalty and recurring revenue.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Transaction-based services and revenue sharing',
                  'Fleet subscriptions and corporate billing',
                  'Co-branded card issuance for large partners',
                  'Loyalty and offers ecosystem to drive utilization',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-voltava-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-voltava-accent" />
                    </div>
                    <span className="text-voltava-primary font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to integrate the Voltava One Card into your fleet or franchise?"
        primaryButtonText="Request a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Partner for Co-Branded Issuance"
        secondaryButtonLink="/partners"
        theme="dark"
      />
    </>
  );
}
