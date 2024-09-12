import React from "react";
import { Header, Footer, GettingStarted } from "@/components/shared";
import { Intro, SearchBox, ServiceProviders } from "@/components/ImamServices";

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
