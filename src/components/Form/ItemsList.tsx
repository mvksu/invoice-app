import { FC } from "react";
import Input from "./Input";

// interface InputSelectProps {
//   label: string;
//   name: string;
//   placeholder?: string;
//   options: string[];
// }

const ItemsList: FC = () => {
  return (
    <>
      <div className="flex flex-row gap-3 flex-wrap">
        <div className="w-full md:w-1/3">
          <Input label="Item Name" name="itemName" />
        </div>
        <div className="flex flex-row gap-3 w-full md:w-1/2">
          <Input label="Qty" name="qty" type="number" />
          <Input label="Price" name="price" type="number" />
          <div className="w-1/3 py-1">
            <label className="text-gray text-sm mt-2 text-center">Total</label>
            <div className="py-2">
              <p className="text-white font-bold">5.60</p>
            </div>
          </div>
        </div>
      </div>
      <button className="rounded-full text-gray bg-dark-300 my-8 px-6 py-3 hover:bg-blue-300 hover:text-white">
        + Add new item
      </button>
    </>
  );
};

export default ItemsList;
