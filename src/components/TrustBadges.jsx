import { FiUsers, FiShoppingBag, FiTrendingUp, FiAward } from "react-icons/fi";

function TrustBadges({ darkMode }) {
  const stats = [
    { icon: FiUsers, label: "Active Designers", value: "500+" },
    { icon: FiShoppingBag, label: "Outfits Created", value: "10,000+" },
    { icon: FiTrendingUp, label: "Success Rate", value: "98%" },
    { icon: FiAward, label: "Avg. Rating", value: "4.9/5" },
  ];

  return (
    <section className={`py-12 border-y ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-gray-50 border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="text-3xl text-[#00b67f] mx-auto mb-3" />
              <div className={`text-3xl font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>{stat.value}</div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;
