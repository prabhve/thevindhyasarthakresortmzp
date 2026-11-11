import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/resortData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'banquet' | 'pool' | 'dining' | 'outdoors'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Showcase' },
    { id: 'rooms', label: 'Suites & Rooms' },
    { id: 'banquet', label: 'Royal Banquet & Weddings' },
    { id: 'pool', label: 'Swimming Pool' },
    { id: 'dining', label: 'Dining & Feasts' },
    { id: 'outdoors', label: 'Lawns & Night View' },
  ] as const;

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Visual Journey</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
              Life at Vindhyasarthak <br />
              <span className="font-serif italic text-neutral-700">Captured in Light & Nature</span>
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2">
              Explore authentic views of our suites, evening illuminated lawns, banquet setups, and pool deck.
            </p>
          </div>

          {/* Video Tour Trigger Button: Full width on mobile for easy reach */}
          <button
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto justify-center px-4 py-3 sm:py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer min-h-[44px]"
          >
            <Play className="w-4 h-4 fill-neutral-900" />
            <span>Watch Drone Walkthrough Video</span>
          </button>
        </div>

        {/* Filter Bar (Segmented button control with clean white/grey/black states) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filter === opt.id
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 cursor-pointer transition-all duration-300 hover:border-neutral-400 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2 rounded-lg bg-white/20 text-white group-hover:bg-white group-hover:text-neutral-950 border border-white/30 backdrop-blur-sm transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-2 text-neutral-300 hover:text-white bg-neutral-900/80 rounded-full border border-neutral-700 transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-neutral-700 transition-colors z-50 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-neutral-700 transition-colors z-50 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image and Caption */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].originalSrc || filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">
                  {filteredItems[lightboxIndex].categoryLabel} · Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Video Tour Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl text-white">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-900/80 rounded-full border border-neutral-700 transition-colors z-50 cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-4 bg-neutral-900 border-b border-neutral-800">
                <h4 className="text-base font-bold text-white">
                  The Vindhyasarthak Resort & Banquet Walkthrough Tour
                </h4>
                <p className="text-xs text-neutral-400">
                  Drone capture & facilities overview · Mirzapur, Uttar Pradesh
                </p>
              </div>

              <div className="aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  <source src="/video/resort.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
