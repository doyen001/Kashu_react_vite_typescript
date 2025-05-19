import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/button";
import {
  AppleIcon,
  GoogleIcon,
  ArrowRightIcon,
} from "../../components/ui/icons";
import FloatingInput from "../../components/ui/floatingInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../../components/ui/form";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const SignInMailPage = () => {
  const navigate = useNavigate();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    navigate("/home");
  };

  return (
    <div className="flex flex-col justify-between px-6 py-10 bg-white max-w-[800px] h-[100dvh]  w-full mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center w-full gap-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold text-primary">
              Welcome back
            </h1>
            <p className="text-sm text-primary">Sign in to your account</p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col w-full gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FloatingInput
                  label="Username"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  error={form.formState.errors.username}
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
          </div>

          {/* Forgot + Submit */}
          <div className="flex items-center justify-between w-full">
            <button className="text-sm text-primary">Forgot password?</button>
            <Button
              type="submit"
              size="icon"
              className="text-white rounded-xl bg-primary hover:bg-primary"
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </form>

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
