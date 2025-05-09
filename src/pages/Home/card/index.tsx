import AddCreditCard from "../../../components/_module/home/creditCard";
// import CardView from "../../../components/pages/home/cardView";

const CardViewPage = () => {
  return (
    <div className="h-full px-6">
      <p className="mt-3 text-2xl font-bold text-primary">My Cards</p>
      <div className="h-full mt-7">
        <AddCreditCard />
        {/* <CardView /> */}
      </div>
    </div>
  );
};

export default CardViewPage;
