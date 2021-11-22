import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ControlPanel from "./ControlPanel";
import InvoiceCell from "./InvoiceCell";


const Homepage: FC<any> = ({form}) => {
  const filterMethod = useAppSelector((state: RootState) => state.filterMethod);
  const invoices = useAppSelector((state: RootState) => state.invoices).filter(
    (invoice) =>
      filterMethod === "all" ? invoice : invoice.status === filterMethod
  );
  return (
    <div className={`container px-4 md:px-12 xl:px-64 ${form ? "hidden md:block" : ""}`}>
      <ControlPanel len={invoices.length} />
      <div className="w-full">
        {invoices.map((invoice) => (
          <InvoiceCell invoice={invoice} key={invoice.id} />
        ))}
      </div>
    </div>
  );
};


export default Homepage;