import { FC } from "react";
import ControlPanel from "./ControlPanel";
import InvoiceCell from "./InvoiceCell";


const Homepage: FC = () => {
  return (
    <div className="container px-4 md:px-12 xl:px-64 w-full">
      <ControlPanel />
      <InvoiceCell />
      <InvoiceCell />
      <InvoiceCell />
    </div>
  );
};

export default Homepage;
