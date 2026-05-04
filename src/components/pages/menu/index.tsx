"use client";
import MenuListSection from "./components/MenuListSection";
import PackageSection from "./components/PackageSection";
import PageBanner from "@/components/layout/container/PageBanner";
import AdditionalInfoSection from "./components/AdditionalInfoSection";
import { DEFAULT_IMAGE } from "@/components/common/image";

type Props = { data?: any };

const MenuPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={DEFAULT_IMAGE}
        title="Menu & Pricing"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <PackageSection />
      <MenuListSection />
      <MenuListSection reverse={true} />
      <MenuListSection />
      <AdditionalInfoSection />
    </div>
  );
};

export default MenuPage;
