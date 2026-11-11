import React from 'react';
import { AMENITIES } from '../data/resortData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AmenitiesSectionProps {
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="facilities" className="py-14 sm:py-20 lg:py-24 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Royal Facilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Curated Amenities <br />
              <span className="font-serif italic text-neutral-700">For Recreation, Wellness & Rest</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-base mt-2">
              Immerse in clean family swimming pools, lively indoor game lounges, equipped gymnasiums, and our dedicated tour fleet.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto justify-center px-5 py-3 sm:py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm min-h-[44px]"
          >
            <span>Experience Vindhyasarthak</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 6 Grid of Royal Amenities in Clean White Cards with Grey Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden group hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-amber-700 font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-amber-800 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
