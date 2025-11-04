import { FiArrowRight } from "react-icons/fi";

function CTASection({ setShowStudio, darkMode }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#00b67f] to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Create Your Dream Outfit?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied clients who've brought their fashion vision to life with SEWNA
          </p>
          
          <button
            onClick={() => setShowStudio(true)}
            className="px-10 py-5 bg-white text-[#00b67f] font-bold text-lg rounded-full shadow-xl hover:bg-gray-50 transition-all inline-flex items-center space-x-3"
          >
            <span>Start Your Project</span>
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
