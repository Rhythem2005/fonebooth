import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Compare', path: '/compare' },
    { name: 'Trade-In', path: '/trade-in' },
    { name: 'Concierge', path: '/support' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-fonebooth-black/85 backdrop-blur-md py-4 shadow-lg border-b border-fonebooth-gold/15' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-fonebooth-gold rounded-full flex items-center justify-center group-hover:bg-fonebooth-gold transition-colors">
            <span className="text-fonebooth-gold group-hover:text-fonebooth-black font-display font-bold text-lg">f</span>
          </div>
          <span className="font-display text-2xl tracking-[0.2em] uppercase text-white">
            Fone<span className="text-fonebooth-gold">booth</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-body text-[11px] uppercase tracking-[0.25em] transition-all relative group ${
                  isActive ? 'text-fonebooth-gold' : 'text-white/80 hover:text-fonebooth-gold'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-fonebooth-gold transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          
          <div className="flex items-center gap-6 ml-4 border-l border-white/10 pl-8">
            <Link 
              to="/cart" 
              className="relative text-white hover:text-fonebooth-gold transition-colors p-1"
              aria-label="View Concierge Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-fonebooth-gold text-black font-display text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-5">
          <Link 
            to="/cart" 
            className="relative text-white hover:text-fonebooth-gold transition-colors p-1"
            aria-label="View Concierge Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-fonebooth-gold text-black font-display text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-fonebooth-gold transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-fonebooth-black border-t border-fonebooth-gold/10 overflow-hidden"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`font-display text-2xl uppercase tracking-wider transition-colors ${
                    location.pathname === link.path ? 'text-fonebooth-gold' : 'text-white hover:text-fonebooth-gold'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <Link
                  to="/cart"
                  className="font-body text-xs uppercase tracking-[0.2em] text-fonebooth-gold flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag size={16} />
                  <span>View Concierge Bag ({totalCount})</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
