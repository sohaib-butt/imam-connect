import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { IntroSection, PaymentMethods } from "@/components/Payment";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <PaymentMethods />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
