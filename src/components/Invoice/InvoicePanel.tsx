import { FC } from "react";
import Flag from "../Reusables/Flag";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Fade = require("react-reveal/Fade");

const InvoicePanel: FC = () => {
  return (
    <Fade left>
      <div className="flex items-center md:space-x-4 bg-dark-300 py-4 px-6 rounded-xl w-full justify-between mb-4">
        <p className="text-gray">Status</p>
        <Flag />
        <div className="fixed bottom-0 right-0 bg-dark-300 w-full p-4 md:static">
          <button className="rounded-3xl px-4 py-2 bg-red-500 text-white font-bold float-right z-50">
            DELETE
          </button>
        </div>
      </div>
      <Link to="/" className="flex items-center my-6">
        <FaAngleLeft className="text-blue-300 w-6 h-6" />
        <p className="text-white text-sm">Go Back</p>
      </Link>
    </Fade>
  );
};

export default InvoicePanel;
