import { FC, useEffect, useState } from "react";
import { Formik } from "formik";
import schema from "./validationSchema";
import initialValues from "./initialValues";
import FormButtons from "./FormButtons";
import {
  useAppDispatch,
  useAppSelector,
  useClickOutsideListenerRef,
} from "../../app/hooks";
import FormStructure from "./FormStructure";
import { RootState } from "../../app/store";
import { useParams } from "react-router";
// import initialValues from "./initialValues";

const AddForm: FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const invoiceValues = useAppSelector((state: RootState) =>
    state.invoices.find((invoice) => invoice.id.toString() === id)
  );
  const isOpen = useAppSelector((state: RootState) => state.form.isOpen)
  const isEdit = useAppSelector((state: RootState) => state.form.isEdit);
  const [showForm, setShowForm] = useState(false);
  const ref = useClickOutsideListenerRef(setShowForm);
  useEffect(() => {
    isOpen ? setShowForm(true) : setShowForm(false)
  }, [isOpen])
  useEffect(() => {
    !showForm && isOpen && dispatch({ type: "CLOSE_FORM" })
  }, [showForm])

  return showForm ? (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize
    >
      <div
        className="fixed pt-24 inset-x-0 top-0 grid h-screen md:max-w-3xl md:pt-0  md:pl-24 h-screen max-h-screen md:rounded-r-xl z-10"
        ref={ref}
      >
        <FormStructure isEdit={isEdit}/>
        <FormButtons />
      </div>
    </Formik>
  ) : null;
};

export default AddForm;
