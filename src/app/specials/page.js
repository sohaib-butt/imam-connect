import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection, SearchSpecials } from "@/components/Specials";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <SearchSpecials />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
