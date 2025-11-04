import { BsPalette } from "react-icons/bs";

function HeroVisual() {
  const images = [
    { id: 1, style: "Bridal", color: "from-pink-400 to-rose-500", pos: "top-0 left-0", size: "w-48 h-64" },
    { id: 2, style: "Streetwear", color: "from-blue-400 to-indigo-500", pos: "top-10 right-0", size: "w-40 h-52" },
    { id: 3, style: "Formal", color: "from-purple-400 to-violet-500", pos: "bottom-20 left-10", size: "w-44 h-56" },
    { id: 4, style: "Ethnic", color: "from-amber-400 to-orange-500", pos: "bottom-0 right-10", size: "w-36 h-48" },
  ];

  return (
    <div className="relative w-full h-96 lg:h-[500px]">
      {images.map((img) => (
        <div
          key={img.id}
          className={`absolute ${img.pos} ${img.size} rounded-2xl bg-gradient-to-br ${img.color} shadow-2xl cursor-pointer overflow-hidden group hover:scale-105 transition-transform duration-300`}
        >
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <BsPalette className="text-6xl" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-semibold text-lg">{img.style}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroVisual;
