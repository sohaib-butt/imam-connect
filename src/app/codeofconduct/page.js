import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection, PlatformSection } from "@/components/CodeOfConduct";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <PlatformSection />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
