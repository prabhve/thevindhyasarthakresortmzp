import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MessageCircle, Phone, ChevronUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
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
            className="pointer-events-auto p-3 rounded-full bg-neutral-900/95 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-amber-400" />
          </button>
        )}

        {/* Floating WhatsApp Icon Button */}
        <a
          href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/50 transition-all hover:scale-110 active:scale-95 cursor-pointer border border-emerald-400/30"
          aria-label="Chat on WhatsApp"
          title="Instant WhatsApp Support"
        >
          <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        </a>
      </div>

      {/* =========================================================================
          MOBILE PERSISTENT DOCK (Original clean white luxury style, well-adjusted)
          ========================================================================= */}
      {/* Mobile Scroll to Top floating pill */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="sm:hidden fixed bottom-18 right-4 z-40 p-2.5 rounded-full bg-neutral-900/90 text-amber-400 border border-neutral-700 shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Bottom Action Bar: Balanced, natural & clean layout */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-neutral-200 px-4 py-2 shadow-xl safe-area-bottom">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          
          {/* Action 1: Call 24/7 */}
          <a
            href={`tel:${RESORT_INFO.phones[0]}`}
            className="flex-1 flex flex-col items-center justify-center py-1 rounded-lg text-neutral-700 hover:text-neutral-950 active:scale-95 transition-all"
            aria-label="Call resort front desk"
          >
            <Phone className="w-5 h-5 text-amber-600 mb-1" />
            <span className="text-[11px] font-semibold text-neutral-700 whitespace-nowrap">Call 24/7</span>
          </a>

          {/* Action 2: WhatsApp */}
          <a
            href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1 rounded-lg text-neutral-700 hover:text-neutral-950 active:scale-95 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 mb-1" />
            <span className="text-[11px] font-semibold text-neutral-700 whitespace-nowrap">WhatsApp</span>
          </a>

          {/* Action 3: Book Stay */}
          <button
            onClick={onOpenBooking}
            className="flex-[1.4] h-10 px-4 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 whitespace-nowrap"
            aria-label="Book your stay"
          >
            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold text-white whitespace-nowrap">Book Stay</span>
          </button>

        </div>
      </div>
    </>
  );
};
