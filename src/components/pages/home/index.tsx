"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import HomeBanner from "./components/HomeBanner";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import GallerySection from "./components/GallerySection";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import MenuSection from "./components/MenuSection";

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

      <MenuSection/>

      <HighlightHeading
        text="Select your Location to book your Hibachef"
        highlight={["Hibachef"]}
        highlightClassName="text-primary"
      />

      <GallerySection />
    </ContentContainer>
  );
};

export default HomeComponent;
