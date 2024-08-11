"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
  "assets/images/listing-slider-img.svg",
];

const index = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="object-cover rounded-[13px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-poppins font-[700] text-[12px] md:text-[19px] py-2 pr-2 rounded-b-[13px] text-end">
                {index + 1}/8
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev bg-[#442d87] rounded-[50%] !text-white after:!text-[12px] after:!font-[700] !w-[75px] !h-[75px] absolute top-1/2 transform -translate-y-1/2 left-[-40px]"></div>
        <div className="swiper-button-next bg-[#442d87] rounded-[50%] !text-white after:!text-[12px] after:!font-[700] !w-[75px] !h-[75px]"></div>
      </Swiper>
    </div>
  );
};

export default index;
