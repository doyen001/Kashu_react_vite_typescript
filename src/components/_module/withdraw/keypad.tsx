import { Delete } from "lucide-react";

type KeypadProps = {
    onPress: (digit: string) => void;
    onBackspace: () => void;
    onReset: () => void;
};

const Keypad: React.FC<KeypadProps> = ({ onPress, onBackspace, onReset }) => {
    const keys = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9",
    ];

    return (
        <div className="w-full max-w-xs mx-auto text-center mt-8">
            <div className="grid grid-cols-3 gap-4 text-primary text-2xl font-medium">
                {keys.map((key, idx) => (
                    <button
                        key={idx}
                        className="py-2 rounded hover:bg-gray-100 transition"
                        onClick={() => onPress(key)}
                    >
                        {key}
                    </button>
                ))}
                {/* <space> 0 Delete */}
                <div></div>
                <button
                    className="py-2 rounded hover:bg-gray-100 transition"
                    onClick={() => onPress("0")}
                >
                    0
                </button>
                <button
                    className="py-2 rounded hover:bg-gray-100 transition flex items-center justify-center"
                    onClick={onBackspace}
                >
                    <Delete className="w-6 h-6 text-primary" />
                </button>
            </div>
            <div className="my-2">
                <button
                    className="w-full py-2 font-bold text-primary rounded hover:bg-gray-100 transition"
                    onClick={onReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Keypad;
