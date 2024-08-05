"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/homepage.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const pathname = usePathname();
  console.log(pathname, "pathname");

  useEffect(() => {
    const path = pathname;
    console.log("Router path:", path);
    if (path === "/") {
      setSelectedMenuItem("home");
    } else if (path === "/aboutus") {
      setSelectedMenuItem("about-us");
    } else if (path === "/ImamServices") {
      setSelectedMenuItem("services");
    } else if (path === "/testimonials") {
      setSelectedMenuItem("testimonials");
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className={styles.header}>
      <img src="assets/images/imamLogo.svg" alt="Imam Logo" />
      <div className={styles.navigation_menu}>
        <div className={styles.menu_items_div}>
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
              alt="search"
              className={styles.header_search_icon}
            />
          </div>

          {pathname === "/" ? (
            <div className={styles.buttons_div}>
              <button type="button" className={styles.primary_button}>
                Register
              </button>
              <button type="button" className={styles.primary_outline_button}>
                Sign in
              </button>
            </div>
          ) : (
            <div className={`${styles.buttons_div}`}>
              <button
                type="button"
                className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-3 px-1`}
              >
                Book a Service Now
                <Image
                  src="assets/images/arrow.svg"
                  alt="Arrow"
                  width={10}
                  height={9}
                  className="!font-[700]"
                />
              </button>

              <div className="w-[25%] flex justify-start items-center gap-2">
                <Image
                  src="assets/images/profile-icon.svg"
                  alt="Profile Icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="assets/images/cart-icon.svg"
                  alt="Cart"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          )}
        </div>
      </div>
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
