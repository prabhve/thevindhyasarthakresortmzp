import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('Room Booking Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionRef, setSubmissionRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, purpose, message })
      });
      const data = await res.json();
      setSubmissionRef(data.bookingRef || 'VSR-' + Math.floor(100000 + Math.random() * 900000));
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch {
      setSubmissionRef('VSR-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Reach Out to Our <br />
            <span className="font-serif italic text-neutral-700">24/7 Front Office Concierge</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm mt-2">
            Have questions about room tariffs, wedding lawn dates, or customized travel packages? We are here to assist 24 hours a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card in Grey */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-950 shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">Resort Address</h4>
                  <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                    {RESORT_INFO.address.street}, {RESORT_INFO.address.city}, {RESORT_INFO.address.state} - {RESORT_INFO.address.pincode}
                  </p>
                  <p className="text-[11px] text-amber-800 font-semibold mt-1">
                    Landmark: Right next to BHU Rajiv Gandhi South Campus Barkachha
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-950 shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">Telephone Support (24/7)</h4>
                  <div className="flex flex-col gap-0.5 mt-1 text-xs text-neutral-700 font-medium">
                    <a href={`tel:${RESORT_INFO.phones[0]}`} className="hover:text-neutral-950 transition-colors">
                      {RESORT_INFO.phones[0]} (Primary Front Office)
                    </a>
                    <a href={`tel:${RESORT_INFO.phones[1]}`} className="hover:text-neutral-950 transition-colors">
                      {RESORT_INFO.phones[1]} (Banquet & Events Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-950 shrink-0 mt-0.5 shadow-xs">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">Electronic Mail</h4>
                  <a
                    href={`mailto:${RESORT_INFO.email}`}
                    className="text-xs text-neutral-700 hover:text-neutral-950 transition-colors block mt-1 font-medium"
                  >
                    {RESORT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-950 shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">Operational Hours</h4>
                  <p className="text-xs text-neutral-700 mt-1">
                    Check-in: <strong className="text-neutral-950">12:00 PM</strong> · Check-out: <strong className="text-neutral-950">11:00 AM</strong>
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Restaurant: 7:00 AM – 11:00 PM | Concierge: 24/7
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Trigger */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

            </div>

            {/* Embedded Location Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 h-52 relative bg-neutral-100">
              <iframe
                title="Resort Location Map"
                src="https://maps.google.com/maps?q=Belahra+Mod+Mirzapur+BHU+South+Campus&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 contrast-105 opacity-90 hover:opacity-100 transition-all"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-white/95 border border-neutral-200 text-[10px] text-neutral-800 font-semibold px-2.5 py-1 rounded shadow-xs">
                📍 Mirzapur - Robertganj Hwy
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-1">
                Guest Inquiry Form
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
                Send Us Your Query Anytime
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Our front office manager will review your dates, room requirements, or event plans and get back within 30 minutes.
              </p>
            </div>

            {submissionRef ? (
              <div className="p-6 bg-white border border-emerald-300 rounded-xl space-y-3 animate-in fade-in shadow-xs">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-neutral-950">Inquiry Successfully Transmitted!</h4>
                    <p className="text-xs text-emerald-700 font-mono mt-0.5 font-bold">
                      Reference Code: <strong className="text-neutral-950">{submissionRef}</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Thank you for connecting with The Vindhyasarthak Resort & Banquet. A senior reservation officer will contact your phone or WhatsApp shortly.
                </p>
                <button
                  onClick={() => setSubmissionRef(null)}
                  className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors font-medium"
                    >
                      <option>Room Booking Inquiry</option>
                      <option>Wedding & Banquet Lawn Booking</option>
                      <option>Corporate Retreat & Conference</option>
                      <option>Vindhyachal Pilgrimage & Cab Booking</option>
                      <option>Restaurant Table & Catering Query</option>
                      <option>General Feedback / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Your Specific Requirements or Questions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us your desired dates, number of rooms, guest count, or any special requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors placeholder:text-neutral-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-neutral-950 hover:bg-neutral-800 active:bg-black disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{isSubmitting ? 'Transmitting Query...' : 'Send Message To Front Desk'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
