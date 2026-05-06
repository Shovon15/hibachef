import React from "react";
import BookNowBg from "@/assets/images/book-banner.png";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import GalleryGridSection from "./components/GalleryGridSection";
import image1 from "@/assets/images/gallery-1.png";
import image2 from "@/assets/images/gallery-2.png";
import image3 from "@/assets/images/gallery-3.png";
import image4 from "@/assets/images/gallery-4.png";
import { StaticImageData } from "next/image";
import FeaturedVideos from "./components/FeaturedVideos";
import PageBanner from "@/components/layout/container/PageBanner";
import BlogBannerBg from "@/assets/images/blog-bg.png";
import ContentContainer from "@/components/layout/container/contentContainer";

type Props = { data?: any };
export interface GalleryItem {
  id: number;
  src: string | StaticImageData;
  alt: string;
  type?: "image" | "video";
  duration?: string;
  label?: string;
}

const GalleryPage = (props: Props) => {
  const galleryData: GalleryItem[] = [
    { id: 1, src: image1, alt: "Gallery image" },
    { id: 2, src: image2, alt: "Gallery image", label: "New" },
    {
      id: 3,
      src: image3,
      alt: "Gallery video",
      type: "video",
      duration: "0:54",
      label: "New",
    },
    {
      id: 4,
      src: image4,
      alt: "Gallery video",
      type: "video",
      duration: "0:48",
      label: "New",
    },
    { id: 5, src: image1, alt: "Gallery image", label: "New" },
    { id: 6, src: image2, alt: "Gallery image", label: "New" },
    { id: 7, src: image3, alt: "Gallery image", label: "New" },
    { id: 8, src: image4, alt: "Gallery image", label: "New" },
    { id: 9, src: image1, alt: "Gallery image", label: "New" },
    { id: 10, src: image2, alt: "Gallery image", label: "New" },
    {
      id: 11,
      src: image3,
      alt: "Gallery video",
      type: "video",
      duration: "0:54",
      label: "New",
    },
    { id: 12, src: image4, alt: "Gallery image", label: "New" },
    { id: 13, src: image4, alt: "Gallery image", label: "New" },
    { id: 14, src: image4, alt: "Gallery image", label: "New" },
    { id: 15, src: image4, alt: "Gallery image", label: "New" },
    { id: 16, src: image4, alt: "Gallery image", label: "New" },
    { id: 17, src: image4, alt: "Gallery image", label: "New" },
  ];

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

        <div className="my-32">
          <HighlightHeading
            text="Full Gallery"
            highlight={["Gallery"]}
            highlightClassName="text-primary "
            className="text-center mb-14"
          />
          <GalleryGridSection data={galleryData} />
        </div>
      </ContentContainer>
    </div>
  );
};

export default GalleryPage;
