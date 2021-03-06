import { Form } from "formik";
import { FC } from "react";
import Return from "../Reusables/Return";
import FormButtons from "./FormButtons";
import Input from "./Input";
import InputSelect from "./InputSelect";
import ItemsList from "./ItemsList";

type EditProps = {
  isEdit: boolean
}

const FormStructure: FC<EditProps> = ({ isEdit }) => {
  return (
    <Form className="mt-20 md:mt-0 top-0 md:max-w-3xl md:pt-0  md:pl-24  md:rounded-r-xl z-50 h-screen flex flex-col">

      <div className="p-4 flex flex-col overflow-scroll bg-dark-400 dark:bg-light">
        <div>
          <Return />
        </div>
        {isEdit ? (
          <h1 className="text-white text-3xl font-bold pb-6 dark:text-dark-900">
            Edit Invoice
          </h1>
        ) : (
          <h1 className="text-white text-3xl font-bold pb-6 dark:text-dark-900">
            New Invoice
          </h1>
        )}
        <div className="my-4">
          <p className="text-blue-300 text-md my-4">Bill From</p>
          <Input label="Street Address" name="userInfo.street" />
          <div className="flex flex-row my-3">
            <Input label="City" name="userInfo.city" />
            <Input label="Post Code" name="userInfo.postCode" />
            <Input label="Country" name="userInfo.country" />
          </div>
        </div>
        <div className="my-4">
          <p className="text-blue-300 text-md my-2">Bill To</p>
          <Input label="Client's name" name="clientInfo.name" />
          <Input label="Client's Email" name="clientInfo.email" />
          <Input label="Street Address" name="clientInfo.street" />
          <div className="flex flex-row mt-3">
            <Input label="City" name="clientInfo.city" />
            <Input label="Post Code" name="clientInfo.postCode" />
            <Input label="Country" name="clientInfo.country" />
          </div>
          <div className="flex flex-row mt-3 w-full">
            <Input label="Invoice Date" name="invoiceDate" type="date" />
            <InputSelect
              label="Payment Terms"
              options={["next day", "next week", "next 2 weeks", "next month"]}
              name="paymentTerms"
            />
          </div>
          <Input label="Project Description" name="desc" />
        </div>
        <p className="text-blue-300 text-md my-4">Items List</p>
        <ItemsList />
      </div>
      <FormButtons isEdit={isEdit}/>
    </Form>
  );
};

export default FormStructure;
