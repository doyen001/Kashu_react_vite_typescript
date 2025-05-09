import { PlusIcon } from "lucide-react";
import { HomeIcon, MenuIcon, UserIcon, WalletIcon } from "../../ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
const HomeNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[800px] bg-white shadow-md h-14">
      <div className="flex items-center justify-around px-4 py-2">
        <button
          className="flex flex-col items-center text-emerald-700"
          onClick={() => {
            navigate("/home");
          }}
        >
          <HomeIcon fill={pathname === "/home" ? "#0B5147" : "#CFE8E1"} />
        </button>
        <button
          className="flex flex-col items-center text-emerald-700"
          onClick={() => {
            navigate("/card");
          }}
        >
          <WalletIcon fill={pathname === "/card" ? "#0B5147" : "#CFE8E1"} />
        </button>
        <button className="flex items-center justify-center w-20 h-20 -mt-10 text-white border-8 border-gray-100 rounded-full shadow-lg bg-emerald-900">
          {/* <img src={plus} alt="Apple" className="w-6 h-6" /> */}
          <PlusIcon />
        </button>

        <button
          className="flex flex-col items-center text-emerald-700"
          onClick={() => {
            navigate("/activity");
          }}
        >
          <MenuIcon fill={pathname === "/activity" ? "#0B5147" : "#CFE8E1"} />
        </button>
        <button
          className="flex flex-col items-center text-emerald-700"
          onClick={() => {
            navigate("/setting");
          }}
        >
          <UserIcon fill={pathname === "/setting" ? "#0B5147" : "#CFE8E1"} />
        </button>
      </div>
    </div>
  );
};

export default HomeNavigation;
