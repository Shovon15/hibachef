import RelatedBlogs from "@/components/common/blogs/RelatedBlogs";
import BlogDetailBanner from "./components/BlogDetailBanner";
import Detail from "./components/Detail";

const BlogDetailIndexComponent = () => {
  return (
    <div>
      <BlogDetailBanner />
      <Detail />
      <RelatedBlogs text1="Related  " text2="Blogs" />
    </div>
  );
};

export default BlogDetailIndexComponent;
