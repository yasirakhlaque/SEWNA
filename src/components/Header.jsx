import { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

function Header({ setShowStudio, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? "bg-gray-900/95 backdrop-blur-lg shadow-sm shadow-gray-800" 
            : "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              SEWNA
            </div>
            <div className="w-1.5 h-1.5 bg-[#00b67f] rounded-full animate-pulse"></div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#how-it-works" className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-300 hover:text-[#00b67f]' : 'text-gray-700 hover:text-[#00b67f]'
            }`}>
              How it works
            </a>
            <a href="#designers" className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-300 hover:text-[#00b67f]' : 'text-gray-700 hover:text-[#00b67f]'
            }`}>
              Explore Designers
            </a>
            <a href="#for-designers" className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-300 hover:text-[#00b67f]' : 'text-gray-700 hover:text-[#00b67f]'
            }`}>
              For Designers
            </a>
            <a href="#pricing" className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-300 hover:text-[#00b67f]' : 'text-gray-700 hover:text-[#00b67f]'
            }`}>
              Pricing
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            
            <button className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}>
              Sign in
            </button>
            <button
              onClick={() => setShowStudio(true)}
              className="px-5 py-2.5 bg-[#00b67f] text-white text-sm font-medium rounded-full hover:bg-lime-600 transition-colors shadow-sm"
            >
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`lg:hidden border-t transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-white border-gray-100'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#how-it-works" className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>How it works</a>
            <a href="#designers" className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Explore Designers</a>
            <a href="#for-designers" className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>For Designers</a>
            <a href="#pricing" className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Pricing</a>
            <button 
              onClick={() => setShowStudio(true)}
              className="w-full px-5 py-2.5 bg-[#00b67f] text-white text-sm font-medium rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
