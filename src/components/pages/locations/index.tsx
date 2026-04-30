import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import ContentContainer from "@/components/layout/container/contentContainer";
import PageBanner from "@/components/layout/container/PageBanner";
import React from "react";
import LocationBannerBg from "@/assets/images/location-banner.png";

type Props = { data?: any };

const LocationPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={LocationBannerBg}
        title=""
        title2="Discover our Locations"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContentContainer>
        <HighlightHeading
          text={`Find us in your nearby  location!`}
          highlight={["nearby ", "location!"]}
          highlightClassName="text-primary "
          className="text-center"
        />
      </ContentContainer>
    </div>
  );
};

export default LocationPage;
