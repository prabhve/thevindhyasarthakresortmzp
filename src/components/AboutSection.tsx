import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Sparkles, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
              <img
                src="/image/about_bg.jpg"
                alt="The Vindhyasarthak Resort Landscape"
                className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Trust Marker */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-neutral-200 p-3 sm:p-4 rounded-xl flex items-center justify-between text-neutral-900 shadow-lg">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] sm:text-[11px] text-amber-700 font-bold uppercase tracking-wider">
                    Serene Foothill Haven
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-neutral-950 truncate">
                    Near BHU South Campus, Mirzapur
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg sm:text-xl font-bold text-neutral-950 font-mono">4.8★</span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 block">Verified Guests</span>
                </div>
              </div>
            </div>

            {/* Sub-grid of Stats in Clean Grey Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-neutral-50 border border-neutral-200 p-3.5 sm:p-4 rounded-xl">
                <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-950">1,500+</span>
                <p className="text-xs text-neutral-800 font-semibold mt-1 leading-tight">Lawn Capacity for Weddings</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 hidden xs:block">Grandest open lawn in region</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-3.5 sm:p-4 rounded-xl">
                <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-950">20 Mins</span>
                <p className="text-xs text-neutral-800 font-semibold mt-1 leading-tight">To Vindhyachal Shaktipeeth</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 hidden xs:block">Smooth cab transfers available</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>The Story of Vindhyasarthak</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight leading-tight">
                Escape The Noise. <br />
                <span className="text-neutral-700 font-serif italic">Embrace Serenity & Royal Luxury.</span>
              </h2>
            </div>

            <p className="text-neutral-700 leading-relaxed text-xs sm:text-base">
              Escape to <strong className="text-neutral-950">The Vindhyasarthak Resort Hotel & Banquet</strong>, a serene sanctuary situated amidst nature's splendor on Robertganj Road near BHU South Campus, Mirzapur. Surrounded by picturesque hilltops, our retreat offers clean mountain air, expansive lawns, and authentic hospitality.
            </p>

            <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm">
              Whether you are organizing a dream destination wedding on our grand lawns, retreating for a peaceful family vacation away from city traffic, enjoying regional Purvanchali clay-pot dishes in our Desi restaurant, or visiting sacred pilgrimage sites like Maa Vindhyavasini and Wyndham Falls, our attentive 24/7 team ensures every detail is attended to.
            </p>

            {/* Checklist of assurances in grey cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-neutral-800">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pillar-less AC Banquet (500+ Pax)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authentic Desi & Multicuisine Food</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hillview Family Swimming Pool</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Sightseeing Fleet to Temples</span>
              </div>
            </div>

            {/* Action Bar: Responsive full width buttons on mobile */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 border-t border-neutral-200">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto justify-center px-5 py-3 sm:py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2 min-h-[44px]"
              >
                <span>Plan Your Stay</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`tel:${RESORT_INFO.phones[0]}`}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-4 py-3 sm:py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 rounded-lg text-xs sm:text-sm font-medium transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-neutral-700" />
                <span>Front Desk: {RESORT_INFO.phones[0]}</span>
              </a>

              <a
                href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-1.5 py-2 text-xs sm:text-sm text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
