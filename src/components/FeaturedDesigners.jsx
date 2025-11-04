import { FiArrowRight, FiStar, FiHeart } from "react-icons/fi";
import { BsPalette } from "react-icons/bs";

function FeaturedDesigners({ darkMode }) {
  const designers = [
    { name: "Aria Chen", specialty: "Bridal & Couture", rating: 4.9, projects: 127, price: "$200-500", avatar: "from-pink-400 to-rose-500" },
    { name: "Marcus Rivera", specialty: "Streetwear", rating: 4.8, projects: 215, price: "$100-300", avatar: "from-blue-400 to-indigo-500" },
    { name: "Zara Williams", specialty: "Formal & Evening", rating: 5.0, projects: 89, price: "$250-600", avatar: "from-purple-400 to-violet-500" },
    { name: "Kai Nakamura", specialty: "Fusion & Modern", rating: 4.9, projects: 156, price: "$150-400", avatar: "from-amber-400 to-orange-500" },
  ];

  return (
    <section id="designers" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Designers
          </h2>
          <p className={`text-xl max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Handpicked talented designers ready to bring your vision to life
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Bridal", "Streetwear", "Formal", "Ethnic", "Fusion"].map((category) => (
              <button
                key={category}
                className={`px-5 py-2 border rounded-full text-sm font-medium transition-all ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-300 hover:border-lime-500 hover:text-lime-400' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-lime-500 hover:text-lime-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designers.map((designer, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-sm border transition-all group hover:-translate-y-2 duration-300 ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700 hover:shadow-xl hover:shadow-lime-500/10' 
                  : 'bg-white border-gray-100 hover:shadow-xl'
              }`}
            >
              <div className={`h-48 bg-gradient-to-br ${designer.avatar} flex items-center justify-center relative overflow-hidden`}>
                <BsPalette className="text-6xl text-white/30" />
                <div className="absolute top-4 right-4">
                  <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    darkMode 
                      ? 'bg-gray-800/90 text-gray-300 hover:text-lime-400' 
                      : 'bg-white/90 text-gray-700 hover:text-lime-500'
                  }`}>
                    <FiHeart />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {designer.name}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {designer.specialty}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <FiStar className="text-yellow-400 fill-current" />
                    <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {designer.rating}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      ({designer.projects})
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#00b67f]">{designer.price}</div>
                </div>

                <button className={`w-full py-3 font-medium rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-lime-600 text-white hover:bg-lime-500' 
                    : 'bg-gray-900 text-white group-hover:bg-lime-500'
                }`}>
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`px-8 py-4 border-2 font-semibold rounded-full transition-all inline-flex items-center space-x-2 ${
            darkMode 
              ? 'bg-gray-800 border-lime-500 text-lime-400 hover:bg-gray-700' 
              : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50'
          }`}>
            <span>View All Designers</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDesigners;
