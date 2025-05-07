import { BackspaceIcon } from "../../ui/icons";

type Props = {
  pin: string;
  setPin: React.Dispatch<React.SetStateAction<string>>;
};

const PinKeyboard: React.FC<Props> = ({ pin, setPin }) => {
  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleReset = () => {
    setPin("");
  };
  return (
    <>
      <div className="flex gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i < pin.length ? "bg-primary" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center w-full max-w-xs mt-6">
        <div className="grid flex-1 w-full grid-cols-3 gap-0">
          {[..."123456789000"].map((num, i) => {
            if (i === 9) return <div key="empty" />;
            if (i === 11) {
              return (
                <button
                  key="backspace"
                  onClick={handleBackspace}
                  className="flex items-center justify-center w-full text-lg font-semibold aspect-video"
                >
                  <BackspaceIcon className="w-6 h-6" />
                </button>
              );
            }
            return (
              <div key={num} className="col-span-1">
                <button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                  className="flex items-center justify-center w-full text-lg font-semibold aspect-video"
                >
                  {num}
                </button>
              </div>
            );
          })}
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="mt-4 text-sm font-medium text-primary"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default PinKeyboard;
