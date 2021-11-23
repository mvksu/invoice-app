import { useFormikContext } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";

const FormButtons: FC = () => {
  const { values } = useFormikContext()
  const dispatch = useAppDispatch()
  const handleSubmit = () => {
    dispatch({ type: "INVOICE_ADD", payload: values})
  }

  return (
    <div className="bg-dark-500 h-16 w-full flex border-t border-dark-300 justify-end px-8 pt-2">
      <button className="btn rounded-3xl bg-dark-200 dark:bg-blue-100 px-4 m-2 text-gray text-sm font-bold filter hover:brightness-125">
        Discard
      </button>
      <button className="btn rounded-3xl bg-dark-300 px-4 m-2 text-gray text-sm hover:ring-1 ring-blue-300">
        Save as Draft
      </button>
      <button className="btn rounded-3xl bg-blue-300 px-4 m-2 text-white text-sm  font-bold filter hover:brightness-110" onClick={handleSubmit}>
        Save & Send
      </button>
    </div>
  );
};

export default FormButtons;
