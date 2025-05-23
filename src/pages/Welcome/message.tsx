import { useRef, useState } from "react";
import Slider from "react-slick";

import bgImage from "@/assets/Top.png";
// import bgImage from "@/assets/bgImage.png";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const WelcomeMessagePage = () => {
  const ref = useRef<Slider>(null);
  const navigate = useNavigate();
  const [currentSide, setCurrentSide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    arrowsClass: "slick-arrows bg-black",
    dotsClass: "slick-dots welcome-slick-dots",
    beforeChange: (current: number, _: number) => {
      setCurrentSide(current);
    },
  };

  return (
    <div className=" flex flex-col justify-between bg-white text-primary h-[100dvh] max-w-[800px] w-full mx-auto">
      <div
        className="relative w-full text-white px-6 pt-6 pb-20 bg-cover bg-bottom bg-no-repeat h-[370px]"
        style={{ backgroundImage: `url(${bgImage})` }}
        // className="flex items-center justify-center w-full h-full bg-center bg-cover "
      >
        <div className="bg-fourthGreen rounded-full w-[250px] h-[250px] flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl font-bold text-primary">Image</p>
        </div>
      </div>
      {currentSide !== 1 ? (
        <>
          <div className="px-5 w-[98%]">
            <Slider {...settings} ref={ref}>
              <div className="w-full">
                <div className="text-4xl font-bold text-center">
                  <h1>Charge Your Card. </h1>
                  <h1>Load Your Wallet.</h1>
                </div>
                <div className="mt-6 text-sm font-medium text-center opacity-80">
                  <p>Charge your credit card and instantly load that</p>
                  <p>amount (minus fees) into your Kashu Wallet.</p>
                </div>
              </div>
              <div className="w-full">
                <div className="text-4xl font-bold text-center">
                  <h1>Move Your Funds </h1>
                  <h1>With Ease.</h1>
                </div>
                <div className="mt-6 text-sm font-medium text-center opacity-80">
                  <p>Disburse funds from Kashu to your bank, debit</p>
                  <p>car, or friends. Total control - no surprises.</p>
                </div>
              </div>
              <div className="w-full"></div>
            </Slider>
          </div>
          <div className="flex justify-between px-5 mb-12">
            <button
              className="px-3 text-base font-bold text-primary opacity-40"
              onClick={() => ref.current?.slickNext()}
            >
              Skip
            </button>
            <button
              className="relative z-50 px-3 text-base font-bold text-primary"
              onClick={() => {
                ref.current?.slickNext();
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="px-5">
            <div className="w-full">
              <div className="text-4xl font-bold text-center">
                <h1>Ready to Try</h1>
                <h1>Kashu?</h1>
              </div>
              <div className="mt-6 text-sm font-medium text-center opacity-80">
                <p>Whether it's rent, bills, or an emergency-Kashu</p>
                <p>gives your credit card real-world power.</p>
              </div>
            </div>
          </div>
          <div className="px-6 mb-12">
            <button
              className="w-full py-4 text-base font-bold text-primary"
              onClick={() => setCurrentSide(0)}
            >
              Back
            </button>
            <Button
              onClick={() => {
                navigate("/sign-up");
              }}
              className="w-full"
              variant="secondary"
            >
              Create Account
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomeMessagePage;
