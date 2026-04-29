import ContentContainer from "@/components/layout/container/contentContainer";
import MainTitle from "../Titles/MainTitle";
import StarRating from "./StarRating";
import GoogleLogo from "@/assets/icons/GoogleLogo";
import NavLink from "../link/NavLink";
import TestimonialSlider from "./TestimonialSlider";

const Review = () => {
  return (
    <ContentContainer>
      <MainTitle text1="Customer " text2="Review" />
      <div className="bg-[#F2F2F2] rounded-3xl p-6 flex justify-between items-center mt-16">
        <div>
          <h3 className="font-graphikTrial font-medium text-2xl text-[#1A1A1A] flex justify-start items-center gap-2">
            <GoogleLogo />
            Rating
          </h3>
          <div className="flex gap-2 justify-start items-center mt-4">
            <p className="font-graphikTrial text-base font-semibold text-[#1A1A1A]">
              4.5
            </p>
            <StarRating initialValue={4.5} readOnly sizeClass={"w-6 h-6"} />
            <p className="font-graphikTrial font-normal text-xs text-[#00000080]">
              420 reviews
            </p>
          </div>
        </div>
        <div>
          <NavLink href={"#"} className="px-7 py-4 bg-[#EE1F26] rounded-full font-graphikTrial font-medium text-base text-white uppercase border border-[#EE1F26] hover:bg-transparent hover:text-[#EE1F26] transition-all deuration-300">View Google reviews</NavLink>
        </div>
      </div>
      <TestimonialSlider/>
    </ContentContainer>
  );
};

export default Review;
