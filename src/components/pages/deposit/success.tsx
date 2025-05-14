import successImage from "@/assets/success.png";
import { ArrowRightIcon, PlusIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

const DepositSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center  bg-white text-primary h-[100dvh] justify-between text-center">
      <XIcon
        className="absolute right-0 -top-2"
        role="button"
        onClick={() => navigate("/card")}
      />
      <img src={successImage} alt="success" width={195} height={195} />
      <h1 className="text-4xl font-bold text-primary">
        Whoo! Your funds are ready to go.
      </h1>
      <div>
        <p className="pt-3 text-sm font-medium text-primary">
          Congratulations! Your funds are now
        </p>
        <p className="pt-1 text-sm font-medium text-primary">
          available for transfer.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-primary">+ $22,500.00</h1>
      <p className="text-sm font-medium text-primary opacity-80">
        Increase in available Kashu balance
      </p>
      <Button className="w-full text-base font-bold text-white rounded-xl">
        <PlusIcon className="w-5 h-5" />
        Convert more credit
      </Button>
      <Button className="w-full bg-secondary rounded-xl text-primary focus:bg-secondary hover:bg-secondary">
        Withdraw or Move Funds
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DepositSuccessPage;
