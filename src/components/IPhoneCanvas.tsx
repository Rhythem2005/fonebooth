import React, { useEffect, useRef, useState } from 'react';

interface Props {
  scrollProgress: number;
  totalFrames: number;
  imageFolderPath: string;
}

export default function IPhoneCanvas({ scrollProgress, totalFrames, imageFolderPath }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const lastFrameRef = useRef(-1);
  const layoutCache = useRef({ dpr: 1, width: 0, height: 0 });

  // Preloading with chunking to avoid UI blocking
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    
    const loadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `${imageFolderPath}${index}.jpg`;
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          if (loadedCount === totalFrames) setIsLoaded(true);
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          if (loadedCount === totalFrames) setIsLoaded(true);
          resolve();
        };
        images[index - 1] = img;
      });
    };

    const loadAll = async () => {
      const batchSize = 10;
      for (let i = 1; i <= totalFrames; i += batchSize) {
        const batch = [];
        for (let j = i; j < i + batchSize && j <= totalFrames; j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
        // Small delay to allow main thread to breathe
        await new Promise(r => setTimeout(r, 0));
      }
    };

    loadAll();
    imagesRef.current = images;
  }, [totalFrames, imageFolderPath]);

  const draw = () => {
    if (!canvasRef.current || !isLoaded) return;
    
    const frameIndex = Math.min(
      Math.floor(scrollProgress * (totalFrames - 1)),
      totalFrames - 1
    );

    if (frameIndex === lastFrameRef.current) return;
    lastFrameRef.current = frameIndex;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const { width: viewportWidth, height: viewportHeight } = layoutCache.current;
    const img = imagesRef.current[frameIndex];

    if (img && img.complete && img.naturalWidth !== 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scale = Math.min(viewportWidth / img.naturalWidth, viewportHeight / img.naturalHeight);
      const x = (viewportWidth - img.naturalWidth * scale) / 2;
      const y = (viewportHeight - img.naturalHeight * scale) / 2;
      
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    }
  };

  const handleResize = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    layoutCache.current = { dpr, width, height };
    lastFrameRef.current = -1; // force redraw
    draw();
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);

  useEffect(() => {
    draw();
  }, [scrollProgress, isLoaded]);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black">
          <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden mb-4">
            <div 
              className="absolute inset-0 bg-fonebooth-gold transition-transform duration-300 ease-out origin-left"
              style={{ transform: `scaleX(${loadProgress / 100})` }}
            />
          </div>
          <p className="text-fonebooth-gold font-display text-[10px] tracking-[0.4em] uppercase opacity-50">
            Initializing Showroom {loadProgress}%
          </p>
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
