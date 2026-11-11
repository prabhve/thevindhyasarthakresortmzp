export interface Room {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  priceUSD: number;
  sizeSqFt: number;
  occupancy: {
    adults: number;
    children: number;
  };
  bed: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: string[];
  popular?: boolean;
}

export interface AmenityHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  badge?: string;
  image: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  driveTime: string;
  category: 'Spiritual' | 'Waterfall' | 'Heritage' | 'Campus';
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'banquet' | 'pool' | 'dining' | 'outdoors';
  categoryLabel: string;
  src: string;
  originalSrc: string;
  caption: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  occasion: string;
  rating: number;
  date: string;
  comment: string;
}

export const RESORT_INFO = {
  name: "The Vindhyasarthak Resort & Banquet",
  legalName: "The Vindhyasarthak Resort Hotel & Banquet",
  shortName: "Vindhya Sarthak Resort",
  tagline: "Away From Monotonous Life · Relax Your Mind",
  motto: "A Serene Haven Nestled Amidst Nature's Splendor",
  description: "Located near BHU South Campus in Mirzapur at the foothills of the Vindhya mountains, The Vindhyasarthak Resort Hotel & Banquet is the region's premier luxury retreat for family vacations, royal weddings, grand banquets, corporate conclaves, and spiritual retreats to Vindhyachal Dham.",
  address: {
    street: "Robertganj Road, Near B.H.U South Campus, Belahra Mod, Dhanawal",
    city: "Mirzapur",
    state: "Uttar Pradesh",
    pincode: "231001",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=The+Vindhyasarthak+Resort+Mirzapur",
  },
  phones: ["+91 7753001160", "+91 7753001137"],
  whatsapp: "+917753001160",
  whatsappMessage: "Hello! I am interested in booking / event inquiry at The Vindhyasarthak Resort & Banquet. Please share details and availability.",
  email: "info@thevindhyasarthakresort.com",
  timing: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    frontDesk: "24/7 Front Desk & Concierge Service",
    restaurant: "7:00 AM – 11:00 PM",
  },
  stats: [
    { value: "4.8", label: "Guest Rating (Google & Direct)" },
    { value: "1,500+", label: "Wedding Lawn Capacity" },
    { value: "500+", label: "Air-Conditioned Banquet Guests" },
    { value: "24/7", label: "Warm Indian Hospitality" },
  ],
  media: {
    logo: "/image/ResortLogo.png",
    video: "/video/resort.mp4",
    heroBg: "/image/about_bg.jpg",
  }
};

