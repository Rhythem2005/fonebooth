import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { PHONES } from '../data/phones';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [added, setAdded] = useState(false);
  const phone = PHONES.find(p => p.id === id) || PHONES[0];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="pt-32 pb-20 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-fonebooth-gold font-body text-[10px] tracking-[0.4em] uppercase mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-square bg-white/[0.03] border border-white/10 overflow-hidden relative group"
          >
            <img 
              src={phone.image} 
              alt={phone.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-black/60 border border-fonebooth-gold/30 text-[10px] font-display text-fonebooth-gold tracking-[0.3em] uppercase">
                {phone.category}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase">{phone.brand}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 font-body text-xs tracking-widest uppercase">{phone.color}</span>
            </div>

            <h1 className="text-white font-display text-4xl sm:text-6xl md:text-7xl tracking-tighter mb-4">{phone.name}</h1>
            
            <p className="text-fonebooth-gold font-body italic text-sm tracking-wide mb-6">{phone.tagline}</p>

            <p className="text-white font-body text-3xl md:text-4xl tracking-widest mb-6 font-semibold">${phone.price}</p>
            
            <p className="text-dim-white font-body text-sm leading-relaxed mb-8">{phone.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-10 py-6 border-y border-white/10">
              {Object.entries(phone.specs).map(([key, value]) => (
                <div key={key}>
                  <p className="text-white/40 font-body text-[10px] tracking-widest uppercase mb-1">{key}</p>
                  <p className="text-white font-body text-xs tracking-wide uppercase font-medium">{value}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={handleAddToCart}
              className={`w-full font-body font-bold tracking-[0.3em] uppercase text-xs py-5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                added 
                  ? 'bg-fonebooth-gold text-black' 
                  : 'bg-white text-black hover:bg-fonebooth-gold'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Concierge Bag
                </>
              ) : (
                'Add To Concierge Bag'
              )}
            </button>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck size={16} className="text-fonebooth-gold mb-1" />
                <span className="text-[9px] uppercase tracking-widest text-white/70">Complimentary Courier</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck size={16} className="text-fonebooth-gold mb-1" />
                <span className="text-[9px] uppercase tracking-widest text-white/70">2-Yr White Glove Care</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw size={16} className="text-fonebooth-gold mb-1" />
                <span className="text-[9px] uppercase tracking-widest text-white/70">30-Day Valet Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
