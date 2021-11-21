import { FC } from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import InputSelect from "./InputSelect";
import ItemsList from "./ItemsList";
import Return from "../Reusables/Return";

const initialValues = {
  userInfo: {
    street: '',
    city: '',
    country: '',
    postCode: '',
  },
  clientInfo: {
    name: '',
    email: '',
    street: '',
    country: '',
    postCode: '',
    city: '',
  },
  createdAt: new Date(),
  paymentTerms: 'next week',
  desc: '',
  status: 'draft',
  itemsList: [{name: '', price: 0.00, qty: 0}]
}

const AddForm: FC = () => {
  return (
    <Formik onSubmit={(values) => console.log(values)} initialValues={initialValues} validationSchema={{}}>
      <Form className="h-full p-4 flex flex-col">
        <Return />
        <h1 className="text-white text-3xl font-bold pb-6">New Invoice</h1>
        <p className="text-blue-300 text-md my-4">Bill Form</p>
        <Input label="Street Address" name="street" />
        <div className="flex flex-row gap-3 mt-3">
          <Input label="City" name="city" />
          <Input label="Post Code" name="postCode" />
          <Input label="Country" name="country" />
        </div>
        <p className="text-blue-300 text-md my-4">Bill Form</p>
        <Input label="Client's name" name="clientName" />
        <Input label="Client's Email" name="clientEmail" />
        <Input label="Street Address" name="clientStreet" />
        <Input label="City" name="clientCity" />
        <div className="flex flex-row gap-3 mt-3 w-full">
          <Input label="Invoice Date" name="invoiceDate" type="date" />
          <InputSelect
            label="Payment Terms"
            options={["next day", "next week", "next 2 weeks", "next month"]}
            name="paymentTerms"
          />
        </div>
        <Input label="Project Description" name="description" />
        <p className="text-blue-300 text-md my-4">Items List</p>
        <ItemsList/>
      </Form>
    </Formik>
  );
};

export default AddForm;
