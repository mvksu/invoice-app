import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../ducks/store";
import EditForm from "../Form/AddForm";
import ControlPanel from "./ControlPanel";
import InvoiceCell from "./InvoiceCell";
import {useEffect} from 'react'
import { getInvoices } from "../../ducks/invoice/action-creator";
import { Invoice } from "../../ducks/invoice/invoiceReducer"


const Homepage: FC = () => {
  const dispatch = useAppDispatch()
  const filterMethod = useAppSelector((state: RootState) => state.filterMethod);
  const invoices = useAppSelector((state: RootState) => state.invoices).filter(
    (invoice: Invoice) =>
      filterMethod === "all" ? invoice : invoice.status === filterMethod
  );
  const isOpen = useAppSelector((state: RootState) => state.form.isOpen);

  useEffect(() => {
    dispatch(getInvoices())
  }, [])

  return (
    <div
      className={`container px-4 md:px-12 xl:px-64`}
    >
      <EditForm />
      <div className={`${isOpen ? "hidden md:block" : "block"}`}>
        <ControlPanel len={invoices.length} />
        <div className="w-full">
          {invoices.map((invoice: Invoice, index: number) => (
            <InvoiceCell invoice={invoice} index={index} key={invoice.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;