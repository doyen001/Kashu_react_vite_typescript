import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppleIcon, GoogleIcon } from "../../components/ui/icons";
import FloatingInput from "../../components/ui/floatingInput";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(15), 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-8 bg-white">
      <div className="flex flex-col items-center justify-center w-full pt-10">
        <div className="w-full mb-2 max-w-16">
          <Progress value={progress} />
        </div>
        {/* Title */}
        <h1 className="mb-6 text-2xl font-semibold text-primary">
          Getting Started
        </h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-sm space-y-6">
        <FloatingInput
          label="Email address"
          value={email}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setEmail(e.target.value);
          }}
        />
        <FloatingInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="w-full py-2 text-base text-white bg-primary rounded-xl hover:bg-primary"
          onClick={() => navigate("/verify-code")}
        >
          Submit
        </Button>

        {/* Sign In Link */}
        <p className="text-sm text-center text-primary">
          Already have an account?{" "}
          <span
            className="font-semibold cursor-pointer"
            role="button"
            onClick={() => navigate("/")}
          >
            Sign In
          </span>
        </p>
      </div>
      <div className="w-full max-w-sm space-y-6">
        {/* Social login */}
        <div className="text-sm font-medium text-center text-primary">
          Or continue with:
        </div>
        <div className="flex justify-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 border border-primary rounded-xl">
            <AppleIcon />
          </button>
          <button className="flex items-center justify-center w-12 h-12 border border-primary rounded-xl">
            <GoogleIcon />
          </button>
        </div>

        {/* Terms */}
        <div className="flex justify-center w-full">
          <p className="mt-4 text-xs text-center text-[#0F7163] w-full max-w-[200px]">
            By creating an account you agree to our{" "}
            <span className="font-semibold text-primary">
              Terms and Conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