export const ROOMS: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    tagline: "Serene retreat with mountain vistas & contemporary luxury",
    priceINR: 2499,
    priceUSD: 30,
    sizeSqFt: 230,
    occupancy: {
      adults: 2,
      children: 1,
    },
    bed: "Plush King-Size Bed",
    image: "/image/deluxe.jpg",
    gallery: ["/image/deluxe.jpg", "/image/room1.jpg", "/image/room2.jpg"],
    description: "Experience unparalleled comfort and tranquil bliss in our Deluxe Room, thoughtfully appointed to provide a serene sanctuary for couples and travelers exploring Mirzapur and Vindhyachal.",
    features: [
      "Spacious room with stylish décor and warm ambiance",
      "Plush king-size bed with hypoallergenic premium linens",
      "En-suite designer bathroom with rainfall showerhead",
      "Panoramic views of the green mountains and landscape",
      "Individual climate control air conditioning",
      "Bedside table and soft reading lamps"
    ],
    amenities: [
      "Complimentary Gourmet Breakfast",
      "High-speed Free Wi-Fi",
      "Minibar & Tea/Coffee Maker",
      "Flat-screen HD TV",
      "Bluetooth Speaker with Microphone",
      "Iron and Ironing Board",
      "Hairdryer, Plush Towels & Slippers",
      "Complimentary Dental & Shaving Kits",
      "Wardrobe, Hangers & Luggage Rack",
      "24-Hour Room Service & Daily Housekeeping"
    ]
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe Room",
    tagline: "Expansive space, executive workstation & scenic lounge seating",
    priceINR: 3499,
    priceUSD: 42,
    sizeSqFt: 300,
    occupancy: {
      adults: 3,
      children: 1,
    },
    bed: "Plush King Bed or Twin Beds",
    image: "/image/super_deluxe.jpg",
    gallery: ["/image/super_deluxe.jpg", "/image/room3.jpg", "/image/room4.jpg"],
    popular: true,
    description: "Elevate your stay with our expansive Super Deluxe Room, designed for executives, discerning couples, and small families seeking elevated luxury, sitting lounge comfort, and work ergonomics.",
    features: [
      "Expansive 300 sq ft bedroom with curated seating area",
      "Two-seater comfort sofa and polished coffee table",
      "Ergonomic study table and work lamp for productivity",
      "Sweeping panoramic views of the scenic Vindhya hills",
      "Plush king-size bed or comfortable twin arrangements",
      "Spacious luxury bath with rain shower & organic botanicals"
    ],
    amenities: [
      "Complimentary Buffet Breakfast",
      "High-Speed Free Wi-Fi",
      "Minibar & Premium Tea / Coffee Station",
      "Two-Seater Sofa & Coffee Table",
      "Dedicated Study Desk & Lamp",
      "Flat-screen TV with Satellite Channels",
      "Bluetooth Sound System & Karaoke Mic",
      "Iron & Ironing Station",
      "Hairdryer, Bathrobe, Luxury Slippers",
      "Express Laundry & Dry Cleaning Access"
    ]
  },
  {
    id: "family-suite",
    name: "Royal Family Suite",
    tagline: "Grand master suite with dedicated living lounge & home comfort",
    priceINR: 4999,
    priceUSD: 60,
    sizeSqFt: 400,
    occupancy: {
      adults: 4,
      children: 2,
    },
    bed: "Master King Bedroom + Living Lounge",
    image: "/image/family_suite.jpg",
    gallery: ["/image/family_suite.jpg", "/image/family_suite_long.jpg", "/image/room3.jpg"],
    description: "Experience the ultimate in lavish comfort with our grand Family Suite. Featuring an expansive separate living room with full sofa suite, it is tailored for family holidays, wedding entourages, and extended vacationers.",
    features: [
      "Expansive 400 sq ft layout with separate living room and master bedroom",
      "Furnished lounge with 4-seater and 2-seater premium sofas & center table",
      "Master bedroom with king-size plush bed and premium hand-stitched linens",
      "Private balcony access with picturesque sunrise & hill views",
      "Ideal for joint families, wedding guests, or long-stay travellers",
      "VIP check-in and priority concierge hospitality"
    ],
    amenities: [
      "Complimentary Royal Breakfast Buffet",
      "Welcome Drink & Fresh Fruit Basket on Arrival",
      "4-Seater & 2-Seater Living Room Sofa Suite",
      "Multiple Flat-Screen Smart TVs",
      "High-Speed Free Wi-Fi",
      "Minibar, Refrigerator & Tea/Coffee Bar",
      "Bluetooth Party Speaker with Wireless Mic",
      "Twin Vanity & Rainfall Shower Bath",
      "Iron, Ironing Board & Clothes Steamer",
      "24/7 Dedicated Butler & Room Service"
    ]
  }
];

