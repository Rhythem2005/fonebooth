import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-fonebooth-black pt-20 pb-10 px-8 border-t border-fonebooth-gold/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 md:gap-0">
          <Link to="/" className="text-white font-display text-4xl tracking-[0.4em] uppercase hover:text-fonebooth-gold transition-colors">
            FONEBOOTH
          </Link>
          
          <div className="flex flex-wrap gap-8 font-body text-dim-white uppercase tracking-[0.2em] text-xs">
            <Link to="/shop" className="hover:text-fonebooth-gold transition-colors">Shop</Link>
            <Link to="/contact" className="hover:text-fonebooth-gold transition-colors">Locations</Link>
            <Link to="/about" className="hover:text-fonebooth-gold transition-colors">Our Story</Link>
            <Link to="/support" className="hover:text-fonebooth-gold transition-colors">Concierge</Link>
          </div>
          
          <div className="flex gap-6 font-display text-xs">
            <a href="#" className="text-dim-white hover:text-fonebooth-gold transition-colors">IG</a>
            <a href="#" className="text-dim-white hover:text-fonebooth-gold transition-colors">X</a>
            <a href="#" className="text-dim-white hover:text-fonebooth-gold transition-colors">YT</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 font-body text-xs text-dim-white uppercase tracking-widest">
          <p>© 2026 FONEBOOTH RETAIL LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Return Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
