'use client';

import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-voltava-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-voltava-primary">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">Voltava</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
              Building a reliable, interoperable EV charging network across Tier-2 and Tier-3 India. Powering the next 500 cities.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/network" className="text-white/70 hover:text-white text-sm transition-colors">Charging Network</Link></li>
              <li><Link href="/one-card" className="text-white/70 hover:text-white text-sm transition-colors">Voltava One Card</Link></li>
              <li><Link href="/partners" className="text-white/70 hover:text-white text-sm transition-colors">Fleet Solutions</Link></li>
              <li><Link href="/government" className="text-white/70 hover:text-white text-sm transition-colors">Government & PSUs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="text-white/70 hover:text-white text-sm transition-colors">Partner with Us</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">Subscribe to our newsletter for the latest infrastructure updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 w-full"
              />
              <button type="submit" className="bg-white text-voltava-primary w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-voltava-bg transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Voltava EV Infrastructure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/50 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/privacy" className="text-white/50 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
