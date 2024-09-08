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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar navLinks={adminLinks} />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
