import PageBanner from "@/components/layout/container/PageBanner";
import React from "react";
import BookNowBg from "@/assets/images/book-banner.png";
import ContentContainer from "@/components/layout/container/contentContainer";
import PartyEstimatorSection from "./components/PartyEstimatorSection";

type Props = { data?: any };

const PartyEstimatorPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={BookNowBg}
        title="Party"
        title2="Estimator"
        mainTextColor="text-[#EE1F26]"
        spanTextColor="text-[#FFFFFF]"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContentContainer>
        <PartyEstimatorSection />
      </ContentContainer>
    </div>
  );
};

export default PartyEstimatorPage;
