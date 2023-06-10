import logo from "../assets/logo3.png";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full py-2 bg-white flex items-center justify-between px-[150px]">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[70px] object-cover"
        />
      </div>

      <nav className="flex items-center gap-x-2">
        <ul className="flex items-center gap-x-4">
          <li>
            <a
              href="#"
              className="text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
            >
              Demo
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
            >
              Sponsor
            </a>
          </li>
          <li>
            <a href="https://github.com/Bsc-40-20">
              <IoLogoGithub className="text-3xl lg:text-3xl text-slate-500 hover:text-green-600 transition duration-200 ease-in-out cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/Ashraf.Chitambaa">
              <FaFacebookSquare className="text-3xl lg:text-3xl text-slate-500 hover:text-green-600 transition duration-200 ease-in-out cursor-pointer" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
