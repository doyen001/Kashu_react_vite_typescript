import { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import { MainContext } from "../../context/mainContext";

const SignUpTelPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(MainContext);
  const [progress, setProgress] = useState(15);
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-8 bg-white text-primary h-[calc(100vh-80px)] ">
      {/* Back icon */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Progress bar */}
        <div className="relative flex justify-center w-full pt-4">
          <Progress value={progress} className="max-w-16" />
        </div>

        {/* Title and description */}
        <div className="flex flex-col items-center justify-between w-full h-full mt-4">
          <h1 className="mb-2 text-4xl font-bold">Verify Phone</h1>
          <div className="space-y-4">
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => {
                setPhone(phone);
              }}
              placeholder="+1 000 000 0000"
            />
            <Button
              className="w-full py-2 text-base text-white bg-primary rounded-x max-w-[300px]"
              onClick={() => {
                setUserData((prev: any) => ({ ...prev, phone }));
                navigate("/sign_up_tel_code");
              }}
            >
              Send Code
            </Button>
            <p className="text-sm font-medium text-center">
              <span className="opacity-80">Having issues?</span>{" "}
              <span className="text-primary">Contact support</span>
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTelPage;
