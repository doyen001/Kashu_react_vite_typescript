import { Button } from "../../../ui/button";
import { CardSVG } from "../../../ui/icons";

const AddCreditCard = () => {
  return (
    <div className="p-4 bg-[#E8FFE8] shadow-md rounded-3xl">
      <div className="flex flex-col items-center mb-4">
        <CardSVG />
        <h2 className="text-2xl font-bold text-primary leading-[34px]">
          Add a credit card
        </h2>
        <p className="text-sm font-medium text-primary w-[65%] text-center mt-1 leading-6">
          Add a card to start converting your available credit limit into
          spendable cash.
        </p>
      </div>
      <Button
        className="w-full mt-6 text-base font-bold text-white bg-primary rounded-xl"
        size={"lg"}
      >
        + Add a Credit Card
      </Button>
    </div>
  );
};

export default AddCreditCard;
