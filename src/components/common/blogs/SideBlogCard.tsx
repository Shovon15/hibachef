import BlogImg from "@/assets/images/blog-img.png";
import ImageComponent from "@/components/common/image";
const SideBlogCard = () => {
  return (
    <div className="flex justify-start items-start gap-5">
      <div className="w-1/2 lg:w-[57%]">
        <ImageComponent src={BlogImg} alt="Blog image" />
      </div>
      <div className="flex-1">
        <h3 className="font-cooperBlack text-base text-[#FFFFFF] mt-4">
          Akame Ga Kill: Season finale
        </h3>
        <p className="font-graphikTrial text-sm text-[#6C757D] mt-2">
          21 March 2021
        </p>
      </div>
    </div>
  );
};

export default SideBlogCard;
