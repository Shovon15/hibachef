"use client";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import ImageComponent from "@/components/common/image";
import menuBg from "@/assets/images/menu-bg.jpg";
import Menu1 from "@/assets/images/menu-1.png";
import Menu2 from "@/assets/images/menu-2.png";
import ContentContainer from "@/components/layout/container/contentContainer";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { data?: any };

const MenuSection = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const [mounted, setMounted] = useState(false);

  const dummyData = [
    {
      id: 1,
      image: Menu1,
    },
    {
      id: 2,
      image: Menu2,
    },
  ];

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted || !sectionRef.current || imageRefs.current.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRefs.current,
        {
          x: (index) => (index === 0 ? -120 : 120),
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      );

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={sectionRef} className="relative py-16 overflow-hidden">
      <ImageComponent
        src={menuBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <ContentContainer className="relative z-10 flex flex-col gap-5 lg:gap-5 items-center justify-center h-full">
        <HighlightHeading
          text="Menu & Pricing"
          highlight={["Menu"]}
          highlightClassName="text-primary text-center"
          className="text-white"
        />

        <div className="flex flex-col lg:flex-row gap-10 overflow-hidden min-h-[60vh]">
          {dummyData.map((item, index) => {
            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                className="w-full lg:w-1/2"
              >
                <ImageComponent
                  src={item.image}
                  alt="background"
                  className="w-full h-full object-cover rounded-[50px]"
                />
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </div>
  );
};

export default MenuSection;
