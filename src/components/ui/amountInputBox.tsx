type Props = {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
};

const AmountInputBox = ({ price, setPrice }: Props) => {
  return (
    <div className="flex items-center gap-2 px-14">
      <p className="text-4xl font-bold text-primary">$</p>
      <input
        className="w-full p-0 text-4xl font-bold border-none focus:outline-none focus:ring-0 focus:border-none text-primary"
        value={price}
        onChange={(e: any) => setPrice(e.target.value)}
        placeholder="25,000.00"
      />
    </div>
  );
};

export default AmountInputBox;
