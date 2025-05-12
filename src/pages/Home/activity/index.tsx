import { useState } from "react";

import SearchBox from "../../../components/_module/searchBox";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/ui/icons";
import HomeActivity from "../../../components/_module/home/homeActivity";
import ActivityFilterBox from "../../../components/_module/activityFilterBox";

const activityList = [
  {
    name: "Deposit",
    amount: "+$22,500",
    result: "deposited",
    date: "April 14, 2025",
    icon: <ArrowUpIcon className="text-primary" />,
  },
  {
    name: "Withdrawal",
    amount: "-$10,000",
    result: "taken out",
    date: "April 16, 2025",
    icon: <ArrowDownIcon className="text-primary" />,
  },
  {
    name: "Sent via Wire Transfer",
    amount: "-$1,000",
    result: "sent",
    date: "April 16, 2025",
    icon: <ArrowUpIcon className="rotate-90 text-primary" />,
  },
];

const ActivityPage = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="h-[100dvh] px-5 w-full space-y-5">
      <h1 className="text-2xl font-bold text-primary">Transactions</h1>
      <div className="flex items-center w-full gap-2">
        <div className="flex-1">
          <SearchBox />
        </div>
        <ActivityFilterBox filter={filter} setFilter={setFilter} />
      </div>
      <div className="space-y-4">
        {activityList.map((item, index) => (
          <HomeActivity
            key={index}
            name={item.name}
            amount={item.amount}
            result={item.result}
            date={item.date}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
