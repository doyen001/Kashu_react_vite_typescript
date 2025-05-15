import bgImage from "@/assets/Top.png";
import {
  TransferIcon,
  InfoIcon,
  TransferOutIcon,
  KashuLogo,
} from "@/components/ui/icons";
import { useNavigate } from "react-router-dom";


const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative inset-0 w-full text-white px-6 pt-6 pb-20 bg-cover bg-bottom bg-no-repeat min-h-[40vh]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center mb-4">
        <KashuLogo height={20} width={86} />
      </div>

      <div className="space-y-1 text-center">
        <h1 className="font-sans text-4xl font-bold">Welcome, Robert</h1>
        <div className="flex items-center justify-center">
          <p className="font-sans text-3xl font-bold">$0.</p>
          <p className="font-sans text-3xl text-white/70">00</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-sans text-sm text-white/70">Available balance</p>
          <InfoIcon className="w-6 h-6 ml-1" />
          {/* <img src={info} alt="Apple" className="w-6 h-6 ml-1" /> */}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center justify-center px-4 py-2 mt-4 text-sm font-semibold rounded-full bg-lime-200 text-emerald-900" onClick={() =>navigate("/deposit") }>
            Transfer in
            <TransferIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center justify-center px-4 py-2 mt-4 text-sm font-semibold bg-[#FFFFFF]/20 rounded-full text-lime-200" onClick={() =>navigate("/withdraw")}>
            Transfer out
            <TransferOutIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
