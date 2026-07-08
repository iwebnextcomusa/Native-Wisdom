import React from "react";
import { Heart, ShieldCheck, Compass, Sparkles, Laptop, Infinity } from "lucide-react";
import { WhyChooseItem } from "../types";

export default function WhyChoose() {
  const benefits: WhyChooseItem[] = [
    {
      id: "guidance",
      title: "Compassionate Guidance",
      description: "Walk alongside an empathetic healer who offers unconditional warmth, complete active listening, and a gentle spirit.",
      iconName: "Heart",
    },
    {
      id: "space",
      title: "Safe Healing Space",
      description: "Experience absolute confidentiality, safety, and tranquil support designed to let you shed guards and fully breathe.",
      iconName: "ShieldCheck",
    },
    {
      id: "support",
      title: "Personalized Support",
      description: "Every journey is unique. Receive custom-tailored sessions matching your current emotional rhythm and spiritual goals.",
      iconName: "Compass",
    },
    {
      id: "growth",
      title: "Transformational Growth",
      description: "We focus on real outcomes. Break free from deep-seated barriers, align your values, and unlock your deepest potential.",
      iconName: "Sparkles",
    },
    {
      id: "access",
      title: "Online Accessibility",
      description: "Receive deep transformative healing anywhere in the world. Fully optimized digital classes, video tools, and chat support.",
      iconName: "Laptop",
    },
    {
      id: "holistic",
      title: "Holistic Approach",
      description: "Integrate mind, body, emotions, and spirit into a synchronized lifestyle built upon emotional and spiritual mastery.",
      iconName: "Infinity",
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Heart":
        return <Heart className="w-5 h-5 text-sage" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-gold" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-sage" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gold" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-sage" />;
      case "Infinity":
        return <Infinity className="w-5 h-5 text-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-sage" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-grid">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className="p-6 bg-white/70 backdrop-blur-md border border-sand/30 hover:border-sage/40 hover:bg-white rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1"
          id={`benefit-card-${benefit.id}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-sand/20 p-3 rounded-xl flex items-center justify-center">
              {getIcon(benefit.iconName)}
            </div>
            <h4 className="font-serif text-lg font-semibold text-charcoal leading-tight">
              {benefit.title}
            </h4>
          </div>
          <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}
