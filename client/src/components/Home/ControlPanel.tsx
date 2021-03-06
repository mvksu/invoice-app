import { motion } from "framer-motion";
import { FC } from "react";
import InvoiceButton from "./InvoiceButton";
import InvoiceFilter from "./InvoiceFilter";

type Props = {
  len: number
}

const ComtrolPanel: FC<Props> = ({ len }) => {
  return (
    <motion.div className="w-full flex justify-between items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} exit={{ x: 100, opacity: 0 }}>
      <div className="flex flex-col">
        <h1 className="text-white dark:text-primary text-2xl md:text-4xl font-medium">Invoices</h1>
        <h2 className="text-gray font-medium">{len === 1 ? "There is 1 invoice" : len > 0 ? "There are " + len + " invoices" : "There is no invoices"}</h2>
      </div>
      <InvoiceFilter />
      <InvoiceButton />
    </motion.div>
  );
};

export default ComtrolPanel;
