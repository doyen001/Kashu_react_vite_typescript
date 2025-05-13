import { LogoIcon } from "../../ui/icons";

const VerifyCardLoadingPage = () => {
  return (
    <div className="flex flex-col items-center px-10 space-y-5 text-center pt-14">
      <div>
        <h1 className="text-4xl font-bold text-primary">Verifying your</h1>
        <h1 className="text-4xl font-bold text-primary">card details...</h1>
      </div>
      <div>
        <p className="text-sm font-medium text-primary">
          Please wait while we protect your
        </p>
        <p>account from fraud.</p>
      </div>
      <div className="pt-10">
        <div className="relative">
          <div className="p-10 bg-thirdGreen rounded-full w-[150px] h-[150px] z-20 relative">
            <LogoIcon />
          </div>
          <div className="p-12 bg-[#0FD790] rounded-full w-[180px] h-[180px] absolute animate-pulseCustom -top-[16px] -left-[14px] z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCardLoadingPage;
