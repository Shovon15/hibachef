import ImageComponent from "@/components/common/image";
import NavLink from "@/components/common/link/NavLink";
import BlogImg from "@/assets/images/blog-img.png";
import ShareIcon from "@/assets/icons/ShareIcon";

const BlogCard = ({ isMainBlog = false, className }: any) => {
  return (
    <div
      className={`grid ${isMainBlog ? " grid-cols-1 lg:grid-cols-2" : " grid-cols-1"} gap-9 justify-center items-center ${className}`}
    >
      <div>
        <ImageComponent src={BlogImg} alt={"BlogImg"} />
      </div>
      <div>
        <h2 className="font-cooperBlack font-normal text-[#121416] text-[clamp(1.5rem,1.875vw,2.25rem)]">
          Blog Title
        </h2>
        <div className="flex justify-start items-center gap-3 font-graphikTrial text-[#6C757D] text-lg mt-2 font-normal">
          <p>June 28, 2018</p>{" "}
          <span className="w-1.5 h-1.5 bg-[#6C757D66] rounded-full"></span>{" "}
          <p className="flex justify-start items-center gap-1">
            <ShareIcon />
            1K shares
          </p>{" "}
        </div>
        <p className="font-normal font-graphikTrial text-[#6C757D] text-base mt-3 ">
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
