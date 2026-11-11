import React, { useState } from 'react';
import { ROOMS, RESORT_INFO, Room } from '../data/resortData';
import { X, Calendar, Users, CheckCircle2, MessageCircle, Printer, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialDates?: { checkIn: string; checkOut: string; guests: number };
  currency: 'INR' | 'USD';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId = 'deluxe',
  initialDates,
  currency,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId);
  const [checkIn, setCheckIn] = useState<string>(initialDates?.checkIn || today);
  const [checkOut, setCheckOut] = useState<string>(initialDates?.checkOut || tomorrow);
  const [adults, setAdults] = useState<number>(initialDates?.guests || 2);
  const [children, setChildren] = useState<number>(0);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Add-ons
  const [addonPickup, setAddonPickup] = useState(false);
  const [addonDinner, setAddonDinner] = useState(false);
  const [addonTour, setAddonTour] = useState(false);

  const [bookingConfirmed, setBookingConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentRoom: Room = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((dOut.getTime() - dIn.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime < 1 ? 1 : diffTime;

  // Rate calculation
  const baseRate = currency === 'INR' ? currentRoom.priceINR : currentRoom.priceUSD;
  const roomSubtotal = baseRate * nights * roomsCount;

  // Add-on costs
  const pickupPrice = currency === 'INR' ? 1499 : 18;
  const dinnerPrice = currency === 'INR' ? 999 : 12;
  const tourPrice = currency === 'INR' ? 2499 : 30;

  let addonsTotal = 0;
  if (addonPickup) addonsTotal += pickupPrice;
  if (addonDinner) addonsTotal += dinnerPrice;
  if (addonTour) addonsTotal += tourPrice;

  const gstTax = Math.round(roomSubtotal * 0.12);
  const grandTotal = roomSubtotal + addonsTotal + gstTax;

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const generateWhatsAppMessage = () => {
    return `*BOOKING RESERVATION REQUEST - THE VINDHYASARTHAK RESORT*
----------------------------------------
• *Guest Name:* ${guestName || 'Valued Guest'}
• *Phone:* ${guestPhone || 'Not provided'}
• *Room Category:* ${currentRoom.name} (${roomsCount} Room${roomsCount > 1 ? 's' : ''})
• *Check-In:* ${checkIn} (12:00 PM)
• *Check-Out:* ${checkOut} (11:00 AM)
• *Duration:* ${nights} Night${nights > 1 ? 's' : ''}
• *Guests:* ${adults} Adults, ${children} Children
• *Estimated Total:* ${currencySymbol}${grandTotal.toLocaleString('en-IN')} (incl. taxes & add-ons)
${addonPickup ? '• + Airport / Railway Station Cab Transfer\n' : ''}${addonDinner ? '• + Special Candlelight Dinner Setup\n' : ''}${addonTour ? '• + Full-Day Vindhyachal Temple & Waterfalls Cab\n' : ''}${specialRequests ? `• *Special Notes:* ${specialRequests}\n` : ''}
Please confirm room availability and payment instructions.`;
  };

  const handleWhatsAppConfirm = () => {
    const text = generateWhatsAppMessage();
    window.open(`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDirectSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'VSR-' + Math.floor(100000 + Math.random() * 900000);
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: guestName,
          phone: guestPhone,
          email: guestEmail,
          purpose: `Room Booking: ${currentRoom.name}`,
          message: generateWhatsAppMessage()
        })
      });
    } catch {
      // ignore
    }
    setBookingConfirmed(ref);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white text-neutral-900 border border-neutral-200 rounded-2xl shadow-2xl p-5 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-full border border-neutral-200 transition-colors z-20 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Confirmation State */}
        {bookingConfirmed ? (
          <div className="py-8 space-y-6 text-center max-w-xl mx-auto animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block">
                Reservation Request Acknowledged
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950">
                Booking Voucher Generated!
              </h3>
              <p className="text-sm text-neutral-600">
                Reservation Reference: <strong className="text-neutral-950 font-mono text-base">{bookingConfirmed}</strong>
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl text-left space-y-2 text-xs text-neutral-700">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span>Room Selected:</span>
                <strong className="text-neutral-950">{currentRoom.name} ({roomsCount} Room)</strong>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span>Dates:</span>
                <span className="text-neutral-950">{checkIn} to {checkOut} ({nights} Nights)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span>Guests:</span>
                <span className="text-neutral-950">{adults} Adults, {children} Children</span>
              </div>
              <div className="flex justify-between pt-1 font-semibold text-sm">
                <span>Grand Total (Est):</span>
                <span className="text-neutral-950 font-mono font-bold">{currencySymbol}{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppConfirm}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send To Front Desk on WhatsApp</span>
              </button>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-neutral-700" />
                <span>Print Voucher</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs sm:text-sm font-medium"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Normal Booking Form */
          <form onSubmit={handleDirectSubmission} className="space-y-6">
            
            {/* Header */}
            <div>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-1">
                Direct Reservation Portal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950">
                Book Your Stay at Vindhyasarthak
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Best Rate Guaranteed · Complimentary Breakfast Included · Zero Cancellation Fee up to 24h prior
              </p>
            </div>

            {/* Room Selection Carousel / Cards */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
                Select Accommodation Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ROOMS.map((r) => {
                  const isSelected = r.id === selectedRoomId;
                  const price = currency === 'INR' ? `₹${r.priceINR.toLocaleString('en-IN')}` : `$${r.priceUSD}`;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoomId(r.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-neutral-50 border-neutral-950 ring-2 ring-neutral-950/15'
                          : 'bg-white border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={r.image} alt={r.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-neutral-950 leading-tight">{r.name}</h4>
                          <span className="text-[11px] text-neutral-500 block">{r.sizeSqFt} sq ft</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-neutral-200 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-neutral-950">{price}/nt</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-800' : 'text-neutral-400'}`}>
                          {isSelected ? '✓ Selected' : 'Select'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dates & Occupancy Grid in Light Grey Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
              <div>
                <label className="text-xs text-neutral-700 font-semibold block mb-1">Check-In</label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-neutral-700 font-semibold block mb-1">Check-Out</label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-neutral-700 font-semibold block mb-1">Rooms Count</label>
                <select
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                >
                  <option value={1}>1 Room</option>
                  <option value={2}>2 Rooms</option>
                  <option value={3}>3 Rooms</option>
                  <option value={4}>4+ Rooms</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-700 font-semibold block mb-1">Guests (Adults / Kids)</label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-2 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults</option>
                    <option value={4}>4 Adults</option>
                  </select>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-2 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-950"
                  >
                    <option value={0}>0 Kids</option>
                    <option value={1}>1 Kid</option>
                    <option value={2}>2 Kids</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Optional Curated Add-ons in Grey Cards */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
                Enhance Your Experience (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                  addonPickup ? 'bg-amber-50 border-amber-300' : 'bg-white border-neutral-200'
                }`}>
                  <div className="text-xs">
                    <span className="font-bold text-neutral-950 block">Station / Airport Cab</span>
                    <span className="text-neutral-500 text-[11px]">Mirzapur / Varanasi pickup</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={addonPickup}
                    onChange={(e) => setAddonPickup(e.target.checked)}
                    className="w-4 h-4 accent-neutral-950"
                  />
                </label>

                <label className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                  addonDinner ? 'bg-amber-50 border-amber-300' : 'bg-white border-neutral-200'
                }`}>
                  <div className="text-xs">
                    <span className="font-bold text-neutral-950 block">Candlelight Dinner</span>
                    <span className="text-neutral-500 text-[11px]">Poolside 4-course meal</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={addonDinner}
                    onChange={(e) => setAddonDinner(e.target.checked)}
                    className="w-4 h-4 accent-neutral-950"
                  />
                </label>

                <label className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                  addonTour ? 'bg-amber-50 border-amber-300' : 'bg-white border-neutral-200'
                }`}>
                  <div className="text-xs">
                    <span className="font-bold text-neutral-950 block">Vindhyachal & Falls Tour</span>
                    <span className="text-neutral-500 text-[11px]">Chauffeur car for day</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={addonTour}
                    onChange={(e) => setAddonTour(e.target.checked)}
                    className="w-4 h-4 accent-neutral-950"
                  />
                </label>
              </div>
            </div>

            {/* Guest Primary Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">Guest Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">WhatsApp / Mobile *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="suman@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950"
                />
              </div>
            </div>

            {/* Price Breakdown & CTAs */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-700">
                <span>{currentRoom.name} x {nights} Night{nights > 1 ? 's' : ''} ({roomsCount} room):</span>
                <span className="font-mono text-neutral-950 font-semibold">{currencySymbol}{roomSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {addonsTotal > 0 && (
                <div className="flex items-center justify-between text-xs text-neutral-700">
                  <span>Selected Experience Add-ons:</span>
                  <span className="font-mono text-neutral-950 font-semibold">{currencySymbol}{addonsTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Taxes & GST (12%):</span>
                <span className="font-mono text-neutral-700">{currencySymbol}{gstTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5">
                <div>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Estimated Total</span>
                  <span className="text-2xl font-bold text-neutral-950 font-mono">
                    {currencySymbol}{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppConfirm}
                    className="w-full sm:w-auto justify-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Reserve</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto justify-center px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer min-h-[44px]"
                  >
                    <span>Confirm Request</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
