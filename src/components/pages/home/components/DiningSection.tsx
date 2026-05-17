"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import React, { useEffect, useRef } from "react";
import diningImage from "@/assets/images/dining-image.png";
import ImageComponent from "@/components/common/image";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Paragraph from "@/components/common/typography/Paragraph";

type Props = { data?: any };

gsap.registerPlugin(ScrollTrigger);

const DiningSection = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const firstImageRef = useRef<HTMLDivElement | null>(null);
  const secondImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        firstImageRef.current,
        {
          y: -120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        secondImageRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-10 lg:py-16 overflow-hidden">
      <ContentContainer className="flex flex-col gap-16 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-5 items-start">
          {/* Left Image */}
          <div ref={firstImageRef} className="aspect-[299/634] overflow-hidden">
            <ImageComponent
              src={diningImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div
            ref={secondImageRef}
            className="aspect-[299/634] overflow-hidden mt-8 lg:mt-14"
          >
            <ImageComponent
              src={diningImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <HighlightHeading
            text="The Luxury of Live-Fire Dining"
            highlight={["Live-Fire"]}
            highlightClassName="text-primary"
            className="text-[clamp(36px,5vw,64px)] leading-[100%]"
          />
          <Paragraph
            className="pt-7 text-[#3D3D3D] font-graphikTrial font-normal text-[16px] leading-[24px] tracking-[0%]"
            content={`  Convallis lectus adipiscing ultrices ullamcorper. Aliquet diam
            ornare ut porttitor metus sit sapien in. Faucibus egestas
            consectetur nunc blandit ipsum aliquam tortor mus. Elementum
            pellentesque quis risus elit quis lectus. Blandit sagittis nec nunc
            feugiat ante tempus nisl. Integer eget egestas tortor donec
            senectus. Vitae libero sed quam nec dignissim enim feugiat enim
            aliquam. Sit ut fames sagittis tincidunt diam in leo aliquet eget.
            Sed blandit lorem ornare neque velit curabitur vehicula dictumst
            quis. Massa nec leo odio sit quis sit nisl. Adipiscing magna amet
            nec faucibus ac malesuada mauris proin ullamcorper. Mauris at
            iaculis penatibus commodo phasellus magnis sit rhoncus rhoncus.
            Ultrices blandit auctor egestas dolor faucibus vel sed. Velit
            vivamus ipsum proin eget eleifend.`}
            animate
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default DiningSection;
