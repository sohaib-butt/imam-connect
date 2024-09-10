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
      <div className="flex flex-col md:flex-row flex-1">
        <div className="hidden md:flex md:w-[30%] lg:w-[25%] xl:w-[20%]">
          <Sidebar navLinks={userLinks} />
        </div>
        <main className="flex-1 p-6 overflow-x-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
