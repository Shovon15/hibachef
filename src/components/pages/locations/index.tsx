import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import ContentContainer from "@/components/layout/container/contentContainer";
import PageBanner from "@/components/layout/container/PageBanner";
import React from "react";
import LocationBannerBg from "@/assets/images/location-banner.png";
import LocationMap from "./components/LocationMap";
import AllLocation from "./components/AllLocation";

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
      
      <LocationMap />
      <ContentContainer>
        <AllLocation/>
      </ContentContainer>
    </div>
  );
};

export default LocationPage;
