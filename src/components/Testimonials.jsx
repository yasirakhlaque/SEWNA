import { FiStar } from "react-icons/fi";

function Testimonials({ darkMode }) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content: "SEWNA helped me find the perfect designer for my wedding dress. The process was smooth, and the final result exceeded all my expectations!",
      rating: 5,
      avatar: "from-pink-400 to-rose-500"
    },
    {
      name: "David Kim",
      role: "Fashion Enthusiast",
      content: "I've always wanted custom streetwear but didn't know where to start. SEWNA made it incredibly easy to collaborate with talented designers.",
      rating: 5,
      avatar: "from-blue-400 to-indigo-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Professional",
      content: "The quality and professionalism of the designers on SEWNA is outstanding. I've ordered three custom suits and each one was perfect.",
      rating: 5,
      avatar: "from-purple-400 to-violet-500"
    },
  ];

  return (
    <section className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Real stories from people who brought their fashion dreams to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-sm border ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className={`leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>"{testimonial.content}"</p>

              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar}`}></div>
                <div>
                  <div className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{testimonial.name}</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
