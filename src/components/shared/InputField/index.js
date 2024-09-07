const index = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="font-poppins text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <input
        placeholder={placeholder}
        className="px-[16px] border border-[#E7E7E7] rounded-[12px] h-[56px] placeholder-[#999999] focus:outline-none"
      />
    </div>
  );
};
export default index;
