"use client";
import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";
import EstimatedPriceBg from "@/assets/images/estimated-price-bg.png";
import EstimateForm from "./EstimateForm";
import { useState } from "react";
type FormDataType = {
  adultsQty: number;
  kidsQty: number;
  mignonProtein: number;
  lobsterProtein: number;
  garlicNoodle: number;
  location: string;
  miles: number;
};

const ENTREE_OPTIONS = [
  "Grilled Salmon",
  "Filet Mignon",
  "Chicken Parmesan",
  "Vegetarian Pasta",
  "Lobster Tail",
  "Duck Breast",
];
const EventDetails = () => {
  const [formData, setFormData] = useState<FormDataType>({
    adultsQty: 0,
    kidsQty: 0,
    mignonProtein: 0,
    lobsterProtein: 0,
    garlicNoodle: 0,
    location: ENTREE_OPTIONS[0],
    miles: 0,
  });
  return (
    <div>
      <MainTitle
        text1="Event"
        text2="Details"
        spanColor="text-[#000000]"
        textColor="text-[#E4002B]"
      />
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-10 lg:mt-16">
        <div className="flex-1  lg:py-10 ">
          <EstimateForm formData={formData} setFormData={setFormData}  ENTREE_OPTIONS={ENTREE_OPTIONS}/>
          <div className=" mt-12 hidden lg:block">
            <p className=" font-graphikTrial text-base font-normal text-[#151515]">
              Click Estimate after filling all details to get an estimation.
            </p>
            <button className=" py-5 px-20 font-graphikTrial text-base font-medium text-[#FFFFFF] bg-[#EE1F26] rounded-full mt-4">
              Estimate
            </button>
          </div>
        </div>
        <div className="relative flex-1">
          {/* Background Image as div */}
          <div
            className="relative z-20 w-[calc(100%-20px)] lg:w-full ml-auto bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center items-center p-11"
            style={{ backgroundImage: `url(${EstimatedPriceBg.src})` }}
          >
            <h5 className="font-cooperBlack text-[clamp(1.25rem,1.875vw,2.25rem)] font-normal text-[#FFFFFF]">
              Total Estimated Price
            </h5>
            <h4 className="text-[#E4002B] text-[clamp(6rem,7.396vw,8.875rem)] leading-[clamp(6rem,9vw,9rem)] font-bold text-center font-graphikTrial my-10 lg:my-18">
              $0
            </h4>
            <p className=" font-graphikTrial font-normal text-sm lg:text-base text-[#FFFFFF] text-center">
              Note: Our service is meant for groups and there is a $600 minimum
              for any event. This estimate is NOT an exact quote. It does not
              include chef tip and other possible fees, like sales tax. The only
              way to get an exact quote is after booking but if everthing was
              entered correctly this should be very close.
            </p>
          </div>

          {/* Red Side Bar */}
          <div className="absolute top-0 bottom-0 my-auto left-0 lg:-left-8 w-24 h-[calc(100%-40px)] bg-[#E4002B]"></div>
        </div>
         <div className=" mt-2 block lg:hidden">
            <p className=" font-graphikTrial text-base font-normal text-[#151515]">
              Click Estimate after filling all details to get an estimation.
            </p>
            <button className=" py-4 lg:py-5 px-20 font-graphikTrial text-sm lg:text-base font-medium text-[#FFFFFF] bg-[#EE1F26] rounded-full mt-4 w-full">
              Estimate
            </button>
          </div>
      </div>
    </div>
  );
};

export default EventDetails;
