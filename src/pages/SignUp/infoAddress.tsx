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
  streetAddress: z.string().min(2, {
    message: "Street address must be at least 2 characters.",
  }),
  aptNumber: z.string(),
  city: z.string().min(1, {
    message: "City is required.",
  }),
  state: z.string().min(1, {
    message: "State is required.",
  }),
  zipCode: z.string().min(1, {
    message: "Zip code is required.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const InfoAddress = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(MainContext);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      streetAddress: userData?.streetAddress ?? "",
      aptNumber: userData?.aptNumber ?? "",
      city: userData?.city ?? "",
      state: userData?.state ?? "",
      zipCode: userData?.zipCode ?? "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setUserData((prev: any) => ({ ...prev, ...values }));
    navigate("/sign_up_check");
  };

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-white text-primary h-[100dvh] ">
      <SignupHeader maxProgress={40} navigateTo="/sign_up_personal" />
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-bold">Home Address</h1>
      </div>
      <form
        className="flex flex-col w-full max-w-sm gap-2 mt-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FloatingInput
              label="Street address"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.streetAddress}
            />
          )}
        />
        <FormField
          control={form.control}
          name="aptNumber"
          render={({ field }) => (
            <FloatingInput
              label="Apt/Suite"
              type="text"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FloatingInput
              label="City"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.city}
            />
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FloatingInput
              label="State"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.state}
            />
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FloatingInput
              label="Zip code"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={form.formState.errors.zipCode}
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

export default InfoAddress;
