import { PlusIcon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  description: string;
  secondaryDescription: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<string | null>>;
  type: string;
};

const VerifyTypeCard: React.FC<Props> = ({
  title,
  description,
  secondaryDescription,
  setSelectedCard,
  type,
}) => {
  return (
    <div className="flex flex-col items-center w-full p-6 rounded-2xl bg-thirdGreen">
      <h2 className="text-2xl font-bold text-primary opacity-80">{title}</h2>
      <p className="text-sm font-medium text-primary opacity-80">
        {description}
      </p>
      <p className="text-sm font-medium text-primary opacity-80">
        {secondaryDescription}
      </p>
      <button
        className="flex items-center gap-2 mt-6"
        onClick={() => {
          setSelectedCard(type);
        }}
      >
        <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-green-200 rounded-full">
          <PlusIcon className="z-20 text-primary" />
        </div>
        <p className="text-lg font-medium text-primary">Select</p>
      </button>
    </div>
  );
};

export default VerifyTypeCard;
