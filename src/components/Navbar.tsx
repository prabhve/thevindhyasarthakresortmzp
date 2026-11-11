import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Phone, MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenConcierge: () => void;
  onOpenAssetLibrary: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenConcierge,
  onOpenAssetLibrary,
  currency,
  onToggleCurrency,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Suites & Rooms', href: '#rooms' },
    { label: 'Weddings & Banquets', href: '#banquets' },
    { label: 'Dining', href: '#dining' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Sightseeing', href: '#sightseeing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Micro Announcement Bar (Clean Dark Charcoal/Black contrast) */}
      <div className="bg-neutral-950 border-b border-neutral-800 text-xs text-neutral-300 py-1.5 sm:py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
            <span className="flex items-center gap-1 text-neutral-200 text-[11px] sm:text-xs min-w-0">
              <span className="text-amber-400 font-semibold shrink-0">📍</span>
              <span className="truncate">Mirzapur · Near BHU South Campus Barkachha</span>
            </span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <a
              href={`tel:${RESORT_INFO.phones[0]}`}
              className="hidden sm:inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors shrink-0"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{RESORT_INFO.phones[0]}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenAssetLibrary}
              className="hidden md:inline-flex items-center gap-1 text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer text-[11px]"
              title="Inspect Color Palette & Media Assets"
            >
              <span>🎨 Palette & Vault</span>
            </button>
            <span className="hidden md:inline text-neutral-700">|</span>
            <button
              onClick={onToggleCurrency}
              className="text-[11px] text-neutral-300 hover:text-amber-400 font-mono transition-colors cursor-pointer py-0.5 px-1"
              title="Switch INR / USD"
            >
              <span className="hidden xs:inline">Curr: </span><span className="text-amber-400 font-bold">{currency}</span>
            </button>
            <span className="text-neutral-700">|</span>
            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer text-[11px] sm:text-xs py-0.5 px-1"
            >
              <Sparkles className="w-3 h-3 shrink-0" />
              <span>AI Host</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Background with Hairline Grey Border & Black Text) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-neutral-900/5 border-b border-neutral-200 py-3'
            : 'bg-white border-b border-neutral-200/90 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Pure Brand Logo (No redundant text) */}
            <a
              href="#"
              className="flex items-center shrink-0 group focus:outline-none py-0.5"
              aria-label="The Vindhyasarthak Resort Home"
            >
              <img
                src={RESORT_INFO.media.logo}
                alt="The Vindhyasarthak Resort Hotel & Banquet"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </a>

            {/* Zone 2: Navigation Links (Clean Editorial Black/Grey Links) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium text-neutral-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-neutral-950 transition-colors whitespace-nowrap py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-950 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions (Guaranteed No Right Side Clipping) */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                title="Direct WhatsApp Reservation"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Book CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 active:bg-black rounded-lg shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Book Stay</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-lg focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-neutral-100 text-xs">
              <button
                onClick={onToggleCurrency}
                className="py-2 px-2 bg-neutral-100 rounded-lg text-neutral-700 text-center font-mono font-medium"
              >
                Curr: <span className="text-neutral-950 font-bold">{currency}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssetLibrary();
                }}
                className="py-2 px-2 bg-neutral-100 rounded-lg text-neutral-800 font-medium flex items-center justify-center gap-1"
              >
                <span>🎨 Palette</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConcierge();
                }}
                className="py-2 px-2 bg-amber-50 rounded-lg text-amber-800 font-medium flex items-center justify-center gap-1 border border-amber-200/60"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>AI Host</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href={`tel:${RESORT_INFO.phones[0]}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium bg-neutral-100 text-neutral-900 border border-neutral-200 hover:bg-neutral-200"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call {RESORT_INFO.phones[0]}</span>
              </a>

              <a
                href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
