import { useState } from 'react';
import { Bell, Check, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp } from 'lucide-react';

const TESTIMONIALS = [
  { id: 1, name: "Mike Johnson", avatar: "MJ", color: "bg-blue-600", country: "🇺🇸 USA", time: "2 days ago", text: "I received my BYD car!! I paid the delivery fee and within a week my brand new BYD Seal arrived at my door. 🚗⚡", likes: 4821, pinned: true },
  { id: 2, name: "Sarah Williams", avatar: "SW", color: "bg-pink-500", country: "🇺🇸 USA", time: "1 day ago", text: "Just received my BYD car after paying for the delivery fee. I cried when I saw the car parked outside! 🙏", likes: 3244 },
  { id: 3, name: "Carlos Mendez", avatar: "CM", color: "bg-green-600", country: "🇲🇽 Mexico", time: "3 days ago", text: "From Mexico! I received my BYD car after paying the delivery fee. This giveaway is 100% real.", likes: 2918 },
  { id: 4, name: "David Chen", avatar: "DC", color: "bg-purple-600", country: "🇨🇳 China", time: "2 days ago", text: "I was skeptical at first but I paid the delivery fee and received my BYD EV. Amazing!", likes: 2611 },
  { id: 5, name: "Amara Osei", avatar: "AO", color: "bg-yellow-500", country: "🇬🇭 Ghana", time: "1 day ago", text: "From Ghana 🇬🇭 I paid for the delivery fee and received my BYD car! God bless BYD!", likes: 2403 },
];

export default function SecondVideoSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleComments = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white">
            More <span className="text-red-500">Proof</span> from Winners
          </h2>
          <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Watch real testimonials from BYD car recipients around the world.
          </p>
        </div>

        <div className="max-w-sm mx-auto md:max-w-md">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-900/30 border border-gray-800 bg-black">
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src="https://www.youtube.com/embed/ZW9YotMgE-8?rel=0&modestbranding=1&fs=1&playsinline=1"
                title="BYD Winners Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aaf36e7cb88f68a01d7103/ee3e404a3_IMG_20260306_163446_315.jpg"
                alt="BYD"
                className="w-10 h-10 rounded-full object-contain bg-white border border-red-600 p-0.5"
              />
              <div>
                <p className="text-white text-sm font-bold">BYD Global</p>
                <p className="text-gray-400 text-xs">8.9M subscribers</p>
              </div>
            </div>
            <button
              onClick={() => setSubscribed(true)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${subscribed ? 'bg-gray-700 text-gray-300' : 'bg-red-600 hover:bg-red-700 text-white'}`}
            >
              {subscribed ? <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Subscribed</span> : 'Subscribe'}
            </button>
          </div>

          {/* Comments */}
          <div className="mt-4">
            <p className="text-gray-400 text-xs mb-3 font-semibold">Comments · {TESTIMONIALS.length}</p>
            <div className="space-y-3">
              {visibleComments.map(c => (
                <div key={c.id} className="flex gap-3">
                  <div className={`w-8 h-8 ${c.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {c.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-xs font-bold">{c.name}</span>
                      <span className="text-gray-500 text-xs">{c.country}</span>
                      <span className="text-gray-500 text-xs">{c.time}</span>
                      {c.pinned && <span className="text-red-400 text-xs">📌</span>}
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">{c.text}</p>
                    <div className="flex items-center gap-4 mt-1.5">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-white text-xs">
                        <ThumbsUp className="w-3 h-3" /> {c.likes.toLocaleString()}
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-white text-xs">
                        <ThumbsDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {TESTIMONIALS.length > 3 && (
              <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-1 text-red-400 text-xs font-semibold mt-3 hover:text-red-300">
                {showAll ? <><ChevronUp className="w-3 h-3" /> Show less</> : <><ChevronDown className="w-3 h-3" /> View more</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
