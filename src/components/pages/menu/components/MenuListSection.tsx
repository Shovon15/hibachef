import ImageComponent from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";

type Props = { data?: any };

const MenuListSection = (props: Props) => {
  const entreeData = [
    { name: "Chicken" },
    { name: "Jumbo Shrimp" },
    { name: "Prime NY Strip" },
    { name: "Scallops" },
    { name: "Salmon" },
    { name: "Filet Mignon", additionalPrice: "8" },
    { name: "Lobster", additionalPrice: "15" },
  ];
  return (
    <ContentContainer
      disablePL
      className="flex flex-col lg:flex-row py-10 gap-10"
    >
      <Shape />
      <div className="w-full lg:w-[50%]">
        <ImageComponent
          src={""}
          alt="..."
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full lg:w-[50%]">
        <h2 className="text-3xl font-black text-primary uppercase mb-8 font-cooperBlack">
          title
        </h2>

        <div className="flex flex-col">
          {entreeData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
            >
              <span className="text-lg font-bold text-black uppercase tracking-tight">
                {item.name}
              </span>

              {item.additionalPrice && (
                <span className="text-sm font-bold text-gray-600">
                  Additional{" "}
                  <span className="text-[#E31837] text-lg">
                    ${item.additionalPrice}
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default MenuListSection;

const Shape = () => {
  return (
    <svg
      width="94"
      height="674"
      viewBox="0 0 94 674"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="94" height="674" fill="#E4002B" />
    </svg>
  );
};