export const AMENITIES: AmenityHighlight[] = [
  {
    id: "restaurant",
    title: "Multicuisine & Desi Traditional Dining",
    category: "Culinary",
    description: "Savor a gastronomic journey featuring authentic regional Awadhi & Purvanchali clay-pot dishes alongside world-class North Indian, Continental, and Chinese delicacies created by master chefs.",
    icon: "Utensils",
    badge: "Pure & Desi Flavors",
    image: "/image/blog/blog-1.jpg"
  },
  {
    id: "banquet",
    title: "Royal Banquet & Wedding Lawns",
    category: "Celebrations",
    description: "Host unforgettable destination weddings, sangeet, ring ceremonies, and corporate galas. Features a pillar-less 500+ AC Banquet Hall and lush open lawns welcoming over 1,500 guests with complete event production.",
    icon: "Sparkles",
    badge: "Up to 1500+ Guests",
    image: "/image/gallery_optimized/127.jpg"
  },
  {
    id: "swimming-pool",
    title: "Scenic Hillview Swimming Pool",
    category: "Recreation",
    description: "Immerse yourself in crystal-clear azure waters surrounded by refreshing greenery, breezy mountain air, and comfortable poolside sun loungers suitable for both adults and children.",
    icon: "Waves",
    badge: "Clean & Family-Friendly",
    image: "/image/gallery_optimized/1.jpg"
  },
  {
    id: "game-club",
    title: "Indoor & Outdoor Game Club",
    category: "Leisure",
    description: "Spend lively evenings with family and friends playing Carrom, Chess, Table Tennis, Badminton, and an array of board games in our dedicated activity lounge.",
    icon: "Gamepad2",
    badge: "Fun For All Ages",
    image: "/image/gallery_optimized/20.jpg"
  },
  {
    id: "gymnasium",
    title: "Wellness & Gymnasium",
    category: "Fitness",
    description: "Stay invigorated with our on-site fitness area equipped with cardio treadmills, cross trainers, free weights, and stretching mats amidst tranquil natural morning breeze.",
    icon: "Dumbbell",
    badge: "Complimentary For Guests",
    image: "/image/gallery_optimized/18.jpg"
  },
  {
    id: "car-rental",
    title: "Sightseeing & Chauffeur Fleet",
    category: "Travel Desk",
    description: "Direct doorstep car rentals and guided tour packages to famous Mirzapur waterfalls, Vindhyachal Maa Vindhyavasini Temple, Chunar Fort, and Varanasi airport pickups.",
    icon: "Car",
    badge: "Guided Tour Service",
    image: "/image/gallery_optimized/23.jpg"
  }
];

