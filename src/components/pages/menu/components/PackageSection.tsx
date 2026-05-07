import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

interface PackageItem {
  title: string;
  price: number;
  description?: string;
  subtext: string;
  isFeatured?: boolean;
}

type Props = {
  packages?: PackageItem[];
};

const PackageSection = ({ packages }: Props) => {
  // Default data if none is provided via props
  const defaultPackages: PackageItem[] = [
    {
      title: "Hibachi Regular",
      price: 55,
      subtext: "(Per Person)",
    },
    {
      title: "Hibachi Special",
      price: 65,
      description: "(Includes Chicken, Shrimp, And NY Strip)",
      subtext: "(Per Person)",
      isFeatured: true,
    },
    {
      title: "Hibachi Kids",
      price: 30,
      description: "(Includes One Entree)",
      subtext: "(Age 5-12)",
    },
  ];

  const data = packages || defaultPackages;

  return (
    <ContentContainer className="py-12 ">
      <HighlightHeading
        text="Hibachi Packages"
        highlight={["Packages"]}
        highlightClassName="text-primary"
        className=" text-center py-5"
      />

      <div className=" mx-auto px-12 pt-10 ">
        <div className="flex flex-row items-center justify-center gap-0 lg:gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                relative w-full  text-center transition-transform duration-300
                ${
                  item.isFeatured
                    ? "bg-[#E31837] text-white z-10  shadow-2xl min-w-[130px] max-w-[400px] px-3 py-4 lg:px-5 lg:py-14 "
                    : "bg-white text-black z-0 shadow-[0px_5.44px_10.55px_0px_#00000040] lg:shadow-[0px_16px_31px_0px_#00000040] px-1.5 py-3 lg:p-8 min-w-[115px] max-w-[340px]"
                }
                flex flex-col items-center justify-center min-h-[134px] lg:min-h-[350px]
              `}
            >
              <h3 className=" text-xs lg:text-2xl mb-1 lg:mb-5  font-cooperBlack font-normal">
                {item.title}
              </h3>

              {item.description && (
                <p
                  className={` font-medium font-graphikTrial ${item.isFeatured ? "text-white/90 text-[10px] lg:text-sm " : "text-gray-600 text-[8px] lg:text-sm "}`}
                >
                  {item.description}
                </p>
              )}

              <div className="flex flex-col items-center">
                <span
                  className={` font-graphikTrial font-semibold flex items-start justify-center ${item.isFeatured ? "text-white text-[clamp(3rem,7.396vw,8.875rem)] leading-[130%] py-0 lg:py-7" : "text-black text-[clamp(2.25rem,5vw,6rem)]"}`}
                >
                  ${item.price}
                </span>
                <span
                  className={`text-[10px] lg:text-2xl mt-1 lg:mt-2 font-bold ${item.isFeatured ? "text-white" : "text-[#000000]"}`}
                >
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default PackageSection;
