import { useState } from "react";

import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AppleIcon,
  GoogleIcon,
  ArrowRightIcon,
} from "../../components/ui/icons";
import FloatingInput from "../../components/ui/floatingInput";

const SignInMailPage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col justify-between min-h-screen px-6 py-10 bg-white">
      <div className="flex flex-col items-center w-full gap-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-primary">Welcome back</h1>
          <p className="text-sm text-primary">Sign in to your account</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col w-full gap-4">
          <FloatingInput
            label="Username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Forgot + Submit */}
        <div className="flex items-center justify-between w-full">
          <button className="text-sm text-primary">Forgot password?</button>
          <Button
            size="icon"
            className="text-white rounded-xl bg-primary hover:bg-primary"
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/* Social Sign-in */}
      <div className="flex flex-col items-center gap-6 mt-10">
        <p className="text-sm text-primary">Or continue with:</p>
        <div className="flex gap-4">
          <button className="p-3 border border-gray-200 rounded-xl">
            <AppleIcon className="w-5 h-5 text-primary" />
          </button>
          <button className="p-3 border border-gray-200 rounded-xl">
            <GoogleIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Support */}
      <div className="mt-6 text-sm text-center">
        <p className="text-primary">
          Having issues?{" "}
          <button className="font-semibold underline">Contact Support</button>
        </p>
      </div>
    </div>
  );
};

export default SignInMailPage;
