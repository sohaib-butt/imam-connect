import React from "react";
import styles from "../../../../styles/homepage.module.scss";
import { Cost, Recommended, Tags } from "@/components/shared";
import HappyGirl from "../../../../../public/assets/images/happy-girl.svg";
import RedHeart from "../../../../../public/assets/images/red-heart.svg";
import LocationIcon from "../../../../../public/assets/images/location-icon.svg";
import RatingIcon from "../../../../../public/assets/images/rating.svg";

const index = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className={`${styles.cards_container} !flex md:!flex`}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] md:gap-[10px]">
          {cards.map((c, index) => (
            <div className={styles.card} key={index}>
              <img
                src={HappyGirl.src}
                alt="Putri Azzahra"
                className={styles.profile_picture}
              />
              <span className={styles.level}>Level 1</span>
              <img
                src={RedHeart.src}
                alt="Heart"
                className={styles.heart_icon}
              />
              <Recommended />
              <div className={styles.location_div}>
                <img src={LocationIcon.src} />
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
                <img src={RatingIcon.src} />
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
    </>
  );
};

export default index;
