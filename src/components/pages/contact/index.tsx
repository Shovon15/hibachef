import PageBanner from "@/components/layout/container/PageBanner";
import React from "react";
import BlogBannerBg from "@/assets/images/blog-bg.png";
import Review from "@/components/common/review/Review";
import ContactForm from "./components/ContactForm";

type Props = { data?: any };

const ContactPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        bgImage={BlogBannerBg}
        title="Contact"
        title2="Us"
        mainTextColor="text-[#EE1F26]"
        spanTextColor="text-[#FFFFFF]"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContactForm/>
      <Review className="py-16 lg:py-20" mainTitle="Our Happy" spanTitle="Clients" />
    </div>
  );
};

export default ContactPage;
