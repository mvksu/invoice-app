import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ControlPanel from "./ControlPanel";
import InvoiceCell from "./InvoiceCell";


const Homepage: FC = () => {
  const filterMethod = useAppSelector((state: RootState) => state.filterMethod);
  const invoices = useAppSelector((state: RootState) => state.invoices).filter(
    (invoice) =>
      filterMethod === "all" ? invoice : invoice.status === filterMethod
  );
  return (
    <div className="container px-4 md:px-12 xl:px-64 w-full">
      <ControlPanel len={invoices.length}/>
      {invoices.map(invoice => (
        <InvoiceCell invoice={invoice}/>
      ))}
    </div>
  );
};


export default Homepage;