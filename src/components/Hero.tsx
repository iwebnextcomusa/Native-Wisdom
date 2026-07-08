import React from "react";
import { Sparkles, Calendar, BookOpen, Compass } from "lucide-react";

interface HeroProps {
  onOpenCourses: () => void;
}

export default function Hero({ onOpenCourses }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 font-sans" id="hero-section">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/wellness_hero_bg_1783531946502.jpg"
          alt="Calming Natural Sanctuary"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Soft linear and radial gradients to blend the image beautifully */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/95 via-ivory/80 to-ivory"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sand/20 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sage/10 backdrop-blur-md border border-sage/30 px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-sage animate-spin-slow" />
          <span className="text-xs font-semibold uppercase tracking-wider text-sage">
            Loxahatchee, Florida Sanctuary
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-charcoal">
            Transform Your Life Through <br />
            <span className="font-serif italic font-normal text-sage">Healing, Connection</span> & <br />
            <span className="font-serif italic font-normal text-gold">Personal Growth</span>
          </h1>
          
          <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto font-light">
            Discover transformative healing sessions, immersive online courses, and compassionate guidance designed to help you reconnect with yourself, unlock your potential, and create lasting emotional and spiritual well-being.
          </p>
        </div>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button
            onClick={() => handleScrollTo("#contact")}
            className="bg-sage hover:bg-[#6a8b75] text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-lg shadow-[#7B9E87]/20 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            id="hero-cta-booking"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Healing Session</span>
          </button>
          
          <button
            onClick={onOpenCourses}
            className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 bg-transparent w-full sm:w-auto cursor-pointer"
            id="hero-cta-courses"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Courses</span>
          </button>
        </div>

        {/* Quick Stats/Trust indicators */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sand/40 w-full max-w-xl mx-auto" id="hero-trust-indicators">
          <div>
            <p className="font-serif text-2xl md:text-3xl font-medium text-sage">1-on-1</p>
            <p className="text-[10px] uppercase font-semibold text-charcoal/50 tracking-wider mt-1">Custom Healing</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-3xl font-medium text-sage">Online</p>
            <p className="text-[10px] uppercase font-semibold text-charcoal/50 tracking-wider mt-1">Courses & Resources</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-3xl font-medium text-sage">FL Base</p>
            <p className="text-[10px] uppercase font-semibold text-charcoal/50 tracking-wider mt-1">Global Reach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
