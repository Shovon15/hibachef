"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/store/hooks";

import SafeHtml from "../safeHtml";

gsap.registerPlugin(useGSAP);

type Props = {
  items: IFaqItem[];
  defaultOpenFirst?: boolean;
};

export function Accordion({ items, defaultOpenFirst = true }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultOpenFirst ? 0 : null,
  );

  return (
    <div className="columns-1 lg:columns-2 gap-3 w-full">
      {items.map((item, index) => (
        <FaqRow
          key={index}
          item={item}
          active={activeIndex === index}
          onToggle={() =>
            setActiveIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
}

function FaqRow({
  item,
  active,
  onToggle,
}: {
  item: IFaqItem;
  active: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconWrapRef = useRef<HTMLSpanElement>(null);
  const iconVRef = useRef<HTMLSpanElement>(null);

  // const { language } = useAppSelector((state) => state.language);

  // content animation (your pattern)
  useGSAP(
    () => {
      gsap.to(contentRef.current, {
        height: active ? "auto" : 0,
        opacity: active ? 1 : 0,
        marginTop: active ? "1rem" : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { dependencies: [active] },
  );

  // plus/minus animation
  useGSAP(
    () => {
      gsap.to(iconVRef.current, {
        scaleY: active ? 0 : 1,
        opacity: active ? 0 : 1,
        transformOrigin: "50% 50%",
        duration: 0.2,
        ease: "power2.inOut",
      });

      gsap.to(iconWrapRef.current, {
        rotate: active ? 180 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { dependencies: [active] },
  );

  return (
    <div
      className="break-inside-avoid mb-3 cursor-pointer rounded-xl bg-[#F3F3F3] px-4 py-4 transition lg:py-5"
      onClick={onToggle}
    >
      <button
        type="button"
        aria-expanded={active}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="font-graphikTrial text-sm font-medium text-[#151515] lg:text-base">
          {item.title}
        </h3>

        <span
          ref={iconWrapRef}
          aria-hidden
          className="relative ml-auto inline-block h-[18px] w-[18px]"
        >
          {/* horizontal bar */}
          <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
          {/* vertical bar (animated to disappear) */}
          <span
            ref={iconVRef}
            className="absolute left-1/2 top-1/2 h-[18px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
          />
        </span>
      </button>

      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <div className="font-graphikTrial text-sm font-normal leading-relaxed text-[#747474] whitespace-pre-line lg:text-base">
          <SafeHtml content={item.content} />
        </div>
      </div>
    </div>
  );
}
