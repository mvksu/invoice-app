import { Form } from "formik";
import { FC } from "react";
import Return from "../Reusables/Return";
import Input from "./Input";
import InputSelect from "./InputSelect";
import ItemsList from "./ItemsList";

type EditProps = {
  isEdit: boolean
}

const FormStructure: FC<EditProps> = ({ isEdit }) => {
  return (
    <Form className="h-full p-4 flex flex-col overflow-y-scroll bg-dark-400 dark:bg-light">
      <Return />
      {isEdit ? (
        <h1 className="text-white text-3xl font-bold pb-6 dark:text-dark-900">
          Edit Invoice
        </h1>
      ) : (
        <h1 className="text-white text-3xl font-bold pb-6 dark:text-dark-900">
          New Invoice
        </h1>
      )}
      <p className="text-blue-300 text-md my-4">Bill Form</p>
      <Input label="Street Address" name="userInfo.street" />
      <div className="flex flex-row gap-3 mt-3">
        <Input label="City" name="userInfo.city" />
        <Input label="Post Code" name="userInfo.postCode" />
        <Input label="Country" name="userInfo.country" />
      </div>
      <p className="text-blue-300 text-md my-4">Bill Form</p>
      <Input label="Client's name" name="clientInfo.name" />
      <Input label="Client's Email" name="clientInfo.email" />
      <Input label="Street Address" name="clientInfo.street" />
      <div className="flex flex-row gap-3 mt-3">
        <Input label="City" name="clientInfo.city" />
        <Input label="Post Code" name="clientInfo.postCode" />
        <Input label="Country" name="clientInfo.country" />
      </div>
      <div className="flex flex-row gap-3 mt-3 w-full">
        <Input label="Invoice Date" name="invoiceDate" type="date" />
        <InputSelect
          label="Payment Terms"
          options={["next day", "next week", "next 2 weeks", "next month"]}
          name="paymentTerms"
        />
      </div>
      <Input label="Project Description" name="desc" />
      <p className="text-blue-300 text-md my-4">Items List</p>
      <ItemsList />
    </Form>
  );
};

export default FormStructure;
