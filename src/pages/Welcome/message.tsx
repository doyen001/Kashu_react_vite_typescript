import bgImage from "@/assets/bgImage.png";

const WelcomeMessagePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-primary h-[calc(100vh-80px)] max-w-[800px] mx-auto justify-between">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="max-h-[370px] h-full w-full bg-cover bg-center flex justify-center items-center"
      >
        <div className="bg-fourthGreen rounded-full w-[250px] h-[250px] flex justify-center items-center">
          <p className="text-2xl font-bold text-primary">Image</p>
        </div>
      </div>
      <div className="text-4xl font-bold text-center">
        <h1>Lorem ipsum </h1>
        <h1>lorem ipsumeritus</h1>
      </div>
      <div className="text-sm font-medium text-center opacity-80">
        <p>Lorem ipsum lorem ipsumeritus</p>
        <p>Lorem ipsum lorem ipsumeritus</p>
      </div>
      <div></div>
    </div>
  );
};

export default WelcomeMessagePage;
