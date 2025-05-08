import { useEffect, useState } from "react";
import { Progress } from "../../../components/ui/progress";
import { XIcon } from "lucide-react";
import { InfoSvg } from "../../../components/ui/icons";
import VerifyTypeCard from "../../../components/_module/home/verify/verifyTypeCard";
import { Button } from "../../../components/ui/button";
import VerifyIdMethodModal from "../../../components/_module/home/verify/verifyIdMethodModal";

const cardList = [
  {
    type: "government_id",
    title: "Government ID",
    description: "Take a driver’s license,",
    secondaryDescription: "national identity card or passport photo",
  },
  {
    type: "selfie",
    title: "Selfie photo",
    description: "It’s required by law",
    secondaryDescription: "to verify your identity as a new user",
  },
];

const VerifyStart = () => {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(15), 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCard && selectedCard === "government_id") {
      setIsOpen(true);
      setSelectedCard(null);
    }
  }, [selectedCard]);

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 bg-white text-primary h-[calc(100vh-80px)] justify-between">
      <div className="relative flex w-full">
        <Progress value={progress} className="mx-auto max-w-16" />
        <XIcon className="absolute right-0 -top-2" />
      </div>
      <div className="flex items-center gap-2">
        <h1 className="mt-4 text-4xl font-bold text-primary opacity-80">
          Verify identity
        </h1>
        <div className="bg-[#F1FAF3] rounded-md flex justify-center items-center mt-2 w-[19px] h-[20px]">
          <InfoSvg />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {cardList.map((item, index) => (
          <VerifyTypeCard
            key={index}
            type={item.type}
            title={item.title}
            description={item.description}
            secondaryDescription={item.secondaryDescription}
            setSelectedCard={setSelectedCard}
          />
        ))}
      </div>
      <div className="flex-1"></div>
      <Button className="w-full mt-6 text-white " size="lg" disabled>
        Verify my identity
      </Button>
      <VerifyIdMethodModal
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      />
    </div>
  );
};

export default VerifyStart;
