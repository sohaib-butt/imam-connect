import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import GettingStarted from "@/components/shared/GettingStarted";
import Intro from "@/components/ImamServices/Intro";
import SearchBox from "@/components/ImamServices/SearchBox"

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Intro />
      <SearchBox />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
