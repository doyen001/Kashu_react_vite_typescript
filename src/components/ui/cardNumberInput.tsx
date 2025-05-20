import { useEffect, useState } from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";
import useDebounce from "../../lib/hooks/useEdbounce";
import { getCardType } from "../../lib/function";
import { VisaIcon, MasterIcon } from "./icons";

interface CardNumberInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardNumberInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  props,
  onClick,
}: CardNumberInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [cardType, setCardType] = useState<string>("Unknown");
  const searchDebounce = useDebounce(value, 1500);

  const shouldFloat = isFocused || value?.length > 0;

  useEffect(() => {
    if (searchDebounce !== "") {
      const cardType = getCardType(searchDebounce);
      setCardType(cardType);
    }
  }, [searchDebounce]);

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-6 pb-1 text-base font-medium placeholder-transparent border peer border-primary/20 rounded-2xl text-primary focus:outline-none focus:border-2 focus:border-primary"
        placeholder={label}
        id={label}
        {...props}
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
      {cardType !== "Unknown" && (
        <div className="absolute -translate-y-1/2 right-4 top-7">
          {cardType === "Visa" && <VisaIcon />}
          {cardType === "MasterCard" && <MasterIcon />}
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default CardNumberInput;
