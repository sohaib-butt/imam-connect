import Image from "next/image";
import styles from "../../../styles/homepage.module.scss";
import SearchIcon from "../../../../public/assets/images/searchIcon.svg";
import FavServices from "./FavServices";
const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[700] text-[#161616] font-poppins">
          Favorite
        </span>
        <div
          style={{ position: "relative" }}
          className="hidden md:block w-[70%]"
        >
          <input
            name="name"
            id="name"
            type="text"
            className={`${styles.intro_search_div} !h-[60px]`}
            placeholder="Try Search: Nikah"
          />
          <div
            className={`${styles.intro_search_icon} md:!top-[12px] md:!right-[25px]`}
          >
            <Image src={SearchIcon.src} fill />
          </div>
        </div>
      </div>
      <FavServices />
    </div>
  );
};

export default page;
