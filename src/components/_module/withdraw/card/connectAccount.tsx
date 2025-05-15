import { Button } from "../../../ui/button";
import { CardSVG } from "../../../ui/icons";
import { useNavigate } from "react-router-dom";

const ConnectAccountCard: React.FC = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-[#E8FFE8] shadow-md rounded-3xl">
      <div className="flex flex-col items-center mb-4">
        <CardSVG />
        <h2 className="text-2xl font-bold text-primary leading-[34px]">
          Connect an account
        </h2>
        <p className="text-sm font-medium text-primary w-[65%] text-center mt-1 leading-6">
          Link an account to securely
          transfer your funds.
        </p>
      </div>
      <Button
        className="w-full mt-6 text-base font-bold text-white bg-primary rounded-xl"
        size={"lg"}
        onClick={() => {
          navigate("/card/new");
        }}
      >
        + Connect account
      </Button>
    </div>
  );
};

export default ConnectAccountCard;
