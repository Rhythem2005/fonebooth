import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PHONES, Phone } from '../data/phones';
import { useCart } from '../context/CartContext';
import { Check, ArrowRight, ArrowLeft, Cpu, Smartphone, Camera, Battery, Shield } from 'lucide-react';

export default function Compare() {
  const { addItem } = useCart();
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'titan-pro',
    'neo-fold',
    'zenith-max'
  ]);
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  const selectedPhones: Phone[] = selectedIds.map(
    (id) => PHONES.find((p) => p.id === id) || PHONES[0]
  );

  const handleDeviceChange = (slotIndex: number, newId: string) => {
    const updated = [...selectedIds];
    updated[slotIndex] = newId;
    setSelectedIds(updated);
  };

  const handleAddToCart = (phone: Phone) => {
    addItem(phone);
    setAddedIds((prev) => ({ ...prev, [phone.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [phone.id]: false }));
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
            Technical Evaluation
          </span>
          <h1 className="text-white font-display text-5xl md:text-8xl tracking-tighter mb-8 leading-none">
            SPECIFICATION<br />
            <span className="text-fonebooth-gold">MATRIX.</span>
          </h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl leading-relaxed">
            Side-by-side engineering evaluation. Compare proprietary silicon, optical modules, and aerospace alloys to determine your definitive daily driver.
          </p>
        </motion.header>

        {/* Matrix Container */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[760px]">
            {/* Header Device Selector Row */}
            <div className="grid grid-cols-4 gap-6 mb-12 pb-12 border-b border-white/10 items-end">
              <div className="col-span-1">
                <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase block mb-2">
                  Select Models
                </span>
                <p className="text-white font-display text-lg tracking-wider uppercase">
                  Direct Comparison
                </p>
                <p className="text-dim-white font-body text-xs tracking-wider uppercase mt-2">
                  Switch dropdowns to evaluate different hardware configurations.
                </p>
              </div>

              {selectedPhones.map((phone, idx) => (
                <div key={idx} className="col-span-1 flex flex-col items-center text-center">
                  {/* Selector dropdown */}
                  <select
                    value={phone.id}
                    onChange={(e) => handleDeviceChange(idx, e.target.value)}
                    className="w-full bg-black border border-white/20 text-white font-display text-xs p-2 uppercase tracking-widest mb-6 focus:border-fonebooth-gold outline-none cursor-pointer"
                  >
                    {PHONES.map((p) => (
                      <option key={p.id} value={p.id} className="bg-black text-white">
                        {p.name} (${p.price})
                      </option>
                    ))}
                  </select>

                  {/* Phone Preview */}
                  <Link to={`/product/${phone.id}`} className="group block w-full">
                    <div className="aspect-[3/4] max-w-[200px] mx-auto bg-white/[0.03] border border-white/10 mb-4 overflow-hidden relative">
                      <img 
                        src={phone.image} 
                        alt={phone.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 border border-fonebooth-gold/30 text-[9px] font-display text-fonebooth-gold uppercase tracking-widest">
                        {phone.category}
                      </span>
                    </div>
                    <h3 className="text-white font-display text-lg tracking-[0.1em] uppercase group-hover:text-fonebooth-gold transition-colors">
                      {phone.name}
                    </h3>
                  </Link>

                  <p className="text-fonebooth-gold font-body text-xl font-bold tracking-widest mt-1 mb-4">
                    ${phone.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(phone)}
                    className={`w-full max-w-[200px] font-body font-bold tracking-[0.2em] uppercase text-[10px] py-3 transition-colors duration-300 cursor-pointer ${
                      addedIds[phone.id] 
                        ? 'bg-fonebooth-gold text-black' 
                        : 'bg-white text-black hover:bg-fonebooth-gold'
                    }`}
                  >
                    {addedIds[phone.id] ? 'In Bag' : 'Add to Bag'}
                  </button>
                </div>
              ))}
            </div>

            {/* Spec Sections */}
            {[
              {
                title: "Silicon & Architecture",
                icon: Cpu,
                rows: [
                  { label: "Processor Chip", key: "processor", getVal: (p: Phone) => p.specs.processor },
                  { label: "System Category", key: "cat", getVal: (p: Phone) => p.category },
                  { label: "Available Storage", key: "storage", getVal: (p: Phone) => p.specs.storage || '256GB / 512GB' }
                ]
              },
              {
                title: "Display & Optics",
                icon: Smartphone,
                rows: [
                  { label: "Display Fidelity", key: "display", getVal: (p: Phone) => p.specs.display },
                  { label: "Optical Camera Array", key: "camera", getVal: (p: Phone) => p.specs.camera },
                  { label: "Primary Finish", key: "color", getVal: (p: Phone) => p.color }
                ]
              },
              {
                title: "Battery & Structural Engineering",
                icon: Battery,
                rows: [
                  { label: "Power Capacity", key: "battery", getVal: (p: Phone) => p.specs.battery },
                  { label: "Chassis & Alloy", key: "finish", getVal: (p: Phone) => p.specs.finish || 'Aerospace Grade Alloy' },
                  { label: "Atelier Guarantee", key: "warr", getVal: () => "2-Year Worldwide White Glove" }
                ]
              }
            ].map((section) => (
              <div key={section.title} className="mb-12">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <section.icon size={18} className="text-fonebooth-gold" />
                  <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase">
                    {section.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {section.rows.map((row) => (
                    <div 
                      key={row.label}
                      className="grid grid-cols-4 gap-6 py-4 px-4 bg-white/[0.015] border border-white/5 hover:border-white/20 transition-colors items-center"
                    >
                      <div className="col-span-1">
                        <span className="text-white/50 font-body text-xs tracking-widest uppercase">
                          {row.label}
                        </span>
                      </div>

                      {selectedPhones.map((phone, idx) => (
                        <div key={idx} className="col-span-1 text-center">
                          <span className="text-white font-body text-xs tracking-wide uppercase font-medium">
                            {row.getVal(phone)}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Callout */}
        <div className="p-10 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <div>
            <h4 className="text-white font-display text-lg tracking-[0.2em] uppercase mb-2">
              Unsure Which Fits Your Lifestyle?
            </h4>
            <p className="text-dim-white font-body text-sm tracking-wide uppercase">
              Schedule a bespoke 1-on-1 consultation with a Fonebooth hardware specialist.
            </p>
          </div>
          <Link
            to="/support"
            className="border border-fonebooth-gold text-fonebooth-gold font-body tracking-[0.2em] uppercase text-xs py-4 px-8 hover:bg-fonebooth-gold hover:text-black transition-all shrink-0"
          >
            Speak With Specialist
          </Link>
        </div>
      </div>
    </div>
  );
}
