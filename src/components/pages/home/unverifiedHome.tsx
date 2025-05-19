import { useNavigate } from "react-router-dom";

import HomeInvite from "../../_module/home/homeInvite";
import { CardSVG, InfoIcon, KashuLogo } from "../../ui/icons";
import { PlusIcon } from "lucide-react";
import { Button } from "../../ui/button";

const UnverifiedHome = () => {
  const navigate = useNavigate();
  return (
    <div className="inset-0 absolute top-0 bg-[#F7FDFB] flex flex-col items-center justify-start z-10">
      {/* Top Header */}
      <div className="w-full bg-primary min-h-[300px] h-full text-white px-6 py-8 rounded-b-[2rem] relative text-center z-10">
        <div className="flex items-center justify-center mb-4">
          <KashuLogo height={20} width={86} />
        </div>
        <div className="py-5">
          <h1 className="text-4xl font-bold">Welcome, Robert</h1>
          <p className="mt-1 text-3xl font-bold">$0.00</p>
          <div className="flex items-center justify-center gap-1 mt-1 text-sm text-white/80">
            Available balance
            <InfoIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Body Sections */}
      <div className="z-20 w-full max-w-sm px-4 -mt-20 space-y-4 text-center">
        {/* Unlock features card */}
        <div className="p-4 rounded-3xl bg-secondary">
          <h2 className="mb-1 text-2xl font-bold text-primary">
            Unlock all features
          </h2>
          <p className="mb-6 text-sm text-primary w-[65%] mx-auto">
            Please verify your ID and unlock all app features
          </p>
          <button
            className="flex items-center justify-center w-full gap-2 font-medium text-primary"
            onClick={() => navigate("/verify_start")}
          >
            <div className="bg-[#C3F5AE] p-3 rounded-full">
              <PlusIcon className="w-4 h-4" />
            </div>
            Verify Account
          </button>
        </div>

        {/* Link card */}
        <div className="p-4 bg-[#E8FFE8] shadow-md rounded-3xl">
          <div className="flex flex-col items-center mb-4">
            <CardSVG />
            <h2 className="text-lg font-semibold text-primary">
              Link a credit card
            </h2>
            <p className="text-sm text-primary w-[65%] text-center">
              Add a credit card and request funds to meet your goals
            </p>
          </div>
          <Button
            className="w-full text-white bg-primary rounded-xl"
            onClick={() => navigate("/card/new")}
          >
            + Add card
          </Button>
        </div>

        {/* Invite friends */}
        <HomeInvite code={"LP867J"} />
        <div className="pt-20"></div>
      </div>
    </div>
  );
};

export default UnverifiedHome;
