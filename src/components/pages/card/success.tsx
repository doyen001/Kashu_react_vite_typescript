import successImage from "@/assets/success.png";
import { ArrowRightIcon, PlusIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

const CardSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center  bg-white text-primary h-[100dvh] justify-between text-center">
      <XIcon
        className="absolute right-0 -top-2"
        role="button"
        onClick={() => navigate("/card")}
      />
      <img src={successImage} alt="success" />
      <h1 className="text-4xl font-bold text-primary">
        Card added successfully!
      </h1>
      <p className="pt-3 text-sm font-medium text-primary pb-9">
        You’ve added a new card to Kashu.
      </p>
      <div className="flex flex-col w-full gap-2">
        <Button className="w-full text-base font-bold text-white rounded-xl">
          <PlusIcon className="w-5 h-5" />
          Add new card
        </Button>
        <Button className="w-full" variant="secondary">
          Deposit Funds
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CardSuccessPage;
