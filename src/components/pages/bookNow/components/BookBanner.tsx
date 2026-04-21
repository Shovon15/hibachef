import ImageComponent from "@/components/common/image";
import BoookNowBg from "@/assets/images/book-banner.png";
import ContentContainer from "@/components/layout/container/contentContainer";

const BookBanner = () => {
  return (
    <div className="relative w-full h-auto pt-[210px] pb-[110px]">
      <ImageComponent
        src={BoookNowBg}
        alt={"Book Now Banner"}
        width={500}
        height={500}
        className="w-full h-full absolute top-0 left-0 object-fill z-0"
      />

      <ContentContainer className="relative z-20">
        <h1 className="text-white text-[clamp(2.25rem,3.333vw,4rem)] font-normal font-cooperBlack">
          Book Your <span className="text-[#EE2026]">Hibachef</span>
        </h1>
        <p className="max-w-[75%] font-normal text-white text-base  leading-relaxed">
          Hibachi Chef at Home brings the essence of Japanese cuisine right to
          your doorstep. Discover our menu, crafted with the finest ingredients
          to deliver authentic hibachi flavors and aromas. From sizzling meats
          and fresh seafood to vibrant hibachi vegetables and fried rice, our
          offerings are designed to impress. Explore our pricing options to find
          the perfect package for your next event.
        </p>
      </ContentContainer>
    </div>
  );
};

export default BookBanner;
