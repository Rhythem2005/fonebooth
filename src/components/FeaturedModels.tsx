import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedModels() {
  const models = [
    { id: "titan-pro", name: "Titan Pro", price: "From $1299", img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800" },
    { id: "neo-fold", name: "Neo Fold", price: "From $1799", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800" },
    { id: "aura-s", name: "Aura S", price: "From $999", img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800" },
    { id: "zenith-max", name: "Zenith Max", price: "From $1499", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="bg-fonebooth-black py-32 px-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-widest uppercase pb-4 border-b border-fonebooth-gold/30 inline-block font-display">
            The Collection
          </h2>
          <Link to="/shop" className="hidden md:block font-body text-fonebooth-gold uppercase tracking-widest text-[10px] hover:text-bright-gold transition-colors">
            View All Models →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {models.map((model, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.02] border border-white/5 p-8 hover:border-fonebooth-gold/50 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <div className="h-64 w-full flex items-center justify-center mb-8 relative">
                 <img src={model.img} alt={model.name} className="h-full w-full object-cover relative z-0 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              
              <h3 className="font-display text-base text-white tracking-widest uppercase mb-2">
                {model.name}
              </h3>
              <p className="font-body text-white/40 uppercase tracking-widest text-[10px] mb-8">
                {model.price}
              </p>
              
              <Link to={`/product/${model.id}`} className="mt-auto w-full border border-white/10 text-white font-body tracking-[0.3em] uppercase text-[10px] py-4 hover:bg-white hover:text-black transition-all duration-500 text-center">
                Explore Edition
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

