'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAStripProps {
  title: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  theme?: 'light' | 'dark';
}

export default function CTAStrip({
  title,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  theme = 'dark',
}: CTAStripProps) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 ${isDark ? 'bg-voltava-primary text-white' : 'bg-voltava-accent/10 text-voltava-primary'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-10 max-w-3xl mx-auto"
        >
          {title}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={primaryButtonLink}
            className={`px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 ${
              isDark 
                ? 'bg-voltava-accent hover:bg-white hover:text-voltava-primary text-white' 
                : 'bg-voltava-primary hover:bg-voltava-accent text-white'
            }`}
          >
            {primaryButtonText}
            <ArrowRight size={18} />
          </Link>
          <Link
            href={secondaryButtonLink}
            className={`px-8 py-4 rounded-full font-medium transition-all border ${
              isDark 
                ? 'border-white/30 hover:border-white hover:bg-white/10 text-white' 
                : 'border-voltava-primary/30 hover:border-voltava-primary hover:bg-voltava-primary/5 text-voltava-primary'
            }`}
          >
            {secondaryButtonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
