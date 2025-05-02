import AprOptions from "../../components/_module/home/aprOptions";
import HomeActivity from "../../components/_module/home/homeActivity";
import HomeInvite from "../../components/_module/home/homeInvite";
import HomeNavigation from "../../components/_module/home/homeNavigation";
import HomeHeader from "../../components/pages/home/header";
import {
  VisaIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MasterIcon,
} from "../../components/ui/icons";
import PaymentCard from "../../components/ui/paymentCard";

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

const HomeOverviewPage = () => {
  return (
    <div className="w-full bg-white pb-28">
      {/* Header */}
      <HomeHeader />

      {/* My Cards */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-primary">My Cards</h2>
          <button className="text-sm font-medium text-primary opacity-80">
            + Add Card
          </button>
        </div>

        {/* Card Items */}
        <div className="space-y-3">
          <PaymentCard
            name="Apple Card"
            last4="Mastercard 8490"
            Icon={<MasterIcon />}
          />
          <PaymentCard
            name="Marriott Bonvoy"
            last4="VISA 6643"
            Icon={<VisaIcon />}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-primary">Recent activity</h2>
          <button className="text-sm font-medium text-primary opacity-80">
            See all
          </button>
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

      {/* Invite Friends */}
      <div className="px-6 mt-6">
        <HomeInvite code={"LP867J"} />
      </div>

      {/* APR Offer */}
      <AprOptions />
      <HomeNavigation />
    </div>
  );
};

export default HomeOverviewPage;
