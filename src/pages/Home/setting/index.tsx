import bgImage from "@/assets/settingHeaderImage.png";
import { KashuLogo } from "../../../components/ui/icons";
import {
  UserIcon,
  ShieldIcon,
  PlusIcon,
  HelpCircleIcon,
  LogOutIcon,
  ChevronRightIcon,
} from "lucide-react";
import HomeInvite from "../../../components/_module/home/homeInvite";

const menuItems = [
  { label: "Personal Info", icon: <UserIcon className="w-5 h-5" /> },
  { label: "Security", icon: <ShieldIcon className="w-5 h-5" /> },
  { label: "Linked Accounts", icon: <PlusIcon className="w-5 h-5" /> },
  { label: "Help", icon: <HelpCircleIcon className="w-5 h-5" /> },
  { label: "Logout", icon: <LogOutIcon className="w-5 h-5" /> },
];

const SettingPage = () => {
  return (
    <div>
      <div
        className="relative inset-0 w-full px-6 pt-6 pb-10 text-white bg-bottom bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex items-center justify-center ">
          <KashuLogo height={20} width={86} />
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="rounded-full bg-secondary w-[90px] h-[90px] flex items-center justify-center">
            <p className="text-4xl font-bold text-primary">RJ</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <p className="text-2xl font-bold">Robert Wilson</p>
        </div>
      </div>
      <div className="w-full max-w-md p-4 mx-auto">
        {menuItems.map((item, index) => (
          <div key={item.label}>
            <button className="flex items-center justify-between w-full pb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-500">
                  {item.icon}
                </div>
                <span className="text-base font-bold text-primary">
                  {item.label}
                </span>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            </button>

            {index < menuItems.length - 1 && (
              <div className="border-b border-muted" />
            )}
          </div>
        ))}
      </div>
      <div className="px-6">
        <HomeInvite code={"LP867J"} />
      </div>
      <div className="pt-24"></div>
    </div>
  );
};

export default SettingPage;
