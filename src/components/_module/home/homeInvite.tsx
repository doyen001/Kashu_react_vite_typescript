import { CopyIcon, GiftIcon } from "lucide-react";
import { Button } from "../../ui/button";

const HomeInvite = ({ code }: { code: string }) => {
  return (
    <div className="rounded-[40px] bg-[#F1FAF3] p-4 space-y-2">
      <div className="flex items-center w-full gap-2">
        <div className="flex items-center justify-center w-32 h-20 rounded-3xl bg-lightGreen">
          <GiftIcon className="w-16 h-16 text-primary" />
        </div>
        <div className="w-full pl-4 text-left">
          <p className="text-lg font-medium text-primary">Invite friends</p>
          <p className="text-sm font-medium text-muted-foreground text-primary opacity-40">
            Code <span className="font-medium ">{code}</span>
          </p>
          <CopyIcon className="w-6 h-6 ml-auto cursor-pointer text-primary text-muted-foreground" />
          <Button
            className="font-medium max-h-9 min-h-9 w-fit rounded-xl"
            variant={"secondary"}
          >
            Earn $200
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeInvite;
