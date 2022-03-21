import { FC, useEffect, useState } from "react";
import { Formik } from "formik";
import schema from "./validationSchema";
import initialValues from "./initialValues";
import {
  useAppDispatch,
  useAppSelector,
  useClickOutsideListenerRef,
} from "../../hooks/hooks";
import FormStructure from "./FormStructure";
import { RootState } from "../../ducks/store";
import { AnimatePresence, motion } from "framer-motion";
import { addInvoice, editInvoice } from "../../ducks/invoice/action-creator";
import { useParams } from 'react-router';
import { Invoice } from "../../ducks/invoice/invoiceReducer"

const springTransition = {
  duration: 0.8,
  type: "spring",
  bounce: 0.1,
};

export const slideLeft = {
  hidden: {
    x: "-100%",
  },
  show: {
    x: 0,
    transition: springTransition,
  },
  exit: {
    x: "-100%",
    transition: springTransition,
  },
};

const AddForm: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.form.isOpen);
  const isEdit = useAppSelector((state: RootState) => state.form.isEdit);
  const { id } = useParams()
  const editedInvoice = useAppSelector((state: RootState) => state.invoices.find((invoice: Invoice) => invoice.id === Number(id)))
  const [showForm, setShowForm] = useState(false);
  const ref = useClickOutsideListenerRef(setShowForm);

  useEffect(() => {
    isOpen ? setShowForm(true) : setShowForm(false);
  }, [isOpen]);

  useEffect(() => {
    !showForm && isOpen && dispatch({ type: "CLOSE_FORM" });
  }, [showForm]);

  return <AnimatePresence exitBeforeEnter>
    {showForm ? (
      <motion.div className="fixed inset-0 bg-dark-400 z-40 bg-opacity-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
        <Formik
          onSubmit={(values) => {
            !isEdit
              ?
                dispatch(addInvoice(values)).then(() => dispatch({ type: "CLOSE_FORM"}))
              : dispatch(editInvoice(values)).then(() => dispatch({ type: "CLOSE_FORM_EDIT"}))
          }}
          initialValues={!isEdit ? initialValues : editedInvoice}
          validationSchema={schema}
          enableReinitialize
        >
          <motion.div
            className="top-0 md:max-w-3xl md:pt-0  md:rounded-r-xl z-50 h-screen flex flex-col"
            key={'form'}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={slideLeft}
            ref={ref}
          >
            <FormStructure isEdit={isEdit} />
          </motion.div>
        </Formik>
      </motion.div>
    ) : null}
  </AnimatePresence>
};

export default AddForm;
