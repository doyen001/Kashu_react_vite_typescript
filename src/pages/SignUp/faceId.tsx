import FaceIDComponent from "../../components/pages/faceId/faceIdComponent";

const FaceId = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-[800px] mx-auto h-[calc(100vh-80px)] p-6 bg-white">
      <FaceIDComponent />
    </div>
  );
};

export default FaceId;
