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
  slidesToShow: 1.05,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
  arrows: false,
  dotsClass: "slick-dots welcome-slick-dots",
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
      <div className="max-w-md pl-6 mx-auto">
        <div>
          <Slider {...settings}>
            {cardList.map((item, index) => (
              <div className="w-full pl-2 " key={index}>
                <GreenCard
                  title={item.title}
                  name={item.name}
                  cvv={item.cvv}
                  type={item.type}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="px-6 py-7">
        <CardInfo />
      </div>
      <div className="px-6 py-7">
        <Button className="w-full bg-secondary text-primary focus:bg-secondary hover:bg-secondary">
          <p className="text-base font-bold">Charge this card</p>
          <ArrowDownIcon className="w-4 h-4 -rotate-90" />
        </Button>
      </div>
      <div className="px-6">
        <h2 className="mb-6 text-lg font-medium text-primary">
          Recent activity
        </h2>
        <ActivityRowItem />
      </div>
      <div className="pt-20"></div>
    </div>
  );
};

export default CardView;
