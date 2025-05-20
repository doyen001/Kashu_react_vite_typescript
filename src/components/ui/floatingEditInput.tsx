import { useState } from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
}

const FloatingEditInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [editable, setEditable] = useState(false);

  const shouldFloat = isFocused || value?.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={editable ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-6 pb-1 text-base font-medium placeholder-transparent border peer border-primary/20 rounded-2xl text-primary focus:outline-none focus:border-2 focus:border-primary"
        placeholder={label}
        id={label}
        readOnly={!editable}
      />
      <label
        className={clsx(
          "absolute left-4 text-sm text-primary transition-all duration-200 opacity-80",
          shouldFloat ? "top-2 text-xs" : "top-4 text-base"
        )}
        htmlFor={label}
        onClick={() => setIsFocused(true)}
      >
        {label}
      </label>
      <label
        className="absolute -translate-y-1/2 right-4 top-7"
        role="button"
        htmlFor={label}
        onClick={() => setEditable((prev) => !prev)}
      >
        Edit
      </label>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FloatingEditInput;
