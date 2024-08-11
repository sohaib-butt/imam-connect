"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/homepage.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Cost, Tags } from "../shared";

const ServiceProvider = () => {
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

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    <>
      <section className={styles.services}>
        <span className={`${styles.txt_popular_services} block lg:hidden`}>
          Popular services providers
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span className={`${styles.txt_popular_services} hidden lg:block`}>
            Popular services providers
          </span>
          <span className={styles.view_all}>View all</span>
        </div>
        <div className={styles.cards_container}>
          <div className="w-full flex justify-center md:justify-start items-center gap-[95px] flex-wrap">
            {cards.map((index) => (
              <div className={styles.card} key={index}>
                <img
                  src="assets/images/happy-girl.svg"
                  alt="Putri Azzahra"
                  className={styles.profile_picture}
                />
                <span className={styles.level}>Level 1</span>
                <img
                  src="assets/images/heart.svg"
                  alt="Putri Azzahra"
                  className={styles.heart_icon}
                />
                <div className={styles.recommendation_div}>
                  <img src="assets/images/like-icon.svg" />
                  <span className={styles.recommendation}>
                    Recommended by ImamConnect
                  </span>
                </div>
                <div className={styles.location_div}>
                  <img src="assets/images/location-icon.svg" />
                  <span className={styles.location}>London, UK</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#E7E7E7",
                    marginTop: "10px",
                  }}
                ></div>
                <div style={{ width: "100%" }}>
                  <span className={styles.name}>Putri Azzahra</span>
                </div>

                <div className={styles.price_rating}>
                  <Cost price={"$10.00"} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                  <img src="assets/images/rating.svg" />
                  <span className={styles.rating}>(372 reviews)</span>
                </div>
                <Tags />
                <button className={styles.session_primary_button}>
                  5 Sessions For $80
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={`${styles.sliderContainer} block lg:hidden relative`}>
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
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`,
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: ${
                index >= 0 ? "#442D87" : "#E7E7E7"
              }; border-radius: 10px; width: 56px; height: 8px; display: inline-block; margin: 0 2px;"></span>`,
          }}
          className={styles.swiper}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {cards.map((index) => (
            <SwiperSlide key={index} className={styles.card}>
              <img
                src="assets/images/happy-girl.svg"
                alt="Putri Azzahra"
                className={styles.profile_picture}
              />
              <span className={styles.level}>Level 1</span>
              <img
                src="assets/images/heart.svg"
                alt="Putri Azzahra"
                className={styles.heart_icon}
              />
              <div className={styles.recommendation_div}>
                <img src="assets/images/like-icon.svg" />
                <span className={styles.recommendation}>
                  Recommended by ImamConnect
                </span>
              </div>
              <div className={styles.location_div}>
                <img src="assets/images/location-icon.svg" />
                <span className={styles.location}>London, UK</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#E7E7E7",
                  marginTop: "10px",
                }}
              ></div>
              <div style={{ width: "100%" }}>
                <span className={styles.name}>Putri Azzahra</span>
              </div>
              <div className={styles.price_rating}>
                <Cost price={"$10.00"} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
                <img src="assets/images/rating.svg" />
                <span className={styles.rating}>(372 reviews)</span>
              </div>
              <Tags />
              <button className={styles.session_primary_button}>
                5 Sessions For $80
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperButtonContainer}>
          <button
            ref={prevRef}
            className={styles.swiper_button_prev}
            style={{ visibility: isPrevButtonHidden ? "hidden" : "visible" }}
          >
            <img
              src="assets/images/rightArrow.svg"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            ref={nextRef}
            className={styles.swiper_button_next}
            style={{ visibility: isNextButtonHidden ? "hidden" : "visible" }}
          >
            <img src="assets/images/rightArrow.svg" />
          </button>
        </div>
        <div className={styles.swiperPagination} />
      </div>
      <div className={styles.view_primary_button_div}>
        <button className={styles.view_primary_button}>View All</button>
      </div>
    </>
  );
};

export default ServiceProvider;
