import { Button } from "@/components/ui/button";
import { DollarSendIcon } from "@/components/ui/icons";
import { ArrowLeft, XIcon, Zap } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WithdrawSuccessPage from "../../../../components/pages/withdraw/withdrawSuccess";
import AmountInputBox from "../../../../components/ui/amountInputBox";

const WithdrawAmountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = location.state || {};
  const [pageStep, setPageStep] = useState<"withdraw" | "success" | "failed">(
    "withdraw"
  );
  // const { account, id } = location.state || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("instant");

  const [amount, setAmount] = useState<string>("0");

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-white text-primary h-[100dvh]">
      {pageStep === "withdraw" ? (
        <>
          <div className="relative flex w-full">
            <ArrowLeft
              className="absolute left-0 -top-2"
              role="button"
              onClick={() => navigate(-1)}
            />
            <XIcon
              className="absolute right-0 -top-2"
              role="button"
              onClick={() => navigate("/card")}
            />
          </div>
          <h1 className="mt-2 text-4xl font-bold text-primary">
            Choose Amount
          </h1>
          <div className="items-center w-full mt-4 text-center">
            <AmountInputBox
              price={amount}
              setPrice={setAmount}
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
            />
          </div>
          <p className="mt-1 mb-4 text-sm text-primary/80">
            Transfer upto $22,500.00
          </p>
          <div className="flex items-center justify-between w-full gap-4">
            <div
              className={`flex flex-col items-center justify-center p-2 border border-primary rounded-lg w-[180px] max-w-[300px] h-[200px] ${
                selectedPaymentMethod === "instant"
                  ? "border-2 bg-thirdGreen"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("instant")}
            >
              <Zap className="w-16 h-16 text-primary" strokeWidth={1.2} />
              <h2 className="mt-2 text-lg font-bold text-primary">Instant</h2>
              <p className="mt-1 text-sm text-center text-primary/80">
                within an hour
              </p>
            </div>

            <div
              className={`flex flex-col items-center justify-center p-2 border border-primary rounded-lg w-[180px] max-w-[300px] h-[200px] ${
                selectedPaymentMethod === "standard"
                  ? "border-2 bg-thirdGreen"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("standard")}
            >
              <DollarSendIcon
                className="w-16 h-16 text-primary"
                strokeWidth={1.2}
              />
              <h2 className="mt-2 text-lg font-bold truncate text-primary">
                Up to 3 Biz Days
              </h2>
              <p className="mt-1 text-sm text-center text-primary/80">
                Estimated by
                <br />
                Monday, May 15th
              </p>
            </div>
          </div>
          <div className="w-full mt-4">
            {selectedPaymentMethod === "instant" && (
              <>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm text-primary/40">Fee</p>
                  <p className="text-sm font-bold text-primary">$400.00</p>
                </div>
                <div className="w-full h-[1px] bg-gray-200 my-2" />
              </>
            )}
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-primary/40">Transfer to</p>
              <p className="text-sm font-bold text-primary">{account}</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2" />
            {selectedPaymentMethod !== "instant" && (
              <>
                <div className="flex items-center justify-between w-full">
                  <div className="h-[38px]" />
                </div>
              </>
            )}
          </div>
          <div className="flex items-center w-full gap-2 mt-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="w-4 h-4 border-gray-300 rounded-md accent-primary text-primary focus:ring-primary"
            />
            <label className="ml-2 text-sm" htmlFor="terms">
              <span className="text-primary/80">
                By submitting payment below I have read and agree to
              </span>{" "}
              <span className="font-bold text-primary">
                Terms & Conditions.
              </span>
            </label>
          </div>
          <Button
            className="w-full py-4 mt-4 text-base font-bold text-white bg-primary"
            onClick={() => {
              setPageStep("success");
            }}
          >
            Withdraw ${amount}.00
          </Button>
        </>
      ) : (
        <WithdrawSuccessPage />
      )}
    </div>
  );
};
export default WithdrawAmountPage;
