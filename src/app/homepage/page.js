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
      <Feedback />
      <Quiz />
      <Psychologist />
      <HowItWorks />
      {/* <section style="width: 100%;">
        <img src="../../../public/assets/images/madina.svg" />
      </section> */}
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default page;
