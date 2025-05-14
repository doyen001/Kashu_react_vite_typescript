import AddCreditCard from "../../../components/_module/home/creditCard";
import { useState } from "react";
import CardView from "../../../components/pages/home/cardView";

const CardViewPage = () => {
  const [pageStep, setPageStep] = useState<"add" | "card">("add");
  return (
    <div className="h-full px-6">
      <p className="mt-3 text-2xl font-bold text-primary">My Cards</p>
      <div className="h-full mt-7">
        {pageStep === "add" ? (
          <AddCreditCard setPageStep={setPageStep} type="card" />
        ) : (
          <CardView />
        )}
      </div>
    </div>
  );
};

export default CardViewPage;
