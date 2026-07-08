import React, { useState, useEffect } from "react";
import { Menu, X, Compass, Mail, Heart, Phone } from "lucide-react";

interface HeaderProps {
  onOpenCourses: () => void;
  onOpenResources: () => void;
}

export default function Header({ onOpenCourses, onOpenResources }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: {
    name: string;
    href?: string;
    action?: () => void;
    subPages?: { name: string; href?: string; action?: () => void; description?: string }[];
  }[] = [
    {
      name: "About",
      subPages: [
        { name: "About Sabrina", href: "#about", description: "Meet Sabrina, master intuitive practitioner" },
        { name: "Our 4-Step Journey", href: "#journey", description: "The organic path to spiritual alignment" },
        { name: "The Aligned Path", href: "#why-choose", description: "Sovereign freedom and daily guidance" }
      ]
    },
    {
      name: "Services",
      subPages: [
        { name: "Private Sessions", href: "#services", description: "1-on-1 transformational healing" },
        { name: "Sacred Circles", href: "#services", description: "Community group healing & connection" }
      ]
    },
    {
      name: "Online Courses",
      action: onOpenCourses,
      subPages: [
        { name: "Emotional Sovereignty", action: onOpenCourses, description: "Reclaim personal authority and self-mastery" },
        { name: "Spiritual Awakening", action: onOpenCourses, description: "Connect with inner wisdom and daily alignment" },
        { name: "Tribe Mastery Intensive", action: onOpenCourses, description: "Advanced master-level healing training" }
      ]
    },
    {
      name: "Sacred Resources",
      action: onOpenResources,
      subPages: [
        { name: "Free Workbooks & Guides", action: onOpenResources, description: "Downloadable checklists and guides" },
        { name: "Guided Sound Centering", action: onOpenResources, description: "Meditative audio release tracks" },
        { name: "Tribe Wisdom Blog", action: onOpenResources, description: "Read insightful articles on healing" }
      ]
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: { href?: string; action?: () => void }
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (link.action) {
      link.action();
    } else if (link.href) {
      const targetElement = document.querySelector(link.href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-sand/30"
          : "bg-transparent py-6"
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name / Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group"
          id="brand-logo-link"
        >
          <div className="h-10 md:h-12 w-auto overflow-hidden rounded-lg bg-white p-1 border border-sand/30 shadow-sm group-hover:border-sage/50 transition-all duration-300">
            <img
              src="/src/assets/images/native_wisdom_logo_1783534360537.jpg"
              alt="Native Wisdom Logo"
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => {
            if (link.subPages) {
              return (
                <div key={link.name} className="relative group py-2" id={`nav-dropdown-${link.name.toLowerCase().replace(" ", "-")}`}>
                  <button
                    onClick={(e) => {
                      if (link.action) link.action();
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-charcoal/80 hover:text-sage transition-colors pb-1 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <span className="text-[8px] opacity-60 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </button>
                  
                  {/* Dropdown Menu Panel */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white/95 backdrop-blur-md border border-sand/30 shadow-xl rounded-2xl p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="space-y-1.5">
                      {link.subPages.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href || "#"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (sub.action) {
                              sub.action();
                            } else if (sub.href) {
                              const target = document.querySelector(sub.href);
                              if (target) target.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="block p-2.5 rounded-xl hover:bg-sand/15 transition-all text-left group/sub"
                        >
                          <span className="block text-xs font-bold text-charcoal group-hover/sub:text-sage transition-colors">
                            {sub.name}
                          </span>
                          {sub.description && (
                            <span className="block text-[10px] text-charcoal/50 font-normal leading-relaxed mt-0.5">
                              {sub.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href || "#"}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-xs font-semibold uppercase tracking-wider text-charcoal/80 hover:text-sage hover:border-b-2 hover:border-sage/40 transition-colors pb-1"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-sage hover:bg-[#6a8b75] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-95"
            id="header-cta-book"
          >
            Book Session
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-charcoal hover:text-sage hover:bg-sand/20 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          id="btn-mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-sand/40 shadow-xl py-6 px-6 space-y-4 max-h-[80vh] overflow-y-auto animate-fadeIn"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-1">
                {link.subPages ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.action) {
                          setIsOpen(false);
                          link.action();
                        }
                      }}
                      className="w-full text-left text-sm font-bold uppercase tracking-wider text-charcoal/90 p-2 hover:bg-sand/10 rounded-xl transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] opacity-40">▼</span>
                    </button>
                    <div className="pl-4 border-l border-sand/30 ml-2 space-y-1 flex flex-col">
                      {link.subPages.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href || "#"}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            if (sub.action) {
                              sub.action();
                            } else if (sub.href) {
                              const target = document.querySelector(sub.href);
                              if (target) target.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="text-xs font-semibold text-charcoal/70 hover:text-sage py-2 px-2 hover:bg-sand/10 rounded-lg transition-all"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href || "#"}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="block text-sm font-bold uppercase tracking-wider text-charcoal/80 hover:text-sage p-2 hover:bg-sand/10 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-sand/30 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-sage hover:bg-[#6a8b75] text-white text-center py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Schedule Your Session
            </a>
            <div className="flex flex-col items-center gap-1.5 text-charcoal/50 text-[11px] py-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-sage" /> 561-801-0150
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sage" /> sbarnettloves@gmail.com
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
