import ImageComponent from "@/components/common/image";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import additionalInfoBg from "@/assets/images/additional-info.png";
import additionalInfoBgMobile from "@/assets/images/additional-info-mobile.png";
import { useIsMobile } from "@/hooks/useMobile";

type Props = { data?: any };

const AdditionalInfoSection = ({ data }: Props) => {
  const { isMobile } = useIsMobile();
  const backgroundShape = isMobile ? additionalInfoBgMobile : additionalInfoBg;
  return (
    <div className="relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute bottom-0 z-10 ">
        <ImageComponent src={backgroundShape} alt="background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-20 justify-end items-center pt-88 pb-20  mx-auto px-4 log-green">
        <HighlightHeading
          text="Additional Information"
          highlight={[""]}
          highlightClassName="text-primary"
          className="text-white"
        />

        <div className="flex flex-col md:flex-row gap-5">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoSection;

const InfoCard = () => {
  return (
    <div className="h-[271px] w-[411px] bg-white text-start p-5">
      <h2 className="font-semibold text-xl">Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, similique!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, similique!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, similique!
      </p>
    </div>
  );
};
