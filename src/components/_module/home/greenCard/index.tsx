import React from "react";
import { MasterIcon } from "../../../ui/icons";

type Props = {
  title: string;
  type: string;
  name: string;
  cvv: string;
};

const GreenCard: React.FC<Props> = ({ title, type, name, cvv }) => {
  console.log("type", type);
  return (
    <div className="relative w-full bg-primary rounded-2xl pt-[15px] pl-6 pr-4 text-white h-[191px]">
      <div className="flex justify-between">
        <p className="text-lg font-bold">{title}</p>
        <MasterIcon />
      </div>
      <div className="absolute right-0 bottom-0 bg-[#FFFFFF]/20 rounded-b-2xl px-2 py-1 w-full h-[47px]">
        <div className="flex justify-between items-center pl-[23px] pr-[19px] h-full">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-bold">{cvv}</p>
        </div>
      </div>
    </div>
  );
};

export default GreenCard;
