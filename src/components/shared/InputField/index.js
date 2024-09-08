import Image from "next/image";
import EyeIcon from "../../../../public/assets/images/eye.svg";

const index = ({ label, placeholder, type }) => {
  return (
    <div
      className={`w-full flex flex-col gap-[8px] ${
        type == "password" ? "relative" : ""
      }`}
    >
      <span className="text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        className="px-[16px] border border-[#E7E7E7] text-[14px] lg:text-[16px] placeholder:text-[14px] placeholder:lg:text-[16px] rounded-[12px] h-[56px] placeholder-[#999999] focus:outline-none"
      />
      {type == "password" && (
        <Image
          src={EyeIcon.src}
          width={24}
          height={24}
          className="absolute cursor-pointer top-[50%] right-4"
        />
      )}
    </div>
  );
};
export default index;
