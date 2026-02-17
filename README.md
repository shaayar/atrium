# ATRIUM | Architectural Memory Spaces

A revolutionary digital platform that transforms your personal memories into immersive architectural experiences. Atrium reimagines how we preserve, explore, and share our life stories by organizing them not by dates, but by emotional resonance and atmospheric qualities.

## ✨ Concept

Your life deserves more than a grid. Atrium creates spatial environments where your memories become walkable galleries, generative structures that reflect the weight and significance of each moment. Upload your personal archive and watch as our spatial engine organizes your life into meaningful architectural spaces.

## 🚀 Features

### The Curator
- Upload and organize your personal archive
- AI-powered emotional and atmospheric analysis
- Automatic categorization by resonance rather than chronology

### The Blueprint
- Generative architectural structures based on your memories
- Walk-through gallery experiences
- Geometry that reflects the emotional weight of each moment

### The Visitation
- Immersive 3D exploration of your memory spaces
- Invite others into your personal museum
- Evolving spaces that grow as your story continues

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion for fluid interactions
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**: Inter & Playfair Display

## 🎨 Design System

### Color Palette
- **Background**: `#050505` - Deep space black
- **Surface**: `#121212` - Subtle elevation
- **Accent**: `#ffffff` - Pure white contrast

### Typography
- **Serif**: Playfair Display (headings, brand)
- **Sans**: Inter (body, UI elements)

### Custom Components
- **Hero Button**: Sophisticated animated borders with glow effects
- **Process Timeline**: Visual storytelling with animated progress
- **Manifesto Cards**: Icon-driven feature highlights
- **Glass Morphism**: Backdrop blur effects throughout

## 📁 Project Structure

```
atrium/
├── components/
│   ├── Hero.tsx          # Landing hero section
│   ├── Manifesto.tsx      # Feature highlights
│   ├── Process.tsx        # Process timeline
│   ├── Waitlist.tsx       # Email capture
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── Philosophy.tsx     # Brand philosophy
├── backups/               # Component backups
├── index.html            # HTML with custom styles
├── App.tsx               # Main app component
├── index.tsx             # Entry point
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atrium
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Features

### Animated Components
- **Hero Section**: Dramatic entrance with animated wordmark
- **Process Timeline**: Scroll-triggered animations with progress tracking
- **Interactive Cards**: Hover effects with smooth transitions
- **Custom Buttons**: Sophisticated border animations with glow effects

### Responsive Design
- Mobile-first approach
- Fluid typography scaling
- Adaptive layouts for all screen sizes

### Performance Optimizations
- Lazy loading with intersection observers
- Optimized animations with GPU acceleration
- Efficient state management

## 🔧 Customization

### Theme Customization
The design system is configured in `index.html` within the Tailwind config:

```javascript
theme: {
  extend: {
    colors: {
      background: "#050505",
      surface: "#121212", 
      accent: "#ffffff",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Playfair Display", "serif"]
    }
  }
}
```

### Custom CSS Classes
- `.hero-btn` - Premium button with animated borders
- `.hero-border-line` - Animated border elements
- `.wordmark-glow` - Text glow effect for branding

## 🌟 Highlights

### Micro-interactions
- Sophisticated hover states on all interactive elements
- Smooth scroll-triggered animations
- Progress indicators and loading states
- Glass morphism effects with backdrop blur

### Typography
- Extreme letter spacing for premium feel
- Mixed font weights for visual hierarchy
- Italic serif for brand elegance
- Monospace tracking for technical elements

### Visual Effects
- Custom SVG filters for button effects
- Gradient overlays and masks
- Animated borders with glow
- Subtle grain texture overlay

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with modern CSS support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and all rights are reserved.

## 🚀 Roadmap

- [ ] 3D space navigation with Three.js
- [ ] AI-powered memory analysis
- [ ] Multi-user collaborative spaces
- [ ] Mobile app development
- [ ] Advanced privacy controls
- [ ] Export functionality for memory galleries

---

**Atrium** - Where memories become architecture.