import { FC} from "react";
import { useField } from "formik";

interface InputProps {
  label: string
  name: string
  placeholder?: string
  type?: 'email' | 'number' | 'date'
}

const InvoiceView: FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="py-1 w-full">
      <div className="flex justify-between">
        <label htmlFor={field.name} className="text-gray text-sm">
          {label}
        </label>
        {meta.touched && meta.error ? (
          <p className="text-red-500 dark:text-red-500 font-light text-xs">
            {meta.error}
          </p>
        ) : null}
      </div>
      <input
        className={`bg-dark-300 w-full p-3 rounded-xl text-white text-sm font-bold focus:ring-2 ring-blue-300 outline-none hover:ring-2 ${
          meta.touched && meta.error
            ? "ring-red-500 ring-2"
            : "ring-blue-300"
        }`}
        type={props.type || "text"}
        {...props}
        {...field}
      />
    </div>
  );
};

export default InvoiceView;
