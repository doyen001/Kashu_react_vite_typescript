import { useContext } from "react";
import VerifiedHome from "../../components/pages/home/verifiedHome";
import { MainContext } from "../../context/mainContext";
import UnverifiedHome from "../../components/pages/home/unverifiedHome";

const HomeOverviewPage = () => {
  const { userData } = useContext(MainContext);
  return <>{userData?.verified ? <VerifiedHome /> : <UnverifiedHome />}</>;
};

export default HomeOverviewPage;
