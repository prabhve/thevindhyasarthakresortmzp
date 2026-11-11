import React, { useState } from 'react';
import { ROOMS, Room } from '../data/resortData';
import { Users, Maximize2, Bed, Check, ArrowRight, X, ChevronRight, Sparkles } from 'lucide-react';

interface RoomsSectionProps {
  onOpenBooking: (roomId?: string) => void;
  currency: 'INR' | 'USD';
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking, currency }) => {
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);

  const formatPrice = (room: Room) => {
    if (currency === 'INR') {
      return `₹${room.priceINR.toLocaleString('en-IN')}`;
    }
    return `$${room.priceUSD}`;
  };

  const handleOpenRoomModal = (room: Room) => {
    setSelectedRoomModal(room);
    setActiveModalImageIndex(0);
  };

  return (
    <section id="rooms" className="py-14 sm:py-20 lg:py-24 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Luxury Accommodations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Restful Sanctuaries <br />
            <span className="font-serif italic text-neutral-700">Crafted For Unhurried Stays</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-base mt-2">
            Each room combines serene mountain panoramas, plush bedding, premium bath amenities, and modern work ergonomics.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className={`flex flex-col bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                room.popular
                  ? 'border-neutral-900 ring-1 ring-neutral-900/10'
                  : 'border-neutral-200'
              }`}
            >
              {/* Room Image Container */}
              <div className="relative h-60 overflow-hidden group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                
                {/* Popularity Badge */}
                {room.popular && (
                  <div className="absolute top-3 right-3 bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                    Most Popular Choice
                  </div>
                )}

                {/* Inspect Photos Affordance */}
                <button
                  onClick={() => handleOpenRoomModal(room)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-neutral-900 rounded-lg border border-neutral-200 backdrop-blur-sm text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Photos ({room.gallery.length})</span>
                </button>
              </div>

              {/* Room Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{room.sizeSqFt} sq ft</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{room.occupancy.adults} Adults, {room.occupancy.children} Child</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 hover:text-amber-700 transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                    {room.tagline}
                  </p>

                  {/* Bed info */}
                  <div className="flex items-center gap-2 text-xs text-neutral-700 mt-3 pt-3 border-t border-neutral-100 font-medium">
                    <Bed className="w-4 h-4 text-neutral-600 shrink-0" />
                    <span>{room.bed}</span>
                  </div>

                  {/* Top Features */}
                  <div className="mt-4 space-y-2">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase tracking-wider font-semibold">Starting From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-neutral-950 font-mono">{formatPrice(room)}</span>
                      <span className="text-xs text-neutral-500">/ night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenRoomModal(room)}
                      className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors"
                      title="View Room Specs"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Book Room
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Room Detail Modal (Clean White & Grey Aesthetic) */}
        {selectedRoomModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-neutral-900 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {/* Close button */}
              <button
                onClick={() => setSelectedRoomModal(null)}
                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-full border border-neutral-200 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Modal Title & Basic Specs */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                    <span>The Vindhyasarthak Resort Accommodations</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
                    {selectedRoomModal.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-neutral-600 mt-2 font-medium">
                    <span>{selectedRoomModal.sizeSqFt} sq ft interior</span>
                    <span aria-hidden="true">·</span>
                    <span>Max Occupancy: {selectedRoomModal.occupancy.adults} Adults, {selectedRoomModal.occupancy.children} Child</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedRoomModal.bed}</span>
                  </div>
                </div>

                {/* Main Photo Viewer */}
                <div className="space-y-3">
                  <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border border-neutral-200">
                    <img
                      src={selectedRoomModal.gallery[activeModalImageIndex] || selectedRoomModal.image}
                      alt={selectedRoomModal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {selectedRoomModal.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                          activeModalImageIndex === idx
                            ? 'border-neutral-950 ring-2 ring-neutral-950/20'
                            : 'border-neutral-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {selectedRoomModal.description}
                </p>

                {/* Two Column Specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-3">
                      Key Highlights & Architecture
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                      {selectedRoomModal.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-3">
                      Included In-Room Amenities
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                      {selectedRoomModal.amenities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[10px] sm:text-xs text-neutral-500 block uppercase tracking-wider font-semibold">Per Night Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold text-neutral-950 font-mono">
                        {formatPrice(selectedRoomModal)}
                      </span>
                      <span className="text-xs text-neutral-500">/ night + taxes</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => setSelectedRoomModal(null)}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-lg border border-neutral-200 min-h-[44px] flex items-center justify-center cursor-pointer"
                    >
                      Close Details
                    </button>
                    <button
                      onClick={() => {
                        const rId = selectedRoomModal.id;
                        setSelectedRoomModal(null);
                        onOpenBooking(rId);
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                    >
                      <span>Proceed to Book This Room</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
