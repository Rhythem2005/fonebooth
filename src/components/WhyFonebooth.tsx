import React from 'react';
import { ShieldCheck, HeadphonesIcon, Truck } from 'lucide-react';

export default function WhyFonebooth() {
  const values = [
    {
      icon: <ShieldCheck size={40} className="text-fonebooth-gold mb-6" strokeWidth={1} />,
      title: "Premium Selection",
      desc: "Curated top-tier devices tested and verified by our leading hardware experts."
    },
    {
      icon: <HeadphonesIcon size={40} className="text-fonebooth-gold mb-6" strokeWidth={1} />,
      title: "Expert Advice",
      desc: "In-store and online 24/7 support from specialists who know phones inside out."
    },
    {
      icon: <Truck size={40} className="text-fonebooth-gold mb-6" strokeWidth={1} />,
      title: "Fast Delivery",
      desc: "Same-day white-glove delivery in select major cities. Securely packaged."
    }
  ];

  return (
    <section className="bg-deep-space py-32 px-8 border-t border-fonebooth-gold/15">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-xl text-fonebooth-gold tracking-widest uppercase mb-20">
          Why Fonebooth
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {v.icon}
              <h3 className="font-display text-2xl text-white tracking-widest uppercase mb-4">{v.title}</h3>
              <p className="font-body text-dim-white leading-relaxed max-w-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
