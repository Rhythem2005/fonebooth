import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PHONES } from '../data/phones';

const CATEGORIES = ['All', 'Flagship', 'Foldable', 'Performance'] as const;

export default function Shop() {
  const [filter, setFilter] = useState<string>('All');

  const filteredPhones = filter === 'All' 
    ? PHONES 
    : PHONES.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-white font-display text-5xl md:text-7xl tracking-tighter mb-6">THE COLLECTION</h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl">
            Explore our curated selection of high-performance mobile devices, hand-selected for quality and innovation.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Filters */}
          <aside className="w-full md:w-48 shrink-0">
            <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-8">Refine By</h3>
            <div className="flex flex-wrap md:flex-col gap-6 font-body text-xs tracking-[0.2em] uppercase">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-left transition-colors cursor-pointer ${filter === cat ? 'text-white underline underline-offset-8 decoration-fonebooth-gold font-bold' : 'text-dim-white hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredPhones.map((phone, i) => (
              <motion.div 
                key={phone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${phone.id}`}>
                  <div className="aspect-[3/4] bg-white/[0.03] border border-white/10 overflow-hidden mb-6 relative">
                    <img 
                      src={phone.image} 
                      alt={phone.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-1">
                      <span className="text-[10px] font-display text-fonebooth-gold tracking-[0.3em] uppercase">{phone.color}</span>
                      <span className="text-[9px] font-body text-white/50 tracking-[0.2em] uppercase">{phone.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase mb-1 group-hover:text-fonebooth-gold transition-colors">{phone.name}</h4>
                      <p className="text-dim-white font-body text-[10px] tracking-widest uppercase">{phone.brand}</p>
                    </div>
                    <p className="text-white font-body text-sm tracking-widest">${phone.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
