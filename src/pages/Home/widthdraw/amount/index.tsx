import Keypad from "@/components/_module/withdraw/keypad";
import { Button } from "@/components/ui/button";
import { DollarSendIcon } from "@/components/ui/icons";
import { ArrowLeft, XIcon, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WithdrawAmountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = location.state || {};
  // const { account, id } = location.state || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("instant");

  const [amount, setAmount] = useState<string>("0");
  const uiAmount = useMemo(() => {
    const num = parseInt(amount);
    if (isNaN(num)) return "0";
    return num.toLocaleString();
  }, [amount]);

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 bg-white text-primary h-[100dvh]">
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
      <h1 className="mt-2 text-4xl font-bold text-primary">Choose Amount</h1>
      <h2 className="mt-4 text-3xl font-bold text-center text-primary">
        ${uiAmount}.00
      </h2>
      <p className="mt-1 mb-4 font-sans text-sm text-gray-500">
        Transfer upto $22,500.00
      </p>
      <div className="flex items-center justify-between w-full gap-4">
        <div
          className={`flex flex-col items-center justify-center p-2 border border-primary rounded-lg w-[180px] max-w-[300px] h-[200px] ${
            selectedPaymentMethod === "instant" ? "border-2 bg-primary/10" : ""
          }`}
          onClick={() => setSelectedPaymentMethod("instant")}
        >
          <Zap className="w-16 h-16 text-primary" strokeWidth={1.2} />
          <h2 className="mt-2 text-lg font-bold text-primary">Instant</h2>
          <p className="mt-1 font-sans text-sm text-center text-gray-500">
            In a few minutes
          </p>
        </div>

        <div
          className={`flex flex-col items-center justify-center p-2 border border-primary rounded-lg w-[180px] max-w-[300px] h-[200px] ${
            selectedPaymentMethod === "standard" ? "border-2 bg-primary/10" : ""
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
          <p className="mt-1 font-sans text-sm text-center text-gray-500">
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
              <p className="font-sans text-sm text-gray-500">Fee</p>
              <p className="font-sans text-sm font-bold text-primary">
                $400.00
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2" />
          </>
        )}
        <div className="flex items-center justify-between w-full">
          <p className="font-sans text-sm text-gray-500">Transfer to</p>
          <p className="font-sans text-sm font-bold text-primary">{account}</p>
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
        <label className="ml-2 font-sans text-sm text-gray-500" htmlFor="terms">
          By submitting payment below I have read and agree to{" "}
          <span className="font-bold text-primary">Terms & Conditions.</span>
        </label>
      </div>
      <Button
        className="w-full py-4 mt-4 text-base font-bold text-white bg-primary rounded-xl"
        size={"lg"}
        onClick={() => {
          navigate("/card/new");
        }}
      >
        Withdraw ${uiAmount}.00
      </Button>
      <Keypad
        onPress={(digit: string) => {
          setAmount((prev) => prev + digit);
        }}
        onBackspace={() => {
          setAmount((prev) => prev.slice(0, -1));
        }}
        onReset={() => {
          setAmount("");
        }}
      />
    </div>
  );
};
export default WithdrawAmountPage;
