import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Sparkles, Users, Music, Utensils, CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface BanquetWeddingsProps {
  onOpenBooking: () => void;
}

export const BanquetWeddingsSection: React.FC<BanquetWeddingsProps> = () => {
  const [eventType, setEventType] = useState('Royal Destination Wedding');
  const [guestCount, setGuestCount] = useState('500 - 800 Guests');
  const [eventDate, setEventDate] = useState('');
  const [cateringType, setCateringType] = useState('Royal Desi & Multicuisine Live Stalls');
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const handleEstimateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Namaste! I would like to inquire about booking The Vindhyasarthak Resort Banquet & Lawn for:
• Event: ${eventType}
• Expected Guests: ${guestCount}
• Preferred Date: ${eventDate || 'Flexible'}
• Catering Preference: ${cateringType}
Please share banquet availability, package details, and custom wedding quote.`;
    window.open(`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setQuoteSuccess(true);
  };

  return (
    <section id="banquets" className="py-14 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Celebrations & Conclaves</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold text-white tracking-tight">
            Royal Destination Weddings <br />
            <span className="font-serif italic text-amber-400">& Grand Banquets</span>
          </h2>
          <p className="text-neutral-300 text-xs sm:text-base leading-relaxed">
            Mirzapur's premier banqueting address. With our sprawling 1,500+ capacity open lawns and a 500+ guest pillar-less air-conditioned royal hall, we turn marriages, sangeet nights, and corporate summits into unforgettable spectacles.
          </p>
        </div>

        {/* 2-Column Split: Visual Bento + Interactive Wedding Planner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Bento */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: AC Banquet Hall */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 group h-64">
                <img
                  src="/image/gallery_optimized/127.jpg"
                  alt="Air Conditioned Royal Banquet Hall"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">500+ Capacity</span>
                  <h3 className="text-base font-bold text-white">Grand AC Royal Hall</h3>
                  <p className="text-xs text-neutral-300">Pillar-less hall with custom chandeliers and stage</p>
                </div>
              </div>

              {/* Card 2: Sprawling Wedding Lawn */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 group h-64">
                <img
                  src="/image/gallery_optimized/131.jpg"
                  alt="Sprawling Open Wedding Lawn"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">1,500+ Guests</span>
                  <h3 className="text-base font-bold text-white">Royal Celebration Lawn</h3>
                  <p className="text-xs text-neutral-300">Lush green garden with nighttime fairy-tale canopy</p>
                </div>
              </div>

              {/* Card 3: Mandap & Décor Setup */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 group h-56">
                <img
                  src="/image/gallery_optimized/23.jpg"
                  alt="Lawn Mandap & Stage Pavilion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">Custom Themes</span>
                  <h3 className="text-sm font-bold text-white">Mandap & Stage Crafting</h3>
                  <p className="text-xs text-neutral-300">Bespoke floral & heritage architecture setups</p>
                </div>
              </div>

              {/* Card 4: Dining & Live Catering */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 group h-56">
                <img
                  src="/image/gallery_optimized/18.jpg"
                  alt="Banquet Dining Hall"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">Royal Feasts</span>
                  <h3 className="text-sm font-bold text-white">Master Banquet Catering</h3>
                  <p className="text-xs text-neutral-300">Awadhi thali, chaat counters & global spreads</p>
                </div>
              </div>

            </div>

            {/* Banquet Inclusions Checklist */}
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated Event Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-amber-400 shrink-0" />
                <span>DJ & Sound Floor License</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Live Food Stalls</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Power Generator Backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Luxury Bridal Suite Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Spacious Valet Parking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Wedding & Event Quote Calculator */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-2xl">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Instant Event Estimate
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Plan Your Big Day With Us
              </h3>
              <p className="text-xs text-neutral-400">
                Get customized rates for lawns, AC hall, food catering, and room blocks in under 60 seconds.
              </p>
            </div>

            <form onSubmit={handleEstimateWhatsApp} className="space-y-4">
              
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Type of Celebration / Conclave
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-md px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Royal Destination Wedding</option>
                  <option>Ring Ceremony / Engagement</option>
                  <option>Sangeet & Mehendi Night</option>
                  <option>Wedding Reception</option>
                  <option>Corporate Annual Conference & Retreat</option>
                  <option>Milestone Birthday / Anniversary</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Estimated Number of Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-md px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option>100 - 250 Guests (Intimate Banquet)</option>
                  <option>300 - 500 Guests (Grand Hall)</option>
                  <option>500 - 800 Guests (Lawn + Hall Combo)</option>
                  <option>1000 - 1500+ Guests (Royal Grand Lawn)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Preferred Event Date (Approximate)
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-md px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Catering & Menu Preference
                </label>
                <select
                  value={cateringType}
                  onChange={(e) => setCateringType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-md px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Royal Desi & Multicuisine Live Stalls (Pure Veg)</option>
                  <option>Gourmet Awadhi, Continental & Chinese Spread</option>
                  <option>High Tea & Executive Conference Buffet</option>
                  <option>Custom Menu Designed by Client</option>
                </select>
              </div>

              {quoteSuccess && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-md text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Connecting with Wedding & Banquet Specialist on WhatsApp...</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-bold text-xs sm:text-sm rounded-md shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Instant WhatsApp Wedding Package</span>
              </button>

              <div className="pt-3 border-t border-neutral-800 text-center">
                <span className="text-[11px] text-neutral-400 block mb-1">Prefer to talk with our Banquet Director directly?</span>
                <a
                  href={`tel:${RESORT_INFO.phones[1] || RESORT_INFO.phones[0]}`}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Banquet Desk: {RESORT_INFO.phones[1] || RESORT_INFO.phones[0]}</span>
                </a>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
