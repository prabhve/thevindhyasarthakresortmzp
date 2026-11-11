import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { BanquetWeddingsSection } from './components/BanquetWeddingsSection';
import { DiningSection } from './components/DiningSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { SightseeingSection } from './components/SightseeingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

import { ScrollReveal } from './components/ScrollReveal';
import { MotionConfig, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [bookingDates, setBookingDates] = useState<{ checkIn: string; checkOut: string; guests: number } | undefined>(undefined);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const handleOpenBooking = (
    roomId?: string,
    dates?: { checkIn: string; checkOut: string; guests: number }
  ) => {
    setSelectedRoomId(roomId || 'deluxe');
    if (dates) {
      setBookingDates(dates);
    }
    setBookingModalOpen(true);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-950 selection:text-white pb-16 sm:pb-0"
      >
      
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section with Video, Quick Search Engine, and Badges */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          currency={currency}
        />

        {/* About Section */}
        <ScrollReveal>
          <AboutSection
            onOpenBooking={() => handleOpenBooking()}
          />
        </ScrollReveal>

        {/* Accommodations & Suites */}
        <ScrollReveal>
          <RoomsSection
            onOpenBooking={handleOpenBooking}
            currency={currency}
          />
        </ScrollReveal>

        {/* Grand Destination Weddings & Banquets */}
        <ScrollReveal>
          <BanquetWeddingsSection
            onOpenBooking={() => handleOpenBooking()}
          />
        </ScrollReveal>

        {/* Culinary & Dining */}
        <ScrollReveal>
          <DiningSection />
        </ScrollReveal>

        {/* Royal Amenities & Experiences */}
        <ScrollReveal>
          <AmenitiesSection
            onOpenBooking={() => handleOpenBooking()}
          />
        </ScrollReveal>

        {/* Photo & Video Walkthrough Gallery */}
        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        {/* Mirzapur & Vindhya Sightseeing Guide with Cab Rental */}
        <ScrollReveal>
          <SightseeingSection />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>

        {/* Contact, Map, Coordinates & Inquiry Form */}
        <ScrollReveal>
          <ContactLocationSection />
        </ScrollReveal>
      </main>

      {/* Global Luxury Footer */}
      <ScrollReveal>
        <Footer
          onOpenBooking={() => handleOpenBooking()}
        />
      </ScrollReveal>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomId={selectedRoomId}
        initialDates={bookingDates}
        currency={currency}
      />

      {/* Floating Action Buttons & Ultra-Premium Mobile Luxury Dock */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Vercel Web Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />

      </motion.div>
    </MotionConfig>
  );
}
