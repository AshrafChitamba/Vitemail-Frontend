import fastImg from "../assets/fast.png";

const Home = () => {
  return (
    <div className="bg-gray-50 h-[500px] pt-5">
      <div className="text-center flex items-center justify-center">
        <img src={fastImg} alt="fast" className="w-[100px] h-[80px] object-contain" />
        <span className="-ml-6 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-400 text-6xl font-bold select-none">
          Fast and secure
        </span>
      </div>
    </div>
  );
};

export default Home;
