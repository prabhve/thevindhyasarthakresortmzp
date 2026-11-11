import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Gemini client if API key is present
const geminiApiKey = process.env.GEMINI_API_KEY || '';
const ai = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

// System instruction with deep knowledge of The Vindhyasarthak Resort Hotel & Banquet
const RESORT_SYSTEM_INSTRUCTION = `You are "Sarthak", the knowledgeable, warm, and highly courteous AI Concierge of "The Vindhyasarthak Resort Hotel & Banquet" located in Mirzapur, Uttar Pradesh near BHU South Campus (Barkachha).

Key Resort Information:
- Resort Name: The Vindhyasarthak Resort Hotel & Banquet
- Location: Robertganj Road Near B.H.U South Campus, Belahra Mod, Dhanawal, Mirzapur - 231001, Uttar Pradesh
- Contact: +91 7753001160, +91 7753001137 | WhatsApp: +91 7753001160 | Email: info@thevindhyasarthakresort.com
- Timings: Check-in: 12:00 PM | Check-out: 11:00 AM | Front Desk: 24/7
- Rooms & Pricing:
  1. Deluxe Room: ~230 sq ft, 2 Adults + 1 Child (<12y), plush King bed, mountain view, rain shower, minibar, Bluetooth speaker, AC, complimentary breakfast, starts around ₹2,499/night ($30).
  2. Super Deluxe Room: ~300 sq ft, 3 Adults + 1 Child, plush King/twin beds, 2-seater sofa, coffee table, study table, panoramic hill views, complimentary breakfast, starts around ₹3,499/night ($42).
  3. Royal Family Suite: ~400 sq ft, 4 Adults + 2 Children, master bedroom + separate furnished living room with 4-seater and 2-seater sofas, VIP fruit basket & breakfast, starts around ₹4,999/night ($60).
- Royal Banquets & Weddings:
  - Sprawling marriage lawns accommodating 1,500+ guests
  - Pillar-less air-conditioned banquet hall for 500+ guests
  - Dedicated dance floor, stage décor, audio/video systems, bridal suites, customized live catering.
- Dining:
  - Multicuisine Restaurant (North Indian, Chinese, Continental, Tandoori)
  - Desi Traditional Restaurant (Authentic Purvanchali & Awadhi clay-pot delicacies)
- Amenities:
  - Mountain-view swimming pool with sun loungers
  - Indoor/outdoor Game Club (Carrom, Chess, Table Tennis, Badminton)
  - Gymnasium & wellness area
  - Travel Desk with rental cars for sightseeing
- Sightseeing & Distances:
  - BHU South Campus Barkachha: 1.2 km (3 mins)
  - Wyndham Falls: 14 km (20 mins)
  - Maa Vindhyavasini Temple (Vindhyachal Shaktipeeth): 18 km (25 mins)
  - Ashtabhuja & Kali Khoh Temples: 20 km (30 mins)
  - Sirsi Dam & Falls: 32 km (40 mins)
  - Lakhaniya Dari Falls: 38 km (50 mins)
  - Chunar Fort: 42 km (55 mins)
  - Varanasi (Lal Bahadur Shastri) Airport: ~75 km (~1.5 hours)

Your Persona:
- Warm, polite, hospitable Indian luxury concierge tone (can speak in English, Hindi, or Hinglish depending on guest's input).
- Helpful and concise. Answer specific questions about room rates, weddings, timings, nearby waterfalls, and temple darshan.
- Encourage them to book online or connect on WhatsApp (+91 7753001160) for instant reservations or custom wedding packages.`;

