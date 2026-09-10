import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IPhoneCanvas from '../components/IPhoneCanvas';
import FoneboothHUD from '../components/FoneboothHUD';
import SpecsGrid from '../components/SpecsGrid';
import FeaturedModels from '../components/FeaturedModels';
import WhyFonebooth from '../components/WhyFonebooth';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    // Refresh ScrollTrigger to ensure correct calculations after page load
    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <main className="bg-black">
      {/* SCROLL SEQUENCE */}
      <section ref={containerRef} className="relative h-[380vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          <IPhoneCanvas
            scrollProgress={scrollProgress}
            totalFrames={240}
            imageFolderPath="/images/iphone-sequence/"
          />
          <FoneboothHUD scrollProgress={scrollProgress} />
        </div>
      </section>

      {/* BELOW FOLD */}
      <div className="relative z-20 bg-black">
        <SpecsGrid />
        <FeaturedModels />
        <WhyFonebooth />
      </div>
    </main>
  );
}
