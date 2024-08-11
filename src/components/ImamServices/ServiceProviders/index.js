"use client";
import React, { useState } from "react";
import styles from "./serviceproviders.module.scss";
import homeStyles from "../../../styles/homepage.module.scss";
import { Cost, Pagination, Tags } from "@/components/shared";

const index = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const pageCount = Math.ceil(cards.length / cardsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayCards = cards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
      <section className={homeStyles.services}>
        <span className={styles.txt_search_results}>
          Search result “Pshycotherapist” showed 172 results
        </span>
        <div className={styles.mb_cards_container}>
          <div className="w-full flex justify-center md:justify-start items-center gap-[95px] flex-wrap">
            {displayCards.map((index) => (
              <div className={homeStyles.card} key={index}>
                <img
                  src="assets/images/happy-girl.svg"
                  alt="Putri Azzahra"
                  className={homeStyles.profile_picture}
                />
                <span className={homeStyles.level}>Level 1</span>
                <img
                  src="assets/images/heart.svg"
                  alt="Putri Azzahra"
                  className={homeStyles.heart_icon}
                />
                <div className={homeStyles.recommendation_div}>
                  <img src="assets/images/like-icon.svg" />
                  <span className={homeStyles.recommendation}>
                    Recommended by ImamConnect
                  </span>
                </div>
                <div className={homeStyles.location_div}>
                  <img src="assets/images/location-icon.svg" />
                  <span className={homeStyles.location}>London, UK</span>
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
                  <span className={homeStyles.name}>Putri Azzahra</span>
                </div>

                <div className={homeStyles.price_rating}>
                  <Cost price={"$10.00"} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                  <img src="assets/images/rating.svg" />
                  <span className={homeStyles.rating}>(372 reviews)</span>
                </div>
                <Tags />
                <button className={homeStyles.session_primary_button}>
                  5 Sessions For $80
                </button>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </section>
    </>
  );
};

export default index;
