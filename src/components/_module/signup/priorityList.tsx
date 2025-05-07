import clsx from "clsx";
import React, { useState } from "react";
import { ArrowUpIconWithoutLine } from "../../ui/icons";

type Props = {
  priorityList: string[];
};

const PriorityList: React.FC<Props> = ({ priorityList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "border-primary border w-full rounded-[20px] p-5 text-primary ease-in-out opacity-80 transition-all duration-400",
        isOpen ? "h-fit" : "h-15"
      )}
    >
      <div
        className="flex items-center justify-between w-full"
        role="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className="text-sm">What's your top priority?</p>
        <ArrowUpIconWithoutLine
          className={
            isOpen
              ? "transition-all duration-400 rotate-180"
              : "transition-all duration-400 "
          }
        />
      </div>
      <div
        className={clsx(
          "transition-opacity duration-400 flex flex-col gap-3",
          isOpen ? "block mt-3" : "hidden"
        )}
      >
        {priorityList.map((item) => (
          <p key={item} className="font-medium text-16 text-primary">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PriorityList;
