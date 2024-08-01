import React from "react";
import styles from "../../styles/homepage.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="assets/images/imamLogo.svg" />
      <div className={styles.navigation_menu}>
        <div className={styles.menu_items_div}>
          <span>
            <Link
              href="/homepage"
              id="home"
              className={`${styles.sub_menu_item} ${styles.selected}`}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              href="/aboutus"
              id="about-us"
              className={styles.sub_menu_item}
            >
              About Us
            </Link>
          </span>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <Link
                href="/services"
                id="services"
                className={styles.sub_menu_item}
              >
                Services
              </Link>
            </span>
            <img
              src="assets/images/downArrow.svg"
              style={{ cursor: "pointer" }}
            />
          </div>
          <span>
            <Link
              href="/testimonials"
              id="testimonials"
              className={styles.sub_menu_item}
            >
              Testimonials
            </Link>
          </span>
        </div>
        <div style={{ width: "5%" }}></div>
        <div className={styles.search_and_buttons_div}>
          <div style={{ width: "50%", position: "relative" }}>
            <input
              name="name"
              id="name"
              type="text"
              className={styles.header_search_div}
              placeholder="Search"
            />
            <img
              src="assets/images/searchIcon.svg"
              className={styles.header_search_icon}
            />
          </div>

          <div className={styles.buttons_div}>
            <button type="button" className={styles.primary_button}>
              Register
            </button>
            <button type="button" className={styles.primary_outline_button}>
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className={styles.hamburger_button}>
        <img src="assets/images/hamburger_button.svg" />
      </div>
    </div>
  );
};

export default Header;
