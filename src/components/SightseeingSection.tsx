import React, { useState } from 'react';
import { SIGHTSEEING, Attraction, RESORT_INFO } from '../data/resortData';
import { Sparkles, Car, Navigation, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export const SightseeingSection: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction>(SIGHTSEEING[0]);

  const handleBookCabWhatsApp = (attraction: Attraction) => {
    const text = `Namaste! I am staying/planning to stay at The Vindhyasarthak Resort and would like to arrange a resort chauffeur car for sightseeing to "${attraction.name}" (${attraction.distance}, ~${attraction.driveTime}). Please provide vehicle options (Sedan/SUV) and driver package rates.`;
    window.open(`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="sightseeing" className="py-14 sm:py-20 lg:py-24 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Vindhyan Heritage & Excursions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Explore Sacred Temples <br />
            <span className="font-serif italic text-neutral-700">& Wild Waterfalls of Mirzapur</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-base mt-2">
            Vindhyasarthak Resort serves as the ideal launchpad to explore the 51-Shaktipeeth pilgrimage of Vindhyachal, majestic rocky cascades, and 16th-century river forts.
          </p>
        </div>

        {/* Mobile Attraction Quick Selector (Horizontal swipe on phone) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {SIGHTSEEING.map((item) => {
            const isSelected = selectedAttraction.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedAttraction(item)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                  {item.distance}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column interactive explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Attraction Selector List (Desktop View) */}
          <div className="hidden lg:block lg:col-span-6 space-y-3">
            {SIGHTSEEING.map((item) => {
              const isSelected = selectedAttraction.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAttraction(item)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-neutral-950 shadow-md ring-1 ring-neutral-950/10'
                      : 'bg-white/80 border-neutral-200 hover:border-neutral-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-amber-700 font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-neutral-400" aria-hidden="true">·</span>
                      <span className="text-neutral-500 flex items-center gap-1 font-mono">
                        <Navigation className="w-3 h-3 text-neutral-600" />
                        {item.distance} (~{item.driveTime})
                      </span>
                    </div>

                    <h3 className={`text-base font-bold transition-colors ${
                      isSelected ? 'text-neutral-950' : 'text-neutral-800'
                    }`}>
                      {item.name}
                    </h3>
                  </div>

                  <div className="shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isSelected ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-300 text-neutral-500'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Destination Dossier */}
          <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-md sticky top-24 text-neutral-900">
            
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                  Featured Sightseeing Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
                  {selectedAttraction.name}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg sm:text-xl font-mono font-bold text-neutral-950">
                  {selectedAttraction.distance}
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-500 block font-mono">
                  {selectedAttraction.driveTime} drive
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {selectedAttraction.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Tour Highlights
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedAttraction.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-md font-medium"
                  >
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Resort Tour Desk Assistance Card */}
            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-neutral-900">
                <Car className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-neutral-950">Resort Chauffeur Service Available</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Rent comfortable AC Sedans or 7-Seater SUVs directly from our resort front desk with experienced local drivers who know the temples and waterfall spots intimately.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleBookCabWhatsApp(selectedAttraction)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Arrange Chauffeur On WhatsApp</span>
                </button>

                <a
                  href={`tel:${RESORT_INFO.phones[0]}`}
                  className="px-3 py-2 bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Call Travel Desk</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
