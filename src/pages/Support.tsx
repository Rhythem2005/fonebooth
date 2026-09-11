import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Headphones, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Sparkles, 
  ChevronDown, 
  Check, 
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What does the 2-Year White Glove Warranty cover?",
    answer: "Every Fonebooth device includes our comprehensive concierge protection covering mechanical malfunction, display calibration irregularities, battery health degradation below 85%, and accidental drop damage with dedicated replacement devices dispatched via secure courier."
  },
  {
    question: "How does worldwide secure delivery work?",
    answer: "All orders are transported in tamper-evident armored cases with temperature-controlled air freight and end-to-end telemetry tracking. A certified courier handles hand-delivery directly to your preferred address."
  },
  {
    question: "Can I request a private showroom viewing?",
    answer: "Yes. Private appointments are available at our New York, London, and Tokyo locations. Clients are hosted in our private consultation suites with dedicated product specialists and custom hardware configuration services."
  },
  {
    question: "What is the turnaround time for concierge hardware repairs?",
    answer: "Repairs processed through our Concierge Desk are completed within 48 to 72 hours. While your unit is serviced, an identical loaner device pre-synchronized with your encrypted cloud profile is delivered to you."
  },
  {
    question: "Do you offer bespoke engraving and custom metallurgy finishes?",
    answer: "Our Atelier Studio provides diamond-tip laser engraving, custom monogramming, and bespoke physical finishes on aerospace titanium and forged carbon models upon client request."
  }
];

