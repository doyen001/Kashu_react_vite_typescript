import { useEffect, useState } from "react";
import { Progress } from "../../ui/progress";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  maxProgress: number;
  navigateTo: string;
  isBackButton?: boolean;
};

const SignupHeader: React.FC<Props> = ({
  maxProgress,
  navigateTo,
  isBackButton = true,
}) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(maxProgress), 20);
    return () => clearTimeout(timer);
  }, [maxProgress]);

  return (
    <div className="relative flex justify-center w-full">
      <Progress value={progress} className="max-w-16" />
      {isBackButton && (
        <div
          className="absolute left-0 w-full max-w-sm -top-2"
          role="button"
          onClick={() => navigate(navigateTo)}
        >
          <ArrowLeftIcon className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default SignupHeader;
