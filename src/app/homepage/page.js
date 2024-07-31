import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import GettingStarted from "@/components/shared/GettingStarted";

import {
  Intro,
  MediaPartners,
  Services,
  ServiceProvider,
  Performance
} from "@/components/Home";

const page = () => {
  return (
    <div>
      <Header />
      <Intro />
      <MediaPartners />
      <Services />
      <ServiceProvider />
      <Performance />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
