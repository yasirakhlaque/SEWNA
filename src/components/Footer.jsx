import { FiArrowRight, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

function Footer({ setShowStudio, darkMode }) {
  return (
    <footer className={`py-16 ${darkMode ? 'bg-black text-white' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">SEWNA</div>
              <div className="w-1.5 h-1.5 bg-[#00b67f] rounded-full"></div>
            </div>
            <p className={`leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Connecting visionaries with creators, one stitch at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Designers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className={`space-y-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Get the latest news and exclusive offers
            </p>
            <div className="flex text-xs md:text-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-l-full border focus:outline-none focus:border-lime-500 ${
                  darkMode 
                    ? 'bg-gray-950 border-gray-800 text-white' 
                    : 'bg-gray-800 border-gray-700 text-white'
                }`}
              />
              <button className="px-6 py-2 bg-[#00b67f] rounded-r-full hover:bg-lime-600 transition-colors">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          darkMode ? 'border-gray-950' : 'border-gray-800'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 SEWNA. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className={`transition-colors ${
              darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-white'
            }`}>
              <FiInstagram className="text-xl" />
            </a>
            <a href="#" className={`transition-colors ${
              darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-white'
            }`}>
              <FiTwitter className="text-xl" />
            </a>
            <a href="#" className={`transition-colors ${
              darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-white'
            }`}>
              <FiLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
