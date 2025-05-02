import { PlusIcon } from "lucide-react";
import { HomeIcon, MenuIcon, UserIcon, WalletIcon } from "../../ui/icons";

const HomeNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-sm mx-auto">
      <div className="fixed bottom-0 left-0 z-10 w-full bg-white shadow-md h-14">
        <div className="flex items-center justify-around px-4 py-2">
          <button className="flex flex-col items-center text-emerald-700">
            <HomeIcon />
          </button>
          <button className="flex flex-col items-center text-emerald-700">
            <WalletIcon />
          </button>
          {/* <div className="border-4 border-black-900">
          <button className="flex items-center justify-center w-16 h-16 -mt-8 text-white rounded-full shadow-lg bg-emerald-900">
            <PlusCircle className="w-8 h-8" />
          </button>
        </div> */}
          <button className="flex items-center justify-center w-20 h-20 -mt-10 text-white border-8 border-gray-100 rounded-full shadow-lg bg-emerald-900">
            {/* <img src={plus} alt="Apple" className="w-6 h-6" /> */}
            <PlusIcon />
          </button>

          <button className="flex flex-col items-center text-emerald-700">
            <MenuIcon />
          </button>
          <button className="flex flex-col items-center text-emerald-700">
            <UserIcon />
          </button>
        </div>
      </div>
      {/* <div className="relative flex items-center justify-around h-20 px-6 bg-white shadow-t rounded-t-3xl">
        <div className="absolute top-[-28px] left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-primary">
            <PlusIcon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="z-0 flex items-center justify-between w-full px-4">
          <div className="bg-[#E7FBF2] rounded-xl p-2">
            <HomeIcon className="w-6 h-6 text-primary" />
          </div>

          <CreditCardIcon className="w-6 h-6 text-muted-foreground" />

          <div className="w-6" />

          <MenuIcon className="w-6 h-6 text-muted-foreground" />

          <UserIcon className="w-6 h-6 text-muted-foreground" />
        </div>
      </div> */}
    </nav>
  );
};

export default HomeNavigation;
