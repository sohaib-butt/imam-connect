import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { FAQs, ProfileInfo, Testimonials } from "@/components/Listing";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <ProfileInfo />
      <Testimonials />
      <FAQs />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
