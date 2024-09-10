import { Footer, Header } from "@/components/shared";

export default function Layout({ children }) {

  return (
    <div className="w-full flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="w-full p-[24px] md:py-[30px] lg:py-[80px] md:px-[30px] lg:px-[100px]">{children}</main>
      <Footer />
    </div>
  );
}
