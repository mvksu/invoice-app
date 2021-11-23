import { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";



const InvoiceButton: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="bg-blue-500 rounded-3xl text-white font-bold flex flex-row items-center transform hover:scale-105 hover:bg-blue hover:bg-opacity-80 cursor-pointer" onClick={() => dispatch({type: "OPEN_FORM"})}>
      <span className="rounded-full m-1 p-1 md:m-2 md:p-2 bg-white border border-blue-600">
        <FaPlus className="text-blue-500 " />
      </span>
      <span className="p-1 mr-2">
        New <span className="hidden md:inline">Invoice</span>
      </span>
    </div>
  );
};

export default InvoiceButton;
