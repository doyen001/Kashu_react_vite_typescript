import SignupHeader from "../../../components/pages/signup/signupHeader";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

const PassportCheck = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 bg-white text-primary gap-10 h-[100dvh]">
      <div>
        <SignupHeader maxProgress={30} navigateTo="/" />
        <div className="mt-4 text-center">
          <h1 className="mb-2 text-2xl font-bold">Check quality</h1>
          <p className="text-sm font-medium text-primary opacity-80">
            Please make sure your card details
          </p>
          <p className="text-sm font-medium text-primary opacity-80">
            are clear to read with no blur or glare
          </p>
        </div>
      </div>
      <div className="rounded-md h-[208px] w-[300px] bg-primary/20"></div>
      <div className="flex-1"></div>
      <div>
        <Button
          size={"lg"}
          className="w-full text-white"
          onClick={() => {
            navigate("/verify_start");
          }}
        >
          All Clear
        </Button>
        <button className="w-full py-4 text-primary">Take a new photo</button>
      </div>
    </div>
  );
};

export default PassportCheck;
