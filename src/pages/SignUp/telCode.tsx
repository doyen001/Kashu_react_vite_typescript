import { useContext, useEffect, useState } from "react";
import PhoneKeyboardBox from "../../components/ui/phoneKeyboardBox";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/mainContext";
import SignupHeader from "../../components/pages/signup/signupHeader";

const TelCode = () => {
  const navigate = useNavigate();
  const { userData } = useContext(MainContext);
  const [code, setCode] = useState<string[]>(["", "", "", ""]);

  const handleKeyPress = (digit: string) => {
    const newCode = [...code];
    const index = newCode.findIndex((val) => val === "");
    if (index !== -1) {
      newCode[index] = digit;
      setCode(newCode);
    }
  };

  const handleBackspace = () => {
    const newCode = [...code];
    newCode[code.filter((item) => item !== "").length - 1] = "";
    setCode(newCode);
  };

  const handleReset = () => setCode(["", "", "", ""]);

  useEffect(() => {
    if (code.every((item) => item !== "")) {
      navigate("/sign_up_personal");
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-8 bg-white text-primary h-[100dvh] ">
      {/* Back icon */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Progress bar */}
        <SignupHeader maxProgress={30} navigateTo="/sign_up_tel" />

        {/* Title and description */}
        <div className="mt-4 text-center">
          <h1 className="mb-2 text-2xl font-bold">Enter 6-digit code</h1>
          <p className="text-sm text-primary">
            {`We’ve sent the code to ****${userData?.phone?.slice(-3) ?? 0}`}
          </p>
        </div>
      </div>
      <div>
        {/* Code Input Display */}
        <div className="flex gap-3 mb-4">
          {code.map((digit, i) => (
            <div
              key={i}
              className={clsx(
                "w-12 h-12 border rounded-2xl flex items-center justify-center text-lg font-medium",
                digit ? "border-primary" : "border-muted-foreground"
              )}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Resend */}
        <p className="mb-20 text-sm font-bold text-center cursor-pointer sm:mb-0 text-primary">
          Resend
        </p>
      </div>
      {/* Number pad */}
      <PhoneKeyboardBox
        handleKeyPress={handleKeyPress}
        handleBackspace={handleBackspace}
        handleReset={handleReset}
        className=" pt-[48px]"
      />
    </div>
  );
};

export default TelCode;
