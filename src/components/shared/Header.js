"use client";
import React, { useState } from "react";
import styles from "../../styles/homepage.module.scss";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div className={styles.hamburger_button} onClick={toggleMenu}>
        <img src="assets/images/hamburger_button.svg" />
      </div>

      <div
        className={`${styles.mobile_menu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menu_items_div_mb}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src="assets/images/imamLogo.svg" />
            <img src="assets/images/close_icon.svg" onClick={toggleMenu} />
          </div>
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
              justifyContent: "start",
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
        <div className={styles.buttons_div_mb}>
          <button type="button" className={styles.primary_button}>
            Register
          </button>
          <button type="button" className={styles.primary_outline_button}>
            Sign in
          </button>
        </div>
        <div className={styles.footer_address}>
          <span className={styles.footer_imamconnect_heading}>
            MAIN OFFICE ADDRESS
          </span>
          <div className={styles.footer_address}>
            <span className={styles.footer_address_content}>
              Imam Connect LTD (12658054)
            </span>
            <span className={styles.footer_address_content}>
              85 Great Portland Street First
              <br />
              Floor, London, United Kingdom, W1W 7LT
            </span>
          </div>
          <div className={styles.social_media}>
            <span className={styles.footer_rights_txt}>
              IMAM CONNECT LTD ALL RIGHT RESERVED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
