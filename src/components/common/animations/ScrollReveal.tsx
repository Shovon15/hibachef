"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScrollRevealProps {
  children: React.ReactNode;
  stagger?: number;
  baseDelay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  stagger = 0.1,
  baseDelay = 0,
  duration = 0.8,
  yOffset = 50,
  className,
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Small delay to ensure children have rendered their final DOM
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // Select items marked with 'reveal-item'
        const revealItems =
          containerRef.current?.querySelectorAll(".reveal-item");

        // If no items have the class, use direct children
        const items =
          revealItems && revealItems.length > 0
            ? Array.from(revealItems)
            : Array.from(containerRef.current?.children || []);

        items.forEach((item, index) => {
          const splitType = item.getAttribute("data-split");

          if (splitType === "chars") {
            const split = new SplitText(item, {
              type: "chars,words,lines",
              linesClass: "split-line",
            });
            tl.from(
              split.chars,
              {
                y: yOffset,
                autoAlpha: 0,
                duration: duration,
                stagger: 0.02,
                ease: "power3.out",
              },
              index === 0 ? baseDelay : "-=0.6",
            );
          } else if (splitType === "lines") {
            const split = new SplitText(item, {
              type: "lines",
              linesClass: "split-line",
            });
            tl.from(
              split.lines,
              {
                y: yOffset,
                autoAlpha: 0,
                duration: duration,
                stagger: 0.1,
                ease: "power3.out",
              },
              index === 0 ? baseDelay : "-=0.6",
            );
          } else {
            tl.from(
              item,
              {
                y: yOffset,
                autoAlpha: 0,
                duration: duration,
                ease: "power3.out",
              },
              index === 0 ? baseDelay : "-=0.6",
            );
          }
        });
      }, containerRef);

      ScrollTrigger.refresh();

      return () => {
        ctx.revert();
      };
    }, 150); // Slightly longer delay for safety

    return () => clearTimeout(timer);
  }, [mounted, baseDelay, duration, yOffset]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
