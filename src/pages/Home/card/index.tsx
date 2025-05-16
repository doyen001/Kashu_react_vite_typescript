import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddCreditCard from "../../../components/_module/home/creditCard";
import CardView from "../../../components/pages/home/cardView";

const CardViewPage = () => {
  const navigate = useNavigate();
  const [pageStep, setPageStep] = useState<"add" | "card">("add");
  return (
    <div className="h-full">
      <div className="flex items-end justify-between px-6">
        <p className="mt-3 text-2xl font-bold text-primary">My Cards</p>
        {pageStep !== "add" && (
          <button
            className="rounded-[70px] border-primary/20 border-[1px] px-2 py-[2px] text-primary"
            onClick={() => navigate("/card/new")}
          >
            +Add Card
          </button>
        )}
      </div>
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
