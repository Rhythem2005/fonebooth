import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  scrollProgress: number;
}

export default function FoneboothHUD({ scrollProgress }: Props) {
  const phase1Visible = scrollProgress >= 0 && scrollProgress < 0.33;
  const phase2Visible = scrollProgress >= 0.33 && scrollProgress < 0.66;
  const phase3Visible = scrollProgress >= 0.66 && scrollProgress <= 1;

  const anim = {
    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -30, filter: 'blur(10px)' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 p-8 md:p-16 overflow-hidden">
      <AnimatePresence mode="wait">
        {phase1Visible && (
          <motion.div 
            key="phase1" 
            className="absolute inset-8 md:inset-16 flex flex-col justify-between" 
            {...anim}
          >
            <div>
              <h2 className="text-fonebooth-gold font-display text-sm tracking-[0.5em] uppercase mb-4">The Showroom</h2>
              <h1 className="text-white font-display text-4xl md:text-6xl tracking-tighter leading-none mb-6">
                DEFINING<br/>PREMIUM
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-auto">
               <div className="max-w-md pointer-events-auto">
                  <p className="text-dim-white font-body text-sm md:text-base tracking-[0.1em] uppercase leading-relaxed mb-8">
                    Step into a curated collection of the world's most advanced smartphones. 
                    Beyond a store—a destination for technology enthusiasts.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      to="/shop" 
                      className="bg-white text-black font-body font-bold tracking-[0.2em] uppercase text-[10px] px-8 py-3 hover:bg-fonebooth-gold transition-colors duration-500 pointer-events-auto"
                    >
                      Browse Inventory
                    </Link>
                    <Link 
                      to="/about" 
                      className="border border-white/20 text-white font-body tracking-[0.2em] uppercase text-[10px] px-8 py-3 hover:bg-white hover:text-black transition-all duration-500 pointer-events-auto"
                    >
                      Our Story
                    </Link>
                  </div>
               </div>
               
               <div className="hidden md:block text-right">
                  <p className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase mb-2">Curated Selection</p>
                  <p className="text-white/40 font-body text-[10px] tracking-[0.2em] uppercase">Est. 2026 — Global Delivery</p>
               </div>
            </div>
          </motion.div>
        )}

        {phase2Visible && (
          <motion.div 
            key="phase2" 
            className="absolute inset-8 md:inset-16 flex flex-col justify-center" 
            {...anim}
          >
            <div className="max-w-2xl">
              <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-6">Masterpiece Edition</h3>
              <h2 className="text-white font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8">
                SCULPTED BY<br/>
                TITANIUM.
              </h2>
              <p className="text-dim-white font-body text-base md:text-lg tracking-[0.05em] leading-relaxed max-w-lg mb-10">
                Witness the intersection of aerospace-grade materials and cutting-edge silicon. 
                Our flagship selection is hand-picked for the discerning user.
              </p>
              <Link 
                to="/product/titan-pro" 
                className="inline-block border-b border-fonebooth-gold text-fonebooth-gold font-body tracking-[0.3em] uppercase text-xs pb-2 hover:text-white hover:border-white transition-all duration-300 pointer-events-auto"
              >
                View Technical Specs
              </Link>
            </div>
          </motion.div>
        )}

        {phase3Visible && (
          <motion.div 
            key="phase3" 
            className="absolute inset-8 md:inset-16 flex flex-col justify-center items-end" 
            {...anim}
          >
            <div className="w-full max-w-md flex flex-col items-end gap-10">
               <div className="text-right">
                 <h3 className="text-fonebooth-gold font-display text-[10px] tracking-[0.5em] uppercase mb-4">Concierge Services</h3>
                 <h2 className="text-white font-display text-4xl md:text-5xl leading-tight tracking-tighter">
                   PERSONALIZED<br/>RETAIL
                 </h2>
               </div>
               
               <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 flex flex-col gap-6">
                  {[
                    { title: "Expert Consultations", desc: "One-on-one sessions with tech specialists." },
                    { title: "Worldwide Logistics", desc: "Insured door-to-door delivery globally." },
                    { title: "Lifetime Support", desc: "Premium protection for your investments." },
                    { title: "Trade-In Program", desc: "The highest value for your legacy devices." }
                  ].map((item, i) => (
                    <div key={i} className="group cursor-pointer pointer-events-auto">
                      <h4 className="text-white font-display text-xs tracking-[0.2em] uppercase mb-1 group-hover:text-fonebooth-gold transition-colors">{item.title}</h4>
                      <p className="text-white/40 font-body text-[10px] tracking-wider uppercase leading-none">{item.desc}</p>
                      {i !== 3 && <div className="h-px w-full bg-white/5 mt-6"></div>}
                    </div>
                  ))}
               </div>

               <Link 
                to="/shop" 
                className="bg-fonebooth-gold text-black font-body font-bold tracking-[0.2em] uppercase text-[10px] px-10 py-4 hover:bg-bright-gold transition-colors pointer-events-auto"
               >
                 Enter The Collection
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
