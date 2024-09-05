import React from "react";
import { Header, Footer } from "@/components/shared";
import { InTheBasket, IntroSection } from "@/components/Cart";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <InTheBasket />
      <Footer />
    </div>
  );
};

export default page;
