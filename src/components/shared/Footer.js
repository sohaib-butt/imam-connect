"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import styles from "../../styles/homepage.module.scss";

const Footer = () => {
  const router = useRouter();
  return (
    <section className={styles.footer}>
      <div className={styles.footer_first_box}>
        <div className={styles.footer_first_box_inner}>
          <span className={styles.footer_first_box_heading}>Subscribe</span>
          <span className={styles.footer_first_box_content}>
            To get latest information from us, and updated news.
          </span>
          <div className={styles.email_btn_div}>
            <input
              name="email"
              id="email"
              type="text"
              className={styles.footer_email_input}
              placeholder="Enter your email"
            />
            <button className={styles.footer_primary_button}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.footer_second_div}>
        <div className={styles.footer_third_div}>
          <div className={styles.footer_imamconnect}>
            <span className={styles.footer_imamconnect_heading}>
              IMAMCONNECT
            </span>
            <div className={styles.footer_imamconnect}>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/aboutus")}>About</span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/team")}>Team</span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/privacypolicy")}>
                Privacy Policy
              </span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/termsofuse")}>Terms</span>
            </div>
          </div>
          <div className={styles.footer_imamconnect}>
            <span className={styles.footer_imamconnect_heading}>NEWS</span>
            <div className={styles.footer_imamconnect}>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/guides")}>Guides</span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/inthemedia")}>
                In the media
              </span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/specials")}>
                Specials
              </span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/blogs")}>
                Blogs
              </span>
            </div>
          </div>
          <div className={styles.footer_imamconnect}>
            <span className={styles.footer_imamconnect_heading}>Support</span>
            <div className={styles.footer_imamconnect}>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/codeofconduct")}>
                Code of Conduct
              </span>
              <span className={styles.footer_imamconnect_content} onClick={() => router.push("/faqs")}>FAQ</span>
              <span className={styles.footer_imamconnect_content}>
                Contact us
              </span>
              <span className={styles.footer_imamconnect_content}>Payment</span>
            </div>
          </div>
        </div>
        <div className={styles.horizontal_line}></div>
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
        </div>
      </div>
      <div className={styles.copyright}>
        <span className={styles.footer_copyright_txt}>© 2023 — Copyright</span>
        <img src="../assets/images/scrollToTop.svg" />
      </div>
      <div className={styles.social_media}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span className={styles.footer_socialmedia_txt}>Instagram</span>
          <img src="../assets/images/insta.svg" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span className={styles.footer_socialmedia_txt}>Whatsapp</span>
          <img src="../assets/images/whatsapp.svg" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span className={styles.footer_socialmedia_txt}>X</span>
          <img src="../assets/images/x.svg" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span className={styles.footer_socialmedia_txt}>Facebook</span>
          <img src="../assets/images/facebook.svg" />
        </div>
      </div>
      <div className={styles.social_media}>
        <span className={styles.footer_rights_txt}>
          IMAM CONNECT LTD ALL RIGHT RESERVED
        </span>
      </div>
    </section>
  );
};

export default Footer;
