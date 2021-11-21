import { FC } from "react";

type statusType = {
  status: 'paid' | 'draft' | 'pending'
}

const Flag: FC<statusType> = ({status}) => {
  switch (status) {
    case 'paid':
      return (
        <button className="w-36 py-2 text-green bg-green bg-opacity-10 font-bold rounded-md flex justify-center items-center col-end-4 row-start-3 row-end-4 md:col-start-5 md:col-end-6">
          <span className="rounded-full bg-green w-2 h-2 mr-5 "></span> Paid
        </button>
      );
    case 'pending':
      return (
        <button className="w-36 py-2 text-orange bg-orange bg-opacity-10 font-bold rounded-md flex justify-center items-center col-end-4 row-start-3 row-end-4 md:col-start-5 md:col-end-6">
          <span className="rounded-full bg-orange w-2 h-2 mr-5 "></span> Pending
        </button>
      );
    default:
      return (
        <button className="w-36 py-2 text-gray bg-gray bg-opacity-10 font-bold rounded-md flex items-center justify-center col-end-4 row-start-3 row-end-4 md:col-start-5 md:col-end-6">
          <span className="rounded-full bg-gray w-2 h-2 mr-5 "></span> Draft
        </button>
      );
  }
};

export default Flag;
