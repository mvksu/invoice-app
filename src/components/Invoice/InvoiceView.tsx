import { FC } from 'react';
import InvoicePanel from './InvoicePanel';
import InvoiceSummary from './InvoiceSummary';

const InvoiceView: FC = () => {
    return (
      <div className="container px-4 md:px-12 xl:px-64 w-full flex flex-col-reverse">
            <InvoiceSummary />
            <InvoicePanel />
      </div>
    );
}

export default InvoiceView;