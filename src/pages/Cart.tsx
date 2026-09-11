import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Truck, 
  Gift, 
  ArrowRight, 
  Check, 
  Lock, 
  ShoppingBag,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, totalCount } = useCart();
  const [monogram, setMonogram] = useState('');
  const [giftWrap, setGiftWrap] = useState(true);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    fullName: '',
    email: '',
    deliveryAddress: '',
    preferredDeliveryDate: ''
  });

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 2500);
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
                Acquisition Dossier
              </span>
              <h1 className="text-white font-display text-5xl md:text-7xl tracking-tighter leading-none">
                CONCIERGE <span className="text-fonebooth-gold">BAG.</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 text-xs font-body tracking-[0.2em] uppercase text-white/50">
              <span>{totalCount} {totalCount === 1 ? 'Curated Model' : 'Curated Models'}</span>
              <span>•</span>
              <Link to="/shop" className="text-fonebooth-gold hover:text-white transition-colors flex items-center gap-1">
                <span>Continue Browsing</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </motion.header>

        {items.length === 0 ? (
          /* Empty State */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 border border-white/10 bg-white/[0.02] p-12 max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white/40">
              <ShoppingBag size={28} strokeWidth={1.5} />
            </div>
            <h2 className="text-white font-display text-2xl md:text-3xl tracking-widest uppercase mb-4">
              Your Concierge Bag Is Empty
            </h2>
            <p className="text-dim-white font-body text-sm tracking-wide uppercase max-w-md mx-auto mb-10 leading-relaxed">
              Explore our vault of aerospace titanium flagships, foldable engineering, and performance devices.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 px-10 hover:bg-fonebooth-gold transition-colors duration-500"
            >
              Enter The Collection
            </Link>
          </motion.div>
        ) : (
          /* Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-8">
              {items.map((item, index) => (
                <motion.div 
                  key={item.phone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/[0.03] border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 relative group hover:border-white/25 transition-all"
                >
                  {/* Thumbnail */}
                  <Link to={`/product/${item.phone.id}`} className="shrink-0 w-28 h-28 bg-white/[0.02] border border-white/10 overflow-hidden block">
                    <img 
                      src={item.phone.image} 
                      alt={item.phone.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-display text-fonebooth-gold tracking-[0.3em] uppercase">
                        {item.phone.brand}
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-[9px] font-body text-white/50 tracking-widest uppercase">
                        {item.phone.category}
                      </span>
                    </div>

                    <Link to={`/product/${item.phone.id}`}>
                      <h3 className="text-white font-display text-xl md:text-2xl tracking-[0.1em] uppercase hover:text-fonebooth-gold transition-colors">
                        {item.phone.name}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap gap-4 mt-2 text-xs font-body tracking-wider text-white/60 uppercase">
                      <span>Finish: <strong className="text-white font-medium">{item.selectedColor || item.phone.color}</strong></span>
                      <span>•</span>
                      <span>Tier: <strong className="text-white font-medium">{item.selectedStorage || '512GB'}</strong></span>
                    </div>

                    <p className="text-white font-body text-lg tracking-widest mt-3 font-semibold">
                      ${item.phone.price}
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex sm:flex-col items-center justify-between sm:justify-center w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10">
                    <div className="flex items-center border border-white/20 bg-black">
                      <button 
                        onClick={() => updateQuantity(item.phone.id, item.quantity - 1)}
                        className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 font-body text-xs font-semibold text-white min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.phone.id, item.quantity + 1)}
                        className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.phone.id)}
                      className="text-white/40 hover:text-red-400 transition-colors flex items-center gap-1 font-body text-[10px] tracking-widest uppercase cursor-pointer"
                    >
                      <Trash2 size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Bespoke Client Add-ons */}
              <div className="bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={18} className="text-fonebooth-gold" />
                  <h4 className="text-white font-display text-sm tracking-[0.2em] uppercase">
                    Bespoke Atelier Touches (Complimentary)
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border border-white/10 bg-black/40">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={giftWrap}
                        onChange={(e) => setGiftWrap(e.target.checked)}
                        className="accent-fonebooth-gold w-4 h-4 cursor-pointer" 
                      />
                      <span className="text-white font-body text-xs tracking-wider uppercase">
                        Handcrafted Presentation Case & Wax Seal
                      </span>
                    </label>
                    <p className="text-white/40 font-body text-[10px] tracking-widest uppercase mt-2 ml-7">
                      Archival matte black velvet box with serialized certificate
                    </p>
                  </div>

                  <div className="p-4 border border-white/10 bg-black/40">
                    <label className="block text-white/50 font-body text-[10px] tracking-widest uppercase mb-2">
                      Laser Engraved Initials / Monogram
                    </label>
                    <input 
                      type="text" 
                      maxLength={6}
                      value={monogram}
                      onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                      placeholder="e.g. RS-07"
                      className="w-full bg-transparent border-b border-white/20 text-fonebooth-gold font-display text-xs py-1 tracking-widest uppercase focus:outline-none focus:border-fonebooth-gold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 bg-white/[0.03] border border-white/10 p-8 md:p-10 sticky top-32">
              <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">
                Financial Breakdown
              </span>
              <h3 className="text-white font-display text-xl tracking-[0.2em] uppercase mb-8 pb-4 border-b border-white/10">
                Summary
              </h3>

              <div className="space-y-4 font-body text-sm mb-8">
                <div className="flex justify-between text-white/70">
                  <span className="uppercase tracking-widest text-xs">Curated Subtotal</span>
                  <span className="font-semibold text-white tracking-wider">${subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span className="uppercase tracking-widest text-xs flex items-center gap-1.5">
                    <Truck size={14} className="text-fonebooth-gold" /> Armored Courier
                  </span>
                  <span className="text-fonebooth-gold font-display text-xs tracking-widest uppercase">Complimentary</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span className="uppercase tracking-widest text-xs flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-fonebooth-gold" /> Transit Vault Insurance
                  </span>
                  <span className="text-fonebooth-gold font-display text-xs tracking-widest uppercase">Included</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span className="uppercase tracking-widest text-xs flex items-center gap-1.5">
                    <Gift size={14} className="text-fonebooth-gold" /> Presentation Box
                  </span>
                  <span className="text-fonebooth-gold font-display text-xs tracking-widest uppercase">Included</span>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-white font-display text-sm tracking-[0.2em] uppercase">Total Acquisition</span>
                  <span className="text-white font-display text-2xl md:text-3xl tracking-tight text-fonebooth-gold font-bold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 hover:bg-fonebooth-gold transition-colors duration-500 flex items-center justify-center gap-2 cursor-pointer mb-6"
              >
                <Lock size={14} />
                <span>Concierge Checkout</span>
              </button>

              <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-body uppercase tracking-widest text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fonebooth-gold rounded-full"></span>
                  <span>Direct delivery within 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fonebooth-gold rounded-full"></span>
                  <span>2-Year Global Atelier Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fonebooth-gold rounded-full"></span>
                  <span>Cryptographic Certificate of Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        <AnimatePresence>
          {checkoutModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-fonebooth-black border border-fonebooth-gold/30 p-8 md:p-12 max-w-xl w-full relative shadow-2xl"
              >
                {checkoutSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 border-2 border-fonebooth-gold rounded-full flex items-center justify-center mx-auto mb-6 text-fonebooth-gold">
                      <Check size={32} />
                    </div>
                    <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-2 block">
                      Order Encrypted & Dispatched
                    </span>
                    <h3 className="text-white font-display text-2xl md:text-3xl tracking-tight uppercase mb-4">
                      Acquisition Confirmed
                    </h3>
                    <p className="text-dim-white font-body text-sm tracking-wide uppercase leading-relaxed mb-8">
                      Your VIP dispatch coordinator is reviewing the manifest. You will receive courier telemetry details shortly at {clientDetails.email || 'your email'}.
                    </p>
                    <button 
                      onClick={() => {
                        setCheckoutModalOpen(false);
                        setCheckoutSubmitted(false);
                      }}
                      className="bg-white text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-4 px-8 hover:bg-fonebooth-gold transition-colors cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-start mb-8 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase block mb-1">
                          Secure Channel
                        </span>
                        <h3 className="text-white font-display text-2xl tracking-[0.1em] uppercase">
                          Concierge Dispatch
                        </h3>
                      </div>
                      <button 
                        onClick={() => setCheckoutModalOpen(false)}
                        className="text-white/40 hover:text-white transition-colors cursor-pointer text-xs uppercase font-body tracking-widest"
                      >
                        ✕ Close
                      </button>
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                      <div>
                        <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-2">
                          Client Full Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={clientDetails.fullName}
                          onChange={(e) => setClientDetails({ ...clientDetails, fullName: e.target.value })}
                          placeholder="e.g. Victor Vance"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-2">
                          Encrypted Email For Tracking Telemetry
                        </label>
                        <input 
                          type="email" 
                          required
                          value={clientDetails.email}
                          onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                          placeholder="client@sanctuary.com"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-2">
                          Private Delivery Address / Suite
                        </label>
                        <input 
                          type="text" 
                          required
                          value={clientDetails.deliveryAddress}
                          onChange={(e) => setClientDetails({ ...clientDetails, deliveryAddress: e.target.value })}
                          placeholder="Penthouse 4B, 740 Park Ave, New York"
                          className="w-full bg-transparent border-b border-white/20 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-white/40 font-body text-[10px] tracking-widest uppercase mb-2">
                          Preferred White Glove Delivery Window
                        </label>
                        <input 
                          type="date" 
                          required
                          value={clientDetails.preferredDeliveryDate}
                          onChange={(e) => setClientDetails({ ...clientDetails, preferredDeliveryDate: e.target.value })}
                          className="w-full bg-black border-b border-white/20 py-2 text-white font-body text-sm focus:outline-none focus:border-fonebooth-gold cursor-pointer"
                        />
                      </div>

                      <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm font-body">
                        <span className="text-white/60 uppercase tracking-widest text-xs">Total Authorized</span>
                        <span className="text-fonebooth-gold font-display text-lg tracking-wider font-bold">
                          ${subtotal.toLocaleString()}
                        </span>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-fonebooth-gold text-black font-body font-bold tracking-[0.3em] uppercase text-xs py-5 hover:bg-bright-gold transition-colors duration-300 cursor-pointer mt-4"
                      >
                        Confirm Armored Courier Dispatch
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
