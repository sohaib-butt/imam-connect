import React from "react";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer";
import GettingStarted from "@/components/shared/GettingStarted";
import Intro from "@/components/ImamServices/Intro";
import SearchBox from "@/components/ImamServices/SearchBox";
import ServiceProviders from "@/components/ImamServices/ServiceProviders";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Intro />
      <SearchBox />
      <ServiceProviders />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
