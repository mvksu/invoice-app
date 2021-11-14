import { FC } from "react";
import { Formik, Form, Field } from "formik";
const AddForm: FC = () => {
  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      <Form className="h-full w-1/4 p-8 border border-blue-300 flex flex-col">
        <h1 className="text-white text-3xl font-bold pb-6">New Invoice</h1>
        <p className="text-blue-300 text-md my-4">Bill Form</p>
        <label htmlFor="StreetAddress" className="text-gray text-sm">
          Street Address
        </label>
        <Field
          name="street"
          type="text"
          className="bg-dark-300 w-full p-2 rounded-xl"
        ></Field>
        <div className="flex flex-row gap-3 mt-3">
          <div className="w-1/3">
            <label htmlFor="City" className="text-gray text-sm">
              City
            </label>
            <Field
              name="city"
              type="text"
              className="bg-dark-300 w-full p-2 rounded-xl"
            ></Field>
          </div>
          <div className="w-1/3">
            <label htmlFor="PostCode" className="text-gray text-sm">
              PostCode
            </label>
            <Field
              name="postcode"
              type="text"
              className="bg-dark-300 w-full p-2 rounded-xl"
            ></Field>
          </div>
          <div className="w-1/3">
            <label htmlFor="StreetAddress" className="text-gray text-sm">
              Country
            </label>
            <Field
              name="country"
              type="text"
              className="bg-dark-300 w-full p-2 rounded-xl"
            ></Field>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddForm;
