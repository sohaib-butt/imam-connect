import styles from "../../../styles/homepage.module.scss";
import AdditionalInfo from "./AdditionalInfo";
import BasicInfo from "./BasicInfo"

const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[700] text-[#161616] font-poppins">
          Settings
        </span>
        <div className="w-[30%] hidden md:block">
          <button
            type="button"
            className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[48px] !text-[14px]`}
          >
            Save Changes
          </button>
        </div>
      </div>
      <BasicInfo />
      <AdditionalInfo />
    </div>
  );
};

export default index;