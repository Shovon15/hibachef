import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import BlogImg from "@/assets/images/blog-img.png";
import ShareIcon from "@/assets/icons/ShareIcon";

const BlogCard = ({
  isMainBlog = false,
  isBgBlack = false,
  className,
}: any) => {
  return (
    <div
      className={`grid ${isMainBlog ? " grid-cols-1 lg:grid-cols-2" : " grid-cols-1"} ${isBgBlack ? " gap-4" : "gap-9"}  justify-center items-center ${className}`}
    >
      <div className=" relative">
        <ImageComponent src={BlogImg} alt={"BlogImg"} />
        <div className=" absolute top-[6.5%] left-[7.5%] flex flex-wrap gap-1">
          <p className="font-normal font-graphikTrial text-[clamp(0.875rem,1.042vw,1.25rem)] text-white px-3 pb-1 rounded-full bg-[#00000080] backdrop-blur-[1px] w-fit">
            Aenean Eleifend
          </p>
          <p className="font-normal font-graphikTrial text-[clamp(0.875rem,1.042vw,1.25rem)] text-white px-3 pb-1 rounded-full bg-[#00000080] backdrop-blur-[1px] w-fit">
            Aliquam
          </p>
        </div>
      </div>
      <div>
        <h2 className={`font-cooperBlack font-normal  text-[clamp(1.5rem,1.875vw,2.25rem)] ${isBgBlack ? " text-[#FFFFFF]" : " text-[#121416]"}`}>
          Blog Title
        </h2>
        <div className={`flex justify-start items-center gap-3 font-graphikTrial text-lg mt-2 font-normal ${isBgBlack ? " text-[#FFFFFF]" : " text-[#6C757D]"}`}>
          <p>June 28, 2018</p>{" "}
          <span className={`w-1.5 h-1.5  rounded-full ${isBgBlack ? " bg-[#EE1F26]" : "bg-[#6C757D66]"}`}></span>{" "}
          <p className="flex justify-start items-center gap-1">
            <ShareIcon />
            1K shares
          </p>{" "}
        </div>
        <p className={`font-normal font-graphikTrial text-base mt-3 ${isBgBlack ? " text-[#FFFFFF]" : " text-[#6C757D]"} `}>
          Porttitor tincidunt etiam eget nullam mi amet quis scelerisque.
          Scelerisque tristique tellus lobortis euismod. Dignissim dignissim
          suspendisse elementum est. Etiam velit sed duis pulvinar placerat
          ornare morbi. Sit in elit in quam pellentesque volutpat elementum id.
          Sagittis turpis ac tellus sed. Turpis felis non elit nunc mi
          ullamcorper tempor. Vestibulum placerat euismod at vulputate aliquam
          mi aliquam facilisi. Adipiscing massa quis feugiat tellus dictumst
          sem. Ut ut maecenas risus.
        </p>
        <NavLink
          href="#"
          className="text-[#E4002B] font-graphikTrial text-base font-normal uppercase underline mt-6 block"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
