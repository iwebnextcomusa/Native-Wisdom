import React from "react";
import { Sparkles, BookOpen, Compass, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const handleScrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "healing-sessions",
      title: "Transformational Healing Sessions",
      subtitle: "One-on-One Spiritual Alignment",
      description: "Deep, customized 1-on-1 transformational healing sessions focused on clearing emotional blockages, establishing inner balance, and unlocking your true personal growth potential.",
      features: [
        "Personalized emotional assessment",
        "Gentle, intuitive guided healing",
        "Energy balancing & alignment",
        "Integration & growth blueprint",
      ],
      icon: <Compass className="w-6 h-6 text-sage" />,
      tag: "Most Requested",
    },
    {
      id: "online-courses",
      title: "Immersive Online Courses",
      subtitle: "Self-Paced Mastery & Spiritual Growth",
      description: "Comprehensive online programs designed to enhance spiritual mastery, deepen emotional awareness, and help you establish practical daily practices for lasting well-being.",
      features: [
        "In-depth video tutorials",
        "Journaling templates & exercises",
        "Guided meditation audios",
        "Lifetime access to tribe modules",
      ],
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      tag: "Popular",
    },
    {
      id: "growth-resources",
      title: "Personal Growth Resources",
      subtitle: "Guides, Tools & Future Offerings",
      description: "An expanding library of downloadable e-books, templates, checklists, educational videos, and articles to sustain your spiritual journey and expand your wisdom daily.",
      features: [
        "Transformational starter guides",
        "Printable wellness calendars",
        "Educational video library",
        "Exclusive blog & tribe articles",
      ],
      icon: <Sparkles className="w-6 h-6 text-sage" />,
      tag: "Free Access",
    },
  ];

  return (
    <div className="space-y-12" id="services-container">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-3xl p-8 border border-sand/40 hover:border-sage/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            id={`service-card-${svc.id}`}
          >
            {/* Top Tag */}
            <div className="absolute top-4 right-4 bg-sand/15 text-charcoal/60 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {svc.tag}
            </div>

            <div className="space-y-6">
              {/* Icon */}
              <div className="bg-sand/25 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                {svc.icon}
              </div>

              {/* Headings */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-sage tracking-widest uppercase font-semibold">
                  {svc.subtitle}
                </span>
                <h4 className="font-serif text-xl font-bold text-charcoal leading-tight">
                  {svc.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                {svc.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 pt-2 border-t border-sand/30">
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-charcoal/80">
                    <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Arrow */}
            <div className="pt-8">
              <button
                onClick={handleScrollToContact}
                className="w-full bg-[#FAF9F6] group-hover:bg-sage group-hover:text-white text-charcoal text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl border border-sand/50 group-hover:border-sage transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Services Footer Quote (from original request copy) */}
      <div className="bg-sand/15 rounded-2xl p-6 border border-sand/30 text-center max-w-2xl mx-auto">
        <p className="text-sm font-serif italic text-charcoal/80">
          "Explore my online healing sessions and in-depth courses designed to enhance spiritual and emotional mastery."
        </p>
      </div>
    </div>
  );
}
