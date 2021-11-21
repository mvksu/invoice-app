import { FC } from "react";
import InvoiceButton from "./InvoiceButton";
import InvoiceFilter from "./InvoiceFilter";

const ComtrolPanel: FC<any> = ({len}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl md:text-4xl font-medium">Invoices</h1>
        <h2 className="text-gray font-medium">{len === 1 ? "There is 1 invoice" :  len > 0 ? "There are "+len+" invoices" : "There is no invoices"}</h2>
      </div>
      <InvoiceFilter />
      <InvoiceButton />
    </div>
  );
};

export default ComtrolPanel;
