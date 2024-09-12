import { Sidebar } from "@/components/ServiceProvider";
import { Footer, Header } from "@/components/shared";
import RegisterGirl from "../../../public/assets/images/register-girl.svg";
import Image from "next/image";

export default function Layout({ children }) {

  return (
    <div className="w-full flex flex-col relative overflow-x-hidden">
      <Header />
      <div className="w-full flex flex-col justify-start items-start md:gap-10 p-[24px] md:py-[30px] lg:py-[80px] md:pl-[30px] md:pr-0 lg:pl-[100px]">
        <div className="w-full flex justify-center items-start gap-10">
          <main className="w-full lg:w-[60%] 2xl:w-[70%]">{children}</main>
          <Image src={RegisterGirl.src} alt="Exit" width={540} height={611} className="hidden md:block"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}