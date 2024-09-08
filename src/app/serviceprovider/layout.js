import { Sidebar } from "@/components/ServiceProvider";
import { Footer, Header } from "@/components/shared";
import ArrowRight from "../../../public/assets/images/arrow_right.svg";
import Image from "next/image";

export default function Layout({ children }) {
  const adminLinks = [
    {
      title: "Notification",
      links: [
        { href: "/admin/notificationcenter", label: "Notification Center" },
      ],
    },
    {
      title: "Dashboard",
      links: [
        { href: "/admin/dashboard", label: "Dashboard" },
        { href: "/admin/serviceproviders", label: "Service Providers" },
        { href: "/admin/inbox", label: "Inbox" },
        { href: "/admin/order-lists", label: "Order Lists" },
        { href: "/admin/payments", label: "Payments" },
        { href: "/admin/users", label: "Users" },
        { href: "/admin/refund", label: "Refund" },
      ],
    },
    {
      title: "Team",
      links: [{ href: "/admin/teammembers", label: "Team Members" }],
    },
    {
      title: "Website",
      links: [
        { href: "/admin/pages", label: "Pages" },
        { href: "/admin/blogs", label: "Blogs" },
        { href: "/admin/guides", label: "Guides" },
        { href: "/admin/media", label: "Media" },
      ],
    },
    {
      title: "Utility",
      links: [{ href: "/admin/settings", label: "Settings" }],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Header />
      <div className="w-full flex flex-col justify-start items-start md:gap-10 p-[24px] md:py-[40px] lg:py-[80px] md:px-[80px] lg:px-[160px]">
        <div className="w-full hidden md:flex justify-start items-center gap-4">
          <Image src={ArrowRight.src} alt="Exit" width={30} height={30} />
          <span className="text-[#202124] md:text-[20px] lg:text-[24px] font-[600] tracking-[0.2px]">
            Profile
          </span>
        </div>
        <div className="w-full flex justify-center items-start gap-4">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
