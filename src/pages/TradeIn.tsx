import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  ShieldCheck, 
  Truck, 
  FileCheck, 
  ArrowRight, 
  Check, 
  Sparkles,
  Award
} from 'lucide-react';

interface DeviceOption {
  id: string;
  name: string;
  baseValue: number;
}

const BRANDS: { [key: string]: DeviceOption[] } = {
  Apple: [
    { id: 'ip16pm', name: 'iPhone 16 Pro Max', baseValue: 920 },
    { id: 'ip16p', name: 'iPhone 16 Pro', baseValue: 810 },
    { id: 'ip15pm', name: 'iPhone 15 Pro Max', baseValue: 740 },
    { id: 'ip15p', name: 'iPhone 15 Pro', baseValue: 650 },
    { id: 'ip14pm', name: 'iPhone 14 Pro Max', baseValue: 560 }
  ],
  Samsung: [
    { id: 's24u', name: 'Galaxy S24 Ultra', baseValue: 820 },
    { id: 's24p', name: 'Galaxy S24+', baseValue: 640 },
    { id: 'zfold6', name: 'Galaxy Z Fold 6', baseValue: 950 },
    { id: 's23u', name: 'Galaxy S23 Ultra', baseValue: 550 }
  ],
  Google: [
    { id: 'p9p', name: 'Pixel 9 Pro XL', baseValue: 750 },
    { id: 'p9', name: 'Pixel 9 Pro', baseValue: 650 },
    { id: 'p8p', name: 'Pixel 8 Pro', baseValue: 480 }
  ]
};

