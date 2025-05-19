import { ReactNode } from "react";
import HomeNavigation from "../components/_module/home/homeNavigation";
import { KashuLogo } from "../components/ui/icons";
import { useLocation } from "react-router-dom";
type Props = {
  children: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="max-w-[800px] h-screen w-full mx-auto bg-white pb-28">
      {pathname !== "/setting" && !pathname.includes("home") && (
        <div className="relative z-30 flex items-center justify-center py-4">
          <KashuLogo />
        </div>
      )}
      {children}
      <HomeNavigation />
    </div>
  );
};

export default HomeLayout;
