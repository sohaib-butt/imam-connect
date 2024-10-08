import React from "react";
import { SearchSection, BlogTags } from "@/components/shared";
import TrendingTopic from "./TrendingTopic";
import LatestTopics from "./LatestTopics";
import MobileTopics from "./MobileTopics";

const index = () => {
  return (
    <div className="w-full text-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[160px]">
      <span className="font-poppins font-[700] text-[#442D87] text-[32px] md:text-[36px] lg:text-[40px]">
        Blogs
      </span>
      <SearchSection />
      <BlogTags />
      <TrendingTopic />
      <LatestTopics />
      <MobileTopics />
    </div>
  );
};

export default index;
