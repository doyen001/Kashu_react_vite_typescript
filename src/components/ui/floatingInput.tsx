import { useState } from "react";
import clsx from "clsx";
import { EyeIcon } from "./icons";
import { FieldError } from "react-hook-form";

interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
}

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const shouldFloat = isFocused || value?.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-5 pb-2 text-base font-medium placeholder-transparent border peer border-primary rounded-xl text-primary focus:outline-none focus:border-2 focus:border-primary"
        placeholder={label}
      />
      <label
        className={clsx(
          "absolute left-4 text-sm text-primary transition-all duration-200 opacity-80",
          shouldFloat ? "top-1 text-xs" : "top-4 text-base"
        )}
      >
        {label}
      </label>
      {type === "password" && value && value.length > 0 && (
        <EyeIcon
          className="absolute -translate-y-1/2 right-4 top-7"
          role="button"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FloatingInput;
