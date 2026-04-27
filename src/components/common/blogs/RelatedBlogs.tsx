import ContentContainer from "@/components/layout/container/contentContainer";
import MainTitle from "../Titles/MainTitle";
import BlogCard from "./BlogCard";
import SideBlogCard from "./SideBlogCard";

const RelatedBlogs = ({text1, text2}:any) => {
  return (
    <div className=" bg-[#000000] py-18">
      <ContentContainer>
        <MainTitle text1={text1} text2={text2} textColor="text-white" />
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-7.5 mt-16">
          <div className="col-span-1 lg:col-span-8">
            <BlogCard isBgBlack={true} />
          </div>
          <div className="col-span-1 lg:col-span-4 space-y-7.5">
            {[1, 2, 3, 4].map((item) => (
              <SideBlogCard key={item} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default RelatedBlogs;
