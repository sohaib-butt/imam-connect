import React from "react";
import { Header, Footer, GettingStarted } from "@/components/shared";

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
