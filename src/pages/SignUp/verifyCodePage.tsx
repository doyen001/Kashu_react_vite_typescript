import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "lucide-react"; // Or your custom icon
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Progress } from "../../components/ui/progress";
// import { BackspaceIcon } from "../../components/ui/icons";
import PhoneKeyboardBox from "../../components/ui/phoneKeyboardBox";

const VerifyCodePage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 20);
    return () => clearTimeout(timer);
  }, []);

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

  const handleReset = () => setCode(["", "", "", "", "", ""]);

  useEffect(() => {
    if (code.every((item) => item !== "")) {
      navigate("/sign_up_tel");
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-8 bg-white text-primary h-[100dvh] ">
      {/* Back icon */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Progress bar */}
        <div className="relative flex justify-center w-full">
          <Progress value={progress} className="max-w-16" />
          <div
            className="absolute left-0 w-full max-w-sm -top-2"
            role="button"
            onClick={() => navigate("/sign-up")}
          >
            <ArrowLeftIcon className="cursor-pointer" />
          </div>
        </div>

        {/* Title and description */}
        <div className="text-center">
          <h1 className="mt-4 mb-2 text-2xl font-bold">Enter 6-digit code</h1>
          <p className="text-sm text-[#0F7163]">
            We’ve sent the code to j***@gm***.com. <br />
            Can’t find it? Check your spam folder.
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
                "w-9 h-14 border rounded-2xl flex items-center justify-center text-lg font-medium",
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

export default VerifyCodePage;
