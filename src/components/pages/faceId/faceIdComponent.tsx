import { useNavigate } from "react-router-dom";
import { FaceIdIcon } from "../../ui/icons";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { Progress } from "../../ui/progress";

const FaceIDComponent = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Progress value={progress} className="mb-6 w-88" />

        {/* Title and subtitle */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="w-[60%] mb-2 text-2xl font-bold text-primary text-center ">
            Face ID for faster payment
          </h1>
          <p className="w-[60%] text-sm font-medium opacity-80 text-primary text-center">
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
          onClick={() => navigate("/sign_up_pin")}
        >
          Enable face ID
        </Button>
        <button
          className="font-bold text-16 text-primary"
          onClick={() => navigate("/sign_up_pin")}
        >
          Skip, I'll do this later
        </button>
      </div>
    </>
  );
};

export default FaceIDComponent;
