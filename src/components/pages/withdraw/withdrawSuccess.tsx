import successImage from "@/assets/success.png";
import { ArrowRightIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

const WithdrawSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center  bg-white text-primary h-[100dvh] text-center space-y-4">
      <XIcon
        className="absolute right-0 -top-2"
        role="button"
        onClick={() => navigate("/card")}
      />
      <img src={successImage} alt="success" width={195} height={195} />
      <h1 className="text-4xl font-bold text-primary">
        Whoo! Your funds are in transit.
      </h1>
      <div>
        <p className="pt-3 text-sm font-medium text-primary">
          Congratulations!
        </p>
        <p className="pt-1 text-sm font-medium text-primary">
          Congratulations! Your funds are now
        </p>
      </div>

      <Button className="w-full text-base font-bold text-white rounded-xl">
        View Balance
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default WithdrawSuccessPage;
