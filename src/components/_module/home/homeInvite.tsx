import { CopyIcon, GiftIcon } from "lucide-react";
import { Button } from "../../ui/button";

const HomeInvite = ({ code }: { code: string }) => {
  return (
    <div className="rounded-3xl bg-[#F1FAF3] p-4 space-y-2">
      <div className="flex items-center w-full gap-2">
        <div className="flex items-center justify-center w-32 h-20 rounded-3xl bg-lightGreen">
          <GiftIcon className="w-16 h-16 text-primary" />
        </div>
        <div className="w-full pl-4 text-left">
          <p className="text-sm font-semibold text-primary">Invite friends</p>
          <p className="text-xs text-muted-foreground text-primary opacity-40">
            Code <span className="font-medium ">{code}</span>
          </p>
          <CopyIcon className="w-4 h-4 ml-auto cursor-pointer text-muted-foreground" />
          <Button className="font-medium w-fit bg-secondary text-primary rounded-xl">
            Earn $200
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeInvite;
