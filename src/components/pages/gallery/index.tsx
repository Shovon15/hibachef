import React from "react";
import FeaturedVideos from "./components/FeaturedVideos";
import PageBanner from "@/components/layout/container/PageBanner";
import BlogBannerBg from "@/assets/images/blog-bg.png";
import ContentContainer from "@/components/layout/container/contentContainer";

type Props = { data?: any };

const GalleryPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={BlogBannerBg}
        title=""
        title2="Gallery"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContentContainer>
        <FeaturedVideos />
      </ContentContainer>
    </div>
  );
};

export default GalleryPage;
