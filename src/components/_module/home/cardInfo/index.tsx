const CardInfo = () => {
  return (
    <div className="w-full border border-gray-300 text-primary rounded-2xl">
      <div className="flex justify-between border-b border-b-gray-300">
        <p className="px-4 py-2 text-sm font-medium">Card Name</p>
        <p className="px-4 py-2 text-sm font-bold">Apple Card</p>
      </div>
      <div className="flex justify-between border-b border-b-gray-300">
        <p className="px-4 py-2 text-sm font-medium">Card Number</p>
        <p className="px-4 py-2 text-sm font-bold">Ending in 3456</p>
      </div>
      <div className="flex justify-between border-b border-b-gray-300">
        <p className="px-4 py-2 text-sm font-medium">Expiration</p>
        <p className="px-4 py-2 text-sm font-bold">08/27</p>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 text-sm font-bold underline">Edit</button>
        <button className="px-4 py-2 text-sm font-bold underline text-[#EF5350]">
          Remove Card
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
