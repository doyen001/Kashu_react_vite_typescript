import React from "react";

type Props = {
  name: string;
  last4: string;
  Icon: React.ReactNode;
};

const OtherWayCard: React.FC<Props> = ({ name, last4, Icon }) => {
  return (
    <div className="flex items-center justify-between p-6 border border-primary rounded-full">
      <div className="flex items-center gap-3">
        {Icon}
        <div>
          <p className="text-sm font-bold text-primary">{name}</p>
          <p className="text-sm font-medium text-primary opacity-60">{last4}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherWayCard;
