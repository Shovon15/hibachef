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

      <div className=" mx-auto px-12 pt-10 max-w-[80%]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                relative w-full max-w-sm p-8 text-center transition-transform duration-300
                ${
                  item.isFeatured
                    ? "bg-[#E31837] text-white z-10 scale-115 shadow-2xl"
                    : "bg-white text-black z-0 shadow-xl"
                }
                flex flex-col items-center justify-center min-h-[350px]
              `}
            >
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                {item.title}
              </h3>

              {item.description && (
                <p
                  className={`text-sm mb-6 font-medium ${item.isFeatured ? "text-white/90" : "text-gray-600"}`}
                >
                  {item.description}
                </p>
              )}

              <div className="flex flex-col items-center">
                <span className="text-7xl font-black flex items-start">
                  <span className="text-4xl mt-2">$</span>
                  {item.price}
                </span>
                <span
                  className={`text-sm mt-2 font-bold ${item.isFeatured ? "text-white" : "text-gray-500"}`}
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
