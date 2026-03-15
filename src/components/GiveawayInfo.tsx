const BYD_SEAL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aaf36e7cb88f68a01d7103/7d00b4d84_IMG_20260306_163446_276.jpg";

const prizes = [
  { label: "BYD Seal 2025", amount: "Electric Sedan", sub: "530km range · 523hp", color: "from-red-50 to-red-100", badge: "Most Popular" },
  { label: "BYD Atto 3 2025", amount: "Electric SUV", sub: "480km range · 204hp", color: "from-blue-50 to-blue-100", badge: "Best SUV" },
  { label: "BYD Han EV 2025", amount: "Luxury Sedan", sub: "605km range · 517hp", color: "from-gray-50 to-gray-100", badge: "Premium" },
  { label: "BYD Dolphin 2024", amount: "Compact EV", sub: "427km range · 177hp", color: "from-green-50 to-green-100", badge: "Eco Pick" },
];

export default function GiveawayInfo() {
  return (
    <section id="info" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900">
            Available <span className="text-red-600">BYD Cars</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Choose your preferred BYD electric car. All models are brand new{' '}
            <strong className="text-red-600">2024–2025</strong> editions delivered straight to your door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <div key={index} className={`bg-gradient-to-br ${prize.color} rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center relative`}>
              <div className="absolute top-3 right-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{prize.badge}</span>
              </div>
              <img src={BYD_SEAL} alt={prize.label} className="w-full h-32 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-black text-gray-900">{prize.label}</h3>
              <p className="text-red-600 font-bold text-lg mt-1">{prize.amount}</p>
              <p className="text-gray-500 text-sm mt-2">{prize.sub}</p>
              <div className="mt-4 bg-white rounded-xl py-2 px-4 border border-gray-200">
                <span className="text-green-600 font-bold text-sm">FREE 🎉</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
