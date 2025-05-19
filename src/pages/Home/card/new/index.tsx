import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Progress } from "../../../../components/ui/progress";
import FloatingInput from "../../../../components/ui/floatingInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../../../../components/ui/form";
import CardNumberInput from "../../../../components/ui/cardNumberInput";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "../../../../components/ui/icons";
import PhoneKeyboardBox from "../../../../components/ui/phoneKeyboardBox";
import VerifyCardLoadingPage from "../../../../components/pages/card/loading";
import CardSuccessPage from "../../../../components/pages/card/success";
import CardFailedPage from "../../../../components/pages/card/failed";

const formSchema = z.object({
  cardHolderName: z.string().min(2, {
    message: "Card holder name must be at least 2 characters.",
  }),
  cardNumber: z.string().min(12, {
    message: "Card number must be at least 12 characters.",
  }),
  expiration: z.string().min(4, {
    message: "Expiration must be at least 4 characters.",
  }),
  cvv: z.string().min(3, {
    message: "CVV must be at least 3 characters.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const NewCardPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<"create" | "loading" | "success" | "failed">(
    "create"
  );
  const insertedInputRef = useRef<{ [key: string]: string }>({
    cardHolderName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const selectedInputRef = useRef<string>("");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
  });

  const handleKeyPress = (digit: string) => {
    form.setValue(
      selectedInputRef.current as keyof FormSchema,
      (insertedInputRef.current?.[selectedInputRef.current] ?? "") + digit
    );
    insertedInputRef.current[selectedInputRef.current] =
      (insertedInputRef.current?.[selectedInputRef.current] ?? "") + digit;
  };

  const handleBackspace = () => {
    insertedInputRef.current[selectedInputRef.current] =
      insertedInputRef.current?.[selectedInputRef.current].slice(0, -1);
    form.setValue(
      selectedInputRef.current as keyof FormSchema,
      insertedInputRef.current[selectedInputRef.current]
    );
  };

  const handleReset = () => {
    form.reset({
      cardHolderName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    });
    insertedInputRef.current = {
      cardHolderName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    };
  };

  const onSubmit = (data: FormSchema) => {
    console.log("data", data);
    setStep("loading");
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 20);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-white text-primary h-[100dvh] justify-between">
      {step === "create" ? (
        <>
          <div className="relative flex w-full">
            <Progress value={progress} className="mx-auto max-w-16" />
            <XIcon
              className="absolute right-0 -top-2"
              role="button"
              onClick={() => navigate(-1)}
            />
          </div>
          <h1 className="mt-4 text-4xl font-bold text-primary">
            Add a new card
          </h1>
          <form
            className="w-full pt-6 space-y-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="cardHolderName"
              render={({ field }) => (
                <FloatingInput
                  label="Card holder name"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  onClick={() => {
                    selectedInputRef.current = "cardHolderName";
                  }}
                  error={form.formState.errors.cardHolderName}
                />
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <CardNumberInput
                  label="Card number"
                  value={field.value}
                  onChange={field.onChange}
                  error={form.formState.errors.cardNumber}
                  onClick={() => {
                    selectedInputRef.current = "cardNumber";
                  }}
                />
              )}
            />
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="expiration"
                render={({ field }) => (
                  <FloatingInput
                    label="Expiration"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    onClick={() => {
                      selectedInputRef.current = "expiration";
                    }}
                    error={form.formState.errors.expiration}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FloatingInput
                    label="CVV"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    onClick={() => {
                      selectedInputRef.current = "cvv";
                    }}
                    error={form.formState.errors.cvv}
                  />
                )}
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button className="w-fit aspect-square rounded-2xl" type="submit">
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
          <div className="flex-1"></div>
          <PhoneKeyboardBox
            handleKeyPress={handleKeyPress}
            handleBackspace={handleBackspace}
            handleReset={handleReset}
          />
        </>
      ) : step === "loading" ? (
        <VerifyCardLoadingPage />
      ) : step === "success" ? (
        <CardSuccessPage />
      ) : (
        <CardFailedPage message="Your card failed validation." />
      )}
    </div>
  );
};

export default NewCardPage;
