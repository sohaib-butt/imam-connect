import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { BlogDetails } from "@/components/DetailBlog";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <BlogDetails />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
