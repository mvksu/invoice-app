import { motion } from "framer-motion";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flag from "../Reusables/Flag";

type invoiceType = {
  invoice: any;
  index: number;
};

const InvoiceCell: FC<invoiceType> = ({ invoice, index }) => {
  return (
    <Link to={`invoice/${invoice.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.08,
            easings: ["easeInOut"],
          },
        }}
        exit={{
          opacity: 0,
          y: 15,
          transition: {
            delay: index * 0.08,
            easings: ["easeOut"],
          },
        }}
        className="w-full px-6 py-4 md:py-8 my-5 bg-dark-300 dark:bg-lightBlue rounded-2xl hover:ring-1 ring-blue-300 cursor-pointer shadow-md transition-all duration-300"
      >
        <div className="grid grid-cols-2 grid-rows-3 md:flex md:items-center md:justify-between">
          <h1 className="text-white dark:text-primary font-bold pb-4 md:pb-0 w-1/6">
            <span className="text-gray">#</span>
            {invoice.id}
          </h1>
          <h1 className="text-gray text-sm md:text-md col-span-3 md:col-start-2 md:col-span-2 w-1/6">
            Due 25/11/2012
          </h1>
          <h1 className="text-gray col-start-3 col-end-4 row-start-1 row-end-2 w-1/6">
            {invoice.clientInfo.name}
          </h1>
          <h1 className="text-white dark:text-primary font-bold text-md md:text-xl pt-1 md:p-0 w-1/6">
            $
            {invoice.itemsList
              .map((item: any) => item.price * item.qty)
              .reduce((sum: number, item: number) => sum + item, 0)}
            .00
          </h1>
          <Flag status={invoice.status} />
          <button className="text-blue-300 hidden md:inline md:col-start-6 w-1/24">
            <FaChevronRight />
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default InvoiceCell;
