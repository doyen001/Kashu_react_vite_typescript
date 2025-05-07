import React from "react";
import clsx from "clsx";

import { BackspaceIcon } from "./icons";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleKeyPress: (digit: string) => void;
  handleBackspace: () => void;
  handleReset: () => void;
  className?: string;
};

const PhoneKeyboardBox: React.FC<Props> = ({
  handleKeyPress,
  handleBackspace,
  handleReset,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center w-full",
        className
      )}
    >
      {/* Number pad */}
      <div className="grid w-full max-w-xs grid-cols-3 gap-0">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((n) => (
          <button
            key={n}
            className="flex items-center justify-center w-full text-lg font-semibold aspect-video"
            onClick={() => handleKeyPress(n)}
          >
            {n}
          </button>
        ))}
        <div className="col-span-1" />
        <button
          className="flex items-center justify-center w-full aspect-video"
          onClick={handleBackspace}
        >
          <BackspaceIcon className="w-5 h-5" />{" "}
        </button>
      </div>

      {/* Reset */}
      <button
        className="text-sm font-bold cursor-pointer text-primary"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default PhoneKeyboardBox;
