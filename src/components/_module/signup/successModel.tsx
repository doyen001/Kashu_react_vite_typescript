import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import successImage from "@/assets/success.png";

type Props = {
  isOpen?: boolean;
  onOpenChange: (open: boolean) => void;
};
const SuccessModel: React.FC<Props> = ({ isOpen = false, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] w-[calc(100%-48px)] rounded-[40px] block">
        <DialogHeader>
          <DialogTitle className="pt-[70px] font-bold text-4xl text-primary">
            <p>Great job!</p>
            <p>Your account is now set up.</p>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-primary opacity-80">
            Lorem ipsum
          </p>
          <p className="text-sm font-medium text-primary opacity-80">
            lorem ipsum ipsum loram lorem
          </p>
        </div>
        <img src={successImage} alt="success" />
        <DialogFooter>
          <Button type="submit" className="text-white">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModel;
