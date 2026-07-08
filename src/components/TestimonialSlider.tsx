import React, { useState } from "react";
import { Testimonial } from "../types";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Evelyn Ross",
      role: "Holistic Wellness Practitioner",
      text: "Working with Sabrina changed everything for me. Her one-on-one transformational healing session helped me unlock emotional patterns that I had carried for years. Her space in Florida is peaceful and sacred. I feel deeply connected and aligned.",
      rating: 5,
    },
    {
      id: "2",
      name: "Marcus Vance",
      role: "Creative Director",
      text: "The spiritual and emotional mastery courses Sabrina teaches are masterfully structured. Each lesson is incredibly profound yet simple to apply. My personal growth journey has accelerated, and I have found true inner balance.",
      rating: 5,
    },
    {
      id: "3",
      name: "Sarah Jenkins",
      role: "Yoga Teacher",
      text: "Sabrina is a gifted soul. Her compassionate guidance and personalized support feel like a warm embrace. The tribe she has built is welcoming and transformative. Loxahatchee has a true gem in her healing practice.",
      rating: 5,
    },
    {
      id: "4",
      name: "Clara Mendoza",
      role: "Mental Health Counselor",
      text: "I highly recommend Sabrina's personal growth resources to anyone seeking deep transformational healing. She is extremely professional, gentle, and intuitive. Her holistic approach is exactly what modern self-care needs.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8" id="testimonials-slider-container">
      {/* Decorative Quote Icon */}
      <div className="absolute top-0 left-6 text-sand opacity-30 select-none pointer-events-none">
        <Quote className="w-24 h-24 rotate-180" />
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-sand/40 shadow-sm relative z-10 transition-all duration-500">
        <div className="flex flex-col items-center text-center">
          {/* Stars */}
          <div className="flex gap-1 mb-6" id="testimonial-stars-container">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg md:text-xl font-serif italic text-charcoal/90 leading-relaxed mb-8">
            "{testimonials[currentIndex].text}"
          </blockquote>

          {/* Reviewer Information */}
          <div className="text-center">
            <h4 className="font-serif text-lg font-semibold text-charcoal tracking-wide">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-xs font-sans text-sage font-medium uppercase tracking-widest mt-1">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-10 md:mt-6 md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:px-6">
          <button
            onClick={handlePrev}
            className="bg-white hover:bg-sand/20 text-charcoal p-3 rounded-full border border-sand/40 shadow-sm transition-all hover:scale-105 active:scale-95"
            aria-label="Previous Testimonial"
            id="btn-prev-testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white hover:bg-sand/20 text-charcoal p-3 rounded-full border border-sand/40 shadow-sm transition-all hover:scale-105 active:scale-95"
            aria-label="Next Testimonial"
            id="btn-next-testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6" id="testimonial-indicators">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-sage w-6" : "bg-sand hover:bg-sage/40"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
