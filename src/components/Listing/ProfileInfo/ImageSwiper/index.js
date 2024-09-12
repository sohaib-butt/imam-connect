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
    <div className="w-full">
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
                className="object-cover rounded-[13px] w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A282F] to-[#2A282F00] text-white font-poppins font-[700] text-[12px] md:text-[19px] pt-6 pb-4 pr-4 rounded-b-[13px] text-end">
                {index + 1}/8
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev bg-[#442d87] !w-[38px] !h-[75px] flex items-center justify-center rounded-tr-[50px] rounded-br-[50px] !text-white after:!text-[12px] after:!font-[700] !left-0">
        </div>
        <div className="swiper-button-next bg-[#442d87] !w-[38px] !h-[75px] flex items-center justify-center rounded-tl-[50px] rounded-bl-[50px] !text-white after:!text-[12px] after:!font-[700] !right-0">
        </div>
      </Swiper>
    </div>
  );
};

export default index;
