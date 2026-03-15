import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: "Michael R.", country: "🇺🇸 USA", text: "I received my BYD Seal 2024! I paid the delivery fee and the car arrived at my door in 9 days. I can't believe how real this is!", car: "BYD Seal 2024 🚗" },
  { name: "Sofia K.", country: "🇩🇪 Germany", text: "My BYD Atto 3 2025 arrived last week. I was so nervous but after paying the delivery fee the car just showed up!", car: "BYD Atto 3 2025 🚗" },
  { name: "James T.", country: "🇬🇧 UK", text: "BYD Han EV 2025 is now parked outside my house. I paid for delivery and 11 days later this beautiful electric car arrived.", car: "BYD Han EV 2025 🚗" },
  { name: "Anya M.", country: "🇷🇺 Russia", text: "I received my BYD Dolphin 2024! Even from Russia the delivery worked perfectly. Paid the fee and my car arrived in under 2 weeks.", car: "BYD Dolphin 2024 🚗" },
  { name: "Carlos P.", country: "🇧🇷 Brazil", text: "BYD Seal 2025 delivered to my home in São Paulo! I told my family and now three of them have applied too.", car: "BYD Seal 2025 🚗" },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900">
            What <span className="text-red-600">Winners</span> Are Saying
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Real testimonials from verified BYD car recipients</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].country}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"{testimonials[currentIndex].text}"</p>
              <div className="bg-green-50 rounded-xl px-4 py-2 inline-block">
                <span className="text-green-700 font-bold text-sm">✅ Received: {testimonials[currentIndex].car}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
