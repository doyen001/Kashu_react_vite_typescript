import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import PinKeyboard from "../../components/_module/pinKeyboard";

const SignPinPage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>("");
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-white max-w-[800px] w-full h-[calc(100vh-80px)]  mx-auto">
      <div className="flex flex-col items-center justify-between flex-1 w-full gap-10 space-y-15">
        <h1 className="text-2xl font-bold text-center text-primary">
          Enter your PIN
        </h1>

        <PinKeyboard pin={pin} setPin={setPin} />
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
