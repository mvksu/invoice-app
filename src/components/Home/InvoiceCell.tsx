import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flag from "../Reusables/Flag";

type invoiceType = {
  invoice: any
}

const InvoiceCell: FC<invoiceType> = ({invoice}) => {
  return (
    <Link to={`invoice/${invoice.id}`}>
      <div className="w-full px-6 py-4 md:py-8 my-5 bg-dark-300 rounded-2xl hover:ring-1 ring-blue-300 cursor-pointer">
        <div className="grid grid-cols-2 grid-rows-3 md:flex md:items-center md:justify-between">
          <h1 className="text-white font-bold pb-4 md:pb-0 w-1/6">
            <span className="text-gray">#</span>
            {invoice.id}
          </h1>
          <h1 className="text-gray text-sm md:text-md col-span-3 md:col-start-2 md:col-span-2 w-1/6">
            Due 25 December 2011
          </h1>
          <h1 className="text-gray col-start-3 col-end-4 row-start-1 row-end-2 w-1/6">
            {invoice.clientInfo.name}
          </h1>
          <h1 className="text-white font-bold text-md md:text-xl pt-1 md:p-0 w-1/6">
            ${invoice.itemsList.map((item: any) => item.price * item.qty).reduce((sum: number, item: number) => sum + item, 0)}.00
          </h1>
          <Flag status={invoice.status} />
          <button className="text-blue-300 hidden md:inline md:col-start-6 w-1/24">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCell;
