import { FC } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import InvoicePanel from "./InvoicePanel";
import InvoiceSummary from "./InvoiceSummary";
import Form from "../Form/AddForm";


const InvoiceView: FC = () => {
  const { id } = useParams()
  const invoice = useAppSelector((state: RootState) =>
    state.invoices.find((invoice) => invoice.id.toString() === id)
  );
  return (
    <div className="container px-4 md:px-12 xl:px-64 w-full flex flex-col-reverse">
      <Form />
      <InvoiceSummary invoice={invoice} />
      <InvoicePanel invoice={invoice} />
    </div>
  );
};

export default InvoiceView;
