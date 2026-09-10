# 📱 Fonebooth

> **Luxury & Flagship Smartphone Showcase and Concierge Retail Experience.**  
> Crafted with precision, ultra-fluid animations, and cinematic interactive 3D scroll sequences.

---

## ✨ Features

- **Cinematic Scroll Sequence**: Dynamic frame-by-frame canvas rendering synced to scroll progress using **GSAP ScrollTrigger**.
- **Futuristic HUD Overlay**: Real-time telemetry, technical readouts, and interactive device specifications.
- **Curated Device Collection**: Filterable catalog of flagship, foldable, and performance devices with in-depth technical breakdowns.
- **Concierge Booking & Showrooms**: Integrated VIP inquiries, global showroom locator (New York, London, Tokyo), and seamless concierge request flows.
- **Luxury Aesthetic**: Dark mode obsidian architecture, gold accent typography, and micro-interactions powered by **Framer Motion**.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism System
- **Animation & Motion**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rhythem2005/fonebooth.git
   cd fonebooth
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
fonebooth/
├── public/                 # Static assets & sequence frames
├── src/
│   ├── assets/             # Icons, logos, and imagery
│   ├── components/         # Reusable UI components
│   │   ├── FoneboothHUD.tsx
│   │   ├── Footer.tsx
│   │   ├── IPhoneCanvas.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── SpecsGrid.tsx
│   │   └── WhyFonebooth.tsx
│   ├── data/               # Device specifications catalog
│   │   └── phones.ts
│   ├── pages/              # Application views & routing
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── ProductDetail.tsx
│   │   └── Shop.tsx
│   ├── App.tsx             # Route declarations & layout wrapper
│   ├── index.css           # Global typography & Tailwind imports
│   └── main.jsx            # Entry point
├── index.html              # HTML shell & SEO metadata
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite build configuration
```

---

## 👤 Author

- **Rhythem Sabharwal** — [@Rhythem2005](https://github.com/Rhythem2005)

---

## 📄 License

This project is licensed under the MIT License.
