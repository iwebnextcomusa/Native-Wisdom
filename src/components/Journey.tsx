import React from "react";
import { JourneyStep } from "../types";
import { Link2, Heart, Trees, Sparkles } from "lucide-react";

export default function Journey() {
  const steps: JourneyStep[] = [
    {
      step: "01",
      title: "Connect",
      description: "Take the courageous first step. Reach out to Sabrina through our simple request portal or chat, joining a compassionate tribe dedicated to growth.",
    },
    {
      step: "02",
      title: "Heal",
      description: "Dive deep into customized one-on-one transformational healing sessions. Release old blockages and establish a serene emotional and spiritual foundation.",
    },
    {
      step: "03",
      title: "Grow",
      description: "Engage with self-paced mastery courses, downloadable guides, and daily tools designed to enhance spiritual mastery and continuous personal development.",
    },
    {
      step: "04",
      title: "Thrive",
      description: "Step fully into your aligned purpose. Live with emotional freedom, continuous spiritual connection, and absolute confidence in your unlocked potential.",
    }
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Link2 className="w-5 h-5 text-sage" />;
      case 1:
        return <Heart className="w-5 h-5 text-gold" />;
      case 2:
        return <Trees className="w-5 h-5 text-sage" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-sage" />;
    }
  };

  return (
    <div className="relative py-8" id="journey-timeline-container">
      {/* Horizontal Line for Desktop */}
      <div className="hidden lg:block absolute top-[94px] left-8 right-8 h-0.5 bg-gradient-to-r from-sage/30 via-sand/60 to-gold/30 z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={step.step}
            className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-sand/40 hover:bg-white transition-all duration-300 flex flex-col justify-between hover:shadow-md group relative"
            id={`journey-step-${step.step}`}
          >
            {/* Step bubble */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif italic text-4xl text-sand font-bold tracking-tight">
                {step.step}
              </span>
              <div className="bg-white p-3 rounded-full shadow-sm border border-sand/50 group-hover:scale-110 group-hover:bg-sage/10 transition-all duration-300">
                {getStepIcon(idx)}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-left">
              <h4 className="font-serif text-lg font-semibold text-charcoal leading-tight">
                {step.title}
              </h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>

            {/* Faux small connector for mobile */}
            {idx < 3 && (
              <div className="lg:hidden absolute left-1/2 -bottom-6 w-0.5 h-6 bg-sand pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
