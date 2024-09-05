import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="w-full border border-[#D7D7D7] rounded-[8px] p-[24px] flex flex-col items-start justify-start gap-3">
      <div className="flex items-center space-x-4">
        <div className="relative w-[24px] h-[24px]">
          <Image
            src="assets/images/user-icon.svg"
            alt="User Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-[#442D87] font-poppins font-[700] tracking-[-0.94px] text-[16px] md:text-[18px] lg:text-[20px]">Azizah Putri</h3>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 md:gap-0">
        <label class="flex justify-start items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="service"
            name="service"
            class="w-5 h-5 mt-1 mr-3 cursor-pointer"
          />
          <div>
            <span class="block text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#161C2D] text-start font-poppins tracking-[-0.38px]">
              Marriage and Family Services
            </span>
            <span class="block text-[14px] lg:text-[16px] font-[500] font-poppins text-[#999999] text-start tracking-[-0.38px]">
              $10/h
            </span>
          </div>
        </label>
        <p className="text-[#442D87] font-poppins font-[700] tracking-[-0.38px] text-[16px] md:text-[18px] lg:text-[20px]">$250.00</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-[24px] h-[24px]">
          <Image
            src="assets/images/trash.svg" // Replace with the path to your delete icon image
            alt="Delete Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
