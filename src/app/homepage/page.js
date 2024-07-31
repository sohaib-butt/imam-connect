import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GettingStarted from "@/components/GettingStarted";
import Intro from "@/components/HomeComponents/Intro";
import MediaPartners from "@/components/HomeComponents/MediaPartners";
import Services from "@/components/HomeComponents/Services";

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      <MediaPartners />
      <Services />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
