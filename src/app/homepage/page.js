import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GettingStarted from "@/components/GettingStarted";
import Intro from "@/components/Intro";

const page = () => {
  return (
    <div>
      <Header />
      <Intro/>
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
