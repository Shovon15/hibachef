"use client";
import MenuListSection from "./components/MenuListSection";
import PackageSection from "./components/PackageSection";
import PageBanner from "@/components/layout/container/PageBanner";
import AdditionalInfoSection from "./components/AdditionalInfoSection";
import { DEFAULT_IMAGE } from "@/components/common/image";
import BlogBannerBg from "@/assets/images/blog-bg.png";
import PerfectCelebration from "./components/PerfectCelebration";

type Props = { data?: any };

const MenuPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={BlogBannerBg}
        title="Menu "
        title2="& Pricing"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
        mainTextColor="text-[#EE1F26]"
        spanTextColor="text-white"
      />
      <PackageSection />
      <PerfectCelebration/>
      <MenuListSection reverse={true}/>
      <MenuListSection  />
      <MenuListSection reverse={true}/>
      <AdditionalInfoSection />
    </div>
  );
};

export default MenuPage;