export default function Support() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceTier: 'Private Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', serviceTier: 'Private Consultation', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
            Dedicated Client Desk
          </span>
          <h1 className="text-white font-display text-5xl md:text-8xl tracking-tighter mb-8 leading-none">
            CONCIERGE &<br />
            <span className="text-fonebooth-gold">CARE.</span>
          </h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl leading-relaxed">
            Excellence does not end with acquisition. Experience round-the-clock priority service, certified hardware artisans, and bespoke client advisory.
          </p>
        </motion.header>

        {/* Pillars of Service */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Headphones,
              title: "Private Client Advisor",
              tag: "24/7 Priority Desk",
              desc: "Direct unqueued communication with our senior hardware advisors for configuration, setup, and concierge dispatch."
            },
            {
              icon: Wrench,
              title: "Atelier Repair & Diagnostics",
              tag: "72-Hour Turnaround",
              desc: "Precision calibration in dust-controlled cleanrooms utilizing certified OEM components and automated optical benchmarking."
            },
            {
              icon: Sparkles,
              title: "Bespoke Customization",
              tag: "Artisan Atelier",
              desc: "Laser micro-engraving, custom packaging, and custom finish adjustments tailored to individual collector specifications."
            }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/[0.03] border border-white/10 p-10 relative group hover:border-fonebooth-gold/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 border border-fonebooth-gold/40 flex items-center justify-center mb-8 group-hover:bg-fonebooth-gold group-hover:text-black transition-all duration-500 text-fonebooth-gold">
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-display text-fonebooth-gold tracking-[0.3em] uppercase mb-2 block">
                  {card.tag}
                </span>
                <h3 className="text-white font-display text-lg tracking-[0.2em] uppercase mb-4">
                  {card.title}
                </h3>
                <p className="text-dim-white font-body text-sm leading-relaxed tracking-wide">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-white/60 group-hover:text-fonebooth-gold transition-colors">
                <span>Inquire With Specialist</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* Two-Column Section: Request Form & Quick Channels */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
                Direct Communication
              </span>
              <h2 className="text-white font-display text-3xl md:text-4xl tracking-tighter mb-6">
                IMMEDIATE CHANNELS
              </h2>
              <p className="text-dim-white font-body text-sm tracking-wide leading-relaxed uppercase mb-10">
                Whether you need urgent courier dispatch or technical guidance, our senior advisors are stationed globally.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <PhoneCall size={20} className="text-fonebooth-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-display text-xs tracking-widest uppercase mb-1">VIP Priority Line</h4>
                    <p className="text-white/60 font-body text-sm">+1 (800) 555-FONE / +44 20 7946 0991</p>
                    <p className="text-white/30 font-body text-[10px] tracking-widest uppercase mt-1">24 Hours • Multilingual</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <Mail size={20} className="text-fonebooth-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-display text-xs tracking-widest uppercase mb-1">Encrypted Concierge Dispatch</h4>
                    <p className="text-white/60 font-body text-sm">concierge@fonebooth-retail.com</p>
                    <p className="text-white/30 font-body text-[10px] tracking-widest uppercase mt-1">Direct Advisor Reply Within 15 Min</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <MapPin size={20} className="text-fonebooth-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-display text-xs tracking-widest uppercase mb-1">Flagship Salon Suite</h4>
                    <p className="text-white/60 font-body text-sm">New York • London • Tokyo • Dubai</p>
                    <p className="text-white/30 font-body text-[10px] tracking-widest uppercase mt-1">Private Appointments Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-fonebooth-gold/20 bg-fonebooth-gold/5 flex items-center gap-4">
              <Clock size={24} className="text-fonebooth-gold shrink-0" />
              <div>
                <p className="text-white font-display text-xs tracking-widest uppercase">Current Global Desk Status</p>
                <p className="text-fonebooth-gold font-body text-xs tracking-wide uppercase">Operational • Average Dispatch Queue &lt; 8 Mins</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-10 md:p-14 relative">
            <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-2 block">
              Concierge Ticket
            </span>
            <h3 className="text-white font-display text-2xl tracking-[0.1em] uppercase mb-8">
              REQUEST ADVISORY OR DISPATCH
            </h3>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <div className="w-16 h-16 border-2 border-fonebooth-gold rounded-full flex items-center justify-center mx-auto mb-6 text-fonebooth-gold">
                  <Check size={32} />
                </div>
                <h4 className="text-white font-display text-2xl tracking-widest uppercase mb-2">Request Transmitted</h4>
                <p className="text-dim-white font-body text-sm tracking-wide uppercase max-w-md mx-auto">
                  A personal Concierge Specialist has received your dossier and will reach out via encrypted email or phone within minutes.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-3">
                      Client Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lorde Sterling" 
                      className="w-full bg-transparent border-b border-white/15 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold transition-colors placeholder:text-white/20" 
                    />
                  </div>

                  <div>
                    <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-3">
                      Confidential Email
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@enterprise.com" 
                      className="w-full bg-transparent border-b border-white/15 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold transition-colors placeholder:text-white/20" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-3">
                    Concierge Service Tier
                  </label>
                  <select 
                    value={formData.serviceTier}
                    onChange={(e) => setFormData({ ...formData, serviceTier: e.target.value })}
                    className="w-full bg-black border-b border-white/15 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    <option className="bg-black text-white">Private Hardware Consultation</option>
                    <option className="bg-black text-white">Express Armored Courier Dispatch</option>
                    <option className="bg-black text-white">Atelier Repair & Device Replacement</option>
                    <option className="bg-black text-white">Custom Engraving & Bespoke Metallurgy</option>
                    <option className="bg-black text-white">Corporate Fleet VIP Onboarding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-3">
                    Dossier Details / Device Serial Number
                  </label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your device specifications, requirements, or schedule preferences..." 
                    className="w-full bg-transparent border-b border-white/15 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold transition-colors resize-none placeholder:text-white/20" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 hover:bg-fonebooth-gold transition-colors duration-500 mt-6 cursor-pointer"
                >
                  Transmit Concierge Ticket
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Client FAQ Section */}
        <section className="border-t border-white/10 pt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
                Knowledge Base
              </span>
              <h2 className="text-white font-display text-3xl md:text-5xl tracking-tighter mb-4">
                FREQUENT CLIENT INQUIRIES
              </h2>
              <p className="text-dim-white font-body text-sm tracking-widest uppercase">
                Protocol, logistics, and bespoke care transparency.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={faq.question}
                    className="border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-6 px-8 flex justify-between items-center text-left hover:text-fonebooth-gold transition-colors cursor-pointer"
                    >
                      <span className="text-white font-display text-sm tracking-[0.15em] uppercase pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        size={18} 
                        className={`text-fonebooth-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-8 pt-2 text-dim-white font-body text-sm leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
