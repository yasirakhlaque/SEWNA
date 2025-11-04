import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiCheck, FiStar, FiMessageCircle } from "react-icons/fi";
import { AiOutlineFileImage, AiOutlineDollar, AiOutlineCalendar } from "react-icons/ai";

function CustomRequestStudio({ onClose, darkMode }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        images: [],
        description: "",
        tags: [],
        budget: 300,
        timeline: 3,
        category: "",
    });

    const suggestedTags = ["Elegant", "Modern", "Vintage", "Bold", "Minimalist", "Bohemian", "Classic", "Edgy"];
    const categories = ["Bridal", "Formal", "Streetwear", "Ethnic", "Fusion", "Casual", "Evening Wear"];

    const matchedDesigners = [
        { name: "Aria Chen", match: 95, rating: 4.9, price: "$200-500", specialty: "Bridal & Couture" },
        { name: "Zara Williams", match: 92, rating: 5.0, price: "$250-600", specialty: "Formal & Evening" },
        { name: "Sofia Martinez", match: 88, rating: 4.9, price: "$180-400", specialty: "Evening Wear" },
    ];

    const toggleTag = (tag) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
        }));
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
            >
                <div className="relative bg-gradient-to-r from-[#00b67f] to-emerald-600 px-8 py-6 text-white">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                        <FiX className="text-xl" />
                    </button>

                    <h2 className="text-3xl font-serif font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Custom Request Studio
                    </h2>
                    <p className="text-white/90">Let's create your perfect outfit together</p>

                    <div className="flex gap-2 mt-6">
                        {[1, 2, 3, 4].map((s) => (
                            <div
                                key={s}
                                className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-white" : "bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-8">
                    {step === 1 && (
                        <StepContent title="Upload Your Inspiration" subtitle="Share images that capture your vision (up to 5)" darkMode={darkMode}>
                            <div className={`border-2 border-dashed rounded-2xl p-16 text-center hover:border-lime-500 transition-all cursor-pointer group ${darkMode
                                ? 'border-gray-700 bg-gray-800'
                                : 'border-gray-300 bg-gray-50'
                                }`}>
                                <AiOutlineFileImage className="mx-auto text-6xl text-[#00b67f] mb-4 group-hover:scale-110 transition-transform" />
                                <p className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Drag & drop images here
                                </p>
                                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                    or click to browse
                                </p>
                                <input type="file" multiple accept="image/*" className="hidden" id="upload" />
                                <label htmlFor="upload" className={`inline-block px-6 py-3 border-2 rounded-full cursor-pointer hover:border-lime-500 transition-colors font-medium ${darkMode
                                    ? 'bg-gray-700 border-gray-600 text-gray-300'
                                    : 'bg-white border-gray-300 text-gray-700'
                                    }`}>
                                    Choose Files
                                </label>
                            </div>
                        </StepContent>
                    )}

                    {step === 2 && (
                        <StepContent title="Describe Your Vision" subtitle="Tell us about the occasion, mood, or specific ideas" darkMode={darkMode}>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="e.g., 'I want a flowing dress for a summer garden wedding, something elegant but not too formal...'"
                                className={`w-full h-40 border-2 rounded-2xl p-6 focus:outline-none focus:border-lime-500 transition-colors resize-none ${darkMode
                                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                                    }`}
                            />

                            <div className="mt-8">
                                <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Style Tags:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {suggestedTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${formData.tags.includes(tag)
                                                ? "bg-[#00b67f] text-white shadow-md"
                                                : darkMode
                                                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </StepContent>
                    )}

                    {step === 3 && (
                        <StepContent title="Budget & Timeline" subtitle="Help us match you with the right designers" darkMode={darkMode}>
                            <div className="space-y-10">
                                <div>
                                    <label className={`flex items-center gap-2 text-sm font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        <AiOutlineDollar className="text-[#00b67f] text-lg" />
                                        Budget: ${formData.budget}
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="1000"
                                        step="50"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#00b67f]"
                                    />
                                    <div className={`flex justify-between text-xs mt-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                        <span>$50</span>
                                        <span>$1000+</span>
                                    </div>
                                </div>

                                <div>
                                    <label className={`flex items-center gap-2 text-sm font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        <AiOutlineCalendar className="text-[#00b67f] text-lg" />
                                        Timeline: {formData.timeline} weeks
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        step="1"
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#00b67f]"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-3">
                                        <span>1 week</span>
                                        <span>12+ weeks</span>
                                    </div>
                                </div>

                                <div>
                                    <label className={`block text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className={`w-full border-2 rounded-2xl px-6 py-4 focus:outline-none focus:border-lime-500 transition-colors ${darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white'
                                            : 'bg-white border-gray-200 text-gray-900'
                                            }`}
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </StepContent>
                    )}

                    {step === 4 && (
                        <StepContent title="Your Perfect Matches" subtitle={`We found ${matchedDesigners.length} designers that match your vision`} darkMode={darkMode}>
                            <div className="space-y-6">
                                {matchedDesigners.map((designer, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-2xl p-6 hover:border-lime-500 transition-all group ${darkMode
                                            ? 'border-gray-700 bg-gray-800'
                                            : 'border-gray-200 bg-white'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex gap-4">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#00b67f] to-lime-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                                    {designer.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                                        }`}>{designer.name}</h4>
                                                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'
                                                        }`}>{designer.specialty}</p>
                                                    <div className="flex items-center gap-3 text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <FiStar className="text-yellow-400 fill-current" />
                                                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'
                                                                }`}>{designer.rating}</span>
                                                        </div>
                                                        <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
                                                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                                            }`}>{designer.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-bold text-[#00b67f] mb-1">{designer.match}%</div>
                                                <p className={`text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                                    }`}>match</p>
                                            </div>
                                        </div>

                                        <button className={`w-full py-3 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 ${darkMode
                                            ? 'bg-lime-600 text-white hover:bg-lime-500'
                                            : 'bg-gray-900 text-white group-hover:bg-[#00b67f]'
                                            }`}>
                                            <FiMessageCircle />
                                            <span>Message Designer</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </StepContent>
                    )}
                </div>

                <div className={`border-t px-8 py-6 flex justify-between items-center ${darkMode
                    ? 'border-gray-800 bg-gray-800'
                    : 'border-gray-200 bg-gray-50'
                    }`}>
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className={`px-6 py-3 border-2 rounded-full font-semibold flex items-center gap-2 transition-colors ${darkMode
                                ? 'border-gray-700 text-gray-300 hover:border-gray-600'
                                : 'border-gray-300 text-gray-700 hover:border-gray-900'
                                }`}
                        >
                            <FiChevronLeft />
                            <span>Back</span>
                        </button>
                    ) : <div></div>}

                    {step < 4 ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="px-8 py-3 bg-[#00b67f] text-white rounded-full font-semibold flex items-center gap-2 hover:bg-lime-600 transition-colors shadow-lg"
                        >
                            <span>Continue</span>
                            <FiChevronRight />
                        </button>
                    ) : (
                        <button className="px-8 py-3 bg-[#00b67f] text-white rounded-full font-semibold flex items-center gap-2 hover:bg-lime-600 transition-colors shadow-lg">
                            <FiCheck />
                            <span>Start Conversations</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// Step Content Wrapper Component
function StepContent({ children, title, subtitle, darkMode }) {
    return (
        <div className="transition-all duration-300">
            <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{subtitle}</p>
            </div>
            {children}
        </div>
    );
}

export default CustomRequestStudio;
