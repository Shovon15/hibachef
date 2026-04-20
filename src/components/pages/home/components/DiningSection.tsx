import ContentContainer from "@/components/layout/container/contentContainer";
import React from "react";
import diningImage from "@/assets/images/dining-image.png";
import ImageComponent from "@/components/common/image";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";

type Props = { data?: any };

const DiningSection = ({ data }: Props) => {
  return (
    <div className="py-10">
      <ContentContainer className="flex flex-col gap-10 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] flex justify-center gap-5">
          <div className="w-[299px] h-[634px] ">
            <ImageComponent
              src={diningImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[299px] h-[634px] mt-14">
            <ImageComponent
              src={diningImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <HighlightHeading
            text="The Luxury of Live-Fire Dining"
            highlight={["Live-Fire"]}
            highlightClassName="text-primary"
          />
          <p>
            Convallis lectus adipiscing ultrices ullamcorper. Aliquet diam
            ornare ut porttitor metus sit sapien in. Faucibus egestas
            consectetur nunc blandit ipsum aliquam tortor mus. Elementum
            pellentesque quis risus elit quis lectus. Blandit sagittis nec nunc
            feugiat ante tempus nisl. Integer eget egestas tortor donec
            senectus. Vitae libero sed quam nec dignissim enim feugiat enim
            aliquam. Sit ut fames sagittis tincidunt diam in leo aliquet eget.
            Sed blandit lorem ornare neque velit curabitur vehicula dictumst
            quis. Massa nec leo odio sit quis sit nisl. Adipiscing magna amet
            nec faucibus ac malesuada mauris proin ullamcorper. Mauris at
            iaculis penatibus commodo phasellus magnis sit rhoncus rhoncus.
            Ultrices blandit auctor egestas dolor faucibus vel sed. Velit
            vivamus ipsum proin eget eleifend.
          </p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default DiningSection;
