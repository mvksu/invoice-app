import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";

const InvoiceFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="relative">
      <button
        className="filter text-white flex items-center relative"
        onClick={() => setShowFilter(!showFilter)}
      >
        <h3 className="font-medium mr-2 text-md">
          Filter <span className="hidden md:inline">by status</span>
        </h3>
        {showFilter ? (
          <FaAngleUp className="text-blue-300" />
        ) : (
          <FaAngleDown className="text-blue-300" />
        )}
      </button>
      {showFilter && (
        <div className="bg-dark-300 absolute right-0 mt-5 p-5 rounded-lg w-44 z-50">
          <button className="w-full flex flex-row items-center group">
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                true ? "bg-blue-500" : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {true && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold ">All</span>
          </button>
          <button className="w-full flex flex-row items-center group">
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                false ? "bg-blue-500" : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {false && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold">Draft</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoiceFilter;
