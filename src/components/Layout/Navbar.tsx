import { FC } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.svg";
import avatar from "../../images/avatar.jpg";
import { FaMoon } from "react-icons/fa";

const Navbar: FC = () => {
  return (
    <nav className="bg-dark-300 dark:bg-dark-200 h-24 w-full md:w-24 md:min-h-screen md:sticky md:top-0 rounded-none md:rounded-t-3xl flex md:flex-col justify-between z-50 transition-all duration-300">
      <Link
        to="/"
        className="bg-blue-500 w-24 h-24 rounded-r-3xl flex items-center justify-center relative group overflow-hidden"
      >
        <span className="absolute rounded-tl-3xl rounded-br-3xl bottom-0 left-0 right-0 bg-blue-300 h-1/2 group-hover:h-0 transition-all duration-200"></span>
        <div className="z-50 w-10 h-10 group-hover:h-11 group-hover:w-11 transition-all duration-300">
          <img src={logo2} alt="" className="w-full h-full" />
        </div>
      </Link>
      <div className="flex flex-row md:flex-col">
        <div className="flex items-center justify-center w-24 h-24">
          <button className="text-white w-6 h-6 transform hover:scale-110">
            <FaMoon
              className="w-full h-full"
              onClick={() =>
                document
                  .getElementsByTagName("html")[0]
                  .classList.toggle("dark")
              }
            />
          </button>
        </div>
        <div className="flex items-center justify-center h-24 w-24 border-l md:border-t md:border-l-0 border-blue-300 border-opacity-40">
          <img src={avatar} alt="" className="rounded-full w-12 h-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
