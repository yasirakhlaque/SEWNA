import { useState } from "react";
import { BsImages, BsLightning, BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

function HowItWorks({ darkMode }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "Upload inspiration images, describe your style, and set your budget and timeline.",
      icon: BsImages,
    },
    {
      number: "02",
      title: "Get Matched",
      description: "Our AI matches you with designers who specialize in your style and preferences.",
      icon: BsLightning,
    },
    {
      number: "03",
      title: "Collaborate",
      description: "Work directly with your designer through our platform to perfect every detail.",
      icon: BsPersonWorkspace,
    },
    {
      number: "04",
      title: "Receive Your Outfit",
      description: "Get your custom-made outfit delivered, exactly as you envisioned it.",
      icon: AiOutlineCheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            How It Works
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            From concept to creation in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative hover:-translate-y-2 transition-transform duration-300"
            >
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-12 left-full w-full h-0.5 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className={`h-full bg-[#00b67f] transition-all duration-500 ${
                      activeStep > index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              )}

              <div className={`relative p-6 rounded-2xl border-2 transition-all group ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-lime-500' 
                  : 'bg-white border-gray-100 hover:border-lime-500'
              }`}>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00b67f] text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <div className="mb-4 mt-4">
                  <step.icon className="text-4xl text-[#00b67f]" />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{step.title}</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
