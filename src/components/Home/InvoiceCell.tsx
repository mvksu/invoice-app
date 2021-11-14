import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flag from "../Reusables/Flag";

const InvoiceCell: FC = () => {
  return (
    <Link to="/invoice/1">
      <div className="w-full px-6 py-4 md:py-8 my-5 bg-dark-300 rounded-2xl hover:ring-1 ring-blue-300 cursor-pointer">
        <div className="grid grid-cols-2 grid-rows-3 md:flex md:items-center md:justify-between">
          <h1 className="text-white font-bold pb-4 md:pb-0">
            <span className="text-gray">#</span>754633
          </h1>
          <h1 className="text-gray text-sm md:text-md col-span-3 md:col-start-2 md:col-span-2">
            Due 25 December 2011
          </h1>
          <h1 className="text-gray col-start-3 col-end-4 row-start-1 row-end-2">
            John Kowalski
          </h1>
          <h1 className="text-white font-bold text-md md:text-xl pt-1 md:p-0">
            $275 650
          </h1>
          <Flag />
          <button className="text-blue-300 hidden md:inline md:col-start-6">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCell;
