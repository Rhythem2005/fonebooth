import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-fonebooth-black/80 backdrop-blur-md py-4 shadow-lg border-b border-fonebooth-gold/10' : 'bg-transparent py-8'}`}>
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
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-body text-[10px] uppercase tracking-[0.3em] text-white hover:text-fonebooth-gold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-fonebooth-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-6 border-l border-white/10 pl-12">
            <Search size={18} className="text-white hover:text-fonebooth-gold cursor-pointer transition-colors" strokeWidth={1.5} />
            <ShoppingBag size={18} className="text-white hover:text-fonebooth-gold cursor-pointer transition-colors" strokeWidth={1.5} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-6">
          <ShoppingBag size={20} className="text-white" strokeWidth={1.5} />
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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
            className="md:hidden bg-fonebooth-black border-t border-fonebooth-gold/10 overflow-hidden"
          >
            <div className="px-8 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="font-display text-4xl text-white hover:text-fonebooth-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
