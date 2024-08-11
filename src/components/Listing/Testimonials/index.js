"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./testimonials.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full p-[24px] md:py-[40px] md:px-[40px] lg:px-[100px] flex flex-col justify-center items-center gap-4">
      <span className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] tracking-[2%] text-[#442D87]">
        Testimonials
      </span>
      <div className={`${styles.sliderContainer} relative`}>
        <Swiper
          spaceBetween={50}
          onSlideChange={onSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className={styles.swiper}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {[1, 2, 3].map((c, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-[80%] md:w-[60%] flex flex-col justify-center items-center gap-4">
                  <Image
                    src="assets/images/testimonial_img.svg"
                    width={120}
                    height={120}
                  />
                  <span className="font-poppins font-[400] text-[16px] text-center text-[#2D2E2E]">
                    Lorem ipsum dolor sit amet consectetur. Consequat malesuada
                    natoque lobortis fermentum eget lectus. Proin sed neque est
                    orci eu{" "}
                  </span>
                  <span className="font-poppins font-[600] text-[16px] text-center text-[#2D2E2E]">
                    Lora Smith
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperButtonContainer}>
          <button ref={prevRef} className={styles.swiper_button_prev}>
            <img
              src="assets/images/rightArrow.svg"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button ref={nextRef} className={styles.swiper_button_next}>
            <img src="assets/images/rightArrow.svg" />
          </button>
        </div>
        <div className={styles.swiperPagination} />
      </div>
    </div>
  );
};

export default index;
