import { useState } from "react";
import { CircleHelp, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AddCreditCard from "../../../components/_module/home/creditCard";
import SelectDeposit from "../../../components/pages/deposit/selectDeposit";
const DepositPage = () => {
  const navigate = useNavigate();
  const [pageStep, setPageStep] = useState<"add" | "select">("add");
  console.log("pageStep", pageStep);
  return (
    <div className="p-6 h-[100dvh] flex flex-col gap-4">
      <div className="relative flex w-full">
        <XIcon
          className="absolute right-0 -top-2"
          role="button"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-4xl font-bold text-primary">Convert Credit</h1>
        <h1 className="mt-4 text-4xl font-bold text-primary">to Cash</h1>
      </div>
      {pageStep === "add" ? (
        <AddCreditCard
          setPageStep={() => {
            setPageStep("select");
          }}
          type="deposit"
        />
      ) : (
        <SelectDeposit />
      )}
      <div className="flex-1"></div>
      <div className="flex items-center justify-center gap-2">
        <CircleHelp className="w-5 h-5 text-primary" />
        <p className="font-bold text-md text-primary">
          Need help? Talk to support
        </p>
      </div>
    </div>
  );
};

export default DepositPage;
