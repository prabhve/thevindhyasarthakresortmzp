import React, { useState } from 'react';
import { FAQS } from '../data/resortData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Helpful Information</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Frequently Asked <span className="font-serif italic text-neutral-700">Questions</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Everything you need to know before visiting or planning an event at Vindhyasarthak Resort.
          </p>
        </div>

        {/* Accordions in Clean White Cards */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-950' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
