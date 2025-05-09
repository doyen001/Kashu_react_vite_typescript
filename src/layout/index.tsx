import { ReactNode } from "react";
import HomeNavigation from "../components/_module/home/homeNavigation";
import { KashuLogo } from "../components/ui/icons";
type Props = {
  children: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[800px] h-screen w-full mx-auto bg-white pb-28">
      <div className="relative z-30 flex items-center justify-center py-4">
        <KashuLogo />
      </div>
      {children}
      <HomeNavigation />
    </div>
  );
};

export default HomeLayout;
