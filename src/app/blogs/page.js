import React from "react";
import {
  Header,
  Footer,
  GettingStarted,
  RegisterNow,
} from "@/components/shared";
import { BlogsSection, IntroSection } from "@/components/Blogs";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <BlogsSection />
      <GettingStarted />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
