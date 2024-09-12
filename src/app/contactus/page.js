import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection, SendMessage } from "@/components/ContactUs";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <SendMessage />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
