import { useContext } from "react";
import HomeNavigation from "../../components/_module/home/homeNavigation";
import VerifiedHome from "../../components/pages/home/verifiedHome";
import { MainContext } from "../../context/mainContext";
import UnverifiedHome from "../../components/pages/home/unverifiedHome";

const HomeOverviewPage = () => {
  const { userData } = useContext(MainContext);
  return (
    <div className="max-w-[800px] h-full w-full mx-auto bg-white pb-28">
      {userData?.verified ? <VerifiedHome /> : <UnverifiedHome />}
      <HomeNavigation />
    </div>
  );
};

export default HomeOverviewPage;
