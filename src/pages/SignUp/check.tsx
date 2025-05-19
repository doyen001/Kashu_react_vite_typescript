import { z } from "zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SignupHeader from "../../components/pages/signup/signupHeader";
import { FormField } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { MainContext } from "../../context/mainContext";
import FloatingEditInput from "../../components/ui/floatingEditInput";
import SuccessModel from "../../components/_module/signup/successModel";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  birthDate: z.string().min(2, {
    message: "Date of birth must be at least 2 characters.",
  }),
  ssn: z.string().min(1, {
    message: "SSN is required.",
  }),
  fullAddress: z.string().min(1, {
    message: "Residential address is required.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const SignUpCheck = () => {
  const { userData, setUserData } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      birthDate: "",
      ssn: "",
      fullAddress: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setUserData((prev: any) => ({ ...prev, ...values }));
    setIsOpen(true);
  };

  useEffect(() => {
    form.reset({
      fullName: `${userData?.firstName ?? ""} ${userData?.lastName ?? ""}`,
      birthDate: userData?.birthDate ?? "",
      ssn: userData?.socialSecurityNumber ?? "",
      fullAddress: `${userData?.streetAddress ?? ""}, ${
        userData?.city ?? ""
      }, ${userData?.state ?? ""} ${userData?.zipCode ?? ""}`,
    });
  }, [userData]);

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-white text-primary h-[100dvh] ">
      <SignupHeader maxProgress={60} navigateTo="/sign_up_address" />
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-bold">Almost there!</h1>
        <p className="text-sm font-medium text-primary opacity-80">
          Please take a moment to ensure all
        </p>
        <p className="text-sm font-medium text-primary opacity-80">
          of the information you provide is correct
        </p>
      </div>
      <form
        className="flex flex-col w-full h-full max-w-sm gap-2 mt-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FloatingEditInput
              label="Full name"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.fullName}
            />
          )}
        />
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FloatingEditInput
              label="Date of birth"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.birthDate}
            />
          )}
        />
        <FormField
          control={form.control}
          name="ssn"
          render={({ field }) => (
            <FloatingEditInput
              label="SSN"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.ssn}
            />
          )}
        />
        <FormField
          control={form.control}
          name="fullAddress"
          render={({ field }) => (
            <FloatingEditInput
              label="Residential address"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.fullAddress}
            />
          )}
        />
        <div className="flex items-end h-full">
          <Button
            type="submit"
            className="flex-1 w-full py-2 text-base text-white bg-primary rounded-2xl"
            variant="outline"
          >
            Continue
          </Button>
        </div>
      </form>
      <SuccessModel isOpen={isOpen} onOpenChange={() => {}} />
    </div>
  );
};

export default SignUpCheck;
