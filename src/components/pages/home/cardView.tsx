import Slider from "react-slick";
import GreenCard from "../../_module/home/greenCard";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardView = () => {
  return (
    <div className="h-full">
      <Slider {...settings}>
        <GreenCard title="Apple Card" name="Robert Johnson" cvv="*3456" />
        <GreenCard title="Apple Card" name="Robert Johnson" cvv="*3456" />
        <GreenCard title="Apple Card" name="Robert Johnson" cvv="*3456" />
      </Slider>
    </div>
  );
};

export default CardView;
