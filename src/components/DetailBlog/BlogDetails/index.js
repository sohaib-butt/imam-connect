import Image from "next/image";
import React from "react";
import RelatedServices from "./RelatedServices";

const index = () => {
  const contents = [
    {
      img: "assets/images/blog-img.svg",
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis nunc tincidunt suspendisse integer. Enim proin volutpat a dolor integer leo donec metus in. Fermentum et amet sit enim ante. Odio justo aenean bibendum rhoncus lorem. Amet lectus est vitae metus cursus id tincidunt rhoncus. Dolor interdum ullamcorper nunc mauris a id consectetur dui. Elementum sit massa eu nibh nibh pretium sit nunc mi. Vestibulum massa varius in nec et. Tortor aenean magna euismod turpis viverra ut sapien ornare. Vitae in adipiscing ornare vulputate vestibulum. Non odio risus purus pellentesque. Quis amet purus turpis mi est rhoncus adipiscing augue faucibus. Sed convallis elit bibendum duis volutpat pellentesque hendrerit morbi. Elementum urna sed nunc eu id nulla. Nullam sed facilisi nulla mauris. Ac iaculis tellus egestas risus et commodo. Urna maecenas nunc aliquet auctor. Varius ultrices vivamus tellus sit nibh volutpat. Iaculis tincidunt duis et justo sit erat. Vestibulum posuere nibh nisi nibh. Sit et lacus at tellus. Sociis nibh venenatis congue tortor sit vestibulum imperdiet sed condimentum. Nisl vitae turpis sem gravida ultricies. Nunc eu nibh.",
    },
    {
      img: "assets/images/blog-img.svg",
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis nunc tincidunt suspendisse integer. Enim proin volutpat a dolor integer leo donec metus in. Fermentum et amet sit enim ante. Odio justo aenean bibendum rhoncus lorem. Amet lectus est vitae metus cursus id tincidunt rhoncus. Dolor interdum ullamcorper nunc mauris a id consectetur dui. Elementum sit massa eu nibh nibh pretium sit nunc mi. Vestibulum massa varius in nec et. Tortor aenean magna euismod turpis viverra ut sapien ornare. Vitae in adipiscing ornare vulputate vestibulum. Non odio risus purus pellentesque. Quis amet purus turpis mi est rhoncus adipiscing augue faucibus. Sed convallis elit bibendum duis volutpat pellentesque hendrerit morbi. Elementum urna sed nunc eu id nulla. Nullam sed facilisi nulla mauris. Ac iaculis tellus egestas risus et commodo. Urna maecenas nunc aliquet auctor. Varius ultrices vivamus tellus sit nibh volutpat. Iaculis tincidunt duis et justo sit erat. Vestibulum posuere nibh nisi nibh. Sit et lacus at tellus. Sociis nibh venenatis congue tortor sit vestibulum imperdiet sed condimentum. Nisl vitae turpis sem gravida ultricies. Nunc eu nibh.",
    },
  ];
  return (
    <div className="w-full text-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[160px] flex flex-col md:flex-row justify-between items-start">
      <div className="w-full md:w-[60%] flex flex-col justify-start items-start gap-8">
        <span className="font-poppins font-[600] text-[#442D87] text-[24px] md:text-[28px] lg:text-[32px]">
          Classes, Training & Support
        </span>
        {contents?.map((c, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-start items-start gap-4"
          >
            <div className="w-full h-[280px] relative">
              <Image
                src={c?.img}
                layout="fill"
                objectFit="cover"
                className="rounded-[8px]"
                alt={`Image for content ${index + 1}`}
              />
            </div>
            <span className="font-poppins font-[500] text-[#000000] text-[20px]">
              Headline {index + 1}
            </span>
            <span className="font-poppins font-[400] text-[#000000] text-[14px] md:text-[16px] text-start">
              {c?.content}
            </span>
          </div>
        ))}
      </div>
      <RelatedServices />
    </div>
  );
};

export default index;