// API endpoint for resort concierge chat
app.post('/api/concierge', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages array' });
    }

    const isRealKey = geminiApiKey && geminiApiKey !== 'MY_GEMINI_API_KEY' && !geminiApiKey.includes('PLACEHOLDER');

    if (!isRealKey || !ai) {
      // Smart domain-tailored responses for The Vindhyasarthak Resort
      const lastUserMsg = (messages[messages.length - 1]?.content || '').toLowerCase();
      let smartReply = "Namaste! 🙏 Welcome to The Vindhyasarthak Resort & Banquet, Mirzapur. We offer serene accommodations amidst hill views, royal 1500+ guest wedding lawns, swimming pool, and authentic desi multicuisine dining. How can I assist you today?";

      if (lastUserMsg.includes('room') || lastUserMsg.includes('rate') || lastUserMsg.includes('price') || lastUserMsg.includes('tariff') || lastUserMsg.includes('cost')) {
        smartReply = "Namaste! Our room tariffs are:\n• Deluxe Room (230 sq ft, King Bed, Mountain View): ₹2,499 / night\n• Super Deluxe Room (300 sq ft, Lounge Sofa & Study): ₹3,499 / night\n• Royal Family Suite (400 sq ft, Separate Living Room & Sofa Suite): ₹4,999 / night\n\nAll bookings include complimentary gourmet breakfast, free high-speed Wi-Fi, and swimming pool access! Would you like to reserve dates?";
      } else if (lastUserMsg.includes('wedding') || lastUserMsg.includes('lawn') || lastUserMsg.includes('banquet') || lastUserMsg.includes('marriage') || lastUserMsg.includes('party')) {
        smartReply = "Namaste! The Vindhyasarthak Resort is Mirzapur's premier wedding destination:\n• Grand Open Wedding Lawn: Capacity of 1,500+ guests with ambient fairy lighting and customized mandap\n• AC Royal Banquet Hall: Capacity of 500+ guests (pillar-less with stage and DJ floor)\n• Live food stalls with pure veg Awadhi, North Indian & Continental menus\n• Bridal suites and room blocks for wedding party.\n\nOur banquet director is available at +91 7753001137 / +91 7753001160 for custom event packages!";
      } else if (lastUserMsg.includes('temple') || lastUserMsg.includes('vindhyachal') || lastUserMsg.includes('waterfall') || lastUserMsg.includes('cab') || lastUserMsg.includes('tour') || lastUserMsg.includes('wyndham') || lastUserMsg.includes('sirsi')) {
        smartReply = "Namaste! Our resort has a dedicated Travel & Sightseeing Desk with sanitized chauffeur cars:\n• Maa Vindhyavasini Shaktipeeth (Vindhyachal): 18 km (~25 mins)\n• Ashtabhuja & Kali Khoh Temples: 20 km (~30 mins)\n• Wyndham Falls: 14 km (~20 mins)\n• Sirsi Dam & Waterfalls: 32 km (~40 mins)\n• Historic Chunar Fort: 42 km (~55 mins)\n• BHU South Campus: 1.2 km (2 mins)\n\nWe provide AC Sedan and SUV day packages with experienced local drivers.";
      } else if (lastUserMsg.includes('food') || lastUserMsg.includes('restaurant') || lastUserMsg.includes('menu') || lastUserMsg.includes('dine') || lastUserMsg.includes('lunch') || lastUserMsg.includes('dinner')) {
        smartReply = "Namaste! We offer two distinct dining experiences:\n1. Desi Traditional Restaurant: Authentic Purvanchali & Awadhi clay-pot Handi Biryani, Baati Chokha, and desi ghee specialties.\n2. Multicuisine Restaurant & Poolside Lounge: North Indian, Tandoori, Chinese and Continental favorites.\n\nOpen daily from 7:00 AM to 11:00 PM with 24/7 in-room dining available for guests.";
      } else if (lastUserMsg.includes('pool') || lastUserMsg.includes('gym') || lastUserMsg.includes('game') || lastUserMsg.includes('facility')) {
        smartReply = "Namaste! Staying guests enjoy complimentary access to our scenic Hillview Swimming Pool, fitness Gymnasium, and our indoor/outdoor Game Club (Carrom, Chess, Table Tennis, Badminton).";
      }

      return res.json({ reply: smartReply });
    }

    // Convert client chat history to Gemini format
    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // Promise race with 5s timeout to guarantee swift response
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Gemini API timeout')), 5000)
    );

    const apiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction: RESORT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const response: any = await Promise.race([apiPromise, timeoutPromise]);
    const reply = response.text || "Namaste! Welcome to The Vindhyasarthak Resort. How may I assist you with your booking or wedding inquiry?";
    res.json({ reply });
  } catch (error: any) {
    console.error('Concierge API fallback:', error?.message);
    res.json({ 
      reply: 'Namaste! Our 24/7 Front Office reservation manager is available live at +91 7753001160 and WhatsApp. Deluxe rooms start from ₹2,499 with complimentary breakfast. How may we welcome you to Mirzapur?' 
    });
  }
});

// API endpoint for booking inquiries & lead capture
app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = req.body;
    const bookingRef = 'VSR-' + Math.floor(100000 + Math.random() * 900000);
    // In production, can store in DB / notify via email or SMS
    console.log('New Inquiry received:', bookingRef, inquiry);
    res.json({
      success: true,
      bookingRef,
      message: 'Inquiry received successfully! Our front office reservation manager will contact you within 30 minutes.'
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// Server setup - Dev vs Prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Resort server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
