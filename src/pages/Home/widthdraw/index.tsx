import AccountsCard from "@/components/_module/withdraw/card/allAccounts";
import ConnectAccountCard from "@/components/_module/withdraw/card/connectAccount";
import OtherWayCard from "@/components/_module/withdraw/otherWay";
import { AddCreditCardIcon, DollarSendIcon } from "@/components/ui/icons";
import { CircleHelp, InfoIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Account = {
  image: string;
  name: string;
  last4: string;
};

const WithdrawPage = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const [accounts, setAccounts] = useState<Account[]>([
    {
      image: "/account1.png",
      name: "Wells Fargo - Nickname",
      last4: "Checking 8490",
    },
    {
      image: "/account2.png",
      name: "Chase - Nickname",
      last4: "Savings 5643",
    },
    {
      image: "/account3.png",
      name: "Coinbase - Nickname",
      last4: "Wallet 5643",
    },
  ]);

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 bg-white text-primary h-[100dvh]">
      <div className="relative flex w-full">
        <XIcon
          className="absolute right-0 -top-2"
          role="button"
          onClick={() => navigate("/card")}
        />
      </div>
      <h1 className="mt-2 text-4xl font-bold text-primary">Move Money</h1>
      <h2 className="mt-4 text-2xl font-bold text-center text-primary">
        $22,500.00
      </h2>
      <div className="flex items-center justify-center gap-1 mt-1 mb-4 text-sm text-gray-500">
        <p className="font-sans">Available for transfer</p>
        <InfoIcon className="w-4 h-4" />
      </div>
      {accounts.length <= 0 ? (
        <ConnectAccountCard />
      ) : (
        <AccountsCard accounts={accounts} />
      )}
      <h2 className="mt-4 text-2xl font-bold text-center text-primary">
        More way to send
      </h2>
      <div className="mt-4 space-y-3">
        <OtherWayCard
          name="Wire or ACH"
          last4="Transfer directly from Kashu"
          Icon={<DollarSendIcon />}
        />
        <OtherWayCard
          name="Push to Card"
          last4="Send funds to credit/debit card"
          Icon={<AddCreditCardIcon />}
        />
      </div>
      <div className="flex items-center justify-center gap-2 py-8">
        <CircleHelp className="w-4 h-4 text-primary" strokeWidth={3} />
        <p className="text-xl font-bold text-center text-primary">
          Need help? Talk to support
        </p>
      </div>
    </div>
  );
};
export default WithdrawPage;
