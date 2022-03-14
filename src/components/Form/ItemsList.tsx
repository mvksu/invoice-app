import { FieldArray } from "formik";
import { FC } from "react";
import Input from "./Input";
import { FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const ItemsList: FC<any> = ({ values }) => {
  return (
    <>
      <FieldArray name="itemsList">
        {({ form: { values }, ...helpers }) => {
          return (
            <div>
              <AnimatePresence>
                {values.itemsList && values.itemsList.length > 0 ? (
                  values.itemsList.map((item: any, index: number) => (
                    <motion.div
                      className="flex flex-row gap-3 flex-wrap items-center justify-between"
                      key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="w-full md:w-1/3">
                        <Input
                          label="Item Name"
                          name={`itemsList[${index}].name`}
                        />
                      </div>
                      <div className="flex flex-row gap-3 w-full md:w-1/2 items-center">
                        <Input
                          label="Qty"
                          name={`itemsList[${index}].qty`}
                          type="number"
                        />
                        <Input
                          label="Price"
                          name={`itemsList[${index}].price`}
                          type="number"
                        />
                        <div className="w-1/3 py-1">
                          <label className="text-gray text-sm mt-2 text-center">
                            Total
                          </label>
                          <div className="py-2">
                            <p className="text-white font-bold dark:text-dark-400">
                              {item.qty * item.price}
                            </p>
                          </div>
                        </div>
                        {values.itemsList.length > 1 &&
                          <FaTimes
                            className="text-white dark:text-dark-900 mt-6 mx-4 cursor-pointer dark:hover:text-red-500 hover:text-red-500 text-3xl"
                            onClick={() => {
                              setTimeout(() => helpers.remove(index), 100)
                            }}
                          />}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex flex-row gap-3 flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/3">
                      <Input label="Item Name" name="itemName" />
                    </div>
                    <div className="flex flex-row gap-3 w-full md:w-1/2">
                      <Input label="Qty" name="qty" type="number" />
                      <Input label="Price" name="price" type="number" />
                      <div className="w-1/2 py-1">
                        <label className="text-gray text-sm mt-2 text-center">
                          Total
                        </label>
                        <div className="py-2">
                          <p className="text-white font-bold bg:text-black">5.60</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>

              <button
                className="rounded-full text-gray bg-dark-300 dark:bg-blue-100 my-8 px-6 py-3 hover:bg-blue-300 hover:text-white w-full"
                type="button"
                onClick={() =>
                  helpers.push({ name: "", qty: "0", price: "0.00" })
                }
              >
                + Add new item
              </button>
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};

export default ItemsList;
