import React from "react";
import QualityItem from "./QualityItem";
import MobileQualities from "./MobileQualities";

const index = () => {
  const qualities = [
    {
      img: "assets/images/community.svg",
      heading: "The Power of Community",
      content:
        "The convenience of a click At ImamConnect, we  help you identify and connect with a broad range of trustworthy, reliable, faith based service providers, exactly where and when you need them.  Think of us as your neighbourhood network gone global. Asking friends and  family for recommendations is usually our first instinct when looking for an  Imam, Quran teacher, advice on how to write an Islamic will or how to find a  Muslim counsellor or mentor – but often, our options are limited to who we  know and can be difficult to assess and organise.",
      imgFirst: true,
    },
    {
      img: "assets/images/expand.svg",
      heading: "ImamConnect Is a Way to Expand",
      content:
        "In order to find qualified  and skilled providers beyond the limits of your own acquaintances. With a  growing database of service providers on what is the worldʼs first marketplace  for religious services, we continue to do online what weʼve all done in person,  but in an easier and more effective way",
      imgFirst: false,
    },
    {
      img: "assets/images/topNotch.svg",
      heading: "Top Notch Quality",
      content:
        "We donʼt just list providers and give you contact details, we ask each provider  to follow a comprehensive application process, which we then assess for  quality, reliability and suitability. Every single provider on ImamConnect is  DBS/Criminal Background checked for safety and peace of mind.  We ensure clear lines of communication, secure transactions and transparent  reviews. Backed by our dedicated customer service team, both providers and  seekers are valued members of the ImamConnect community and meeting the  needs of both is our passion",
      imgFirst: true,
    },
  ];

  return (
    <>
      <div className="hidden md:w-full md:py-[40px] md:px-[80px] lg:py-[60px] lg:px-[100px] bg-white md:flex md:flex-col justify-between items-center gap-16">
        {qualities?.map((q, index) => (
          <QualityItem
            key={index}
            img={q?.img}
            heading={q?.heading}
            content={q?.content}
            imgFirst={q?.imgFirst}
          />
        ))}
      </div>
      <MobileQualities qualities={qualities}/>
    </>
  );
};

export default index;
