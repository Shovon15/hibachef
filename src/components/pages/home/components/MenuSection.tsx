import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import MenuCard from "./MenuCard";
import ImageComponent from "@/components/common/image";
import menuBg from "@/assets/images/menu-bg.jpg";
import AnimatedBorderCard from "./AnimatedBorderCard";
import Menu1 from "@/assets/images/menu-1.png";
import Menu2 from "@/assets/images/menu-2.png";
import ContentContainer from "@/components/layout/container/contentContainer";

type Props = { data?: any };

const MenuSection = ({ data }: Props) => {
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
  return (
    <div className="relative py-16  overflow-hidden">
      {/* Background Image */}
      <ImageComponent
        src={menuBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (important for readability) */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <ContentContainer className="relative z-10 flex flex-col gap-5 lg:gap-5 items-center justify-center h-full">
        <HighlightHeading
          text="Menu & Pricing"
          highlight={["Menu"]}
          highlightClassName="text-primary text-center"
          className="text-white"
        />
        <div className="flex flex-col lg:flex-row gap-5 ">
          {dummyData.map((item, index) => {
            return (
              <div key={index} className="w-full lg:w-1/2 ">
                <ImageComponent
                  src={item.image}
                  alt="background"
                  className="w-full h-full object-cover rounded-[50px]"
                />
              </div>
            );
          })}

          {/* <AnimatedBorderCard /> */}
          {/* <AnimatedBorderCard className="w-[320px] h-[200px] p-6 bg-black/60">
            <h1 className="text-white text-lg font-bold">Hello</h1>
            <p className="text-white/70">This is glowing border</p>
          </AnimatedBorderCard> */}

          {/* <MenuCard />
          <MenuCard /> */}
        </div>
      </ContentContainer>
    </div>
  );
};

export default MenuSection;
