import ImageComponent, { DEFAULT_IMAGE } from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import menuImage from "@/assets/images/menu-image.png";

type Props = { data?: any; reverse?: boolean };
const MenuListSection = ({ reverse = false, data }: Props) => {
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
    <div
      className={`
        flex flex-col lg:flex-row 
        ${reverse ? "lg:flex-row-reverse" : ""}
        py-12 lg:py-28 gap-10 lg:gap-32
      `}
    >
      {/* <div className="self-stretch">
        <Shape />
      </div> */}

      {/* Image */}
      <div className={`w-full lg:w-[50%] flex items-center justify-center relative py-7 lg:py-32 ${reverse ? "pl-5" : "pr-5"}`}>
        <ImageComponent
          src={menuImage}
          alt="..."
          className={`w-[calc(100%-20px)] lg:w-[calc(100%-50px)] h-full object-cover  z-20 ${reverse ? "mr-auto" : "ml-auto"}`}
        />
        <div
          className={`bg-[#E4002B] w-8 lg:w-24 h-full absolute top-0  ${reverse ? "right-0" : "left-0"}`}
        ></div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-[50%] px-5">
        <div className={`max-w-[550px]   ${reverse ? "ml-auto" : "mr-auto"}`}>
          <h2 className="text-3xl font-black text-primary uppercase mb-8 font-cooperBlack">
            Entree Choice
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
      </div>
    </div>
  );
};

export default MenuListSection;

const Shape = () => {
  return (
    <svg
      viewBox="0 0 94 674"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[94px] h-full"
      preserveAspectRatio="none"
    >
      <rect width="94" height="674" fill="#E4002B" />
    </svg>
  );
};
