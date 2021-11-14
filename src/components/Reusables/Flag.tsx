import { FC } from "react";

const Flag: FC = () => {
  return (
    <button className="px-6 py-2 text-green bg-green bg-opacity-10 font-bold rounded-md flex items-center col-end-4 row-start-3 row-end-4 md:col-start-5 md:col-end-6">
      <span className="rounded-full bg-green w-2 h-2 mr-5 "></span> Paid
    </button>
  );
};

export default Flag;
