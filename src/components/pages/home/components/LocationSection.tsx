import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import locationImage from "@/assets/images/location-img.png";
import ImageComponent from "@/components/common/image";
import PrimaryButton from "@/components/common/button/PrimaryButton";

type Props = { data?: any };

const LocationSection = ({ data }: Props) => {
  return (
    <div className="p-10 text-center">
      <HighlightHeading
        text="Select your Location to book your Hibachef"
        highlight={["Hibachef"]}
        highlightClassName="text-primary"
      />

      <div className="py-10 flex justify-center items-center gap-10">
        <div className="w-[60%]">
          <ImageComponent
            src={locationImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[40%] space-y-5">
          <HighlightHeading
            text="Colorado"
            // highlight={["Hibachef"]}
            highlightClassName="text-primary"
          />
          <p>Contact with us or book a Hibachef in Colorado</p>
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
