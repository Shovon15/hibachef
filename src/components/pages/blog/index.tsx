"use client";
import PageBanner from "@/components/layout/container/PageBanner";
import React, { useState } from "react";
import BlogBannerBg from "@/assets/images/blog-bg.png";
import BlogCard from "../../common/blogs/BlogCard";
import ContentContainer from "@/components/layout/container/contentContainer";
import MainTitle from "@/components/common/Titles/MainTitle";
import { Pagination } from "@/components/common/pagination/Pagination";
import SideBlogCard from "../../common/blogs/SideBlogCard";
import RelatedBlogs from "@/components/common/blogs/RelatedBlogs";

type Props = { data?: any };

const BlogPage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <PageBanner
        bgImage={BlogBannerBg}
        title=""
        title2="Blog"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContentContainer className="py-11 lg:py-26">
        <BlogCard isMainBlog={true} />
        <MainTitle text1="All" text2="Blogs" className="mt-16 lg:mt-[140px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16 py-10 lg:py-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <BlogCard key={item} />
          ))}
        </div>
        <Pagination totalPages={10} onPageChange={setCurrentPage} />
      </ContentContainer>
      <RelatedBlogs text1="Trending " text2="Stories" />
    </div>
  );
};

export default BlogPage;
