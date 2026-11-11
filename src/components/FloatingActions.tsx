import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MessageCircle, Phone, Sparkles, ChevronUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenConcierge: () => void;
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConcierge, onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* =========================================================================
          DESKTOP FLOATING CONTROLS (Right side floating cluster)
          ========================================================================= */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-amber-400" />
          </button>
        )}

        {/* AI Concierge Trigger */}
        <button
          onClick={onOpenConcierge}
          className="pointer-events-auto group flex items-center gap-2.5 px-4 py-2.5 bg-neutral-950/95 hover:bg-neutral-900 border border-amber-400/60 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          title="Open 24/7 AI Resort Concierge"
        >
          <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-4 h-4 fill-neutral-950" />
          </div>
          <div className="text-left pr-1">
            <span className="text-xs font-bold text-white block leading-none">AI Concierge</span>
            <span className="text-[10px] text-amber-400">Ask Anything</span>
          </div>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-600/40 transition-all hover:scale-110 cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="Instant WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>

      {/* =========================================================================
          MOBILE PERSISTENT LUXURY DOCK (Optimized for thumb navigation)
          ========================================================================= */}
      {/* Mobile Scroll to Top button sitting right above the dock */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="sm:hidden fixed bottom-20 right-4 z-40 p-2.5 rounded-full bg-neutral-900/90 text-amber-400 border border-neutral-700 shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-2xl safe-area-bottom">
        <div className="flex items-center justify-between gap-1.5">
          
          {/* Call Desk */}
          <a
            href={`tel:${RESORT_INFO.phones[0]}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-600 mb-0.5" />
            <span className="text-[10px] font-semibold">Call 24/7</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>

          {/* AI Host */}
          <button
            onClick={onOpenConcierge}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-500 mb-0.5" />
            <span className="text-[10px] font-semibold">AI Host</span>
          </button>

          {/* Primary Book Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="flex-[2] py-2 px-3 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-1.5 cursor-pointer min-h-[38px]"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Stay</span>
          </button>

        </div>
      </div>
    </>
  );
};
