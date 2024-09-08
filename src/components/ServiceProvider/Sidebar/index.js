"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminProfile from "../../../../public/assets/images/admin-profile.svg";
import Image from "next/image";
import styles from "../../../styles/homepage.module.scss";
import ExitIcon from "../../../../public/assets/images/exit-icon.svg";

const index = () => {
  const pathname = usePathname();

  const links = [
    { href: "/serviceprovider/personalinfo", label: "Personal Information" },
    { href: "/serviceprovider/services", label: "Services" },
    { href: "/serviceprovider/customer", label: "Customer Management" },
    { href: "/serviceprovider/orders", label: "Orders" },
    { href: "/serviceprovider/payments", label: "Payments" },
    { href: "/serviceprovider/inbox", label: "Inbox" },
    { href: "/serviceprovider/refund", label: "Refund Request" },
    { href: "/serviceprovider/calendar", label: "Calendar" },
  ];
  return (
    <div className="w-[45%] lg:w-[40%] 2xl:w-[30%] border border-[#E7E7E7] p-[24px] rounded-[12px] md:flex flex-col justify-start items-start gap-4 hidden">
      <div className="w-full flex justify-start items-center mb-4">
        <Image
          src={AdminProfile.src}
          width={52}
          height={52}
          alt="Admin"
          className="rounded-full"
        />
        <div className="ml-2 flex flex-col justify-start items-start gap-2">
          <span className="font-[400] text-[#0D0C22] text-[14px]">
            Putri Azizah /{" "}
            <span className="font-[700]">Detail Information</span>
          </span>
          <span className="text-[#6E6D7A] text-[12px] font-[400]">
            Update your username and manage your account
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-5">
        {links?.map((l, index) => (
          <Link
            key={index}
            href={l?.href}
            className={`block text-[#0D0C22] hover:text-[#442D87] text-[15px] font-[400] ${
              pathname.startsWith(l?.href) ? "text-[#442D87] font-[700]" : ""
            }`}
          >
            {l?.label}
          </Link>
        ))}
      </div>
      <div className="w-[70%] mt-4">
        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[40px] !text-[16px] !bg-[#F43F5E]`}
        >
          <Image src={ExitIcon.src} alt="Exit" width={16} height={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default index;
