"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminProfile from "../../../../public/assets/images/admin-profile.svg";
import Image from "next/image";

const Sidebar = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <nav className="w-[100%] pt-[24px] pb-[80px] md:px-[20px] lg:px-[40px] border-r border-[#E7E7E7]">
      <div className="w-full flex items-center mb-6">
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

      {navLinks?.map((a, index) => (
        <div key={index} className="mb-6">
  <h2 className="text-lg font-semibold mb-2 text-gray-400 text-[14px]">
    {a?.title}
  </h2>
  <ul className="list-none p-0">
    {a?.links?.map((l, index) => (
      <li key={index}>
        <Link
          href={l?.href}
          className={`block py-2 px-4 text-[#202224] hover:bg-[#00BAC2] h-[50px] flex items-center justify-center hover:text-[#FFFFFF] rounded text-[14px] ${
            pathname.startsWith(l?.href)
              ? "bg-[#00BAC2] text-[#FFFFFF]"
              : ""
          }`}
        >
          {l?.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

      ))}
    </nav>
  );
};

export default Sidebar;
