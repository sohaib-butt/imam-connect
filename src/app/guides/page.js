import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection, LatestGuides } from "@/components/Guides";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <LatestGuides />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
