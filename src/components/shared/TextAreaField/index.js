const index = ({ label, placeholder, areaClass }) => {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <span className="font-poppins text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        className={`p-[16px] border border-[#E7E7E7] text-[14px] lg:text-[16px] placeholder:text-[14px] placeholder:lg:text-[16px] rounded-[12px] placeholder-[#999999] focus:outline-none resize-none ${areaClass}`}
      />
    </div>
  );
};
export default index;
