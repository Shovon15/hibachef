"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils/helpers/cn";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
  content?: string;
  className?: string;
  animate?: boolean;
  [key: string]: any;
};

const decodeHtmlEntities = (text: string) => {
  if (typeof window === "undefined") return text;
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};

const Paragraph = ({ content = "", className, animate = true, ...props }: Props) => {
  const pRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!animate || !pRef.current || !content || !mounted) return;

    const ctx = gsap.context(() => {
      SplitText.create(pRef.current, {
        type: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            y: 30,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: pRef.current,
              start: "top 90%",
              once: true,
            },
          });
        },
      });
    }, pRef);

    return () => ctx.revert();
  }, [content, animate, mounted]);

  if (!content) return null;

  return (
    <div
      ref={pRef}
      className={cn(
        "font-dmSans font-[300] text-white py-5 text-[clamp(14px,1.2vw,16px)] leading-[clamp(20px,1.6vw,26px)]",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(content) }}
      {...props}
    />
  );
};

export default Paragraph;
