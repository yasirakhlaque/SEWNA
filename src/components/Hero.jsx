import { FiArrowRight, FiStar } from "react-icons/fi";
import { IoSparklesSharp } from "react-icons/io5";
import HeroVisual from "./HeroVisual";

function Hero({ setShowStudio, darkMode }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900' 
          : 'bg-gradient-to-b from-lime-50/30 via-white to-white'
      }`}></div>
      <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse ${
        darkMode ? 'bg-lime-900' : 'bg-lime-600'
      }`}></div>
      <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
        darkMode ? 'bg-purple-900' : 'bg-purple-500'
      }`}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className={`inline-flex items-center space-x-2 px-4 py-2 border rounded-full shadow-sm mb-6 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <IoSparklesSharp className="text-[#00b67f]" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Trusted by 10,000+ fashion lovers
              </span>
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Style,<br />
              Your Story —<br />
              <span className="text-[#00b67f]">Designed Together</span>
            </h1>

            <p className={`text-xl leading-relaxed mb-8 max-w-xl ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Connect with independent designers and co-create outfits that define you. From concept to creation, bring your fashion vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setShowStudio(true)}
                className="group px-8 py-4 bg-[#00b67f] text-white font-semibold rounded-full shadow-lg hover:bg-lime-600 transition-all flex items-center justify-center space-x-2"
              >
                <span>I need a Designer</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all">
                I am a Designer
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b67f] to-emerald-600 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  4.9/5 from 2,500+ reviews
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
