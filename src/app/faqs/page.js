import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { FAQs } from "@/components/FAQ";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <FAQs />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;