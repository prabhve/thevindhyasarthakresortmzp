import React from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenConcierge: () => void;
  onOpenAssetLibrary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenConcierge, onOpenAssetLibrary }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs">
      
      {/* Upper Newsletter / Quick CTA strip */}
      <div className="border-b border-neutral-900/80 py-10 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">
              Planning a Stay or Grand Wedding Celebration?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Connect directly with our general manager for custom wedding decor and group tariff offers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Book Online</span>
            </button>
            <a
              href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Reservation Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={RESORT_INFO.media.logo}
                alt="The Vindhyasarthak Resort"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <span className="font-display text-lg font-bold text-white block">
                  The Vindhyasarthak Resort
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 uppercase font-medium">
                  Hotel & Banquets · Mirzapur
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed pr-6">
              A serene haven nestled amidst nature's splendor on Robertganj Road near BHU South Campus Barkachha, Dhanawal, Mirzapur. Offering panoramic hill views, royal marriage lawns, air-conditioned banquet halls, and authentic regional Awadhi dining.
            </p>

            <div className="pt-2 text-neutral-300 space-y-1 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{RESORT_INFO.address.street}, Mirzapur-231001, UP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 7753001160 / +91 7753001137</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{RESORT_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Accommodations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Deluxe Room (King Bed)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Super Deluxe Room (Lounge Suite)
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Royal Family Suite
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  Check Instant Tariff & Availability →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Experiences & Banquets */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Royal Facilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#banquets" className="hover:text-amber-400 transition-colors">
                  Royal Wedding Lawns (1,500+ Pax)
                </a>
              </li>
              <li>
                <a href="#banquets" className="hover:text-amber-400 transition-colors">
                  Air Conditioned Banquet Hall (500+ Pax)
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-400 transition-colors">
                  Desi Traditional Restaurant
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-400 transition-colors">
                  Multicuisine & Poolside Bar
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Hillview Swimming Pool & Gym
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Indoor & Outdoor Game Club
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Pilgrimage & Sightseeing */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Mirzapur Excursions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  Maa Vindhyavasini Temple (18 km)
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  Wyndham Falls (14 km)
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  Sirsi Dam & Waterfalls (32 km)
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  Lakhaniya Dari Falls (38 km)
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  Chunar Fort & Ganga Bluff (42 km)
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition-colors">
                  BHU South Campus Barkachha (1 km)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Legal & Copyright Strip */}
        <div className="pt-12 mt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} The Vindhyasarthak Resort Hotel & Banquet. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-600">Robertganj Rd, Belahra Mod, Mirzapur - 231001</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenAssetLibrary}
              className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              🎨 Brand Palette & Media Vault
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenConcierge}
              className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              Ask AI Concierge
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
