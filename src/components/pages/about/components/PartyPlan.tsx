import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import MainTitle from "@/components/common/Titles/MainTitle";

const PartyPlan = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 pb-16 lg:py-12 mt-3 lg:mt-12 justify-between items-center gap-10 lg:gap-0">
      <div className="col-span-1 order-2 lg:order-1">
        <h2
          className={`text-[clamp(2.25rem,3.333vw,4rem)] leading-[clamp(2.5rem,3.333vw,4rem)] font-normal text-left font-cooperBlack text-[#121416]`}
        >
          Plan Your Hibachi Party with <span className="text-[#E4002B]">Hibachi Chef </span> At Home
        </h2>
        <p className=" font-normal font-graphikTrial text-sm lg:text-base text-[#3D3D3D] mt-4 lg:mt-5">
          {`Excited to elevate your next event? Whether it's a corporate event or a birthday party, reach out and let Hibachi Chef at Home turn your gathering into a memorable culinary adventure. We’re eager to bring the sizzle, flavor, and fun to your doorstep.`}
        </p>
        <div className="w-full lg:w-fit mt-14">
            <NavLink href="/contact-us" className="mt-4 lg:mt-5 bg-[#EE1F26] w-full block text-center font-graphikTrial font-medium text-sm lg:text-base text-white uppercase border border-[#EE1F26] hover:bg-transparent hover:text-[#EE1F26] transition-all deuration-300 rounded-full py-4 px-16" >
              book Now
            </NavLink> 
        </div>
      </div>
      <div className="col-span-1 lg:pl-20 order-1 lg:order-2">
        <div className="relative ">
          <ImageComponent
            src={"./about-img.png"}
            alt=""
            className="relative z-20 w-[calc(100%-10px)] lg:w-full ml-auto"
          />

          <div className="absolute top-0 bottom-0 my-auto left-0 lg:-left-[18px]    w-full h-[calc(100%-20px)] border-4 border-[#E4002B] "></div>
        </div>
      </div>
    </div>
  );
};

export default PartyPlan;
