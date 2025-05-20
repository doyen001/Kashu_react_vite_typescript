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
      <div className="flex flex-col items-center mb-4">
        <CardSVG />
        <h2 className="text-base font-bold text-primary">Add a credit card</h2>
        <p className="text-sm font-medium text-primary w-[65%] text-center mt-1 leading-6">
          Add a card to start converting your available credit limit into
          spendable cash.
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          className="w-full mt-6 text-base font-bold text-white bg-primary rounded-xl max-w-[256px]"
          size={"lg"}
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
