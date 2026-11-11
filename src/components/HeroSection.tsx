import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RESORT_INFO, ROOMS } from '../data/resortData';
import { Play, Pause, Calendar, ArrowRight, ShieldCheck, MapPin, Users, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (roomId?: string, dates?: { checkIn: string; checkOut: string; guests: number }) => void;
  currency: 'INR' | 'USD';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, currency }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Quick search state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoom, setSelectedRoom] = useState<string>('deluxe');
  const [guests, setGuests] = useState<number>(2);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, { checkIn, checkOut, guests });
  };

  // Subtle parallax scrolling effect: background translates gently at 22% offset on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.10]);

  return (
    <div ref={sectionRef} className="relative bg-neutral-950 text-white overflow-hidden">
      
      {/* Background Cinematic Video & Image with Refined Parallax Depth */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute -top-[12%] -bottom-[12%] inset-x-0 h-[124%] w-full z-0 pointer-events-none will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={RESORT_INFO.media.heroBg}
          className="w-full h-full object-cover opacity-65"
        >
          <source src={RESORT_INFO.media.video} type="video/mp4" />
          <img
            src={RESORT_INFO.media.heroBg}
            alt="The Vindhyasarthak Resort"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Elegant Black-to-transparent scrim ensuring crystal readability without murkiness */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />
      </motion.div>

      {/* Floating Video Playback Control */}
      <div className="absolute top-6 right-6 z-20 flex items-center">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer shadow-lg"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          title={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 lg:pt-20 pb-8 sm:pb-14 flex flex-col justify-center min-h-[72vh] sm:min-h-[82vh]">
        
        {/* Main Headline & Narrative with Subtle Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 sm:space-y-5"
        >
          
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
            <span className="w-5 sm:w-6 h-px bg-amber-400" />
            <span className="text-[11px] sm:text-xs">Mirzapur's Premier Luxury Retreat & Banquets</span>
          </div>

          {/* Headline in Playfair Display */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.12] text-balance">
            Away From Monotonous Life,{' '}
            <span className="font-serif italic text-amber-400 font-normal">
              Relax Your Mind.
            </span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-sm sm:text-lg text-neutral-200 leading-relaxed max-w-2xl text-pretty font-light">
            Nestled at the tranquil foothills of the Vindhyas near BHU South Campus. 
            Experience grand 1,500+ guest wedding lawns, azure mountain-view pools, 
            authentic Awadhi clay-pot dining, and restful luxury suites.
          </p>

          {/* Action CTAs: Stacked full-width on mobile for effortless tapping */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              <span>Explore & Book Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#banquets"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg backdrop-blur-md transition-all whitespace-nowrap min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Weddings & Grand Banquets</span>
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-300 hover:text-white py-2 sm:px-3 transition-colors whitespace-nowrap"
            >
              <span>View Gallery</span>
              <span className="text-xs text-amber-400">→</span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>4.8★ Luxury Resort</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>20m to Vindhyachal Dham</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span>1,500+ Guest Lawn</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Desi & Global Cuisine</span>
            </div>
          </div>

        </motion.div>

        {/* Embedded High-Converting Quick Booking Engine (Clean White & Grey Card) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 w-full"
        >
          <form
            onSubmit={handleQuickSearchSubmit}
            className="bg-white text-neutral-900 border border-neutral-200 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/40"
          >
            <div className="text-xs uppercase tracking-wider font-bold text-neutral-800 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-neutral-950 font-bold">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Check Availability & Direct Best Rate Guarantee</span>
              </span>
              <span className="hidden sm:inline text-[11px] text-neutral-500 font-normal">
                Complimentary breakfast & zero cancellation fee up to 24h prior
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
              
              {/* Check-In */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-700">Check-In Date</label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  required
                />
              </div>

              {/* Check-Out */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-700">Check-Out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  required
                />
              </div>

              {/* Room Category */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-700">Room Category</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} ({currency === 'INR' ? `₹${r.priceINR.toLocaleString('en-IN')}` : `$${r.priceUSD}`})
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-neutral-700">Occupancy</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  <option value={1}>1 Guest (Single)</option>
                  <option value={2}>2 Guests (Couple)</option>
                  <option value={3}>3 Guests (Family)</option>
                  <option value={4}>4+ Guests (Suite / Group)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white font-semibold text-xs sm:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer h-[42px]"
                >
                  <span>Check Rates & Book</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

            </div>
          </form>
        </motion.div>

      </div>

    </div>
  );
};
