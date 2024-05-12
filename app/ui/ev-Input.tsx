import React from "react";

interface EvInputProps {
  disabled?: boolean;
  showPlaceholder?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  type?: "text" | "number" | "email" | "password";
  name?: string;
  value: string | number | readonly string[];
  onChange: (v: string) => void;
}

const EVInput: React.FC<EvInputProps> = ({
  showPlaceholder,
  placeholder,
  label,
  className,
  labelClassName,
  inputClassName = "border-[1px] border-gray-400 outline-1 outline-indigo-700 px-4 h-[48px]",
  name,
  type,
  value,
  disabled,
  onChange,
}) => {
  return (
    <div className={`${className}`}>
      {label && <label className={`${labelClassName}`}>{label}</label>}
      <input
        disabled={disabled}
        placeholder={showPlaceholder ? placeholder : ""}
        className={`${inputClassName}`}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default EVInput;
