import { Button } from "../../../ui/button";
import { CardSVG } from "../../../ui/icons";
import { useNavigate } from "react-router-dom";
type Props = {
  type?: "card" | "deposit";
  setPageStep:
    | React.Dispatch<React.SetStateAction<"add" | "card">>
    | React.Dispatch<React.SetStateAction<"add" | "select">>;
};

const AddCreditCard: React.FC<Props> = ({ type = "card", setPageStep }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 px-6 shadow-md bg-thirdGreen rounded-3xl">
      <div className="flex flex-col items-center mb-4 space-y-6">
        <CardSVG />
        <div className="flex flex-col items-center w-full">
          <h2 className="text-2xl font-bold text-primary">Add a credit card</h2>
          <p className="mt-1 text-sm font-medium leading-6 text-center text-primary">
            Add a card to start converting
          </p>
          <p className="text-sm font-medium leading-6 text-center text-primary">
            your available credit limit into
          </p>
          <p className="text-sm font-medium leading-6 text-center text-primary">
            spendable cash.
          </p>
        </div>
        <Button
          className="w-full mt-6 text-base font-bold text-white bg-primary rounded-xl max-w-[256px]"
          onClick={() => {
            if (type === "card") {
              navigate("/card/new");
            } else {
              setPageStep("select" as any);
            }
          }}
        >
          + Add a Credit Card
        </Button>
      </div>
    </div>
  );
};

export default AddCreditCard;
