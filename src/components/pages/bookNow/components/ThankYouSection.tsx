import Link from "next/link";
import MainTitle from "../../../common/Titles/MainTitle";

const ThankYouSection = () => {
  return (
    <div className="lg:pl-20 h-full flex flex-col items-center text-center justify-center">
      <MainTitle text1="" text2=" Thank You !" />
      <p className="font-normal font-graphikTrial text-lg lg:text-2xl text-[#000000] mt-5">Your request has been successfully submitted!</p>
      <p className="font-normal font-graphikTrial text-sm lg:text-base text-[#000000] mt-5">
        Once you submit the booking request, our customer service representative
        will reach out as soon as possible to confirm availabilities and other
        details
      </p>
      <Link href="/" className=" font-medium font-graphikTrial text-sm lg:text-base mt-14 block bg-[#EE1F26] text-white px-11 py-4 rounded-full hover:bg-[#E4002B] transition-colors uppercase">
        back to home
      </Link>
    </div>
  );
};

export default ThankYouSection;
