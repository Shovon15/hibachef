import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";
import EstimatedPriceBg from "@/assets/images/estimated-price-bg.png";
import EstimateForm from "./EstimateForm";

const EventDetails = () => {
  return (
    <div>
      <MainTitle
        text1="Event"
        text2="Details"
        spanColor="text-[#000000]"
        textColor="text-[#E4002B]"
      />
      <div className="flex flex-row gap-16 ">
        <div className="flex-1  py-10">
          <EstimateForm />
          <div className=" mt-12">
            <p>Click Estimate after filling all details to get an estimation.</p>
            <button className=" py-5 px-20 font-graphikTrial text-base font-medium text-[#FFFFFF] bg-[#EE1F26] rounded-full mt-9">Estimate</button>
          </div>
        </div>
        <div className="relative flex-1">
          {/* Background Image as div */}
          <div
            className="relative z-20 w-[calc(100%-10px)] lg:w-full ml-auto bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center items-center p-11"
            style={{ backgroundImage: `url(${EstimatedPriceBg.src})` }}
          >
           <h5 className="font-cooperBlack text-[clamp(1.25rem,1.875vw,2.25rem)] font-normal text-[#FFFFFF]">Total Estimated Price</h5>
           <h4 className="text-[#E4002B] text-[clamp(6rem,7.396vw,8.875rem)] leading-[clamp(8rem,9vw,9rem)] font-bold text-center font-graphikTrial my-18">$0</h4>
           <p className=" font-graphikTrial font-normal text-sm lg:text-base text-[#FFFFFF] text-center">Note: Our service is meant for groups and there is a $600 minimum for any event. This estimate is NOT an exact quote. It does not include chef tip and other possible fees, like sales tax. The only way to get an exact quote is after booking but if everthing was entered correctly this should be very close.</p>
          </div>

          {/* Red Side Bar */}
          <div className="absolute top-0 bottom-0 my-auto left-0 lg:-left-8 w-24 h-[calc(100%-40px)] bg-[#E4002B]"></div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
