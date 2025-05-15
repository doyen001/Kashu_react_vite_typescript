import { ChevronRight } from "lucide-react";
import { Button } from "../../../ui/button";
import { useNavigate } from "react-router-dom";

type Account = {
    image: string;
    name: string;
    last4: string;
};

type AccountsCardProps = {
    accounts: Account[];
};

const AccountsCard: React.FC<AccountsCardProps> = ({ accounts }) => {
    const navigate = useNavigate();
    return (
        <div className="p-4 bg-[#E8FFE8] shadow-md rounded-3xl">
            <h2 className="text-lg font-bold text-primary">
                Fast Withdrawal
            </h2>
            {accounts.map((account, index) => (
                <div
                    key={index}
                    className="flex bg-white rounded-3xl items-center justify-between px-4 py-3 mt-4 gap-2 cursor-pointer"
                    onClick={() => {
                        navigate("/withdraw/amount", {
                            state: {
                                account: account.name,
                                id: index,
                            },
                        });
                    }}
                >
                    <img
                        src={account.image}
                        alt={account.name + " logo"}
                        className="w-8 h-8"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="text-md font-bold text-primary">
                            {account.name}
                        </h2>
                        <p className="text-sm font-medium text-primary text-center mt-1">
                            Checking {account.last4}
                        </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-primary" />
                </div>
            ))}
            {/* <div className="flex bg-white rounded-3xl items-center justify-between px-4 py-3 mt-4 gap-2"> */}
                {/* <img src="/account1.png" alt="bank" className="w-8 h-8" />
                <div className="flex flex-col items-center">
                    <h2 className="text-md font-bold text-primary">
                        Wells Fargo - Nickname
                    </h2>
                    <p className="text-sm font-medium text-primary text-center mt-1">
                        Checking 8490
                    </p>
                </div> */}
                {/* <ChevronRight className="h-6 w-6 text-primary" />
            </div> */}
            <Button
                className="w-full mt-6 text-base font-bold text-white bg-primary rounded-xl"
                size={"lg"}
                onClick={() => {
                    navigate("/card/new");
                }}
            >
                + Add account
            </Button>
        </div>
    );
};

export default AccountsCard;
