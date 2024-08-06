"use client";
import React, { useState } from "react";
import styles from "../../../styles/homepage.module.scss";
import Link from "next/link";

const MobileSidebar = ({
  menuItems,
  selectedMenuItem,
  handleMenuItemClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div
        className={`${styles.hamburger_button} cursor-pointer`}
        onClick={toggleMenu}
      >
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
            <img
              src="assets/images/close_icon.svg"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          {menuItems?.map((m, index) => (
            <span key={index}>
              <Link
                href={m?.route}
                className={`${styles.sub_menu_item} ${
                  selectedMenuItem === m?.title ? styles.selected : ""
                }`}
                onClick={() => handleMenuItemClick(m?.title)}
              >
                {m?.title}
              </Link>
            </span>
          ))}
        </div>
        {/* <div className={styles.menu_items_div_mb}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src="assets/images/imamLogo.svg" />
            <img
              src="assets/images/close_icon.svg"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <span>
            <Link
              href="/"
              id="home"
              className={`${styles.sub_menu_item} ${
                selectedMenuItem === "home" ? styles.selected : ""
              }`}
              onClick={() => handleMenuItemClick("home")}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              href="/aboutus"
              id="about-us"
              className={`${styles.sub_menu_item} ${
                selectedMenuItem === "about-us" ? styles.selected : ""
              }`}
              onClick={() => handleMenuItemClick("about-us")}
            >
              About Us
            </Link>
          </span>
          <span>
            <Link
              href="/ImamServices"
              id="services"
              className={`${styles.sub_menu_item} ${
                selectedMenuItem === "services" ? styles.selected : ""
              }`}
              onClick={() => handleMenuItemClick("services")}
            >
              Services
            </Link>
          </span>
          <span>
            <Link
              href="/testimonials"
              id="testimonials"
              className={`${styles.sub_menu_item} ${
                selectedMenuItem === "testimonials" ? styles.selected : ""
              }`}
              onClick={() => handleMenuItemClick("testimonials")}
            >
              Testimonials
            </Link>
          </span>
        </div> */}
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
    </>
  );
};

export default MobileSidebar;
