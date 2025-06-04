import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { AppleIcon, GoogleIcon } from "../../components/ui/icons";
import FloatingInput from "../../components/ui/floatingInput";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../../components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../api/auth/functions";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const SignUpPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error: unknown) => {
      console.error("Signup failed:", error);
      // TODO: Show Toast or error message to the user
    },
  });

  const onSubmit = (values: FormSchema) => {
    const data = {
      "email": values.email,
      "password": values.password,
      "location_id": 279685,
      "global_on_id": "12",
      "send_2fa": true,
      "user_id": 2
    };
    mutate(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(15), 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between px-6 py-8 bg-white h-[100dvh]">
      <div className="flex flex-col items-center justify-center w-full pt-2">
        <div className="w-full mb-2 max-w-16">
          <Progress value={progress} />
        </div>
        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold text-primary">
          Getting Started
        </h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-sm space-y-6">
        <form
          className="w-full max-w-sm space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FloatingInput
                label="Email address"
                type="text"
                value={field.value}
                onChange={field.onChange}
                error={form.formState.errors.email}
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FloatingInput
                label="Password"
                type="password"
                value={field.value}
                onChange={field.onChange}
                error={form.formState.errors.password}
              />
            )}
          />

          <Button
            type="submit"
            className="w-full py-2 text-base text-white bg-primary rounded-xl hover:bg-primary"
            disabled={isPending}
          >
            {isPending
              ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              : "Submit"}
          </Button>
        </form>

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
          <p className="mt-4 text-sm font-medium text-center text-primary w-full max-w-[220px]">
            <span className="opacity-40">
              By creating an account you agree to our
            </span>{" "}
            <span className="font-medium opacity-100 text-primary">
              Terms and Conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
