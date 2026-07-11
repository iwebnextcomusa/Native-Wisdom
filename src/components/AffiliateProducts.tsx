import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Leaf,
  Droplets,
  ShieldCheck,
  Check,
  ArrowRight,
  Heart,
  Info,
  ShoppingBag,
  TrendingUp,
  Tag,
  Filter,
  Award,
  ChevronRight,
  RotateCcw,
  X
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Home Care" | "Personal Care";
  priceINR: string;
  priceUSD: string;
  rating: number;
  tagline: string;
  description: string;
  benefits: string[];
  herbs: string[];
  usage: string;
  imageUrl: string;
  affiliateUrl: string;
}

export default function AffiliateProducts() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Home Care" | "Personal Care">("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState<0 | 1 | 2 | 3>(0);
  const [answers, setAnswers] = useState<{ q1?: string; q2?: string }>({});
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: "liquid-detergent",
      name: "Sacred Earth Liquid Detergent",
      category: "Home Care",
      priceINR: "₹495",
      priceUSD: "$6.50",
      rating: 5,
      tagline: "Eco-friendly laundry care powered by nature's Soapnuts.",
      description: "A 100% natural, biodegradable liquid laundry detergent formulated with Soapnuts (Reetha), Orange Peel, and Lemon Peel. It thoroughly cleans and freshens fabrics while keeping them soft, chemical-free, and safe for extremely sensitive skin or baby clothes.",
      benefits: [
        "Completely biodegradable and non-toxic",
        "Gentle on skin, hands, and fabrics",
        "Hypoallergenic and safe for infant clothing",
        "Zero artificial scents, phosphates, or bleaches"
      ],
      herbs: ["Soapnut (Reetha)", "Orange Peel", "Lemon Peel", "Neroli Essential Oil"],
      usage: "Add 1 cap (approx. 30ml) for a standard washing machine load. Safe for both top-load and front-load machines, as well as delicate hand-washing.",
      imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    },
    {
      id: "dish-wash",
      name: "Sacred Earth Natural Dish Wash",
      category: "Home Care",
      priceINR: "₹295",
      priceUSD: "$3.90",
      rating: 5,
      tagline: "Cut grease naturally without chemical residues.",
      description: "Infused with Soapnuts, Lemon Peel, and Sweet Orange Essential Oils, this natural dish wash is tough on tough grease and baked-on food, but incredibly soft on your hands. Rest easy knowing zero harmful chemical film remains on your plates.",
      benefits: [
        "Deep degreasing with absolute natural lather",
        "Zero chemical residue on cooking and dining ware",
        "Prevents hands from drying, cracking, or peeling",
        "Free from sulphates, phthalates, and artificial coloring"
      ],
      herbs: ["Soapnut (Reetha)", "Lemon Peel", "Sweet Orange Essential Oil", "Vegetable Glycerin"],
      usage: "Pour a small amount on a wet sponge, squeeze to generate organic lather, and clean utensils as usual. Rinse with plain water.",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    },
    {
      id: "floor-wash",
      name: "Sacred Earth Natural Floor Wash",
      category: "Home Care",
      priceINR: "₹345",
      priceUSD: "$4.50",
      rating: 4.9,
      tagline: "Natural disinfectant and fresh aromatic shield.",
      description: "Crafted with powerful essential oils of Citronella, Lemongrass, Pine, and Tea Tree. It effectively lifts grime, sanitizes floor surfaces, and acts as a completely natural, chemical-free insect and mosquito repellent, filling your space with a blissful citrus aroma.",
      benefits: [
        "Cleans, sanitizes, and disinfects naturally",
        "Deters ants, flies, and mosquitoes without toxic fumes",
        "Safe for pets and infants crawling on floors",
        "Suitable for all surfaces, including marble, tiles, and wood"
      ],
      herbs: ["Lemongrass Oil", "Citronella Oil", "Pine Oil", "Tea Tree Essential Oil"],
      usage: "Dilute 15-20ml (around half a cap) into half a bucket of water (approx. 4 liters) and mop the floor gently. No rinsing required.",
      imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    },
    {
      id: "hand-wash",
      name: "Sacred Earth Natural Hand Wash",
      category: "Personal Care",
      priceINR: "₹245",
      priceUSD: "$3.20",
      rating: 5,
      tagline: "Antibacterial protection that moisturizes your skin.",
      description: "A nourishing liquid hand wash enriched with pure Soapnuts, Aloe Vera, and Tea Tree Oil. It purifies hands thoroughly of dirt and micro-organisms while locking in hydration, leaving hands feeling silky-smooth, refreshed, and softly scented.",
      benefits: [
        "Natural antiseptic action via pure Tea Tree oil",
        "Deeply hydrates and prevents seasonal skin dryness",
        "Gentle soapnut formulation supports pH-balanced cleansing",
        "Completely biodegradable; safe for household water loops"
      ],
      herbs: ["Soapnut (Reetha)", "Aloe Vera Extract", "Tea Tree Oil", "Eucalyptus Essential Oil"],
      usage: "Pump a small coin-sized quantity onto wet palms. Lather well, rubbing back of hands, fingers, and nails for 20 seconds. Rinse clean.",
      imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    },
    {
      id: "face-wash",
      name: "Sacred Earth Natural Face Wash",
      category: "Personal Care",
      priceINR: "₹295",
      priceUSD: "$3.90",
      rating: 4.8,
      tagline: "Purify, calm, and revitalize your delicate skin.",
      description: "An Ayurvedic purifying face wash formulated with anti-inflammatory Neem, soothing Aloe Vera, and Tea Tree. This cleanser unclogs pores, clears away excess oil and pollutant accumulation, and heals blemishes without drying out or stripping your skin barrier.",
      benefits: [
        "Deeply purifies pores and balances natural sebum",
        "Antibacterial properties help prevent acne and blackheads",
        "Provides cool, soothing relief to inflamed or sensitive skin",
        "Rich in vitamins and antioxidants for a healthy glow"
      ],
      herbs: ["Neem Leaf Extract", "Aloe Vera Gel", "Tea Tree Oil", "Holy Basil (Tulsi) Extract"],
      usage: "Apply a tiny amount on wet face and neck. Massage in light circular motions, avoiding eyes. Wash thoroughly with cold water and pat dry.",
      imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    },
    {
      id: "hair-cleanser",
      name: "Sacred Earth Hair Cleanser / Shampoo",
      category: "Personal Care",
      priceINR: "₹425",
      priceUSD: "$5.60",
      rating: 5,
      tagline: "Ayurvedic herbal elixir for root-to-tip vitality.",
      description: "A premium hair wash crafted from traditional ingredients: Shikakai, Amla, and Reetha. This ancient formulation strengthens hair follicles from the root, conditions hair shafts naturally, and treats scalp concerns, adding volume, shine, and soft texture.",
      benefits: [
        "Stimulates hair growth and curtails excessive shedding",
        "Combats dandruff, dryness, and scalp itchiness",
        "Imparts natural, brilliant lustre and deep conditioning",
        "Sulphate-free and paraben-free safe Ayurvedic recipe"
      ],
      herbs: ["Shikakai Extract", "Indian Gooseberry (Amla)", "Soapnut (Reetha)", "Hibiscus Petal Gel"],
      usage: "Apply generously to thoroughly wet scalp and hair lengths. Massage gently into a natural lather. Leave on for 1-2 minutes to let nutrients absorb, then rinse cleanly.",
      imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
      affiliateUrl: "https://www.sacredearth.in/?srsltid=AfmBOoorcPLiJxoXqiyU4ap5VLcBMsP3VLeEUTN5IKggRorEZnSjFtWp"
    }
  ];

  const filteredProducts = products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  // Simple rule-based logic for product matcher
  const handleQuizAnswer = (question: 1 | 2, value: string) => {
    if (question === 1) {
      setAnswers((prev) => ({ ...prev, q1: value }));
      setQuizStep(2);
    } else {
      const updatedAnswers = { ...answers, q2: value };
      setAnswers(updatedAnswers);
      
      // Determine recommendation
      let recommendation = products[0]; // fallback
      if (updatedAnswers.q1 === "home") {
        if (updatedAnswers.q2 === "cleaning") {
          recommendation = products.find((p) => p.id === "liquid-detergent") || products[0];
        } else if (updatedAnswers.q2 === "kitchen") {
          recommendation = products.find((p) => p.id === "dish-wash") || products[1];
        } else {
          recommendation = products.find((p) => p.id === "floor-wash") || products[2];
        }
      } else {
        if (updatedAnswers.q2 === "skin") {
          recommendation = products.find((p) => p.id === "face-wash") || products[4];
        } else if (updatedAnswers.q2 === "hands") {
          recommendation = products.find((p) => p.id === "hand-wash") || products[3];
        } else {
          recommendation = products.find((p) => p.id === "hair-cleanser") || products[5];
        }
      }
      setRecommendedProduct(recommendation);
      setQuizStep(3);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setQuizStep(0);
    setRecommendedProduct(null);
  };

  return (
    <div className="space-y-16" id="affiliate-catalog-container">
      {/* Banner / Introduction Header */}
      <div className="bg-gradient-to-r from-sage/10 to-gold/5 border border-sand/40 p-8 md:p-12 rounded-[32px] text-left max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <div className="space-y-5 lg:flex-1">
          <div className="inline-flex items-center gap-2 bg-sage/15 px-3.5 py-1.5 rounded-full text-sage">
            <Award className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Official Alliance</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-snug">
            Partnering with <span className="font-serif italic font-normal text-sage">Sacred Earth</span>
          </h3>
          <p className="text-sm text-charcoal/85 font-light leading-relaxed">
            As a transformational guide, Sabrina Whitehorse is passionate about aligning your external environment with your internal peace. We have partnered with <strong>Sacred Earth</strong> to offer completely chemical-free, biodegradable, and non-toxic Ayurvedic solutions that clean deeply, soothe your senses, and respect our sacred planet.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono font-semibold text-charcoal/70">
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-sand/20">
              <Leaf className="w-4 h-4 text-sage" /> 100% Organic & Vegan
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-sand/20">
              <Droplets className="w-4 h-4 text-sage" /> Soapnut Lather Base
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-sand/20">
              <ShieldCheck className="w-4 h-4 text-sage" /> Cruelty-Free & Biodegradable
            </span>
          </div>
        </div>

        <div className="relative w-full lg:w-80 h-48 rounded-2xl overflow-hidden border border-sand/50 shadow-md flex-shrink-0 group">
          <img
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600"
            alt="Sacred Botanical Elements"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-5">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-sand font-bold">Natural Wisdom</p>
              <h5 className="text-sm font-serif font-medium text-white">Roots in Traditional Ayurveda</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Matcher Quiz & Main Catalog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto">
        {/* Left Column: Interactive Product Matcher Quiz */}
        <div className="lg:col-span-4 bg-white/95 border border-sand/30 rounded-2xl p-6 shadow-sm space-y-6" id="wellness-matcher-widget">
          <div className="space-y-1 border-b border-sand/20 pb-4">
            <span className="text-[9px] font-mono text-sage tracking-[0.2em] uppercase font-bold block">Intuitive Guide</span>
            <h4 className="font-serif text-lg font-bold text-charcoal">Empowered Wellness Matcher</h4>
            <p className="text-[11px] text-charcoal/60 leading-relaxed font-light">
              Not sure where to start your toxin-free journey? Let Sabrina's interactive matcher recommend the perfect natural alternative for your lifestyle.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {quizStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-sand/20 text-center">
                  <Sparkles className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                    Answer two brief questions regarding your current wellness intentions, and we will reveal your ideal Sacred botanical formula.
                  </p>
                </div>
                <button
                  onClick={() => setQuizStep(1)}
                  className="w-full bg-sage hover:bg-[#6a8b75] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Wellness Matcher</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {quizStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <span className="text-[10px] font-mono text-[#C9A66B] font-bold">[Question 1 of 2]</span>
                <p className="text-xs font-semibold text-charcoal leading-tight">
                  Which area of your life would you like to purify first?
                </p>
                <div className="grid grid-cols-1 gap-2 pt-2">
                  <button
                    onClick={() => handleQuizAnswer(1, "home")}
                    className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                  >
                    <span>My Home Environment (Laundry, Dishes, Floors)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sage" />
                  </button>
                  <button
                    onClick={() => handleQuizAnswer(1, "personal")}
                    className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                  >
                    <span>My Personal Care (Hair, Face, Hands)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sage" />
                  </button>
                </div>
              </motion.div>
            )}

            {quizStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <span className="text-[10px] font-mono text-[#C9A66B] font-bold">[Question 2 of 2]</span>
                <p className="text-xs font-semibold text-charcoal leading-tight">
                  What is your primary focus or concern?
                </p>
                <div className="grid grid-cols-1 gap-2 pt-2">
                  {answers.q1 === "home" ? (
                    <>
                      <button
                        onClick={() => handleQuizAnswer(2, "cleaning")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Chemical-free Laundry for Sensitive Skin</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, "kitchen")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Zero Chemical Film on Plates & Ware</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, "floors")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Natural Floor Disinfecting & Pest Defense</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleQuizAnswer(2, "skin")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Soothe and Purify Acne-prone Face</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, "hands")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Antibacterial Action with Intense Hydration</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, "hair")}
                        className="w-full text-left p-3.5 bg-[#FAF9F6] hover:bg-sage/10 rounded-xl border border-sand/40 hover:border-sage transition-all text-xs font-medium text-charcoal flex items-center justify-between cursor-pointer"
                      >
                        <span>Strengthen Hair Bulbs & Soothe Scalp</span>
                        <ChevronRight className="w-3.5 h-3.5 text-sage" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {quizStep === 3 && recommendedProduct && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4 text-center"
              >
                <div className="bg-[#FAF9F6] p-4 rounded-xl border border-sand/40 space-y-3">
                  <div className="w-10 h-10 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-sage tracking-[0.1em] uppercase font-bold block">Recommended Alternative</span>
                  <h5 className="font-serif text-sm font-bold text-charcoal">{recommendedProduct.name}</h5>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed font-light">{recommendedProduct.tagline}</p>
                  
                  <div className="pt-2 border-t border-sand/20 flex justify-between items-center text-xs">
                    <span className="text-charcoal/50">Ayurvedic Herbs:</span>
                    <span className="font-semibold text-charcoal">{recommendedProduct.herbs.slice(0, 2).join(", ")}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={resetQuiz}
                    className="flex-1 bg-sand/15 hover:bg-sand/30 text-charcoal text-[11px] font-semibold uppercase tracking-wider py-3 rounded-lg border border-sand/30 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={() => setSelectedProduct(recommendedProduct)}
                    className="flex-1 bg-sage hover:bg-[#6a8b75] text-white text-[11px] font-semibold uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Herbs</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Catalog Grid & Filter controls */}
        <div className="lg:col-span-8 space-y-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand/30 pb-4">
            <div className="flex items-center gap-2 text-charcoal/60">
              <Filter className="w-4 h-4 text-sage" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">Catalog Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {(["All", "Home Care", "Personal Care"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-sage border-sage text-white shadow-sm"
                      : "bg-[#FAF9F6] border-sand text-charcoal hover:bg-sand/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="affiliate-products-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-sand/30 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                id={`product-card-${prod.id}`}
              >
                {/* Image Section */}
                <div className="relative h-44 w-full overflow-hidden bg-sand/10">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-sage shadow-sm border border-sand/30">
                    {prod.category}
                  </span>
                  
                  {/* Organic Badge Overlay */}
                  <span className="absolute bottom-4 right-4 bg-sage/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold shadow-sm flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    <span>Bio-Lather</span>
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-serif text-base font-bold text-charcoal leading-tight group-hover:text-sage transition-colors">
                        {prod.name}
                      </h4>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-mono font-bold text-sage">{prod.priceINR}</p>
                        <p className="text-[10px] font-mono text-charcoal/40 font-semibold">{prod.priceUSD}</p>
                      </div>
                    </div>
                    <p className="text-xs text-charcoal/70 italic leading-snug">
                      "{prod.tagline}"
                    </p>
                    
                    {/* Two Key Ingredients */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {prod.herbs.slice(0, 3).map((herb) => (
                        <span key={herb} className="bg-sand/15 border border-sand/30 text-[10px] px-2.5 py-0.5 rounded-md text-charcoal/70 font-sans">
                          🌿 {herb}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Action */}
                  <div className="pt-4 border-t border-sand/20 flex gap-2.5">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="flex-1 bg-[#FAF9F6] hover:bg-sand/20 text-charcoal text-[11px] font-semibold uppercase tracking-wider py-2.5 rounded-xl border border-sand/40 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-sage" />
                      <span>Learn Herbs</span>
                    </button>
                    <a
                      href={prod.affiliateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-sage hover:bg-[#6a8b75] text-white text-[11px] font-semibold uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all hover:scale-102 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buy Product</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Specification Overlap Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FAF9F6] w-full max-w-2xl max-h-[85vh] rounded-[24px] border border-sand shadow-2xl overflow-hidden flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
              id="product-detail-modal"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-sand bg-white">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-sage animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sage">
                    Ayurvedic Spec & Properties
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-[#FAF9F6] text-charcoal/60 hover:text-charcoal rounded-full border border-transparent hover:border-sand transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Contents */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full sm:w-44 aspect-[4/3] sm:aspect-square object-cover rounded-xl border border-sand/40 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-2">
                    <span className="bg-sage/10 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-sage">
                      {selectedProduct.category}
                    </span>
                    <h4 className="font-serif text-xl font-light text-charcoal">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-xs font-mono font-bold text-sage">
                      Price: {selectedProduct.priceINR} / {selectedProduct.priceUSD}
                    </p>
                    <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-sand/20">
                  {/* Benefits */}
                  <div className="space-y-3">
                    <h5 className="font-serif text-xs font-bold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-sage" /> Organic Benefits
                    </h5>
                    <ul className="space-y-1.5">
                      {selectedProduct.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-charcoal/70 items-start">
                          <Check className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                          <span className="font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Herbs and Botanicals */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-serif text-xs font-bold text-charcoal uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-sage" /> Botanical Composition
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.herbs.map((herb) => (
                          <span key={herb} className="bg-sage/10 text-sage font-mono text-[10px] px-2.5 py-1 rounded-md font-bold">
                            🌿 {herb}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h5 className="font-serif text-xs font-bold text-charcoal uppercase tracking-wider">
                        Suggested Use
                      </h5>
                      <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                        {selectedProduct.usage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Panel with action */}
              <div className="bg-white px-6 md:px-8 py-4 border-t border-sand/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-charcoal/40 italic">
                  *Affiliate link unlocks exclusive partner support.
                </span>
                <a
                  href={selectedProduct.affiliateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sage hover:bg-[#6a8b75] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy on Sacred Earth</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
