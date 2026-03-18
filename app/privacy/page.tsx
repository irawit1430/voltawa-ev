'use client';

import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-voltava-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-voltava-text/60 mb-12">Last updated: March 2026</p>

          <div className="prose prose-lg prose-voltava max-w-none text-voltava-text/80 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-voltava-primary mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                Voltava EV Infrastructure (&quot;Voltava&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects information to provide better services to all our users. The types of information we collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide to us:</strong> When you fill out forms on our website (such as the contact form or partnership application), we collect personal information including your name, email address, phone number, city/district, and any other details you choose to provide.</li>
                <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them, like when you visit our website or interact with our content. This may include device information, log information, and location information.</li>
                <li><strong>Analytics data:</strong> We use analytics tools to help us measure traffic and usage trends for the service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-voltava-primary mb-4">2. How We Use Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect from all our services to provide, maintain, protect, and improve them, to develop new ones, and to protect Voltava and our users. Specifically, we use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and fulfill your requests.</li>
                <li>Communicate with you about our products, services, offers, promotions, and events.</li>
                <li>Improve our website and services through analysis of user behavior.</li>
                <li>Process partnership applications and manage franchise relationships.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-voltava-primary mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not share personal information with companies, organizations, and individuals outside of Voltava unless one of the following circumstances applies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With your consent:</strong> We will share personal information with companies, organizations, or individuals outside of Voltava when we have your consent to do so.</li>
                <li><strong>For external processing:</strong> We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.</li>
                <li><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-voltava-primary mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We work hard to protect Voltava and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We review our information collection, storage, and processing practices, including physical security measures, to guard against unauthorized access to systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-voltava-primary mb-4">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 font-medium text-voltava-primary">
                privacy@voltava.in<br />
                Voltava EV Infrastructure<br />
                Patna, Bihar, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
