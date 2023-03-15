import React from "react";

const CustomInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  onKeyDown,
}) => {
  return (
    <div className="mb-2">
      <label className="mb-2 block font-bold text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        className={`w-full min-w-[300px] rounded-md border py-2 px-3 ${"border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"}`}
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default CustomInput;
