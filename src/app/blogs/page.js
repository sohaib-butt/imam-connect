import React from "react";
import {
  Header,
  Footer,
  GettingStarted,
  RegisterNow,
} from "@/components/shared";
import { IntroSection } from "@/components/Blogs";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <GettingStarted />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
