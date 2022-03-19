import { FC } from "react";
import InvoiceReceipt from "./InvoiceReceipt";
import { Invoice } from "../../ducks/invoice/invoiceReducer"

type Props = {
  invoice: Invoice
}

const InvoiceSummary: FC<Props> = ({ invoice }) => {

  return (
    <div className="bg-dark-300 dark:bg-white shadow-md p-6 md:p-12 rounded-xl text-white mb-20 ">
      <div className="block md:flex justify-between">
        <div className="title pb-6">
          <h1 className="font-bold dark:text-dark-900">
            <span className="text-blue-300">#</span> {invoice.id}
          </h1>
          <h2 className="text-gray">{invoice.clientInfo && invoice.clientInfo.name}</h2>
        </div>

        <div className="details text-gray text-sm pb-6 md:text-right">
          <h2>{invoice.clientInfo && invoice.clientInfo.name.split(" ")[0]}</h2>
          <h2>{invoice.clientInfo && invoice.clientInfo.name.split(" ")[1]}</h2>
          <h2>{invoice.clientInfo && invoice.clientInfo.postCode}</h2>
          <h2>{invoice.clientInfo && invoice.clientInfo.country}</h2>
        </div>
      </div>

      <div className="flex justify-between pb-6">
        <div className="w-1/2">
          <h2 className="text-gray">Invoice Date</h2>
          <h1 className="font-bold dark:text-dark-900">25/11/2012</h1>
        </div>
        <div className="w-1/2">
          <h2 className="text-gray">Bill To</h2>
          <h1 className="font-bold dark:text-dark-900">
            {invoice.clientInfo && invoice.clientInfo.country}
          </h1>
        </div>
      </div>
      <div className="flex justify-between pb-6">
        <div className="w-1/2">
          <h2 className="text-gray">Payment Due</h2>
          <h1 className="font-bold dark:text-dark-900">Tue 26 Oct</h1>
        </div>
      </div>
      <h2 className="text-gray">Sent to</h2>
      <h1 className="font-bold pb-6 dark:text-dark-900">
        {invoice.clientInfo && invoice.clientInfo.email}
      </h1>
      <InvoiceReceipt items={invoice.itemsList} />
    </div>
  );
};

export default InvoiceSummary;
