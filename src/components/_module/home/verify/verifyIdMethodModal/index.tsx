import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../../../ui/sheet";
import { ChevronRightIcon } from "lucide-react";

const typeList = [
  {
    title: "Driver's License",
    type: "driverLicense",
  },
  {
    title: "Identification Card",
    type: "idCard",
  },
  {
    title: "Passport",
    type: "passport",
  },
];

type Props = {
  isOpen?: boolean;
  onOpenChange: (open: boolean) => void;
};
const VerifyIdMethodModal: React.FC<Props> = ({
  isOpen = false,
  onOpenChange,
}) => {
  const navigate = useNavigate();
  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        onOpenChange(open);
      }}
    >
      <SheetContent
        side="bottom"
        className="rounded-t-[30px] p-6 border-none shadow-none bg-white max-w-[800px] mx-auto [&>button]:hidden"
      >
        <SheetHeader>
          <SheetTitle hidden></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center gap-6">
          {/* Handle drag indicator */}
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />

          {/* Title */}
          <p className="text-sm font-medium text-center text-primary opacity-80">
            Which photo ID would you like to use?
          </p>

          {/* Options */}
          <div className="flex flex-col w-full">
            {typeList.map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between py-4 font-bold text-[22px] text-left border-b text-primary"
                onClick={() => {
                  console.log("item", item.type);
                  navigate(`/verify_passport`);
                }}
              >
                {item.title}
                <ChevronRightIcon className="w-4 h-4 text-primary" />
              </button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default VerifyIdMethodModal;
