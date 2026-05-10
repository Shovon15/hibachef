import ImageComponent from "@/components/common/image";
import PerfectCelebrationImg from "@/assets/images/perfect-celebration-img.png";
import ContentContainer from "@/components/layout/container/contentContainer";
import MainTitle from "@/components/common/Titles/MainTitle";

const PerfectCelebration = () => {
  return (
    <div className="relative  overflow-hidden">
      {/* Background Image */}
      <ImageComponent
        src={PerfectCelebrationImg}
        alt="perfect celebration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <ContentContainer className="relative z-20 bg-[#000000B2] h-full grid grid-cols-1 lg:grid-cols-8 items-center justify-center  px-6 text-white py-14 lg:py-20 gap-10 lg:gap-24">
        <div className="col-span-1 lg:col-span-5">
          <MainTitle
            text1="Plan Your "
            text2="Perfect Celebration"
            className="text-center lg:text-left "
            textColor="text-white"

          />

          <p className="mt-4 font-graphikTrial text-sm lg:text-base text-[#FFFFFF] font-normal text-center lg:text-left">
            Hibachi Chef at Home brings the essence of Japanese cuisine right to
            your doorstep. Discover our menu, crafted with the finest
            ingredients to deliver authentic hibachi flavors and aromas. From
            sizzling meats and fresh seafood to vibrant hibachi vegetables and
            fried rice, our offerings are designed to impress. Explore our
            pricing options to find the perfect package for your next event.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-3 space-y-4 lg:space-y-6">
          <button className=" px-6 py-3  text-white rounded-full bg-[#EE1F26] font-graphikTrial font-medium border border-[#EE1F26] hover:bg-transparent  transition-colors duration-300 w-full text-sm lg:text-base uppercase hover:text-[#EE1F26]">
            Download Menu
          </button>
          <button className=" px-6 py-3 text-[#E4002B] font-graphikTrial font-medium border border-[#E4002B] rounded-full hover:bg-primary-dark transition-colors duration-300 w-full text-sm lg:text-base uppercase hover:text-white hover:bg-[#E4002B]">
            Estimate Your PArty Cost
          </button>
        </div>
      </ContentContainer>
    </div>
  );
};

export default PerfectCelebration;
