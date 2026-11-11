import React, { useState } from 'react';
import { X, Download, Palette, Image as ImageIcon, Film, Check, ExternalLink, Sparkles } from 'lucide-react';

interface AssetLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetLibraryModal: React.FC<AssetLibraryModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'palette' | 'library'>('palette');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'rooms' | 'banquet' | 'pool' | 'dining' | 'video'>('all');

  if (!isOpen) return null;

  // Extracted Color Palette from thevindhyasarthakresort.com
  const colorPalette = [
    {
      name: "Obsidian Black",
      role: "High-Contrast Headlines & Primary Actions (20%)",
      hex: "#0A0A0A",
      altHex: "#111827",
      rgb: "10, 10, 10",
      textColor: "text-white",
      bgClass: "bg-neutral-950",
      borderClass: "border-neutral-900",
      usage: "Primary CTA buttons, display headlines, dramatic banquet anchor section, luxury footer"
    },
    {
      name: "Pristine Crisp White",
      role: "Dominant Canvas & Content Sections (50%)",
      hex: "#FFFFFF",
      altHex: "#FAFAFA",
      rgb: "255, 255, 255",
      textColor: "text-neutral-950",
      bgClass: "bg-white",
      borderClass: "border-neutral-200",
      usage: "Accommodations canvas, dining section, gallery, contact section, modal containers"
    },
    {
      name: "Architectural Warm Grey",
      role: "Structural Surfaces & Cards (25%)",
      hex: "#F5F5F7",
      altHex: "#E5E5E5",
      rgb: "245, 245, 247",
      textColor: "text-neutral-950",
      bgClass: "bg-neutral-100",
      borderClass: "border-neutral-300",
      usage: "Card backgrounds, input fields, subtle separators, facility bento cards"
    },
    {
      name: "Royal Heritage Gold",
      role: "Luxury Accent & Trust Badges (5%)",
      hex: "#D97706",
      altHex: "#F59E0B",
      rgb: "217, 119, 6",
      textColor: "text-white",
      bgClass: "bg-amber-600",
      borderClass: "border-amber-600",
      usage: "Star rating icons, luxury sub-heading italics, subtle highlight badges"
    },
    {
      name: "Emerald WhatsApp Green",
      role: "Instant WhatsApp Conversions",
      hex: "#10B981",
      altHex: "#25D366",
      rgb: "16, 185, 129",
      textColor: "text-white",
      bgClass: "bg-emerald-600",
      borderClass: "border-emerald-600",
      usage: "Floating WhatsApp button, instant voucher reservation dispatch"
    }
  ];

  // Digital Asset Library
  const digitalAssets = [
    {
      id: "media-video",
      title: "Resort Walkthrough & Drone Video",
      category: "video",
      categoryLabel: "Video Tour",
      webPath: "/video/resort.mp4",
      originalPath: "/video/resort.mp4",
      size: "840 KB",
      dimensions: "1920x1080 Full HD",
      type: "MP4 Video",
      desc: "Authentic drone and ground walkthrough video of the resort campus and banquets"
    },
    {
      id: "logo",
      title: "Resort Official Logo Mark",
      category: "rooms",
      categoryLabel: "Branding",
      webPath: "/image/ResortLogo.png",
      originalPath: "/image/ResortLogo.png",
      size: "101 KB",
      dimensions: "Transparent PNG",
      type: "Vector Logo",
      desc: "Original brand wordmark and emblem from the original site"
    },
    {
      id: "deluxe-room",
      title: "Deluxe Room Suite",
      category: "rooms",
      categoryLabel: "Accommodations",
      webPath: "/image/deluxe.jpg",
      originalPath: "/image/deluxe.jpg",
      size: "34 KB",
      dimensions: "1280x853",
      type: "JPEG Image",
      desc: "Deluxe King Bedroom with mountain views"
    },
    {
      id: "super-deluxe-room",
      title: "Super Deluxe Room",
      category: "rooms",
      categoryLabel: "Accommodations",
      webPath: "/image/super_deluxe.jpg",
      originalPath: "/image/super_deluxe.jpg",
      size: "33 KB",
      dimensions: "1280x853",
      type: "JPEG Image",
      desc: "Super deluxe suite with two-seater sofa lounge"
    },
    {
      id: "family-suite",
      title: "Royal Family Suite Living Room",
      category: "rooms",
      categoryLabel: "Accommodations",
      webPath: "/image/family_suite.jpg",
      originalPath: "/image/family_suite.jpg",
      size: "37 KB",
      dimensions: "1280x853",
      type: "JPEG Image",
      desc: "Separate living suite with plush 4-seater sofa"
    },
    {
      id: "pool-azure",
      title: "Crystal Hillview Swimming Pool",
      category: "pool",
      categoryLabel: "Recreation",
      webPath: "/image/gallery_optimized/1.jpg",
      originalPath: "/image/gallery/1.jpg",
      size: "323 KB (Orig: 7.2 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Resort swimming pool facing greenery and hills"
    },
    {
      id: "banquet-hall",
      title: "Grand AC Banquet Hall (500+ Pax)",
      category: "banquet",
      categoryLabel: "Weddings & Banquets",
      webPath: "/image/gallery_optimized/127.jpg",
      originalPath: "/image/gallery/127.jpg",
      size: "243 KB (Orig: 14.5 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Air-conditioned pillar-less royal banquet hall with stage"
    },
    {
      id: "wedding-lawn",
      title: "Sprawling Marriage Lawns (1,500+ Pax)",
      category: "banquet",
      categoryLabel: "Weddings & Banquets",
      webPath: "/image/gallery_optimized/131.jpg",
      originalPath: "/image/gallery/131.jpg",
      size: "271 KB (Orig: 16.0 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Open festive marriage lawn with twilight illumination"
    },
    {
      id: "dining-desi",
      title: "Desi Traditional Food Preparation",
      category: "dining",
      categoryLabel: "Culinary",
      webPath: "/image/blog/blog-1.jpg",
      originalPath: "/image/blog/blog-1.jpg",
      size: "17 KB",
      dimensions: "800x533",
      type: "JPEG Image",
      desc: "Regional Awadhi clay-pot and handi cooking"
    },
    {
      id: "mandap-setup",
      title: "Lawn Mandap & Stage Pavilion",
      category: "banquet",
      categoryLabel: "Weddings & Banquets",
      webPath: "/image/gallery_optimized/23.jpg",
      originalPath: "/image/gallery/23.jpg",
      size: "418 KB (Orig: 19.1 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Grand outdoor wedding mandap on lush turf"
    },
    {
      id: "pool-sunset",
      title: "Poolside Loungers at Twilight",
      category: "pool",
      categoryLabel: "Recreation",
      webPath: "/image/gallery_optimized/20.jpg",
      originalPath: "/image/gallery/20.jpg",
      size: "399 KB (Orig: 14.4 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Sun loungers by the pool deck facing the mountains"
    },
    {
      id: "banquet-dining",
      title: "Royal Banquet Feast Setup",
      category: "dining",
      categoryLabel: "Culinary",
      webPath: "/image/gallery_optimized/18.jpg",
      originalPath: "/image/gallery/18.jpg",
      size: "385 KB (Orig: 16.8 MB)",
      dimensions: "1400x933",
      type: "Optimized JPEG",
      desc: "Curated wedding banquet dining hall seating"
    }
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const filteredAssets = filterCategory === 'all'
    ? digitalAssets
    : digitalAssets.filter((a) => a.category === filterCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-5xl h-[88vh] max-h-[800px] bg-white border border-neutral-200 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-neutral-900">
        
        {/* Modal Header */}
        <div className="p-5 bg-neutral-950 text-white border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold shadow-sm">
              <Palette className="w-5 h-5 text-neutral-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Brand Palette & Media Asset Library</h3>
                <span className="text-[10px] font-semibold text-neutral-300 bg-white/10 px-2 py-0.5 rounded-full">
                  White · Black · Grey Architecture
                </span>
              </div>
              <p className="text-xs text-neutral-300">
                The Vindhyasarthak Resort Hotel & Banquet · Design System & Digital Assets
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary View Switcher Tabs */}
        <div className="px-5 pt-3 bg-neutral-50 border-b border-neutral-200 flex items-center gap-4">
          <button
            onClick={() => setActiveTab('palette')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'palette'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>White, Black & Grey Palette</span>
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'library'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Downloaded Media Library & Assets ({digitalAssets.length}+)</span>
          </button>
        </div>

        {/* Tab 1: Color Scheme Analysis & Palette */}
        {activeTab === 'palette' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 bg-white">
            
            {/* Color Scheme Architectural Summary */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Modernized White, Black & Grey Design System</span>
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                As requested, the website has been redesigned to use an elegant mixture of <strong>Crisp White (Canvas & Accommodations)</strong>, <strong>Deep Obsidian Black (Hero & Banquets & Primary CTAs)</strong>, and <strong>Warm Architectural Grey (Cards, Tables & Inputs)</strong>, with subtle brass gold accents reserved strictly for rating stars and luxury editorial details.
              </p>
            </div>

            {/* Color Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colorPalette.map((col, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden flex flex-col justify-between p-4 space-y-3 shadow-xs"
                >
                  <div className="space-y-2">
                    {/* Color Swatch Box */}
                    <div
                      className={`h-20 rounded-lg flex items-center justify-center font-mono font-bold text-sm shadow-inner border border-black/10 ${col.bgClass} ${col.textColor}`}
                    >
                      {col.hex}
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-neutral-950">{col.name}</h5>
                      <span className="text-[11px] text-neutral-500 font-semibold block">
                        {col.role}
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-600 leading-relaxed">
                      {col.usage}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-neutral-500">
                      RGB: {col.rgb}
                    </span>
                    <button
                      onClick={() => copyToClipboard(col.hex)}
                      className="px-2.5 py-1 bg-white hover:bg-neutral-100 text-neutral-800 rounded border border-neutral-200 text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                    >
                      {copiedHex === col.hex ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <span>Copy Hex</span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Downloaded Media Library */}
        {activeTab === 'library' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 bg-white">
            
            {/* Library Control Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
              <div>
                <h4 className="text-sm font-bold text-neutral-950 flex items-center gap-2">
                  <Film className="w-4 h-4 text-neutral-700" />
                  <span>Curated Digital Asset Vault</span>
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  All photos & video downloaded locally into <code className="text-neutral-900 font-bold bg-neutral-200 px-1 py-0.5 rounded">/public/</code> with optimized web assets + full camera originals.
                </p>
              </div>

              {/* Category filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {(['all', 'rooms', 'banquet', 'pool', 'dining', 'video'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 text-xs rounded-lg capitalize transition-colors cursor-pointer whitespace-nowrap ${
                      filterCategory === cat
                        ? 'bg-neutral-950 text-white font-bold'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Asset Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-neutral-400 transition-all shadow-xs hover:shadow-md"
                >
                  {/* Media Preview */}
                  <div className="relative h-44 bg-neutral-200 overflow-hidden flex items-center justify-center">
                    {asset.category === 'video' ? (
                      <video
                        src={asset.webPath}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img
                        src={asset.webPath}
                        alt={asset.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-900 text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                      {asset.categoryLabel}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                        {asset.title}
                      </h5>
                      <p className="text-[11px] text-neutral-600 mt-1 line-clamp-2">
                        {asset.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-neutral-200">
                      <div className="flex items-center justify-between text-[11px] text-neutral-600 font-mono">
                        <span>{asset.dimensions}</span>
                        <span className="text-neutral-950 font-bold">{asset.size}</span>
                      </div>

                      {/* Download Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={asset.webPath}
                          download
                          className="px-2.5 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                          title="Download web-optimized version"
                        >
                          <Download className="w-3.5 h-3.5 text-amber-400" />
                          <span>Web Asset</span>
                        </a>

                        <a
                          href={asset.originalPath}
                          download
                          className="px-2.5 py-1.5 bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-semibold rounded-lg border border-neutral-300 flex items-center justify-center gap-1.5 transition-colors"
                          title="Download high-resolution original file"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Full Res</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
