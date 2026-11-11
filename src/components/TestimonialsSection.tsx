import React from 'react';
import { REVIEWS } from '../data/resortData';
import { Star, Sparkles, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Guest Chronicles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Memories Made at <span className="font-serif italic text-neutral-700">Vindhyasarthak</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Read what families, wedding hosts, and spiritual pilgrims have to say about their stay.
          </p>
        </div>

        {/* Reviews Grid in Clean Grey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-neutral-400 transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <span className="text-[11px] text-neutral-500 font-mono">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-neutral-300" />

                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">{rev.author}</h4>
                  <p className="text-xs text-neutral-500">{rev.location}</p>
                </div>
                <span className="text-[11px] text-neutral-800 font-semibold bg-white px-2.5 py-1 rounded-md border border-neutral-200 shadow-xs">
                  {rev.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
