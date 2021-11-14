import { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const InvoiceButton: FC = () => {
  return (
    <Link to="/addform" className="bg-blue-500 rounded-3xl text-white font-bold flex flex-row items-center transform hover:scale-105 hover:bg-blue hover:bg-opacity-80">
      <span className="rounded-full m-1 p-1 md:m-2 md:p-2 bg-white border border-blue-600">
        <FaPlus className="text-blue-500 " />
      </span>
      <span className="p-1 mr-2">
        New <span className="hidden md:inline">Invoice</span>
      </span>
    </Link>
  );
};

export default InvoiceButton;
