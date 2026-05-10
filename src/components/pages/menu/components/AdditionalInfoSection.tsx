import ImageComponent from "@/components/common/image";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import additionalInfoBg from "@/assets/images/additional-info.png";
import additionalInfoBgMobile from "@/assets/images/additional-info-mobile.png";
import { useIsMobile } from "@/hooks/useMobile";
import ContentContainer from "@/components/layout/container/contentContainer";

type Props = { data?: any };

const AdditionalInfoSection = ({ data }: Props) => {
  const { isMobile } = useIsMobile();
  const backgroundShape = isMobile ? additionalInfoBgMobile : additionalInfoBg;

  const infoCardsData = [
    {
      title: "Buffet Style",
      items: [
        "$35/Person (Includes Chicken, Shrimp, Steak, Mixed Vegetables, And Egg-Fried Rice).",
        "A Minimum Of 30 People Is Required.",
        "Does Not Include A Hibachi Show.",
      ],
    },
    {
      title: "Table Rental",
      subtitle: "For Parties",
      price: "$15",
      priceLabel: "(Per Person)",
      items: ["Table, Chair, Table Cloths, Utensils And Plates"],
    },
    {
      title: "Others",
      items: [
        "There Is A $550 Minimum For All Parties.",
        "The Price Does Not Include Sales Tax Or Gratuity.",
        "A Traveling Fee May Be Charged For Distances Exceeding 40 Miles.",
      ],
    },
  ];
  return (
    <div className="relative h-full overflow-hidden">
      <ImageComponent
        src={backgroundShape}
        alt="background"
        className=" inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 pt-10 pb-20 h-full bg-[#E4002B]">
        <HighlightHeading
          text="Additional Information"
          highlight={[""]}
          highlightClassName="text-primary"
          className="text-white text-center lg:text-left"
        />

        <ContentContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoCardsData.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </ContentContainer>
      </div>
    </div>
  );
};

export default AdditionalInfoSection;

type IInfoCard = {
  title: string;
  subtitle?: string;
  price?: string;
  priceLabel?: string;
  items?: string[];
};

const InfoCard = ({ title, subtitle, price, priceLabel, items }: IInfoCard) => {
  return (
    <div
      className="h-[271px] w-auto bg-white text-start p-5"
      style={{
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.35)",
      }}
    >
      <h2 className="font-[400] font-cooperBlack text-xl mb-4">{title}</h2>

      {subtitle && (
        <p className="text-red-600 font-[500] font-graphikTrial mb-3 text-[14px] lg:text-[16px]">
          {subtitle}
        </p>
      )}

      {items?.map((item, index) => (
        <p
          key={index}
          className="mb-3 font-[500] font-graphikTrial text-[14px] lg:text-[16px]"
        >
          • {item}
        </p>
      ))}

      {price && (
        <div className="mt-4">
          <h3 className="text-4xl font-[500] font-graphikTrial">{price}</h3>
          <p className="font-[500] font-graphikTrial text-[14px] lg:text-[16px]">
            {priceLabel}
          </p>
        </div>
      )}
    </div>
  );
};
