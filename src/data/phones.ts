export interface PhoneSpecs {
  processor: string;
  display: string;
  camera: string;
  battery: string;
  storage?: string;
  finish?: string;
}

export interface Phone {
  id: string;
  name: string;
  brand: string;
  category: 'Flagship' | 'Foldable' | 'Performance';
  price: number;
  color: string;
  tagline: string;
  description: string;
  image: string;
  specs: PhoneSpecs;
}

export const PHONES: Phone[] = [
  {
    id: 'titan-pro',
    name: 'Titan Pro',
    brand: 'Fonebooth',
    category: 'Flagship',
    price: 1299,
    color: 'Natural Titanium',
    tagline: 'Forged in aerospace-grade titanium.',
    description: 'Precision-engineered chassis with our custom bionic neural core. Designed for those who accept nothing less than absolute perfection in performance, display fidelity, and tactile craftsmanship.',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'A18 Ultra 3nm Chip',
      display: '6.9" Super Retina XDR ProMotion 120Hz',
      camera: '48MP Quad-Pixel Telephoto System',
      battery: '4800mAh All-Day Battery',
      storage: '256GB / 512GB / 1TB',
      finish: 'Grade 5 Titanium'
    }
  },
  {
    id: 'neo-fold',
    name: 'Neo Fold',
    brand: 'Fonebooth',
    category: 'Foldable',
    price: 1799,
    color: 'Obsidian Black',
    tagline: 'Unfold boundless horizons.',
    description: 'A revolutionary dual-screen fluid fold architecture that transforms from an ultra-sleek pocket phone into an expansive canvas of productivity and cinema-grade entertainment.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'Fold S1 Dual-Core Engine',
      display: '7.6" Dynamic AMOLED 2X Foldable, 6.2" Cover',
      camera: '50MP Studio Precision Camera System',
      battery: '4400mAh Dual-Cell Smart Battery',
      storage: '512GB / 1TB',
      finish: 'Armor Ceramic & Carbon Hinge'
    }
  },
  {
    id: 'aura-s',
    name: 'Aura S',
    brand: 'Fonebooth',
    category: 'Flagship',
    price: 999,
    color: 'Pearl Luster',
    tagline: 'Pure elegance meets raw capability.',
    description: 'Minimalist aesthetic encased in satin-finished frosted glass. Calibrated optics deliver true-to-life color grading while maintaining an ethereal featherlight feel in hand.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'Aura Neural Tensor G3',
      display: '6.4" QHD+ PureView OLED HDR10+',
      camera: '50MP Dual Portrait Sensor',
      battery: '4600mAh Turbo-Charge Cell',
      storage: '128GB / 256GB',
      finish: 'Frosted Crystal Glass'
    }
  },
  {
    id: 'zenith-max',
    name: 'Zenith Max',
    brand: 'Fonebooth',
    category: 'Performance',
    price: 1499,
    color: 'Carbon Matrix',
    tagline: 'Engineered beyond limits.',
    description: 'Constructed for computational photography and high-throughput mobile workflows. Liquid cooling vapor chamber paired with peak sustained clock speeds.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'Snapdragon 8 Elite Extreme',
      display: '6.8" 144Hz Pro-Motion LTPO 4.0',
      camera: '200MP Ultra-Resolution Master',
      battery: '5400mAh Silicon-Carbon Battery',
      storage: '512GB / 1TB',
      finish: 'Forged Carbon Fiber'
    }
  },
  {
    id: 'vortex-x',
    name: 'Vortex X',
    brand: 'Fonebooth',
    category: 'Performance',
    price: 799,
    color: 'Electric Blue',
    tagline: 'High velocity, instant response.',
    description: 'Ultra-responsive touch sampling rate with gaming-tier thermal dissipation. Designed for lightning-fast responsiveness and bold contemporary aesthetics.',
    image: 'https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'Vortex Turbo-X Gaming SoC',
      display: '6.67" 165Hz AMOLED Rapid',
      camera: '64MP High-Speed Sensor',
      battery: '5000mAh 120W HyperCharge',
      storage: '256GB',
      finish: 'Anodized Aluminum'
    }
  },
  {
    id: 'prime-z',
    name: 'Prime Z',
    brand: 'Fonebooth',
    category: 'Flagship',
    price: 699,
    color: 'Silver Mist',
    tagline: 'Essential luxury, redefined.',
    description: 'All the hallmarks of Fonebooth craftsmanship packaged into an accessible daily flagship. Timeless design with surgical steel accents.',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800',
    specs: {
      processor: 'A17 Fusion Core',
      display: '6.1" Super Retina OLED',
      camera: '48MP Dual Fusion Camera',
      battery: '4200mAh Intelligent Power Cell',
      storage: '128GB / 256GB',
      finish: 'Surgical Grade Stainless Steel'
    }
  }
];
