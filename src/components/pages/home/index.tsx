"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import HomeBanner from "./components/HomeBanner";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import GallerySection from "./components/GallerySection";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import MenuSection from "./components/MenuSection";
import DiningSection from "./components/DiningSection";
import LocationSection from "./components/LocationSection";
import ImageComponent from "@/components/common/image";
import Review from "@/components/common/review/Review";

type Props = {
  data?: any;
};
const HomeComponent = ({ data }: Props) => {
  return (
    <ContentContainer disablePR disablePL className=" !bg-transparent">
      <HomeBanner data={""} />
      <DiningSection />

      <MenuSection />

      <LocationSection />
      <Review className="py-10" mainTitle="Customer" spanTitle="Reviews" />
      <GallerySection />
    </ContentContainer>
  );
};

export default HomeComponent;
