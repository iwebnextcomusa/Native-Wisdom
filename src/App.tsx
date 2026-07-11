import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Journey from "./components/Journey";
import AffiliateProducts from "./components/AffiliateProducts";
import ContactForm from "./components/ContactForm";
import Chatbot from "./components/Chatbot";
import CoursesPage from "./components/CoursesPage";
import ResourcesPage from "./components/ResourcesPage";
import ScrollReveal from "./components/ScrollReveal";
import { ArrowUp, Trees, Compass, Heart, Award, ArrowRight, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<"home" | "about" | "services" | "affiliate" | "contact" | "courses" | "resources">("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page: "home" | "about" | "services" | "affiliate" | "contact" | "courses" | "resources", sectionId?: string) => {
    setActivePage(page);
    if (page === "courses") {
      setIsCoursesOpen(true);
    } else if (page === "resources") {
      setIsResourcesOpen(true);
    } else {
      setIsCoursesOpen(false);
      setIsResourcesOpen(false);
    }

    if (sectionId) {
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333] relative overflow-x-hidden font-sans selection:bg-sage/20">
      {/* 1. Header */}
      <Header
        activePage={activePage}
        onNavigate={(page) => handleNavigate(page)}
        onOpenCourses={() => handleNavigate("courses")}
        onOpenResources={() => handleNavigate("resources")}
      />

      {/* Dynamic Main Body Content */}
      <main className="min-h-[calc(100vh-140px)]">
        {activePage === "home" && (
          <>
            {/* 2. Hero Section */}
            <Hero onNavigate={(page) => handleNavigate(page)} onOpenCourses={() => handleNavigate("courses")} />

            {/* Welcome & Portals Navigation Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FAF9F6]" id="portals-section">
              <div className="max-w-7xl mx-auto">
                <ScrollReveal direction="up">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-xs font-mono text-sage tracking-[0.25em] uppercase font-bold block">
                      Step Into Our Sanctuary
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                      A Sacred Space for <span className="font-serif italic font-normal text-sage">Every Aspect of Your Journey</span>
                    </h2>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed font-light">
                      Click any portal below to redirect to our specialized pages. Each dedicated view is curated with professional practices, resources, and insights to assist your unique transformation.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="home-portals-grid">
                    {/* Portal 1: About Sabrina */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center text-sage">
                          <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          Sabrina's Biography & Path
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Read Sabrina Whitehorse's bio, our aligned vision, and the core philosophies that anchor our intuitive tribe.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("about")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>Read Bio & Path</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Portal 2: Our 4-Step Journey */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                          <Trees className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          The 4-Step Journey Timeline
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Explore our timeline of Awakening, Cleansing, Centering, and Alignment. Learn how we structure long-term growth.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("about", "#journey")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>Explore the Journey</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Portal 3: Services */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center text-sage">
                          <Award className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          Healing Services & Circles
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Learn about 1-on-1 private sessions, community sacred circles, and customized emotional sovereignty sessions.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("services")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>View Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Portal 4: Sacred Earth Sanctuary */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                          <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          Sacred Earth Organic Sanctuary
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Explore 100% natural, chemical-free home care and personal care products powered by Soapnuts and essential oils.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("affiliate")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>Explore Organic Care</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Portal 5: Online Learning */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-sage/15 flex items-center justify-center text-sage">
                          <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          Online Learning Center
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Deep-dive self-paced video courses for emotional sovereignty, daily habits, and advanced practitioner mastery.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("courses")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>Open Learning Portal</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Portal 6: Wisdom Blog & Resources */}
                    <div className="bg-[#FAF9F6]/50 rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                          <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-sage transition-colors">
                          Sacred Resources & Blog
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                          Read informative tribal wisdom posts, download beautiful workbooks, and play soothing grounding soundscapes.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavigate("resources")}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-sage uppercase tracking-wider group-hover:translate-x-1 transition-transform text-left cursor-pointer"
                      >
                        <span>Browse Sacred Blog</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 px-6 bg-gradient-to-br from-sage to-[#6a8b75] text-white relative overflow-hidden" id="cta-banner">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C9A66B]/20 rounded-full blur-3xl"></div>
              <ScrollReveal direction="fade" className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <div className="inline-flex bg-white/15 p-3 rounded-full text-white/95">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                    Your Healing Journey <br />
                    <span className="font-serif italic font-normal text-sand">Starts Today</span>
                  </h2>
                  <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
                    Unlock your deepest potential, reconnect with your spiritual self, and establish absolute emotional mastery. Sabrina's Floridian sanctuary and virtual portals are ready to welcome you.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="bg-white hover:bg-sand text-sage font-semibold uppercase tracking-wider text-xs px-10 py-4.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 group cursor-pointer"
                  id="btn-schedule-session"
                >
                  <span>Schedule Your Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollReveal>
            </section>
          </>
        )}

        {activePage === "about" && (
          <>
            {/* About Page Container */}
            <section className="py-24 px-6 bg-white/40 relative" id="about">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <ScrollReveal direction="up" className="lg:col-span-5 relative" id="about-image-container">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-sage/10 to-gold/10 rounded-[64px_12px_64px_12px] blur-md"></div>
                  <div className="relative bg-[#FAF9F6] p-4 rounded-[60px_10px_60px_10px] border border-sand shadow-sm overflow-hidden group">
                    <img
                      src="https://pann5uervowoe1tt.public.blob.vercel-storage.com/SW.webp"
                      alt="Sabrina Whitehorse"
                      className="w-full h-auto aspect-[4/5] object-cover object-top rounded-[50px_8px_50px_8px] group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-sand/30 flex items-center gap-3">
                      <div className="bg-sage/10 p-2 rounded-xl text-sage">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-sage/80 tracking-widest leading-none">Experience</p>
                        <p className="text-xs font-semibold text-charcoal">Transformational Guide</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={150} className="lg:col-span-7 space-y-8 text-left" id="about-copy-container">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-sage tracking-[0.2em] uppercase font-bold block">
                      Meet Sabrina Whitehorse
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                      Delighted You Found Your <br />
                      <span className="font-serif italic font-normal text-sage">Way to Our Tribe</span>
                    </h2>
                  </div>
                  <div className="space-y-6 font-sans text-sm md:text-base text-charcoal/80 leading-relaxed font-light">
                    <p className="font-serif italic text-lg text-sage/90">
                      Whether you found me through a friend or stumbled upon my online content, I'm delighted you're here.
                    </p>
                    <p>
                      This site is rich with resources for transformative healing and personal growth. I invite you to slow down, take a deep breath, and explore what speaks to your heart. Every element of this sanctuary has been crafted with absolute care, helping you connect deeply, release heavy burdens, and rediscover your inner clarity.
                    </p>
                    <p>
                      Explore my online healing sessions and in-depth courses designed to enhance spiritual and emotional mastery. I believe in holistic development — integrating the mind, physical senses, emotions, and soul to build a grounded, beautiful daily lifestyle that supports your ultimate freedom.
                    </p>
                    <p className="font-serif italic text-lg text-gold/90 border-l-2 border-gold/40 pl-4 py-1">
                      Let's begin this beautiful journey together and unlock your deepest potential. Welcome to our tribe, where every step is a step towards healing and connection.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 pt-4">
                    <button
                      onClick={() => handleNavigate("contact")}
                      className="bg-sage hover:bg-[#6a8b75] text-white font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Let's Begin Together
                    </button>
                    <div className="flex items-center gap-2 text-xs text-charcoal/50 uppercase tracking-widest font-semibold">
                      <Trees className="w-4 h-4 text-sage" />
                      <span>FL Sanctuary and Virtual</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Why Choose Walk Section */}
            <section className="py-24 px-6 bg-white/40 border-y border-sand/20" id="why-choose">
              <div className="max-w-7xl mx-auto">
                <ScrollReveal direction="up">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-xs font-mono text-sage tracking-[0.25em] uppercase font-bold block">
                      The Path to Mastery
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                      Why Walk with <span className="font-serif italic font-normal text-sage">Sabrina Whitehorse</span>
                    </h2>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
                      We focus on a comprehensive, high-end wellness blueprint that empowers you with actual techniques and compassionate guidance for long-term emotional sovereignty.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={200}>
                  <WhyChoose />
                </ScrollReveal>
              </div>
            </section>

            {/* Journey Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto" id="journey">
              <ScrollReveal direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                  <span className="text-xs font-mono text-sage tracking-[0.25em] uppercase font-bold block">
                    The Transformation Steps
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                    Your Journey of <span className="font-serif italic font-normal text-sage">Awakening & Alignment</span>
                  </h2>
                  <p className="text-sm font-sans text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
                    We simplify spiritual and emotional mastery into four grounded, beautiful phases. Follow this timeline to unlock your deepest connection and thriving potential.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <Journey />
              </ScrollReveal>
            </section>
          </>
        )}

        {activePage === "services" && (
          <>
            {/* Services Page */}
            <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
              <ScrollReveal direction="up">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                  <span className="text-xs font-mono text-sage tracking-[0.25em] uppercase font-bold block">
                    Transformational Offerings
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                    Nurturing Services for <span className="font-serif italic font-normal text-sage">Mastery & Well-Being</span>
                  </h2>
                  <p className="text-sm font-sans text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
                    Each offering is tailored to provide a compassionate, safe environment where your unique emotional, mental, and spiritual aspects are integrated, respected, and fully healed.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <Services />
              </ScrollReveal>
            </section>

            {/* Quick Contact Link */}
            <section className="py-20 px-6 bg-gradient-to-br from-sage to-[#6a8b75] text-white text-center">
              <h2 className="font-serif text-3xl font-light mb-4">Ready for Private Transformation?</h2>
              <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 font-light">
                Schedule a customized session with Sabrina Whitehorse to initiate emotional mastery and somatic release.
              </p>
              <button
                onClick={() => handleNavigate("contact")}
                className="bg-white hover:bg-sand text-sage font-semibold uppercase tracking-wider text-xs px-10 py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Let's Begin Your Journey
              </button>
            </section>
          </>
        )}

        {activePage === "affiliate" && (
          <>
            {/* Affiliate Page */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#E8DCC6]/10 to-[#FAF9F6]" id="affiliate">
              <div className="max-w-7xl mx-auto">
                <ScrollReveal direction="up">
                  <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="text-xs font-mono text-sage tracking-[0.25em] uppercase font-bold block">
                      Conscious Partnerships
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
                      The Sacred Earth <span className="font-serif italic font-normal text-sage">Organic Sanctuary</span>
                    </h2>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
                      Sabrina has partnered with Sacred Earth to bring you organic, 100% natural, chemical-free home care and personal care products. Click "Buy Product" on any card below to explore or purchase directly.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={200}>
                  <AffiliateProducts />
                </ScrollReveal>
              </div>
            </section>
          </>
        )}

        {activePage === "contact" && (
          <>
            {/* Contact Page */}
            <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
              <ScrollReveal direction="up">
                <ContactForm />
              </ScrollReveal>
            </section>
          </>
        )}
      </main>

      {/* 11. Footer */}
      <footer className="bg-[#FAF9F6] border-t border-sand/40 py-16 px-6 font-sans text-charcoal/80" id="main-app-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left" id="footer-grid">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto overflow-hidden rounded-lg bg-white p-1 border border-sand/30 shadow-sm">
                <img
                  src="https://pann5uervowoe1tt.public.blob.vercel-storage.com/Sabrina%20Whitehorse.jpg"
                  alt="Sabrina Whitehorse Logo"
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold tracking-wider text-charcoal leading-tight">
                  SABRINA WHITEHORSE
                </span>
                <span className="text-[9px] font-sans text-sage font-semibold uppercase tracking-wider leading-none mt-0.5">
                  Transformational Guide
                </span>
              </div>
            </div>
            <p className="text-xs text-charcoal/60 leading-relaxed font-light">
              Transformational healing and personal growth business located in beautiful Loxahatchee, Florida. Helping you awaken, align, and thrive.
            </p>
            <div className="flex gap-3 pt-2" id="footer-social-icons">
              <a href="#" className="p-2 bg-sand/15 hover:bg-sage/10 hover:text-sage text-charcoal/70 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-sand/15 hover:bg-sage/10 hover:text-sage text-charcoal/70 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-semibold text-charcoal tracking-wider uppercase">Quick Navigation</h5>
            <ul className="space-y-2 text-xs font-medium flex flex-col items-start">
              <li><button onClick={() => handleNavigate("home")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Home Sanctuary</button></li>
              <li><button onClick={() => handleNavigate("about")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">About Sabrina</button></li>
              <li><button onClick={() => handleNavigate("services")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Healing Services</button></li>
              <li><button onClick={() => handleNavigate("courses")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Online Courses</button></li>
              <li><button onClick={() => handleNavigate("resources")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Sacred Resources</button></li>
              <li><button onClick={() => handleNavigate("affiliate")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Sacred Earth Shop</button></li>
              <li><button onClick={() => handleNavigate("contact")} className="hover:text-sage transition-colors text-left font-medium cursor-pointer">Contact Sabrina</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-semibold text-charcoal tracking-wider uppercase">Florida Sanctuary</h5>
            <ul className="space-y-2 text-xs font-light text-charcoal/70 leading-relaxed">
              <li>Loxahatchee, FL</li>
              <li>
                <a href="tel:561-801-0150" className="font-semibold text-charcoal hover:text-sage transition-colors">
                  📞 561-801-0150
                </a>
              </li>
              <li>
                <a href="mailto:sbarnettloves@gmail.com" className="font-semibold text-charcoal hover:text-sage transition-colors break-all">
                  ✉️ sbarnettloves@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info / Legal */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-semibold text-charcoal tracking-wider uppercase">Legal Information</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-sage transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Terms of Service</a></li>
            </ul>
            <p className="text-[10px] text-charcoal/50 leading-relaxed font-light pt-2">
              All consultation bookings are subject to availability and scheduling verification.
            </p>
          </div>
        </div>

        {/* Center alignment required copyright info and Developed by credit */}
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-sand/30 text-center space-y-4" id="footer-bottom-info">
          <p className="text-xs text-charcoal/50 font-light">
            &copy; {new Date().getFullYear()} Sabrina Whitehorse. All rights reserved.
          </p>
          <p className="text-xs text-charcoal/60 font-light">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-sage hover:text-gold font-semibold transition-colors underline underline-offset-4">iWebNext</a>
          </p>
        </div>
      </footer>

      {/* 12. Floating Chatbot widget */}
      <Chatbot />

      {/* 13. Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 bg-white hover:bg-sage text-charcoal hover:text-white p-3.5 rounded-full border border-sand/50 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Scroll to Top"
          id="btn-scroll-to-top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* 14. Course Explorer Portal */}
      <CoursesPage isOpen={isCoursesOpen || activePage === "courses"} onClose={() => { setIsCoursesOpen(false); handleNavigate("home"); }} />

      {/* 15. Resources Portal */}
      <ResourcesPage isOpen={isResourcesOpen || activePage === "resources"} onClose={() => { setIsResourcesOpen(false); handleNavigate("home"); }} />
    </div>
  );
}
