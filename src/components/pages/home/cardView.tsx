import Slider from "react-slick";
import GreenCard from "../../_module/home/greenCard";
import { Button } from "../../ui/button";
import { ArrowDownIcon } from "../../ui/icons";
import ActivityRowItem from "../../_module/home/activityRowItem";
import CardInfo from "../../_module/home/cardInfo";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cardList = [
  {
    title: "Apple Card",
    name: "Robert Johnson",
    cvv: "*3456",
    type: "master",
  },
  {
    title: "Marriott Bonvoy",
    name: "Robert Johnson",
    cvv: "*1234",
    type: "visa",
  },
  {
    title: "Marriott Bonvoy",
    name: "Robert Johnson",
    cvv: "*1234",
    type: "visa",
  },
];

const CardView = () => {
  return (
    <div className="h-full">
      <Slider {...settings}>
        {cardList.map((item, index) => (
          <div className="w-full px-2" key={index}>
            <GreenCard
              title={item.title}
              name={item.name}
              cvv={item.cvv}
              type={item.type}
            />
          </div>
        ))}
      </Slider>
      <CardInfo />
      <div className="px-[6px]">
        <Button className="w-full bg-secondary text-primary focus:bg-secondary hover:bg-secondary">
          <p className="text-base font-bold">Charge this card</p>
          <ArrowDownIcon className="w-4 h-4 -rotate-90" />
        </Button>
      </div>
      <div>
        <h2 className="text-lg font-medium text-primary">Recent activity</h2>
        <ActivityRowItem />
      </div>
    </div>
  );
};

export default CardView;
