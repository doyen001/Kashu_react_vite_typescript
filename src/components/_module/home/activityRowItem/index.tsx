import { KashuLogoIcon } from "../../../ui/icons";

const ActivityRowItem = () => {
  return (
    <div className="text-primary">
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-full bg-thirdGreen">
          <KashuLogoIcon />
        </div>
        <div className="text-sm font-medium">
          <p>Kashu Credit Conversion</p>
          <p className="opacity-40">April 22, 2025</p>
        </div>
        <p className="text-sm font-medium">$25,000.00</p>
      </div>
    </div>
  );
};

export default ActivityRowItem;
