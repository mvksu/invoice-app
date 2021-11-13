import { FC } from "react";
import InvoiceButton from "./InvoiceButton";
import InvoiceFilter from "./InvoiceFilter";

const ComtrolPanel: FC = () => {
  return (
    <div className="border border-blue-300 w-full mx-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-medium">Invoices</h1>
        <h2 className="text-gray font-medium">There are 5 invoices</h2>
      </div>
      <InvoiceFilter />
      <InvoiceButton />
    </div>
  );
};

export default ComtrolPanel;