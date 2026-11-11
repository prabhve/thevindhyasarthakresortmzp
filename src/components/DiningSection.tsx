import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Utensils, Flame, Sparkles, Check, Clock, X, ArrowRight } from 'lucide-react';

export const DiningSection: React.FC = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuTab, setMenuTab] = useState<'desi' | 'multicuisine' | 'poolside'>('desi');

  const menuHighlights = {
    desi: [
      { name: "Handi Dum Biryani", desc: "Slow-cooked in sealed clay pot with aromatic saffron and ground spices", price: "₹380" },
      { name: "Purvanchali Paneer Lababdar", desc: "Cottage cheese simmered in velvety tomato-cashew gravy with dried fenugreek", price: "₹320" },
      { name: "Dal Tadka Banarasi Style", desc: "Yellow lentils tempered with desi ghee, cumin, burnt garlic and red chilies", price: "₹240" },
      { name: "Baati & Chokha Platter", desc: "Wood-fired wheat balls dipped in pure desi ghee with roasted brinjal mash", price: "₹290" },
      { name: "Awadhi Dum Aloo", desc: "Baby potatoes filled with khoya and dry fruits in spiced korma sauce", price: "₹280" },
      { name: "Shahi Tukda & Gulab Jamun", desc: "Crispy ghee-fried brioche soaked in rabri and cardamom saffron syrup", price: "₹180" },
    ],
    multicuisine: [
      { name: "Kadhai Paneer & Butter Naan", desc: "Wok-tossed paneer cubes with bell peppers, crushed coriander and fresh naan", price: "₹340" },
      { name: "Crispy Chilli Babycorn & Paneer", desc: "Crisp fried babycorn tossed in wok with scallions, soy and ginger", price: "₹260" },
      { name: "Hakka Noodles & Manchurian", desc: "Stir-fried noodles with crisp vegetable dumplings in rich ginger-garlic gravy", price: "₹310" },
      { name: "Arrabbiata Penne Pasta", desc: "Al dente penne in fiery garlic-infused San Marzano tomato sauce with olives", price: "₹320" },
      { name: "Paneer Tikka Shashlik", desc: "Charcoal roasted spiced cottage cheese skewers with mint chutney", price: "₹330" },
      { name: "Hot Sizzling Brownie with Ice Cream", desc: "Warm fudge brownie on smoking cast iron plate with vanilla bean gelato", price: "₹220" },
    ],
    poolside: [
      { name: "Vindhya Sunset Mocktail", desc: "Layered orange, cranberry, lime and sparkling ginger fizz", price: "₹190" },
      { name: "Fresh Mint Mojito", desc: "Muddled fresh garden mint, lime wedges, crushed ice and club soda", price: "₹170" },
      { name: "Kulhad Masala Chai & Pakoras", desc: "Earthen clay cup spiced tea served with hot onion and spinach fritters", price: "₹160" },
      { name: "Cold Brew Frappe", desc: "Blended arabica cold brew with Belgian chocolate drizzle", price: "₹180" },
      { name: "Paneer & Corn Club Sandwich", desc: "Triple layered toasted sandwich with spiced corn and herb cheese", price: "₹220" },
    ]
  };

  return (
    <section id="dining" className="py-14 sm:py-20 lg:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Culinary Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Flavors of The Vindhyas <br />
            <span className="font-serif italic text-neutral-700">& Global Epicurean Delights</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-base mt-2">
            From earthen pot cooking in our Desi Traditional Restaurant to savory tandoori and continental feasts, dining at Vindhyasarthak is a celebration of authenticity.
          </p>
        </div>

        {/* 2 Main Dining Cards in Clean White & Grey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Desi Traditional Restaurant */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-400 transition-all shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/image/blog/blog-1.jpg"
                alt="Desi Traditional Restaurant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                Earthen Clay Pot Cooking
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-medium">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Woodfire & Handi Specialities</span>
                  <span aria-hidden="true">·</span>
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>11:00 AM – 10:30 PM</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 group-hover:text-amber-700 transition-colors">
                  Desi Traditional Restaurant
                </h3>

                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  Experience regional Awadhi and Purvanchali culinary traditions. Prepared with cold-pressed mustard oils, hand-pounded spices, and pure desi ghee, our chefs serve authentic country recipes passed down generations.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clay Pot Handi Biryani</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Baati & Roasted Chokha</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pure Desi Ghee Preparations</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fresh Earthen Kulhad Chai</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMenuTab('desi');
                    setShowMenuModal(true);
                  }}
                  className="text-xs font-bold text-neutral-950 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Desi Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
                <a
                  href={`tel:${RESORT_INFO.phones[0]}`}
                  className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Reserve Table
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Multicuisine & Terrace Lounge */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-400 transition-all shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/image/gallery_optimized/26.jpg"
                alt="Multicuisine Restaurant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                Gourmet International & Tandoor
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-medium">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>North Indian, Tandoori & Pan-Asian</span>
                  <span aria-hidden="true">·</span>
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>7:00 AM – 11:00 PM</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 group-hover:text-amber-700 transition-colors">
                  Multicuisine & Poolside Bar
                </h3>

                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  A sophisticated dining hall and open-air poolside terrace offering lavish breakfast buffets, fiery wok tosses, buttery clay tandoor naans, creamy pastas, and refreshing tropical mocktails.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Breakfast Buffet & Room Service</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Live Clay Oven Tandoori Kababs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Poolside Sunset Mocktails</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Private Candlelight Dining</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMenuTab('multicuisine');
                    setShowMenuModal(true);
                  }}
                  className="text-xs font-bold text-neutral-950 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Global Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
                <a
                  href={`tel:${RESORT_INFO.phones[0]}`}
                  className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Reserve Table
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Menu Modal (Clean White & Grey) */}
        {showMenuModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-2xl bg-white text-neutral-900 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <button
                onClick={() => setShowMenuModal(false)}
                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-full border border-neutral-200 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  The Vindhyasarthak Resort Culinary
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 mt-1">
                  Signature Menu Selections
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Freshly made with farm produce and pure ingredients. Available for dine-in & in-room dining.
                </p>

                {/* Segmented Tabs: Mobile responsive with touch scroll */}
                <div className="flex items-center gap-1 sm:gap-2 mt-4 p-1 bg-neutral-100 border border-neutral-200 rounded-lg overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setMenuTab('desi')}
                    className={`flex-1 min-w-[85px] py-2 px-2 text-[11px] sm:text-xs font-medium rounded-md transition-colors cursor-pointer text-center ${
                      menuTab === 'desi' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    Desi Menu
                  </button>
                  <button
                    onClick={() => setMenuTab('multicuisine')}
                    className={`flex-1 min-w-[95px] py-2 px-2 text-[11px] sm:text-xs font-medium rounded-md transition-colors cursor-pointer text-center ${
                      menuTab === 'multicuisine' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    Multicuisine
                  </button>
                  <button
                    onClick={() => setMenuTab('poolside')}
                    className={`flex-1 min-w-[90px] py-2 px-2 text-[11px] sm:text-xs font-medium rounded-md transition-colors cursor-pointer text-center ${
                      menuTab === 'poolside' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    Poolside Bar
                  </button>
                </div>
              </div>

              {/* Menu items list */}
              <div className="space-y-3.5 max-h-[50vh] overflow-y-auto pr-2">
                {menuHighlights[menuTab].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-950">{item.name}</h4>
                      <p className="text-xs text-neutral-600 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-neutral-950 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-neutral-200 flex items-center justify-between mt-4">
                <span className="text-xs text-neutral-500">
                  Custom dietary & Jain options available upon request.
                </span>
                <a
                  href={`tel:${RESORT_INFO.phones[0]}`}
                  className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg"
                >
                  Call Order Desk
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
