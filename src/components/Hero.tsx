import React, { useState, useRef } from "react";
import { Sparkles, Calendar, BookOpen, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onOpenCourses: () => void;
}

export default function Hero({ onOpenCourses }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden py-16 px-6 font-sans" id="hero-section">
      {/* Background Video or Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/src/assets/images/wellness_hero_bg_1783531946502.jpg"
        >
          <source src="https://pann5uervowoe1tt.public.blob.vercel-storage.com/NW.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/src/assets/images/wellness_hero_bg_1783531946502.jpg"
            alt="Calming Natural Sanctuary"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </video>
        {/* Soft linear and radial gradients to blend the background video beautifully with the site aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/65 via-[#FAF9F6]/50 to-[#FAF9F6]/75"></div>
      </div>

      {/* Video Volume Control Toggle */}
      <div className="absolute bottom-6 right-6 z-20" id="video-sound-control">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 bg-white/70 hover:bg-white/95 text-charcoal backdrop-blur-md border border-sand/40 px-3.5 py-2 rounded-full shadow-md text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
          title={isMuted ? "Unmute sound" : "Mute sound"}
          aria-label={isMuted ? "Unmute background video sound" : "Mute background video sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-sage" />
              <span>Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-sage animate-bounce-subtle" />
              <span>Mute Video</span>
            </>
          )}
        </button>
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
