import { FC } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import InvoicePanel from "./InvoicePanel";
import InvoiceSummary from "./InvoiceSummary";
import Form from "../Form/AddForm";
import { motion } from 'framer-motion';


const InvoiceView: FC = () => {
  const { id } = useParams()
  const invoice = useAppSelector((state: RootState) =>
    state.invoices.find((invoice) => invoice.id.toString() === id)
  );
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          easings: ["easeIn"],
        },
      }}
      exit={{
        opacity: 0,
        x: 15,
        transition: {
          duration: 0.5,
          easings: ["easeOut"],
        },
      }} className="container px-4 md:px-12 xl:px-64 w-full flex flex-col-reverse">
      <Form />
      <InvoiceSummary invoice={invoice} />
      <InvoicePanel invoice={invoice} />
    </motion.div>
  );
};

export default InvoiceView;
