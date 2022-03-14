import { FC } from "react";
// import { Field } from "formik";

interface InputSelectProps {
  label: string;
  name: string;
  placeholder?: string;
  options: string[]
}

const InvoiceView: FC<InputSelectProps> = ({ label, name, options }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-gray text-sm">
        {label}
      </label>
      <select className="bg-dark-300 dark:bg-white w-full p-3 rounded-xl text-white dark:text-dark-900 text-sm font-bold h-10">
        {options.map((option) => (
          <option value={option} key={option} label={option} />
        ))}
      </select>
    </div>
  );
};

export default InvoiceView;
