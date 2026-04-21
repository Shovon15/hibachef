import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import MenuCard from "./MenuCard";
import ImageComponent from "@/components/common/image";
import menuBg from "@/assets/images/menu-bg.jpg";
import AnimatedBorderCard from "./AnimatedBorderCard";

type Props = { data?: any };

const MenuSection = ({ data }: Props) => {
  return (
    <div className="relative h-screen overflow-hidden"> 
      {/* Background Image */}
      <ImageComponent
        src={menuBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-20 items-center justify-center h-full">
        <HighlightHeading
          text="Menu & Pricing"
          highlight={["Menu"]}
          highlightClassName="text-primary text-center"
        />
        <div className="flex gap-5">
          {/* <AnimatedBorderCard /> */}
          {/* <AnimatedBorderCard className="w-[320px] h-[200px] p-6 bg-black/60">
            <h1 className="text-white text-lg font-bold">Hello</h1>
            <p className="text-white/70">This is glowing border</p>
          </AnimatedBorderCard> */}

          {/* <MenuCard />
          <MenuCard /> */}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
