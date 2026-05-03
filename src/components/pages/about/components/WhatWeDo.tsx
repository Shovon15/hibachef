import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";

const WhatWeDo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-12 mt-3 lg:mt-12 justify-between items-center gap-10 lg:gap-0">
      <div className="col-span-1 lg:pr-24 ">
        <ImageComponent
          src={"./about-img-2.png"}
          alt=""
          className="relative z-20 w-[calc(100%-18px)]"
        />
      </div>
      <div className="col-span-1 ">
        <MainTitle text1="What" text2="We Are" className="text-left" />
        <p className=" font-normal font-graphikTrial text-sm lg:text-base text-[#3D3D3D] mt-5 lg:mt-8">
          {`We cater to all events, big or small, working closely with you to
          customize our menus to fit your needs and budget, ensuring every
          detail of your special occasion is perfect.`}
        </p>
        <p className=" font-normal font-graphikTrial text-sm lg:text-base text-[#3D3D3D] mt-4 lg:mt-5">
          {`Our values center on innovation and delivering fresh, healthy meals
          with exceptional flavors and stylish presentations. Founded by a
          family passionate about fine dining, we’re dedicated to providing
          top-notch catering experiences focusing on the best ingredients,
          client satisfaction, and unforgettable events.`}
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
