"use client";
import React, { useState } from "react";
import styles from "../../../styles/homepage.module.scss";
import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "../../../../public/assets/images/hamburger_button.svg";
import ImamLogo from "../../../../public/assets/images/imamLogo.svg";
import CloseIcon from "../../../../public/assets/images/close_icon.svg";

const MobileSidebar = ({ menuItems, pathname }) => {
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
        <Image src={HamburgerIcon.src} width={24} height={24} />
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
            <Image src={ImamLogo.src} width={168} height={34} />
            <Image
              src={CloseIcon.src}
              width={12}
              height={12}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          {menuItems?.map((m, index) => (
            <span key={index}>
              <Link
                href={m?.route}
                className={`${styles.sub_menu_item} ${
                  pathname === m?.route ? styles.selected : ""
                }`}
                onClick={() => handleMenuItemClick(m?.title)}
              >
                {m?.title}
              </Link>
            </span>
          ))}
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
    </>
  );
};

export default MobileSidebar;
