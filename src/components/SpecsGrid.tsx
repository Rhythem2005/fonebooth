import React from 'react';
import { Cpu, Camera, MonitorSmartphone, BatteryCharging, Zap, Wifi } from 'lucide-react';

export default function SpecsGrid() {
  const specs = [
    { icon: <Cpu strokeWidth={1} size={32} color="#D4AF37" />, title: "Processors", value: "Flagship Chips" },
    { icon: <Camera strokeWidth={1} size={32} color="#D4AF37" />, title: "Cameras", value: "Pro-Grade Arrays" },
    { icon: <MonitorSmartphone strokeWidth={1} size={32} color="#D4AF37" />, title: "Displays", value: "Stunning OLEDs" },
    { icon: <BatteryCharging strokeWidth={1} size={32} color="#D4AF37" />, title: "Battery", value: "All-Day Power" },
    { icon: <Zap strokeWidth={1} size={32} color="#D4AF37" />, title: "Materials", value: "Premium Builds" },
    { icon: <Wifi strokeWidth={1} size={32} color="#D4AF37" />, title: "Connectivity", value: "5G & Wi-Fi 7" },
  ];

  return (
    <section className="bg-fonebooth-black py-32 px-8 border-t border-fonebooth-gold/15">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-display text-3xl md:text-5xl text-white tracking-widest uppercase mb-20 pb-4 border-b border-fonebooth-gold/30 inline-block">
          Technical Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col items-start p-8 border border-white/5 bg-carbon/20 hover:bg-carbon/50 transition-colors">
              <div className="mb-6">{spec.icon}</div>
              <h3 className="font-display text-xs text-fonebooth-gold uppercase tracking-widest mb-2">
                {spec.title}
              </h3>
              <p className="font-body text-3xl md:text-4xl text-white uppercase tracking-wider">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