export default function TradeIn() {
  const [selectedBrand, setSelectedBrand] = useState<string>('Apple');
  const [selectedModelId, setSelectedModelId] = useState<string>(BRANDS['Apple'][0].id);
  const [storageTier, setStorageTier] = useState<number>(256);
  const [condition, setCondition] = useState<string>('Flawless');
  const [kitRequested, setKitRequested] = useState<boolean>(false);
  const [clientAddress, setClientAddress] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: ''
  });

  // Calculate value
  const brandModels = BRANDS[selectedBrand] || BRANDS['Apple'];
  const currentModel = brandModels.find((m) => m.id === selectedModelId) || brandModels[0];

  const storageMultiplier: { [key: number]: number } = {
    128: 1.0,
    256: 1.08,
    512: 1.18,
    1024: 1.30
  };

  const conditionMultiplier: { [key: string]: number } = {
    Flawless: 1.0,
    'Minor Wear': 0.85,
    'Deep Scratches': 0.65,
    'Cracked Glass': 0.45
  };

  const estimatedValue = Math.round(
    currentModel.baseValue * 
    (storageMultiplier[storageTier] || 1) * 
    (conditionMultiplier[condition] || 1)
  );

  const handleKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKitRequested(true);
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
            Valuation Atelier
          </span>
          <h1 className="text-white font-display text-5xl md:text-8xl tracking-tighter mb-8 leading-none">
            UPGRADE TO<br />
            <span className="text-fonebooth-gold">LUXURY.</span>
          </h1>
          <p className="text-dim-white font-body text-lg md:text-xl tracking-widest uppercase max-w-2xl leading-relaxed">
            Transition your legacy hardware into immediate concierge acquisition credit. Comprehensive data destruction certified by military-grade wiping protocol.
          </p>
        </motion.header>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-8 md:p-12 space-y-10">
            {/* Step 1: Brand */}
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase block mb-3">
                Step 01 / Select Manufacturer
              </span>
              <div className="grid grid-cols-3 gap-4">
                {Object.keys(BRANDS).map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setSelectedBrand(b);
                      setSelectedModelId(BRANDS[b][0].id);
                    }}
                    className={`py-3 px-4 font-display text-xs tracking-widest uppercase border transition-all cursor-pointer ${
                      selectedBrand === b 
                        ? 'border-fonebooth-gold bg-fonebooth-gold text-black font-bold' 
                        : 'border-white/10 text-white/70 hover:border-white/40'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Model */}
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase block mb-3">
                Step 02 / Select Device Model
              </span>
              <select
                value={selectedModelId}
                onChange={(e) => setSelectedModelId(e.target.value)}
                className="w-full bg-black border border-white/20 p-3 text-white font-display text-xs uppercase tracking-widest focus:border-fonebooth-gold outline-none cursor-pointer"
              >
                {brandModels.map((m) => (
                  <option key={m.id} value={m.id} className="bg-black text-white">
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Storage */}
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase block mb-3">
                Step 03 / Storage Capacity
              </span>
              <div className="grid grid-cols-4 gap-4">
                {[128, 256, 512, 1024].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setStorageTier(tier)}
                    className={`py-3 px-2 font-display text-xs tracking-widest uppercase border transition-all cursor-pointer ${
                      storageTier === tier 
                        ? 'border-fonebooth-gold bg-white text-black font-bold' 
                        : 'border-white/10 text-white/70 hover:border-white/40'
                    }`}
                  >
                    {tier >= 1024 ? '1 TB' : `${tier} GB`}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Condition */}
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase block mb-3">
                Step 04 / Cosmetic & Operational State
              </span>
              <div className="grid grid-cols-2 gap-4">
                {['Flawless', 'Minor Wear', 'Deep Scratches', 'Cracked Glass'].map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setCondition(cond)}
                    className={`py-3 px-4 text-left border transition-all cursor-pointer ${
                      condition === cond 
                        ? 'border-fonebooth-gold bg-white/[0.08] text-white font-medium' 
                        : 'border-white/10 text-white/50 hover:border-white/30'
                    }`}
                  >
                    <span className="font-display text-xs tracking-wider uppercase block">{cond}</span>
                    <span className="font-body text-[10px] tracking-wide text-white/40 uppercase block mt-1">
                      {cond === 'Flawless' && 'Like new, no scratches'}
                      {cond === 'Minor Wear' && 'Micro hairline scratches only'}
                      {cond === 'Deep Scratches' && 'Noticeable chassis abrasions'}
                      {cond === 'Cracked Glass' && 'Display or back plate fractured'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Value Readout & Kit Request */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 p-8 md:p-12 sticky top-32">
            <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
              Certified Assessment
            </span>
            <h3 className="text-white font-display text-xl tracking-[0.2em] uppercase mb-2">
              ESTIMATED CONCIERGE CREDIT
            </h3>
            <p className="text-white/40 font-body text-xs tracking-wider uppercase mb-8">
              Guaranteed for 14 calendar days upon generation.
            </p>

            {/* Price Box */}
            <div className="py-8 px-6 bg-black/60 border border-fonebooth-gold/40 text-center mb-8">
              <span className="text-white/50 font-body text-xs tracking-widest uppercase block mb-1">
                Immediate Direct Credit
              </span>
              <span className="text-fonebooth-gold font-display text-5xl md:text-6xl font-bold tracking-tight block mb-2">
                ${estimatedValue}
              </span>
              <span className="text-white/60 font-body text-[10px] tracking-widest uppercase">
                Toward any Fonebooth Flagship or Bespoke Atelier Model
              </span>
            </div>

            {kitRequested ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 border border-fonebooth-gold/40 bg-fonebooth-gold/5 text-center"
              >
                <div className="w-12 h-12 border border-fonebooth-gold rounded-full flex items-center justify-center mx-auto mb-3 text-fonebooth-gold">
                  <Check size={24} />
                </div>
                <h4 className="text-white font-display text-sm tracking-widest uppercase mb-1">
                  Armored Kit Dispatched
                </h4>
                <p className="text-white/60 font-body text-xs uppercase leading-relaxed mb-4">
                  An encrypted courier pack is en route to your address. Pre-printed shipping labels and padding are included.
                </p>
                <Link 
                  to="/shop" 
                  className="inline-block bg-white text-black font-body font-bold tracking-[0.2em] uppercase text-[10px] py-3 px-6 hover:bg-fonebooth-gold transition-colors"
                >
                  Shop Flagships With Credit
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleKitSubmit} className="space-y-4">
                <span className="text-white font-display text-xs tracking-widest uppercase block">
                  Request Armored Vault Mailer
                </span>
                <input 
                  type="text" 
                  required
                  placeholder="Full Legal Name"
                  value={clientAddress.name}
                  onChange={(e) => setClientAddress({ ...clientAddress, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-xs focus:outline-none focus:border-fonebooth-gold"
                />
                <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  value={clientAddress.email}
                  onChange={(e) => setClientAddress({ ...clientAddress, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-xs focus:outline-none focus:border-fonebooth-gold"
                />
                <input 
                  type="text" 
                  required
                  placeholder="Street Address / Suite"
                  value={clientAddress.address}
                  onChange={(e) => setClientAddress({ ...clientAddress, address: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-xs focus:outline-none focus:border-fonebooth-gold"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="City"
                    value={clientAddress.city}
                    onChange={(e) => setClientAddress({ ...clientAddress, city: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-xs focus:outline-none focus:border-fonebooth-gold"
                  />
                  <input 
                    type="text" 
                    required
                    placeholder="Postal Code"
                    value={clientAddress.postal}
                    onChange={(e) => setClientAddress({ ...clientAddress, postal: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-xs focus:outline-none focus:border-fonebooth-gold"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 hover:bg-fonebooth-gold transition-colors duration-500 cursor-pointer mt-4"
                >
                  Request Pre-Paid Mailer Kit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 3 Steps Protocol */}
        <section className="border-t border-white/10 pt-20">
          <div className="text-center mb-16">
            <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
              The Protocol
            </span>
            <h2 className="text-white font-display text-3xl md:text-5xl tracking-tighter mb-4">
              THREE STAGES TO COMPLETION
            </h2>
            <p className="text-dim-white font-body text-sm tracking-widest uppercase">
              Zero hassle, full insurance, certified confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Truck,
                title: "Armored Mailer Box",
                desc: "We dispatch an insulated, tamper-evident mailer kit with pre-paid priority postage directly to your location."
              },
              {
                step: "02",
                icon: ShieldCheck,
                title: "Certified Sanitization",
                desc: "Every device undergoes DoD 5220.22-M multipass cryptographic wiping with a signed certificate provided to the client."
              },
              {
                step: "03",
                icon: Award,
                title: "Instant Credit Release",
                desc: "Upon intake verification, your credit voucher is immediately activated toward your new Fonebooth order or refunded to card."
              }
            ].map((p) => (
              <div key={p.step} className="p-8 border border-white/10 bg-white/[0.02]">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-fonebooth-gold font-display text-2xl font-bold tracking-widest">
                    {p.step}
                  </span>
                  <p.icon size={22} className="text-white/40" />
                </div>
                <h4 className="text-white font-display text-base tracking-[0.15em] uppercase mb-3">
                  {p.title}
                </h4>
                <p className="text-dim-white font-body text-sm leading-relaxed uppercase">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
