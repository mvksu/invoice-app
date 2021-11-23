import { FC } from "react";

const InvoiceReceipt: FC<any> = ({items}) => {
  return (
    <div className="bg-dark-300  filter brightness-125 dark:brightness-150 rounded-xl">
      <div className="flex justify-between items-center py-4 px-6 md:hidden">
        <div>
          <h1>Item</h1>
          <h2 className="text-blue-300">1 x 32</h2>
        </div>
        <h1 className="text-white font-bold">$222.00</h1>
      </div>
      <div className="hidden justify-between items-center py-4 px-6 md:block">
        <div className="grid grid-cols-5 filter brightness-125 w-full text-right mb-4">
          <p className="text-gray col-start-1 col-end-3 text-left">Item Name</p>
          <p className="text-gray">QTY.</p>
          <p className="text-gray">Price</p>
          <p className="text-gray">Total</p>
        </div>
        {items.map((item: any) => (
          <div className="grid grid-cols-5 filter brightness-125 w-full text-right text-sm" key={item.price -9}>
            <p className="text-white col-start-1 col-end-3 text-left">
              {item.name}
            </p>
            <p className="text-white">{item.price}</p>
            <p className="text-white">{item.qty}</p>
            <p className="text-white">{item.price * item.qty}</p>
          </div>
        ))}
      </div>
      <div className="bg-dark-900 dark:bg-dark-200 w-full h-16 rounded-b-xl flex justify-between items-center ">
        <h1 className="px-4">Grand total</h1>
        <h1 className="text-2xl px-4">
          $
          {items
            .map((item: any) => item.price * item.qty)
            .reduce((sum: number, item: number) => sum + item, 0)}
        </h1>
      </div>
    </div>
  );
};

export default InvoiceReceipt;
