import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-12 mt-3 lg:mt-12 justify-between items-center gap-10 lg:gap-0">
      <div className="col-span-1 order-2 lg:order-1">
        <MainTitle text1="Who" text2="We Are" className="text-left" />
        <p className=" font-bold font-graphikTrial text-sm lg:text-base text-[#3D3D3D] mt-5 lg:mt-8">
          {`We’re more than just a catering service—our chefs are experts in the
          art of hibachi cooking entertainment.`}
        </p>
        <p className=" font-normal font-graphikTrial text-sm lg:text-base text-[#3D3D3D] mt-4 lg:mt-5">
          {`We bring the grill to your location, offering a front-row seat to a
          culinary performance that is certain to wow your guests. Whether it’s
          a cozy dinner party or a grand celebration, we pour our heart and soul
          into every meal we prepare, ensuring it’s as enjoyable to watch as it
          is to eat`}
        </p>
      </div>
      <div className="col-span-1 lg:pl-20 order-1 lg:order-2">
        <div className="relative ">
          <ImageComponent
            src={"./about-img.png"}
            alt=""
            className="relative z-20 w-[calc(100%-18px)]"
          />

          <div className="absolute -top-[10px] lg:-top-[17px] left-[18px] lg:left-[28px]  w-[calc(100%-18px)] lg:w-full h-[calc(100%+20px)] lg:h-[calc(100%+34px)] bg-[#EE1F26] "></div>
        </div>
      </div>
    </div> 
  );
};

export default WhoWeAre;
