import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import { BackspaceIcon } from "../../components/ui/icons";

const SignPinPage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>("");

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleReset = () => {
    setPin("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-white max-w-[800px] w-full mx-auto">
      <div className="flex flex-col items-center justify-between flex-1 w-full gap-10 space-y-15">
        <div>
          <h1 className="text-2xl font-bold text-center text-primary">
            Enter your PIN
          </h1>

          {/* PIN Dots */}
        </div>
        <div className="flex gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                i < pin.length ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center w-full max-w-xs mt-6">
          <div className="grid flex-1 w-full grid-cols-3 gap-0">
            {[..."123456789000"].map((num, i) => {
              if (i === 9) return <div key="empty" />;
              if (i === 11) {
                return (
                  <button
                    key="backspace"
                    onClick={handleBackspace}
                    className="flex items-center justify-center w-full text-lg font-semibold aspect-video"
                  >
                    <BackspaceIcon className="w-6 h-6" />
                  </button>
                );
              }
              return (
                <div key={num} className="col-span-1">
                  <button
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className="flex items-center justify-center w-full text-lg font-semibold aspect-video"
                  >
                    {num}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="mt-4 text-sm font-medium text-primary"
          >
            Reset
          </button>
        </div>
        {/* Number Pad */}
      </div>

      {/* Continue Button */}
      <Button
        className="w-full mt-10 text-white bg-primary max-w-[312px]"
        disabled={pin.length !== 4}
        onClick={() => navigate("/sign-mail")}
      >
        Continue
      </Button>
    </div>
  );
};

export default SignPinPage;
