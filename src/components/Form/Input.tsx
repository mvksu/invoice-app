import { FC } from "react";
import { Field } from "formik";

interface InputProps {
  label: string
  name: string
  placeholder?: string
  type?: 'email' | 'number' | 'date'
}

const InvoiceView: FC<InputProps> = ({ label, name, type }) => {
  return (
    <div className="py-1 w-full">
      <label htmlFor={name} className="text-gray text-sm">
        {label}
      </label>
      <Field
        name={name}
        type={type || 'text'}
        className="bg-dark-300 w-full p-3 rounded-xl text-white text-sm font-bold focus:ring-2 ring-blue-300 outline-none hover:ring-2"
      ></Field>
    </div>
  );
};

export default InvoiceView;
