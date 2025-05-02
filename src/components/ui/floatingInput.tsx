import { useState } from "react";
import clsx from "clsx";

interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const shouldFloat = isFocused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-5 pb-2 placeholder-transparent border peer border-primary rounded-xl text-primary focus:outline-none focus:border-2 focus:border-primary"
        placeholder={label}
      />
      <label
        className={clsx(
          "absolute left-4 text-sm text-primary transition-all duration-200",
          shouldFloat ? "top-1 text-xs" : "top-4 text-base"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
