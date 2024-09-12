// Layout.jsx
import { Footer, Header } from "@/components/shared";
import Sidebar from "@/components/shared/Sidebar";

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
        { href: "/admin/orderlists", label: "Order Lists" },
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
        { href: "/admin/listedpages", label: "Pages" },
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
    <div className="min-h-screen font-poppins">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar: hidden below md and takes 20% width on md and larger */}
        <div className="hidden md:flex md:w-[20%]">
          <Sidebar navLinks={adminLinks} />
        </div>
        {/* Main content area: takes remaining width */}
        <main className="flex-1 p-2 md:p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
