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
    <ContentContainer
      disablePL={!reverse} // disable left padding when NOT reversed
      disablePR={reverse}
      className={`
        flex flex-col lg:flex-row 
        ${reverse ? "lg:flex-row-reverse" : ""}
        py-10 gap-10
      `}
    >
      <div className="self-stretch">
        <Shape />
      </div>

      {/* Image */}
      <div className="w-full lg:w-[44%]">
        <div className="w-full h-full flex items-center justify-center p-5 lg:p-0">
          <div className="aspect-square w-full max-w-full">
            <ImageComponent
              src={menuImage}
              alt="..."
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-[56%]">
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
    </ContentContainer>
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
