import { CheckCircle } from 'lucide-react';

export default function OwnerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900">
            Straight from the <span className="text-red-600">CEO</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Official announcements from BYD's leadership</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aaf36e7cb88f68a01d7103/15544717b_IMG_20260306_163438_856.jpg"
                alt="Wang Chuanfu"
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">Wang Chuanfu</span>
                  <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                </div>
                <span className="text-gray-500 text-sm">CEO & Founder, BYD Auto Co., Ltd.</span>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed mb-4">
              BYD is committed to making clean energy vehicles accessible to everyone across the globe.
              As part of our mission, we're launching a worldwide giveaway of our electric vehicles — completely free.
              Just cover the delivery cost and a brand-new BYD will be shipped directly to your door. 🚗⚡
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>❤️ 128K</span>
              <span>🔁 47K</span>
              <span>💬 8.2K</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aaf36e7cb88f68a01d7103/ee3e404a3_IMG_20260306_163446_315.jpg"
                alt="BYD Official"
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">BYD Auto Official</span>
                  <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                </div>
                <span className="text-gray-500 text-sm">@BYDAuto · Official Account</span>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed mb-4">
              📢 OFFICIAL ANNOUNCEMENT: Our global BYD car giveaway is NOW LIVE!
              🌍 Open to ALL countries. No purchase necessary — just cover the one-time delivery fee.
              BYD Seal, Atto 3, Han EV, Dolphin and more available. Don't miss out! 🎁🚗
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>❤️ 215K</span>
              <span>🔁 89K</span>
              <span>💬 14K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
