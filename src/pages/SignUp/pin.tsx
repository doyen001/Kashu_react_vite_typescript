import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinKeyboard from "../../components/_module/pinKeyboard";
import SignupHeader from "../../components/pages/signup/signupHeader";
import { Button } from "../../components/ui/button";

const PinPage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-[800px] mx-auto h-[100dvh] p-6 bg-white">
      <SignupHeader maxProgress={80} navigateTo="" isBackButton={false} />
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-bold text-primary">
          Create your PIN
        </h1>
        <p className="text-sm font-medium text-center opacity-80 text-primary">
          Create a four-digit passcode
        </p>
        <p className="text-sm font-medium text-center opacity-80 text-primary">
          to secure your account
        </p>
      </div>
      <PinKeyboard pin={pin} setPin={setPin} />
      <Button
        className="w-full mt-10 text-white bg-primary max-w-[312px]"
        disabled={pin.length !== 4}
        onClick={() => navigate("/sign_up_question")}
      >
        Set up PIN
      </Button>
    </div>
  );
};

export default PinPage;
