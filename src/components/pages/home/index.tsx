"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import HomeBanner from "./components/HomeBanner";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import GallerySection from "./components/GallerySection";

type Props = {
  data?: any;
};
const HomeComponent = ({ data }: Props) => {
  return (
    <ContentContainer disablePR disablePL className="">
      <HomeBanner data={""} />
      <div>
        <PrimaryButton>Book Now</PrimaryButton>
      </div>

      <GallerySection />
    </ContentContainer>
  );
};

export default HomeComponent;
