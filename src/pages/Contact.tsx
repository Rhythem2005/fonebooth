import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-white font-display text-5xl md:text-8xl tracking-tighter mb-8">
            VISIT<br/>
            <span className="text-fonebooth-gold">US.</span>
          </h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl leading-relaxed">
            Experience the future of retail at our flagship locations or connect with our concierge team globally.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Locations */}
          <section>
            <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-12">Flagship Showrooms</h3>
            <div className="space-y-16">
              {[
                { city: "New York", address: "767 5th Ave, New York, NY 10153", phone: "+1 212 336 1440" },
                { city: "London", address: "235 Regent St., London W1B 2EL", phone: "+44 20 7153 9000" },
                { city: "Tokyo", address: "3 Chome-5-12 Ginza, Chuo City, Tokyo", phone: "+81 3-5159-0700" }
              ].map((loc, i) => (
                <div key={i} className="group cursor-pointer">
                  <h4 className="text-white font-display text-lg tracking-[0.2em] uppercase mb-4 group-hover:text-fonebooth-gold transition-colors">{loc.city}</h4>
                  <p className="text-white/40 font-body text-xs tracking-widest uppercase mb-2 leading-relaxed">{loc.address}</p>
                  <p className="text-fonebooth-gold font-body text-[10px] tracking-widest uppercase">{loc.phone}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-white/[0.03] border border-white/10 p-10 md:p-16">
            <h3 className="text-white font-display text-xl tracking-[0.2em] uppercase mb-12">Concierge Request</h3>
            <form className="space-y-8">
              <div>
                <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-4">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 text-white font-body focus:outline-none focus:border-fonebooth-gold transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-4">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 text-white font-body focus:outline-none focus:border-fonebooth-gold transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-4">Subject</label>
                <select className="w-full bg-transparent border-b border-white/10 py-2 text-white font-body focus:outline-none focus:border-fonebooth-gold transition-colors appearance-none uppercase text-xs tracking-widest">
                  <option className="bg-black">Product Inquiry</option>
                  <option className="bg-black">Support Request</option>
                  <option className="bg-black">Trade-In Valuation</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-4">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-2 text-white font-body focus:outline-none focus:border-fonebooth-gold transition-colors resize-none" />
              </div>
              <button className="w-full bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 hover:bg-fonebooth-gold transition-colors duration-500 mt-8">
                Send Request
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
