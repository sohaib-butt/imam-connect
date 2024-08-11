import React from "react";
import { Header, Footer, RegisterNow } from "@/components/shared";
import { ProfileInfo } from "@/components/Listing";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <ProfileInfo />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
