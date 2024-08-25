import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { PressNews } from "@/components/InTheMedia";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      {/* <IntroSection /> */}
      <PressNews />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
