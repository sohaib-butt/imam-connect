import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import GettingStarted from "@/components/shared/GettingStarted";

import {
  Intro,
  MediaPartners,
  Services,
  ServiceProvider,
  Performance,
  Feedback,
  Quiz,
  Psychologist,
  HowItWorks,
  Madina,
} from "@/components/Home";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Intro />
      <MediaPartners />
      <Services />
      <ServiceProvider />
      <Performance />
      <Feedback />
      <Madina />
      <Quiz />
      <Psychologist />
      <HowItWorks />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
