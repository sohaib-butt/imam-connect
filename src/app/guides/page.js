import React from "react";
import {
  Header,
  Footer,
  GettingStarted,
  RegisterNow,
} from "@/components/shared";
import { IntroSection } from "@/components/Guides";

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
