import { useNavigate } from "react-router-dom";

import SignupHeader from "../../components/pages/signup/signupHeader";
import PriorityList from "../../components/_module/signup/priorityList";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "../../components/ui/icons";

const priorityList = [
  "Business Investment",
  "Paying Bills",
  "Stock or Crypto Trading",
  "Betting / Gaming",
];

const SignUpQuestionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto h-[100dvh] p-6 bg-white gap-6">
      <SignupHeader maxProgress={100} navigateTo="" isBackButton={false} />
      <div className="mt-4 text-center">
        <h1 className="mb-2 text-2xl font-bold text-primary">
          How can we help?
        </h1>
        <p className="text-sm font-medium text-center opacity-80 text-primary">
          What is the main purpose for
        </p>
        <p className="text-sm font-medium text-center opacity-80 text-primary">
          using Kashu today?
        </p>
      </div>
      <PriorityList priorityList={priorityList} />
      <div className="flex justify-end w-full">
        <Button
          className="w-[58px] h-[58px] py-2 text-base text-white bg-primary rounded-2xl"
          onClick={() => navigate("/home")}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default SignUpQuestionPage;
