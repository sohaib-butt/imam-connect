import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection } from "@/components/Specials";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
