import { useFormikContext } from "formik";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addInvoice } from "../../ducks/invoice/action-creator";
import { useNavigate } from 'react-router-dom';

type ButtonsProps = {
  isEdit: boolean
}

const FormButtons: FC<ButtonsProps> = ({ isEdit }) => {
  const { values } = useFormikContext()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleDraft = () => {
    dispatch({ type: "CLOSE_FORM"})
    dispatch(addInvoice({ ...(values as object), status: "draft"})).then(() => navigate('/'))
  }

  return (
    <div className="bg-dark-500 h-36 mb-20 md:mb-0 md:h-24 w-full flex border-dark-300 justify-end px-8 pt-2 bg-dark-400 dark:bg-white">
      <button className="btn rounded-3xl bg-dark-200 dark:bg-blue-100 px-4 m-2 text-gray text-sm font-bold filter hover:brightness-125" type="reset">
        Discard
      </button>
      <button className="btn rounded-3xl bg-dark-300 px-4 m-2 text-gray text-sm hover:ring-1 ring-blue-300" onClick={handleDraft} type="button">
        Save as Draft
      </button>
      <button className="btn rounded-3xl bg-blue-300 px-4 m-2 text-white text-sm  font-bold filter hover:brightness-110" type="submit">
        Save & Send
      </button>
    </div>
  );
};

export default FormButtons;
