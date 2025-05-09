import { useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import { FaceIdIcon } from "../../components/ui/icons";
import { Progress } from "../../components/ui/progress";

const FaceIDPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-[800px] mx-auto h-[100dvh] p-6 bg-white">
      <div className="flex flex-col items-center w-full">
        <Progress value={100} className="h-1 mb-6 w-88" />

        {/* Title and subtitle */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="w-[60%] mb-2 text-xl font-semibold text-primary text-center ">
            Face ID for faster payment
          </h1>
          <p className="w-[60%] text-sm text-primary text-center">
            Enable Face ID to log in faster and more securely
          </p>
        </div>
      </div>

      {/* Face icon */}
      <div className="my-12">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-900">
          <FaceIdIcon />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center w-full gap-4">
        <Button
          className="w-full text-white bg-primary hover:bg-primary max-w-[312px]"
          onClick={() => navigate("/sign-pin")}
        >
          Enable face ID
        </Button>
        <button
          className="text-sm text-primary"
          onClick={() => navigate("/sign-mail")}
        >
          Log in with Email
        </button>
      </div>
    </div>
  );
};

export default FaceIDPage;
