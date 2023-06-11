import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white shadow py-5 px-2 text-slate-500 flex items-center justify-around">
      <small className="text-center">
        Copyright &copy; {new Date().getFullYear()} All right reserved @Vitemail
      </small>

      <div className="flex items-center gap-x-3">
        <a
          href="https://github.com/Bsc-40-20"
          className="hover:text-green-500 transition-all duration-200 ease"
        >
          <IoLogoGithub className="text-xl" />
        </a>
        <a
          href="https://web.facebook.com/Ashraf.Chitambaa"
          className="hover:text-green-500 transition-all duration-200 ease"
        >
          <FaTwitter className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
