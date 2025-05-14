import PaymentCard from "../../ui/paymentCard";
import { MasterIcon, VisaIcon } from "../../ui/icons";

const SelectDeposit = () => {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-center text-primary">
        Select a card to start converting your
      </p>
      <p className="text-sm font-medium text-center text-primary">
        available credit limit into spendable cash.
      </p>

      <div className="bg-[#E8FFE8] rounded-3xl py-6 px-7 mt-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-primary">My Cards</h2>
          <button className="text-sm font-medium text-primary opacity-80">
            + Add Card
          </button>
        </div>
        <div className="space-y-3 ">
          <PaymentCard
            name="Apple Card"
            last4="Mastercard 8490"
            Icon={<MasterIcon />}
            type="deposit"
          />
          <PaymentCard
            name="Marriott Bonvoy"
            last4="VISA 6643"
            Icon={<VisaIcon />}
            type="deposit"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDeposit;
