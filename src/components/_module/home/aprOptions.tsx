import React from "react";
import { Button } from "../../ui/button";
import { CardSVG } from "../../ui/icons";

const AprOptions = () => {
  return (
    <div className="mt-6 px-7">
      <div className="bg-[#F1FAF3] rounded-2xl py-6 pt-10 px-7 flex flex-col items-center">
        <div className="mb-4">
          <CardSVG className="w-[100px] h-[100px]" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Get 0% APR Options</h3>
        <p className="mt-1 text-sm font-medium text-primary opacity-80 w-[85%] text-center">
          See promotional offers as low as 0% APR for 24 months.
        </p>
        <Button className="w-full mt-4 text-white bg-primary">
          See offers
        </Button>
      </div>
    </div>
  );
};

export default AprOptions;
