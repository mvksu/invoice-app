import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";

const InvoiceFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterValue, setFilterValue] = useState('all');
  const dispatch = useAppDispatch();
  useEffect(() => {
    switch (filterValue) {
      case "all":
        dispatch({ type: "FILTER_ALL" });
        break;
      case "paid":
        dispatch({ type: "FILTER_PAID" });
        break;
      case "pending":
        dispatch({ type: "FILTER_PENDING" });
        break;
      case "draft":
        dispatch({ type: "FILTER_DRAFT" });
        break;
      default:
        break;
    }
  }, [filterValue, dispatch])

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
          <button
            className="w-full flex flex-row items-center group"
            onClick={() =>
              filterValue === "all"
                ? setFilterValue("")
                : setFilterValue("all")
            }
          >
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                filterValue === "all"
                  ? "bg-blue-500"
                  : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {filterValue === "all" && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold ">All</span>
          </button>
          <button
            className="w-full flex flex-row items-center group"
            onClick={() =>
              filterValue === "paid"
                ? setFilterValue("")
                : setFilterValue("paid")
            }
          >
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                filterValue === "paid"
                  ? "bg-blue-500"
                  : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {filterValue === "paid" && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold ">Paid</span>
          </button>
          <button
            className="w-full flex flex-row items-center group"
            onClick={() =>
              filterValue === "draft"
                ? setFilterValue("")
                : setFilterValue("draft")
            }
          >
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                filterValue === "draft"
                  ? "bg-blue-500"
                  : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {filterValue === "draft" && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold">Draft</span>
          </button>
          <button
            className="w-full flex flex-row items-center group"
            onClick={() =>
              filterValue === "pending"
                ? setFilterValue("")
                : setFilterValue("pending")
            }
          >
            <span
              className={`flex justify-center items-center w-4 h-4 mr-4 ring-blue-500 group-hover:ring-1 transition-all duration-300 rounded-sm ${
                filterValue === "pending"
                  ? "bg-blue-500"
                  : " bg-dark-400 dark:bg-dark-400"
              }`}
            >
              {filterValue === "pending" && (
                <span className="text-sm font-bold text-white">
                  {<FaCheck />}
                </span>
              )}
            </span>
            <span className="text-white capitalize font-bold">Pending</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoiceFilter;
