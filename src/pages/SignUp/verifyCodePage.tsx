import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "lucide-react"; // Or your custom icon
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Progress } from "../../components/ui/progress";
import { BackspaceIcon } from "../../components/ui/icons";

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

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 py-8 bg-white text-primary">
      {/* Back icon */}
      <div
        className="flex items-center w-full max-w-sm mb-4"
        role="button"
        onClick={() => navigate("/sign-up")}
      >
        <ArrowLeftIcon className="cursor-pointer" />
      </div>
      <div className="flex flex-col items-center justify-center w-full pt-5">
        {/* Progress bar */}
        <div className="w-full max-w-16">
          <Progress value={progress} />
        </div>

        {/* Title and description */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-xl font-semibold">Enter 6-digit code</h1>
          <p className="text-sm text-[#0F7163]">
            We’ve sent the code to j***@gm***.com. <br />
            Can’t find it? Check your spam folder.
          </p>
        </div>
      </div>
      {/* Code Input Display */}
      <div className="flex gap-3 mb-4 pt-[5%]">
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
      <p className="mb-10 text-sm font-bold cursor-pointer text-primary">
        Resend
      </p>
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        {/* Number pad */}
        <div className="grid w-full max-w-xs grid-cols-3 gap-0 mb-6">
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
    </div>
  );
};

export default VerifyCodePage;