export const SIGHTSEEING: Attraction[] = [
  {
    id: "vindhyachal",
    name: "Maa Vindhyavasini Temple (Vindhyachal)",
    distance: "18 km",
    driveTime: "25 mins",
    category: "Spiritual",
    description: "One of the 51 sacred Shaktipeeths of India, situated on the sacred banks of Mother Ganga. Millions visit yearly for darshan of Goddess Durga, Maha Saraswati, and Maha Kali.",
    highlights: ["Shaktipeeth Pilgrimage", "Ganga Aarti", "Trikon Parikrama (Vindhyachal - Kali Khoh - Ashtabhuja)"]
  },
  {
    id: "wyndham-falls",
    name: "Wyndham Falls",
    distance: "14 km",
    driveTime: "20 mins",
    category: "Waterfall",
    description: "A picturesque cascading waterfall situated amidst rocky cliffs and lush green forests. Ideal for serene picnics, photography, and gentle water wading.",
    highlights: ["Natural Rock Formations", "Scenic Viewpoints", "Family Picnic Haven"]
  },
  {
    id: "sirsi-dam",
    name: "Sirsi Dam & Waterfalls",
    distance: "32 km",
    driveTime: "40 mins",
    category: "Waterfall",
    description: "A magnificent reservoir and seasonal cascading waterfall where water plunges down deep stone tiers surrounded by wild nature and hills.",
    highlights: ["Panoramic Reservoir Vistas", "Rushing White Water Cascades", "Migratory Birds"]
  },
  {
    id: "lakhaniya-dari",
    name: "Lakhaniya Dari Falls",
    distance: "38 km",
    driveTime: "50 mins",
    category: "Waterfall",
    description: "Deep jungle gorges and a 100-foot waterfall renowned for trekking, nature walks, and cool crystal mountain pools nestled in the Vindhya range.",
    highlights: ["Jungle Trekking Trail", "Majestic 100ft Drop", "Unspoiled Wilderness"]
  },
  {
    id: "chunar-fort",
    name: "Historic Chunar Fort",
    distance: "42 km",
    driveTime: "55 mins",
    category: "Heritage",
    description: "Ancient stone fort dating back to King Vikramaditya and Sher Shah Suri, offering dramatic views over the meandering Ganga and legendary legends of Chandrakanta.",
    highlights: ["16th-Century Architecture", "Bhartrihari Samadhi", "Sun Dial & Panoramic Ganga Bluff"]
  },
  {
    id: "bhu-south-campus",
    name: "BHU South Campus (Barkachha)",
    distance: "1.2 km",
    driveTime: "3 mins",
    category: "Campus",
    description: "The sprawling 2,700-acre green satellite campus of Banaras Hindu University, featuring state-of-the-art agricultural research, botanical reserves, and quiet tree-lined avenues.",
    highlights: ["Neighboring Institution", "2,700 Acres Greenery", "Academic & Research Hub"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Crystal Azure Swimming Pool",
    category: "pool",
    categoryLabel: "Swimming Pool",
    src: "/image/gallery_optimized/1.jpg",
    originalSrc: "/image/gallery/1.jpg",
    caption: "Family swimming pool overlooking the hills and manicured lawns"
  },
  {
    id: "g2",
    title: "Grand Royal Banquet & Stage",
    category: "banquet",
    categoryLabel: "Royal Banquet",
    src: "/image/gallery_optimized/127.jpg",
    originalSrc: "/image/gallery/127.jpg",
    caption: "Fully air-conditioned pillar-less banquet hall dressed for high-profile weddings"
  },
  {
    id: "g3",
    title: "Lush Evening Celebration Lawns",
    category: "outdoors",
    categoryLabel: "Wedding Lawns",
    src: "/image/gallery_optimized/131.jpg",
    originalSrc: "/image/gallery/131.jpg",
    caption: "Festive ambient lighting across the expansive resort party lawns"
  },
  {
    id: "g4",
    title: "Resort Entrance & Grand Facade",
    category: "outdoors",
    categoryLabel: "Resort Facade",
    src: "/image/gallery_optimized/141.jpg",
    originalSrc: "/image/gallery/141.jpg",
    caption: "Welcoming driveway and architectural night illumination"
  },
  {
    id: "g5",
    title: "Deluxe Suite King Bed",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
    src: "/image/gallery_optimized/10.jpg",
    originalSrc: "/image/gallery/10.jpg",
    caption: "Plush King bedding and curated interiors for sound, peaceful sleep"
  },
  {
    id: "g6",
    title: "Executive Work & Lounge Space",
    category: "rooms",
    categoryLabel: "Rooms & Suites",
    src: "/image/gallery_optimized/11.jpg",
    originalSrc: "/image/gallery/11.jpg",
    caption: "Super Deluxe ergonomic study desk and seating corner"
  },
  {
    id: "g7",
    title: "Banqueting Dining Hall",
    category: "dining",
    categoryLabel: "Dining & Food",
    src: "/image/gallery_optimized/18.jpg",
    originalSrc: "/image/gallery/18.jpg",
    caption: "Generous seating layout for lavish wedding feasts and family gatherings"
  },
  {
    id: "g8",
    title: "Poolside Loungers & Open Terrace",
    category: "pool",
    categoryLabel: "Swimming Pool",
    src: "/image/gallery_optimized/20.jpg",
    originalSrc: "/image/gallery/20.jpg",
    caption: "Soak in the golden sunset while unwinding by the poolside"
  },
  {
    id: "g9",
    title: "Night Garden Illumination",
    category: "outdoors",
    categoryLabel: "Wedding Lawns",
    src: "/image/gallery_optimized/22.jpg",
    originalSrc: "/image/gallery/22.jpg",
    caption: "Royal lighting arrangement creating an enchanting atmosphere"
  },
  {
    id: "g10",
    title: "Lawn Mandap & Stage Pavilion",
    category: "banquet",
    categoryLabel: "Royal Banquet",
    src: "/image/gallery_optimized/23.jpg",
    originalSrc: "/image/gallery/23.jpg",
    caption: "Grand mandap setup ready for auspicious nuptials under the open sky"
  },
  {
    id: "g11",
    title: "Multicuisine Culinary Preparation",
    category: "dining",
    categoryLabel: "Dining & Food",
    src: "/image/gallery_optimized/26.jpg",
    originalSrc: "/image/gallery/26.jpg",
    caption: "Freshly prepared vegetarian & regional gourmet delights"
  },
  {
    id: "g12",
    title: "Green Hillside Courtyard",
    category: "outdoors",
    categoryLabel: "Landscape",
    src: "/image/gallery_optimized/33.jpg",
    originalSrc: "/image/gallery/33.jpg",
    caption: "Eco-friendly natural campus surrounded by fresh mountain air"
  },
  {
    id: "g13",
    title: "Evening Bonfire & Music Patio",
    category: "outdoors",
    categoryLabel: "Outdoors",
    src: "/image/gallery_optimized/37.jpg",
    originalSrc: "/image/gallery/37.jpg",
    caption: "Gather under the starlit sky for acoustic music and warm conversation"
  },
  {
    id: "g14",
    title: "Resort Lobby & Reception",
    category: "rooms",
    categoryLabel: "Lobby",
    src: "/image/gallery_optimized/65.jpg",
    originalSrc: "/image/gallery/65.jpg",
    caption: "Warm hospitality and smooth 24/7 check-in assistance"
  },
  {
    id: "g15",
    title: "Landscape Sunset View",
    category: "outdoors",
    categoryLabel: "Landscape",
    src: "/image/gallery_optimized/9.jpg",
    originalSrc: "/image/gallery/9.jpg",
    caption: "Dramatic twilight colors over the rolling Vindhya mountains"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Dr. Anirudh Srivastava",
    location: "Varanasi, UP",
    occasion: "Family Weekend & Vindhyachal Darshan",
    rating: 5,
    date: "October 2026",
    comment: "The Vindhyasarthak Resort is an absolute gem! Far away from the city traffic, peaceful hill surroundings, very spacious and clean Deluxe rooms, and the food in the Desi restaurant was delicious. Perfect base for visiting Maa Vindhyavasini and Wyndham falls."
  },
  {
    id: "r2",
    author: "Pooja & Saurabh Mishra",
    location: "Prayagraj, UP",
    occasion: "Destination Wedding & Sangeet",
    rating: 5,
    date: "December 2025",
    comment: "We hosted our sister's wedding on their grand lawn and banquet hall. With over 900 guests, the catering, decor, and room arrangements were handled with flawless professionalism. All guests praised the royal hospitality!"
  },
  {
    id: "r3",
    author: "Vikramaditya Rathore",
    location: "Lucknow, UP",
    occasion: "Corporate Conclave & Retreat",
    rating: 5,
    date: "February 2026",
    comment: "Excellent banquet facilities with great audiovisual setup for our 2-day team retreat. The swimming pool area and evening lawn arrangements made our team feel completely rejuvenated."
  },
  {
    id: "r4",
    author: "Shalini Tripathi",
    location: "BHU South Campus / Mirzapur",
    occasion: "Family Anniversary Dinner",
    rating: 5,
    date: "January 2026",
    comment: "The staff is exceptionally courteous. Having both multicuisine and authentic local Purvanchali food in one resort is a treat. The kids loved the pool and game club."
  }
];

export const FAQS = [
  {
    q: "Where is The Vindhyasarthak Resort located?",
    a: "The resort is situated on Robertganj Road near BHU South Campus (Barkachha), Belahra Mod, Dhanawal, Mirzapur, Uttar Pradesh (Pincode: 231001). It is approximately 20 minutes from Mirzapur Railway Station and 25 minutes from Vindhyachal Dham Temple."
  },
  {
    q: "What are the check-in and check-out timings?",
    a: "Standard check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to room availability upon prior request."
  },
  {
    q: "Can the resort arrange transportation for Vindhyachal Temple & Waterfalls?",
    a: "Yes! We have an on-site travel desk that provides sanitized chauffeur-driven cars for temple darshan (Vindhyachal, Ashtabhuja, Kali Khoh), scenic waterfall excursions (Wyndham, Sirsi, Lakhaniya Dari), and pickups/drops from Varanasi Airport and Mirzapur Station."
  },
  {
    q: "What banquet and wedding facilities do you provide?",
    a: "We offer a sprawling wedding lawn accommodating 1,500+ guests and an air-conditioned banquet hall for 500+ guests, equipped with stage setup, customized lighting, mandap décor, live food stalls, dedicated dance floor, and guest room blocks."
  },
  {
    q: "Are swimming pool and recreational facilities free for in-house guests?",
    a: "Yes, access to our mountain-view swimming pool, gymnasium, and indoor Game Club (Carrom, Chess, Table Tennis) is complimentary for all staying guests."
  },
  {
    q: "What dining options are available at the resort?",
    a: "Guests can enjoy our Multicuisine Restaurant (North Indian, Chinese, Continental, Tandoori) and our Desi Traditional Restaurant serving authentic regional cuisine. Pure vegetarian catering is also available."
  }
];
