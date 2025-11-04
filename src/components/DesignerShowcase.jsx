import { FiHeart, FiBookmark } from "react-icons/fi";
import { BsPalette } from "react-icons/bs";

function DesignerShowcase({ darkMode }) {
  const portfolioItems = [
    { category: "Bridal", image: "from-pink-400 to-rose-500" },
    { category: "Streetwear", image: "from-blue-400 to-indigo-500" },
    { category: "Formal", image: "from-purple-400 to-violet-500" },
    { category: "Ethnic", image: "from-amber-400 to-orange-500" },
    { category: "Fusion", image: "from-green-400 to-emerald-500" },
    { category: "Evening", image: "from-red-400 to-pink-500" },
  ];

  return (
    <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Showcase Gallery
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore stunning creations from our designer community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square rounded-2xl bg-gradient-to-br ${item.image} overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <BsPalette className="text-6xl text-white/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-2">{item.category}</p>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <span className="flex items-center space-x-1">
                      <FiHeart />
                      <span>234</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FiBookmark />
                      <span>89</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignerShowcase;
