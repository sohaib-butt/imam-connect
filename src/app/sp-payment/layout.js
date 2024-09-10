import { Footer, Header } from "@/components/shared";

export default function Layout({ children }) {

  return (
    <div className="w-full flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="w-full p-[24px] md:py-[30px] lg:py-[80px] md:px-[30px] lg:px-[100px]">{children}</main>
      {/* <div className="w-full flex flex-col justify-start items-start md:gap-10 p-[24px] md:py-[30px] lg:py-[80px] md:px-[30px] lg:px-[100px]">
        <div className="w-full hidden md:flex justify-start items-center gap-4">
          <Image src={ArrowRight.src} alt="Exit" width={30} height={30} />
          <span className="text-[#202124] md:text-[20px] lg:text-[24px] font-[600] tracking-[0.2px]">
            Profile
          </span>
        </div>
        <div className="w-full">
        <main className="w-full">{children}</main>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
