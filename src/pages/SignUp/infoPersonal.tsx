import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SignupHeader from "../../components/pages/signup/signupHeader";
import FloatingInput from "../../components/ui/floatingInput";
import { useNavigate } from "react-router-dom";
import { FormField } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "../../components/ui/icons";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  birthDate: z.string().min(1, {
    message: "Birth date is required.",
  }),
  socialSecurityNumber: z.string().min(1, {
    message: "Social security number is required.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const InfoPersonal = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(MainContext);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      socialSecurityNumber: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setUserData((prev: any) => ({ ...prev, ...values }));
    navigate("/sign_up_address");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 bg-white text-primary h-[100dvh] ">
      <SignupHeader maxProgress={30} navigateTo="/sign_up_tel_code" />
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-bold">Tell us about your self</h1>
        <p className="text-sm font-medium text-primary opacity-80">
          We ask for your information
        </p>
        <p className="text-sm font-medium text-primary opacity-80">
          to verify your account and keep it secure.
        </p>
      </div>
      <form
        className="flex flex-col w-full max-w-sm gap-2 mt-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FloatingInput
              label="First name"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.firstName}
            />
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FloatingInput
              label="Last name"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.lastName}
            />
          )}
        />
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FloatingInput
              label="Date of birth ( MM / DD / YYYY )"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.birthDate}
            />
          )}
        />
        <FormField
          control={form.control}
          name="socialSecurityNumber"
          render={({ field }) => (
            <FloatingInput
              label="Social security number"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.socialSecurityNumber}
            />
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-[58px] h-[58px] py-2 text-base text-white bg-primary rounded-2xl mt-4 float-start"
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InfoPersonal;
