import React, { useState, useRef, useEffect } from "react";
import styles from "../../../../styles/homepage.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import counselDone from "../../../../../public/assets/images/counsel-done.svg";
import rightArrow from "../../../../../public/assets/images/rightArrow.svg";

const page = ({ handleClose, popupClassName }) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Set window width on mount and update on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initialize windowWidth on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Effect to initialize and update Swiper instance
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      swiperRef.current.pagination.update();
    }
  }, [activeIndex, windowWidth]);

  const calculateLastSlideIndex = () => {
    if (windowWidth >= 768) {
      return cards.length - 2; // 2 slides per view
    } else {
      return cards.length - 1; // 1 slide per view
    }
  };

  const isPrevButtonHidden = activeIndex === 0;
  const isNextButtonHidden = activeIndex >= calculateLastSlideIndex();
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col bg-white rounded-[12px] relative p-[24px] gap-[24px] ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Track
          </span>
        </div>
        {handleClose && (
          <Image
            src={closeIcon}
            width={24}
            height={24}
            onClick={handleClose}
            className="absolute cursor-pointer top-5 right-4 z-10"
          />
        )}

        <div className="flex flex-col gap-[29px]">
          <div className="flex justify-center">
            <Image
              src={counselDone.src}
              width={339}
              height={252.5}
              alt={"img"}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] font-poppins text-[#442D87] text-center">
              Yeay! Your counselling session is done!
            </span>
            <span className="text-[10px] md:text-[12px] lg:text-[14px] font-[400] font-poppins text-[#442D87] text-center">
              You might be interested to book one of our another services.
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[10px] md:text-[12px] lg:text-[14px] font-[400] font-poppins text-[#666666] tracking-[-4%]">
              Try one of these services! It’s curated just for you.
            </span>
            <div className={`${styles.sliderContainer} mt-4 relative`}>
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
                modules={[Navigation, Pagination]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
              >
                {cards.map((c, index) => (
                  <SwiperSlide
                    key={index}
                    className="!w-[177px] py-[8px] px-[16px] rounded-[12px] border border-[#E7E7E7] bg-white flex flex-col items-start justify-start gap-2 !mr-3"
                  >
                    <div className="flex gap-[10px]">
                      <div></div>
                      <span className="text-[12px] font-[600] font-poppins text-[#442D87] tracking-[-4%]">
                        Putri Azizah
                      </span>
                    </div>
                    <div>
                      <div className="h-[1px] bg-[#E7E7E7] w-full"></div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <span className="text-[12px] font-[600] font-poppins text-[#2A282F] tracking-[-4%]">
                        I Offer - Counselling session for 30 mins
                      </span>
                      <div className="h-[19.26px] w-[60.32px] bg-[#22C55E] flex justify-center items-center rounded-[5.2px] ">
                        <span className="text-[12px] font-[700] font-poppins text-white">
                          $10,00
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.swiperButtonContainer}>
                <button
                  ref={prevRef}
                  className={`${styles.swiper_button_prev} !top-[10%] !left-[-8px]`}
                  style={{
                    visibility: isPrevButtonHidden ? "hidden" : "visible",
                  }}
                >
                  <img
                    src={rightArrow.src}
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>
                <button
                  ref={nextRef}
                  className={`${styles.swiper_button_next} !top-[10%] !right-[-8px]`}
                  style={{
                    visibility: isNextButtonHidden ? "hidden" : "visible",
                  }}
                >
                  <img src={rightArrow.src} />
                </button>
              </div>
              <div className={styles.swiperPagination} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
