import React from "react";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer";
import RegisterNow from "@/components/shared/RegisterNow";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
