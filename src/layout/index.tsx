import { ReactNode } from "react";
import HomeNavigation from "../components/_module/home/homeNavigation";
type Props = {
  children: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[800px] h-full w-full mx-auto bg-white pb-28">
      {children}
      <HomeNavigation />
    </div>
  );
};

export default HomeLayout;
