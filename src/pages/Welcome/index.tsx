import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { KashuWhiteLogo } from "../../components/ui/icons";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const htmlTag = document.querySelector("html");
    if (htmlTag) {
      htmlTag.style.backgroundColor = "#0B5147";
    }

    return () => {
      if (htmlTag) {
        htmlTag.style.backgroundColor = "";
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-[800px] mx-auto h-[100dvh] p-6 bg-primary">
      <KashuWhiteLogo />
      <div className="space-y-4 text-center text-white">
        <div>
          <h1 className="text-4xl font-bold text-white">Turn Credit Into </h1>
          <h2 className="text-4xl font-bold text-white">Spendable Cash.</h2>
        </div>
        <div>
          <p>Convert your credit into spendable cash in</p>
          <p>minutes - direct to your wallet</p>
        </div>
      </div>
      {/* <div className="bg-fourthGreen rounded-full w-[250px] h-[250px] flex justify-center items-center">
        <p className="text-2xl font-bold text-primary">Image</p>
      </div> */}
      <div className="flex flex-col w-full gap-1">
        <Button
          className="w-full"
          variant="secondary"
          onClick={() => navigate("/welcome-message")}
        >
          Get Started
        </Button>
        <button
          className="w-full py-4 text-secondary"
          onClick={() => navigate("/face_id")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default WelcomePage;
