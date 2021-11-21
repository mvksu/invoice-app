import { FC } from "react";
import Flag from "../Reusables/Flag";
import Return from "../Reusables/Return";
const Fade = require("react-reveal/Fade");

const InvoicePanel: FC<any> = ({ invoice }) => {
  return (
    <Fade left>
      <div className="flex items-center md:space-x-4 bg-dark-300 py-4 px-6 rounded-xl w-full justify-between mb-4">
        <p className="text-gray">Status</p>
        <Flag status={invoice.status} />
        <div className="fixed bottom-0 right-0 bg-dark-300 w-full p-4 md:static">
          <div className="float-right">
            {invoice.status === ("draft" || "pending") ? (
              <button className="rounded-3xl px-4 py-2 bg-dark-200 text-gray mx-2 text-white hover:ring-2 hover:text-white ring-blue-300 text-sm">
                Edit
              </button>
            ) : null}
            <button className="rounded-3xl px-4 py-2 bg-red-500 text-white font-bold z-50 filter hover:brightness-150 text-sm">
              Delete
            </button>
            {invoice.status === "pending" ? (
              <button className="rounded-3xl px-4 py-2 bg-blue-300 mx-2 text-white filter hover:brightness-110 text-sm">
                Mark as paid
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <Return />
    </Fade>
  );
};

export default InvoicePanel;
