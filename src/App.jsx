import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import HowItWorks from "./components/HowItWorks";
import FeaturedDesigners from "./components/FeaturedDesigners";
import DesignerShowcase from "./components/DesignerShowcase";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CustomRequestStudio from "./components/CustomRequestStudio";
import "./App.css";

function App() {
  const [showStudio, setShowStudio] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div 
      className={`min-h-screen antialiased transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header 
        setShowStudio={setShowStudio} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <Hero 
        setShowStudio={setShowStudio} 
        darkMode={darkMode} 
      />
      
      <TrustBadges darkMode={darkMode} />
      
      <HowItWorks darkMode={darkMode} />
      
      <FeaturedDesigners darkMode={darkMode} />
      
      <DesignerShowcase darkMode={darkMode} />
      
      <Testimonials darkMode={darkMode} />
      
      <CTASection 
        setShowStudio={setShowStudio} 
        darkMode={darkMode} 
      />
      
      <Footer 
        setShowStudio={setShowStudio} 
        darkMode={darkMode} 
      />
      
      {showStudio && (
        <CustomRequestStudio 
          onClose={() => setShowStudio(false)} 
          darkMode={darkMode} 
        />
      )}
    </div>
  );
}

export default App;
