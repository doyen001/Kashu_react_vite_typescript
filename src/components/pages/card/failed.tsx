import { ArrowRightIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import failedImage from "@/assets/failed.png";

type Props = {
  message: string;
};

const CardFailedPage: React.FC<Props> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center  bg-white text-primary h-[100dvh] text-center">
      <XIcon
        className="absolute right-0 -top-2"
        role="button"
        onClick={() => navigate("/card")}
      />
      <div className="mt-10">
        <img src={failedImage} alt="failed" />
      </div>
      <div className="mt-14">
        <h1 className="text-4xl font-bold text-primary">Uh oh! Something</h1>
        <h1 className="text-4xl font-bold text-primary">went wrong.</h1>
      </div>
      <p className="pt-3 text-sm font-medium text-primary pb-9">{message}</p>
      <Button className="w-full text-base font-bold text-white rounded-xl">
        Contact Support
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default CardFailedPage;
