import { FC } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../ducks/store";
import InvoicePanel from "./InvoicePanel";
import InvoiceSummary from "./InvoiceSummary";
import Form from "../Form/AddForm";
import { motion } from 'framer-motion';

interface InvoiceShape {
  id: number,
  userInfo: {
    street: string,
    city: string,
    country:string,
    postCode: string,
  },
  clientInfo: {
    name: string,
    email: string,
    street: string,
    country: string,
    postCode: string,
    city: string,
  },
  createdAt: string,
  paymentTerms: string,
  desc: string,
  status: string,
  itemsList: [
    { name: string, price: number, qty: number },
    { name: string, price: number, qty: number },
  ],
}


const InvoiceView: FC = () => {
  const { id } = useParams()
  const invoice = useAppSelector((state: RootState) =>
    state.invoices.find((invoice: InvoiceShape) => invoice.id.toString() === id)
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
