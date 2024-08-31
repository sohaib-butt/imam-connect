import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { PaymentMethods } from "@/components/Payment";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <PaymentMethods />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
