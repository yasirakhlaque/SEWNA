# SEWNA - Fashion Designer Marketplace

A modern, production-ready landing page for SEWNA, connecting fashion enthusiasts with independent designers.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.jsx       # Navigation header with theme toggle
│   ├── Hero.jsx         # Hero section with CTAs
│   ├── HeroVisual.jsx   # Animated visual gallery
│   ├── TrustBadges.jsx  # Statistics and trust indicators
│   ├── HowItWorks.jsx   # Process explanation
│   ├── FeaturedDesigners.jsx  # Designer showcase cards
│   ├── DesignerShowcase.jsx   # Portfolio gallery
│   ├── Testimonials.jsx       # Customer reviews
│   ├── CTASection.jsx         # Call-to-action section
│   ├── Footer.jsx            # Footer with links
│   ├── CustomRequestStudio.jsx # Multi-step request modal
│   └── index.js              # Barrel exports
├── App.jsx              # Main application component
├── App.css              # Global styles and Tailwind config
├── main.jsx             # Application entry point
└── index.css            # Base CSS imports
```

## 🚀 Features

- **Dark Mode**: Fully implemented dark theme with localStorage persistence
- **Responsive Design**: Mobile-first design that works on all devices
- **Component Architecture**: Clean, modular component structure
- **Zero Animation Libraries**: No Framer Motion - uses CSS transitions only
- **Icon Library**: React Icons (Fi, Bs, Ai families)
- **Modern Stack**: React 18 + Vite 7 + Tailwind CSS v4

## 🎨 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS v4
- **Icons**: react-icons 5.4.0
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## 🏭 Build for Production

```bash
npm run build
```

## 🎯 Component Props

### App Component
- Manages global state (darkMode, showStudio)
- Handles theme persistence via localStorage

### Header
- `setShowStudio`: Function to toggle modal
- `darkMode`: Boolean for theme
- `setDarkMode`: Function to toggle theme

### Hero, FeaturedDesigners, etc.
- `darkMode`: Boolean for theme styling
- `setShowStudio`: Function to open request modal (where applicable)

### CustomRequestStudio
- `onClose`: Function to close modal
- `darkMode`: Boolean for theme

## 🎨 Color Scheme

- **Primary**: `#00b67f` (Teal/Green)
- **Accent**: `#84cc16` (Lime)
- **Light Mode**: White background, Gray-900 text
- **Dark Mode**: Gray-900 background, Gray-100 text

## 📝 Code Standards

- Clean, readable component structure
- Consistent prop naming
- Comments for clarity
- Production-ready code quality

## 🔄 Theme System

Theme preference is saved to `localStorage` with key `'theme'`:
- Values: `'light'` or `'dark'`
- Automatically loads on app mount
- Persists across sessions

## 🚀 Future Enhancements

- Custom CSS animations (if needed)
- API integration for designer data
- User authentication
- Real image uploads
- Designer matching algorithm

---

**Made with ❤️ for SEWNA**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
