import logo from "../assets/logo3.png";
import fastImg from "../assets/fast.png";
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

type direction = "downwards" | "upwards";

const NavBar = () => {
  const [lastScrollPos, setlastScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] =
    useState<direction>("downwards");
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  // checking the user scroll direction
  const detectScrollDirection = () => {
    var currentPos = window.pageYOffset;
    if (currentPos > lastScrollPos) setScrollDirection(() => "downwards");
    else setScrollDirection(() => "upwards");

    setlastScrollPos(currentPos);
  };

  // checking the device width
  const checkDeviceWidth = useCallback(() => {
    const isTrue = window.matchMedia("(max-width: 640px)").matches;

    if (isTrue) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  // effect for device width
  useEffect(() => {
    window.addEventListener("resize", checkDeviceWidth);

    return () => {
      window.removeEventListener("resize", checkDeviceWidth);
    };
  }, [isMobile]);

  // effect for scrolling
  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection);
    };
  }, [window.pageYOffset]);

  return (
    <div
      className={`fixed sm:sticky bottom-0 w-full py-2 bg-white flex items-center justify-between px-4 md:px-[70px] lg:px-[150px] ${
        scrollDirection === "upwards" ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center gap-x-12 justify-between sm:justify-start">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] sm:w-[100px] sm:h-[70px] object-contain sm:object-cover"
          />
        </div>
        <nav className="flex items-center gap-x-2">
          <ul className="flex items-center gap-x-4">
            <li>
              <a
                href="#"
                className="text-xs sm:text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs sm:text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs sm:text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs sm:text-xl text-slate-500 hover:text-green-600 transition-all duration-300 ease font-semibold select-none"
              >
                Sponsor
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* social icons */}
      <div className="flex items-center gap-x-5">
        <div className="hidden sm:block cursor-pointer text-slate-500 hover:text-green-500 transition duration-200 ease-in-out">
          <a
            href="https://github.com/Bsc-40-20"
            className="flex items-center gap-x-1"
          >
            <IoLogoGithub className="text-3xl lg:text-3xl" />
            <span className="hidden md:block">Github</span>
          </a>
        </div>

        <div className="hidden sm:block cursor-pointer text-slate-500 hover:text-green-500 transition duration-200 ease-in-out">
          <a
            href="https://web.facebook.com/Ashraf.Chitambaa"
            className="flex items-center gap-x-1"
          >
            <FaTwitter className="text-3xl lg:text-3xl" />
            <span className="hidden md:block">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
