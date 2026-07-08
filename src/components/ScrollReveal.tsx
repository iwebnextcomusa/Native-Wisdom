import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number; // ms
  delay?: number; // ms
  threshold?: number;
  className?: string;
  id?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  duration = 800,
  delay = 0,
  threshold = 0.05,
  className = "",
  id,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px", // Triggers slightly before the element reaches the viewport for ultra-smooth responsiveness
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Determine transform and opacity styles based on visibility and transition direction
  const getTransformStyles = () => {
    if (isVisible) {
      return "opacity-100 translate-y-0 translate-x-0 scale-100";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-12";
      case "down":
        return "opacity-0 -translate-y-12";
      case "left":
        return "opacity-0 translate-x-12";
      case "right":
        return "opacity-0 -translate-x-12";
      case "fade":
        return "opacity-0";
      default:
        return "opacity-0 translate-y-12";
    }
  };

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${getTransformStyles()} ${className}`}
      style={style}
      id={id}
    >
      {children}
    </div>
  );
}
