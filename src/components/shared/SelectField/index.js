"use client";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "../../../../public/assets/images/x-close.svg";
import ArrowDown from "../../../../public/assets/images/arrowDown.svg";
import SearchIcon from "../../../../public/assets/images/search-icon.svg";

const index = ({ label, placeholder, options, multiple }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (option) => {
    if (multiple) {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    } else {
      setSelectedOptions([option]);
      setIsOpen(false); // Close the dropdown when a single option is selected
    }
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-[8px]">
      <span className="text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <div className="relative">
        <div
          className="px-[16px] py-[16px] border border-[#E7E7E7] rounded-[12px] min-h-[56px] text-[#999999] focus:outline-none cursor-pointer overflow-y-auto max-h-[80px]"
          onClick={toggleDropdown}
        >
          <div
            className="flex gap-[8px] flex-wrap"
            style={{ scrollbarWidth: "none" }}
          >
            {multiple ? (
              selectedOptions.length > 0 ? (
                selectedOptions.map((selectedOption) => (
                  <div
                    key={selectedOption}
                    className="w-auto pl-[10px] pr-[12.61px] h-[21px] flex gap-[4.2px] bg-[#F8F8F8] rounded-[52.53px]"
                  >
                    <span className=" text-[14px] font-[400] leading-[20px] text-[#202124]">
                      {selectedOption}
                    </span>
                    <Image
                      src={CloseIcon.src}
                      width={12}
                      height={12}
                      className="cursor-pointer text-[#202124]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOptionChange(selectedOption);
                      }}
                    />
                  </div>
                ))
              ) : (
                placeholder
              )
            ) : selectedOptions.length > 0 ? (
              <span className=" text-[14px] lg:text-[16px] font-[400] leading-[20px] text-[#202124]">
                {selectedOptions[0]}
              </span>
            ) : (
              placeholder
            )}
          </div>
        </div>
        <div className="absolute right-[16px] top-[50%] transform -translate-y-[50%] pointer-events-none">
          <Image src={ArrowDown.src} width={24} height={24} />
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-[#E7E7E7] rounded-[8px] shadow-lg p-[24px]">
            <div className="px-[16px] border border-[#E7E7E7] rounded-[8px] flex gap-[8px] h-[48px] mb-[24px]">
              <Image
                src={SearchIcon.src}
                height={20}
                width={20}
              />
              <input
                type="text"
                className="w-full focus:outline-none text-[14px] lg:text-[16px] placeholder:text-[14px] placeholder:lg:text-[16px]"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div
              className="max-h-[424px] overflow-y-auto flex-col"
              style={{ scrollbarWidth: "none" }}
            >
              {filteredOptions.map((option, idx) => (
                <label
                  key={idx}
                  className="flex items-start p-2 cursor-pointer hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="mr-2 h-[20px] w-[20px] border border-[#D9D9D9] rounded-[4px]"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                  <span className="text-[16px] text-[#161616]  font-[400]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
