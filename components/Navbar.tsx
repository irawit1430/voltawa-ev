'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Network', href: '/network' },
  { name: 'One Card', href: '/one-card' },
  { name: 'Partners', href: '/partners' },
  { name: 'Government', href: '/government' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-voltava-bg/80 backdrop-blur-md border-b border-voltava-primary/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-voltava-primary flex items-center justify-center text-white group-hover:bg-voltava-accent transition-colors">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-voltava-primary">Voltava</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-voltava-accent ${
                pathname === link.href ? 'text-voltava-primary' : 'text-voltava-text/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/network"
            className="text-sm font-medium text-voltava-primary hover:text-voltava-accent transition-colors"
          >
            Find a Charger
          </Link>
          <Link
            href="/partners"
            className="bg-voltava-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-voltava-accent transition-colors shadow-sm"
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-voltava-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-voltava-card border-b border-voltava-primary/10 shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-voltava-primary/5 ${
                    pathname === link.href ? 'text-voltava-primary' : 'text-voltava-text/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/network"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-sm font-medium text-voltava-primary py-3 border border-voltava-primary/20 rounded-full"
                >
                  Find a Charger
                </Link>
                <Link
                  href="/partners"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center bg-voltava-primary text-white text-sm font-medium py-3 rounded-full"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
