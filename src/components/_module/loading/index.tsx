import { LogoIcon } from "../../ui/icons";

const LoadingScreen = () => {
  return (
    <div className="max-w-[800px] w-screen h-screen bg-primary flex items-center justify-center">
      <div className="relative">
        <div className="p-10 bg-white rounded-full w-[160px] h-[160px] z-20 relative">
          <LogoIcon />
        </div>

        <div className="p-12 bg-[#0FD790] rounded-full w-[240px] h-[240px] absolute animate-pulseCustom -top-10 -left-10 z-10"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
