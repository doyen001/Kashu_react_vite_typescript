import React from "react";

type Props = {
  name: string;
  amount: string;
  result: string;
  date: string;
  icon: React.ReactNode;
};

const HomeActivity: React.FC<Props> = ({
  name,
  amount,
  result,
  date,
  icon,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-bold text-primary">{name}</p>
          <p className="text-sm font-medium text-primary opacity-40">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-primary">{amount}</p>
        <p className="text-sm font-medium text-primary opacity-40">{result}</p>
      </div>
    </div>
  );
};

export default HomeActivity;
