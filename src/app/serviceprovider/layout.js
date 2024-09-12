import { Sidebar } from "@/components/ServiceProvider";
import { Footer, Header } from "@/components/shared";
import ArrowRight from "../../../public/assets/images/arrow_right.svg";
import Image from "next/image";

export default function Layout({ children }) {

  return (
    <div className="w-full flex flex-col relative overflow-x-hidden">
      <Header />
      <div className="w-full flex flex-col justify-start items-start md:gap-10 p-[24px] md:py-[30px] lg:py-[80px] md:px-[30px] lg:px-[100px]">
        <div className="w-full hidden md:flex justify-start items-center gap-4">
          <Image src={ArrowRight.src} alt="Exit" width={30} height={30} />
          <span className="text-[#202124] md:text-[20px] lg:text-[24px] font-[600] tracking-[0.2px]">
            Profile
          </span>
        </div>
        <div className="w-full flex justify-center items-start gap-4">
          <Sidebar />
          <main className="w-full md:w-[65%] lg:w-[60%] 2xl:w-[70%]">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
