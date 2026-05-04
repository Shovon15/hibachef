import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";
import SplitSection from "@/components/layout/container/SpilitSection";
import React from "react";

type Props = { data?: any };

const PartyEstimatorSection = ({ data }: Props) => {
  return (
    <SplitSection
      reverse={false} // 👈 image on right, text on left
      left={
        <div className="relative ">
          <ImageComponent
            src={"./about-img.png"}
            alt=""
            className="relative z-20 w-[calc(100%-18px)]"
          />

          <div className="absolute -top-[10px] lg:-top-[17px] left-[18px] lg:left-[28px]  w-[calc(100%-18px)] lg:w-full h-[calc(100%+20px)] lg:h-[calc(100%+34px)] bg-[#EE1F26] "></div>
        </div>
      }
      right={
        <div>
          <MainTitle
            text1="Hibachef Party"
            text2=" Estimator"
            className="text-left"
          />

          <p className="font-bold font-graphikTrial text-[clamp(14px,2vw,16px)] text-[#3D3D3D] mt-5 lg:mt-8">
            We’re more than just a catering service—our chefs are experts in the
            art of hibachi cooking entertainment.
          </p>

          <p className="font-normal font-graphikTrial text-[clamp(14px,2vw,16px)] text-[#3D3D3D] mt-4 lg:mt-5">
            We bring the grill to your location, offering a front-row seat to a
            culinary performance that is certain to wow your guests...
          </p>
        </div>
      }
    />
  );
};

export default PartyEstimatorSection;
