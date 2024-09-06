"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminProfile from '../../../../public/assets/images/admin-profile.svg'
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  return (
    <nav
      className="px-10 py-6 md:w-1/5 hidden md:block border-r border-[#E7E7E7]"
      style={{
        paddingTop: "24px",
        paddingRight: "40px",
        paddingBottom: "80px",
        paddingLeft: "40px",
        borderRight: "1px solid #E7E7E7",
      }}
    >
      <div className="flex items-center mb-6">
        <Image
          src={AdminProfile.src}
          width={52}
          height={52}
          alt="Admin"
          className="rounded-full"
        />
        <div className="ml-3">
          <p
            className="font-bold text-[#1C1C1C]"
            style={{ fontSize: "11.72px" }}
          >
            Ryzen Official Partners
          </p>
          <p className="text-[#1C1C1C]" style={{ fontSize: "10.25px" }}>
            Psychoanalyst
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2
          className="text-lg font-semibold mb-2 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          Notification
        </h2>
        <ul className="list-none p-0">
          <li>
            <Link
              href="/admin/notifications"
              className="block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] hover:text-[#FFFFFF] rounded "
              style={{ fontSize: "14px" }}
            >
              Notification Center
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2
          className="text-lg font-semibold mb-2 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          Dashboard
        </h2>
        <ul className="list-none p-0">
          {[
            { href: "/admin/dashboard", label: "Dashboard" },
            { href: "/admin/serviceproviders", label: "Service Providers" },
            { href: "/admin/inbox", label: "Inbox" },
            { href: "/admin/order-lists", label: "Order Lists" },
            { href: "/admin/payments", label: "Payments" },
            { href: "/admin/users", label: "Users" },
            { href: "/admin/refund", label: "Refund" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] hover:text-[#FFFFFF] rounded  ${
                  router.pathname === href ? "bg-[#00BAC2] text-[#FFFFFF]" : ""
                }`}
                style={{ fontSize: "14px" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2
          className="text-lg font-semibold mb-2 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          Team
        </h2>
        <ul className="list-none p-0">
          <li>
            <Link
              href="/admin/team-members"
              className={`block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] hover:text-[#FFFFFF] rounded  ${
                router.pathname === "/admin/team-members"
                  ? "bg-[#00BAC2] text-[#FFFFFF]"
                  : ""
              }`}
              style={{ fontSize: "14px" }}
            >
              Team Members
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2
          className="text-lg font-semibold mb-2 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          Website
        </h2>
        <ul className="list-none p-0">
          {[
            { href: "/admin/pages", label: "Pages" },
            { href: "/admin/blogs", label: "Blogs" },
            { href: "/admin/guides", label: "Guides" },
            { href: "/admin/media", label: "Media" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] hover:text-[#FFFFFF] rounded  ${
                  router.pathname === href ? "bg-[#00BAC2] text-[#FFFFFF]" : ""
                }`}
                style={{ fontSize: "14px" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2
          className="text-lg font-semibold mb-2 text-gray-400"
          style={{ fontSize: "14px" }}
        >
          Utility
        </h2>
        <ul className="list-none p-0">
          <li>
            <Link
              href="/admin/settings"
              className={`block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] hover:text-[#FFFFFF] rounded ${
                router.pathname === "/admin/dashboard/settings"
                  ? "bg-[#00BAC2] text-[#FFFFFF]"
                  : ""
              }`}
              style={{ fontSize: "14px" }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
