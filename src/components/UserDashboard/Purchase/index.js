import Image from "next/image";
import styles from "../../../styles/homepage.module.scss";
import SearchIcon from "../../../../public/assets/images/searchIcon.svg";
import { DatePicker } from "@/components/shared";
import StatusTags from "../../shared/StatusTags";
import PurchaseCards from "./PurchaseCards";
const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[700] text-[#161616] font-poppins">
          Your Purchase Lists
        </span>
        <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-start items-end gap-2 md:gap-4">
          <div style={{ width: "100%", position: "relative" }}>
            <input
              name="name"
              id="name"
              type="text"
              className={`${styles.header_search_div} !w-full !h-[42px] !text-[14px] placeholder:!text-[14px]`}
              placeholder="Search"
            />
            <Image
              src={SearchIcon.src}
              alt="search"
              width={15.45}
              height={15.47}
              className={`${styles.header_search_icon} !top-[14px]`}
            />
          </div>
          <DatePicker
            placeholder={"Choose transaction date"}
            pickerClassName={"!w-full !h-[42px] !rounded-[0px]"}
          />
        </div>
      </div>
      <StatusTags />
      <PurchaseCards />
    </div>
  );
};

export default index;
