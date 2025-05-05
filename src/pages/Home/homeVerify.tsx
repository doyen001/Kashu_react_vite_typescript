import { PlusIcon } from "lucide-react";

import { Button } from "../../components/ui/button";
import { CardSVG, InfoIcon, KashuLogo } from "../../components/ui/icons";
import HomeNavigation from "../../components/_module/home/homeNavigation";
import HomeInvite from "../../components/_module/home/homeInvite";

const HomeVerifyPage = () => {
  return (
    <div className="min-h-screen bg-[#F7FDFB] flex flex-col items-center justify-start pb-24 h-[calc(100vh-80px)] ">
      {/* Top Header */}
      <div className="w-full bg-primary min-h-[300px] h-full text-white px-6 py-8 rounded-b-[2rem] relative text-center z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <KashuLogo />
        </div>

        <div className="py-9">
          <h1 className="text-xl font-semibold">Welcome, Robert</h1>
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
          <h2 className="mb-1 text-lg font-semibold text-primary">
            Unlock all features
          </h2>
          <p className="mb-4 text-sm text-primary w-[65%] mx-auto">
            Please verify your ID and unlock all app features
          </p>
          <button className="flex items-center justify-center w-full gap-2 font-medium text-primary">
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
          <Button className="w-full text-white bg-primary rounded-xl">
            + Add card
          </Button>
        </div>

        {/* Invite friends */}
        <HomeInvite code={"LP867J"} />
      </div>

      <HomeNavigation />
    </div>
  );
};

export default HomeVerifyPage;
