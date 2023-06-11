import fastImg from "../assets/fast.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 h-[350px] grid place-content-center">
      <div className="text-center flex items-center justify-center">
        <img
          src={fastImg}
          alt="fast"
          className="-ml-8 sm:ml-0 w-[80px] sm:w-[100px] h-[60px] sm:h-[80px] object-contain"
        />

        <span className="-ml-6 bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-400 text-[1.8rem] sm:text-6xl font-bold select-none">
          Fast and secure
        </span>
      </div>

      <div className="text-center my-3 px-3">
        <p className="text-slate-500">Let us send your email fast for free 💸 while we handle the hard stuff for you</p>
      </div>

      <div className="text-center mt-6 flex items-center justify-center px-4 gap-y-3 gap-x-4 sm:gap-x-6">
        <Link to={'docs'} className="py-3 px-5 bg-gradient-to-r from-green-800 to-green-400 text-white rounded-3xl w-[130px] lg:w-[150px] outline outnline-2 hover:outline-green-400 hover:from-transparent hover:text-green-400">
          Docs
        </Link>
        <Link to={'sponsor'} className="py-3 px-5 bg-gradient-to-r hover:from-green-800 hover:to-green-400 text-green-400 hover:text-white rounded-3xl w-[130px] lg:w-[150px] outline outnline-2 outline-green-400 hover:outline-transparent">
          Sponsor
        </Link>
      </div>
    </div>
  );
};

export default Home;
