import { Footer, Header } from "@/components/shared";
import Sidebar from "@/components/shared/Sidebar";

export default function Layout({ children }) {
  const userLinks = [
    {
      title: "Dashboard",
      links: [
        { href: "/user/purchase", label: "My Purchase" },
        { href: "/user/inbox", label: "Inbox" },
        { href: "/user/favourite", label: "Favourites" },
        { href: "/user/calendar", label: "Calendar" },
      ],
    },
    {
      title: "Utility",
      links: [
        { href: "/user/settings", label: "Settings" },
        { href: "/user/logout", label: "Logout" },
      ],
    },
  ];
  return (
    <div className="w-full relative overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar navLinks={userLinks} />
        <main className="w-full flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
