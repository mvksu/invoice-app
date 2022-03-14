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
import { AnimatePresence, motion } from "framer-motion";

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
            console.log(values);
          }}
          initialValues={initialValues}
          validationSchema={schema}
          enableReinitialize
        >
          <motion.div
            className="pt-24 top-0 md:max-w-3xl md:pt-0  md:pl-24  md:rounded-r-xl z-50 h-screen flex flex-col"
            ref={ref}
            key={'form'}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={slideLeft}
          >
            <FormStructure isEdit={isEdit} />
            <FormButtons />
          </motion.div>
        </Formik>
      </motion.div>
    ) : null}
  </AnimatePresence>
};

export default AddForm;
