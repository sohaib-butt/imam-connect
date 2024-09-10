"use client"
import { useState } from "react";

const RadioGroup = ({ label, options, name }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="mb-6">
      <p className="text-[14px] lg:text-[16px] font-[600] text-[#202124] leading-[20px]">{label}</p>
      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleRadioChange(option.value)}
              className="form-radio h-4 w-4 text-green-500"
            />
            <span className="text-[14px] lg:text-[16px] font-[400] text-[#161616] leading-[20px]">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;