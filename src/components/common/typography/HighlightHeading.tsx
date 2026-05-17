"use client";

import {
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingOne } from "./Heading";
import { cn } from "@/utils/helpers/cn";

gsap.registerPlugin(SplitText, ScrollTrigger);

type HighlightHeadingProps = {
  text?: string;
  highlight?: string | string[];
  highlightClassName?: string;
  className?: string;
  animate?: boolean;
  [key: string]: any;
};

const emptySubscribe = () => () => {};

export const HighlightHeading = ({
  text,
  highlight,
  highlightClassName = "text-red-500",
  className,
  animate = true,
  ...props
}: HighlightHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const highlights = Array.isArray(highlight) ? highlight : [highlight];

  const renderText = () => {
    if (!text) return null;
    if (!highlight) return text;

    let parts: (string | ReactNode)[] = [text];

    highlights.forEach((word) => {
      if (!word) return;

      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return part;

        const split = part.split(new RegExp(`(${word})`, "gi"));

        return split.map((chunk, i) =>
          chunk.toLowerCase() === word.toLowerCase() ? (
            <span key={`${chunk}-${i}`} className={highlightClassName}>
              {chunk}
            </span>
          ) : (
            chunk
          ),
        );
      });
    });

    return parts;
  };

  useLayoutEffect(() => {
    if (!isMounted || !text || !headingRef.current || !animate) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current, {
        type: "chars,words,lines",
        linesClass: "split-line",
      });

      gsap.set(split.chars, {
        y: 100,
        autoAlpha: 0,
      });

      gsap.to(split.chars, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.035,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, headingRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [isMounted, text, highlight, animate]);

  // Always return the structure so ScrollReveal can find it and SplitText can measure it.
  // The 'invisible' class on ScrollReveal will handle hiding it until GSAP is ready.
  if (!text) return null;

  return (
    <HeadingOne
      ref={headingRef}
      className={cn(
        "font-cooperBlack leading-[110%]",
        "text-[clamp(36px,5vw,64px)]",
        className,
      )}
      {...props}
    >
      {renderText()}
    </HeadingOne>
  );
};
