"use client"
import { useState } from "react";

const CheckboxGroup = ({ label, options }) => {
  const [selectedValues, setSelectedValues] = useState(
    options.reduce((acc, option) => ({ ...acc, [option.value]: false }), {})
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div>
      <p className="text-[14px] lg:text-[16px] font-[600] text-[#202124] leading-[20px]">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={option.value}
              checked={selectedValues[option.value]}
              onChange={handleCheckboxChange}
              className="form-checkbox h-4 w-4 text-green-500"
            />
            <span className="text-[14px] lg:text-[16px] font-[400] text-[#161616] leading-[20px]">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;