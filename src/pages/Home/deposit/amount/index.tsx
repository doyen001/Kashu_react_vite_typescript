import { useState } from "react";
import { ArrowLeft, ArrowRightIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentCard from "../../../../components/ui/paymentCard";
import { LogoIcon, MasterIcon } from "../../../../components/ui/icons";
import { Button } from "../../../../components/ui/button";
import AmountInputBox from "../../../../components/ui/amountInputBox";
import PhoneKeyboardBox from "../../../../components/ui/phoneKeyboardBox";
import { Checkbox } from "../../../../components/ui/checkbox";
import CardFailedPage from "../../../../components/pages/card/failed";
import DepositSuccessPage from "../../../../components/pages/deposit/success";
const DepositAmountPage = () => {
  const navigate = useNavigate();
  const [pageStep, setPageStep] = useState<
    "choose" | "submit" | "success" | "failed"
  >("choose");
  const [loading, setLoading] = useState<boolean>(false);
  const [price, setPrice] = useState<string>("");

  const handleKeyPress = (digit: string) => {
    setPrice((prev) => prev + digit);
  };

  const handleBackspace = () => {
    setPrice((prev) => prev.slice(0, -1));
  };

  const handleReset = () => setPrice("");

  return (
    <div className="p-6 h-[100dvh] w-full flex flex-col items-center gap-4 relative">
      {pageStep !== "success" && pageStep !== "failed" && (
        <div className="relative flex justify-center w-full">
          <ArrowLeft
            className="absolute left-0 text-primary -top-2"
            role="button"
            onClick={() => {
              if (pageStep === "submit") {
                setPageStep("choose");
              } else {
                navigate("/deposit");
              }
            }}
          />
          <XIcon
            className="absolute right-0 -top-2"
            role="button"
            onClick={() => navigate("/home")}
          />
          <h1 className="mt-1 text-2xl font-bold text-center text-primary">
            {pageStep === "choose" ? "Choose Amount" : "Confirm Details"}
          </h1>
        </div>
      )}
      {pageStep === "choose" ? (
        <>
          <AmountInputBox price={price} setPrice={setPrice} />
          <div className="w-full">
            <PaymentCard
              name="Apple Card"
              last4="Mastercard 8490"
              Icon={<MasterIcon />}
            />
          </div>
          <div className="flex-1"></div>
          <Button
            className="w-full text-white"
            onClick={() => setPageStep("submit")}
          >
            Continue
          </Button>
          <PhoneKeyboardBox
            handleKeyPress={handleKeyPress}
            handleBackspace={handleBackspace}
            handleReset={handleReset}
            className="pt-[30px]"
          />
        </>
      ) : pageStep === "submit" ? (
        <>
          <div className="text-center">
            <p className="text-sm font-medium text-primary opacity-80">
              Please take a moment to ensure the
            </p>
            <p className="text-sm font-medium text-primary opacity-80">
              {" "}
              amounts and credit card details are correct.
            </p>
          </div>
          <h1 className="text-4xl font-bold text-primary">
            ${price === "" ? 0 : price}
          </h1>
          <p className="text-lg font-medium opacity-40 text-primary">
            Amount to be charged on card
          </p>
          <div className="w-full">
            <PaymentCard
              name="Apple Card"
              last4="Mastercard 8490"
              Icon={<MasterIcon />}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-primary">Fee</p>
              <p className="text-sm font-bold text-primary">10%</p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-primary">Fee Cost</p>
              <p className="text-sm font-bold text-primary">$2,500</p>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-primary">
                Total available funds after fees
              </p>
              <p className="text-sm font-bold text-primary">$22,500</p>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-2">
            <Checkbox className="data-[state=checked]:text-white bg-primary" />
            <p className="text-xs font-medium text-primary">
              <span className="opacity-80 ">
                By submitting payment below I have read and agree to{" "}
              </span>
              <span className="text-primary">Terms & Conditions.</span>
            </p>
          </div>
          <Button
            className="w-full bg-secondary text-primary focus:bg-secondary active:bg-secondary"
            onClick={() => {
              setLoading(true);
            }}
          >
            <p>Submit Payment</p>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
          {loading && (
            <>
              <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="relative z-20 p-10 rounded-full bg-thirdGreen">
                  <LogoIcon />
                </div>
                <div className="p-12 bg-[#0FD790] rounded-full w-[180px] h-[180px] absolute animate-pulseCustom -top-[10px] -left-[10px] z-10"></div>
              </div>
            </>
          )}
        </>
      ) : pageStep === "success" ? (
        <DepositSuccessPage />
      ) : pageStep === "failed" ? (
        <CardFailedPage message="Your transaction failed." />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DepositAmountPage;
