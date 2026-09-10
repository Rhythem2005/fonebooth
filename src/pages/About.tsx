import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-white font-display text-5xl md:text-8xl tracking-tighter mb-8 overflow-hidden">
            REDEFINING<br/>
            <span className="text-fonebooth-gold">POSSIBLE.</span>
          </h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl mx-auto leading-relaxed">
            Tone, texture, and technology. Fonebooth is more than a retailer—we are the curator of the digital vanguard.
          </p>
        </motion.header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-8">The Philosophy</h3>
            <p className="text-white font-body text-base md:text-lg tracking-wide leading-relaxed opacity-80 uppercase">
              In an era of mass consumption, we choose curation. Every device in our collection is vetted for its intersection of performance and artistry. 
              We believe your phone is the most intimate piece of technology you own—it deserves to be a masterpiece.
            </p>
          </div>
          <div className="aspect-square bg-white/[0.03] border border-white/10 flex items-center justify-center p-12">
            <div className="text-white font-display text-9xl opacity-10">FB</div>
          </div>
        </section>

        <section className="border-t border-white/10 pt-20">
          <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-12 text-center">Core Pillars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "Every detail engineered for excellence." },
              { title: "Integrity", desc: "Authentic hardware with zero compromise." },
              { title: "Service", desc: "A bespoke experience for every client." }
            ].map((pillar, i) => (
              <div key={i} className="text-center">
                <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase mb-4">{pillar.title}</h4>
                <p className="text-white/40 font-body text-[10px] tracking-widest uppercase leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
