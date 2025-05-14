import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  last4: string;
  Icon: React.ReactNode;
  type?: "deposit" | "card";
};

const PaymentCard: React.FC<Props> = ({ name, last4, Icon, type = "card" }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-3xl"
      role="button"
      onClick={() => {
        if (type === "deposit") {
          navigate("/deposit/amount");
        }
      }}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <div className="flex items-center gap-3">
          {Icon}
          <div>
            <p className="text-sm font-bold text-primary">{name}</p>
            <p className="text-sm font-medium text-primary opacity-40">
              {last4}
            </p>
          </div>
        </div>
        {type === "deposit" && (
          <ChevronRight className="w-5 h-5 text-primary" />
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
