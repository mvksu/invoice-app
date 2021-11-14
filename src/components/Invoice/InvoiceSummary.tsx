import { FC } from "react";
import InvoiceReceipt from "./InvoiceReceipt";

const InvoiceSummary: FC = () => {
  return (
    <div className="bg-dark-300 p-6 md:p-12 rounded-xl text-white mb-20 ">
      <div className="block md:flex justify-between">
        <div className="title pb-6">
          <h1 className="font-bold">
            <span className="text-blue-300">#</span> 6C1D12
          </h1>
          <h2 className="text-gray">Jan Kowalski</h2>
        </div>

        <div className="details text-gray text-sm pb-6 md:text-right">
          <h2>Jan</h2>
          <h2>Kowalski</h2>
          <h2>89-632</h2>
          <h2>Poland</h2>
        </div>
      </div>

      <div className="flex justify-between pb-6">
        <div className="w-1/2">
          <h2 className="text-gray">Invoice Date</h2>
          <h1 className="font-bold">Tue 26 Oct</h1>
        </div>
        <div className="w-1/2">
          <h2 className="text-gray">Bill To</h2>
          <h1 className="font-bold">John Johnson</h1>
        </div>
      </div>
      <div className="flex justify-between pb-6">
        <div className="w-1/2">
          <h2 className="text-gray">Payment Due</h2>
          <h1 className="font-bold">Tue 26 Oct</h1>
        </div>
        <div className="w-1/2">
          <h2 className="text-gray">Bill To</h2>
          <h1 className="font-bold">John Johnson</h1>
        </div>
      </div>
      <h2 className="text-gray">Sent to</h2>
      <h1 className="font-bold pb-6">rwa@gmail.com</h1>
      <InvoiceReceipt />
    </div>
  );
};

export default InvoiceSummary;
