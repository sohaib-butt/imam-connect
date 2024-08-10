"use client";
import React from "react";
import styles from "../../../styles/homepage.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";

const index = () => {
  const pathname = usePathname();

  const menuItems = [
    { route: "/", title: "Home" },
    { route: "/aboutus", title: "About Us" },
    { route: "/imamServices", title: "Services" },
    { route: "/testimonials", title: "Testimonials" },
  ];

  return (
    <div className={styles.header}>
      <img src="assets/images/imamLogo.svg" alt="Imam Logo" />
      <div className={styles.navigation_menu}>
        <div className={styles.menu_items_div}>
          {menuItems?.map((m, index) => (
            <span key={index}>
              <Link
                href={m?.route}
                className={`${styles.sub_menu_item} ${
                  pathname === m?.route ? styles.selected : ""
                }`}
              >
                {m?.title}
              </Link>
            </span>
          ))}
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
      <MobileSidebar menuItems={menuItems} pathname={pathname} />
    </div>
  );
};

export default index;
