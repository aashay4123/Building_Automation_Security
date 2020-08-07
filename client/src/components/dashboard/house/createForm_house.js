import React from "react";
import { Formik, Form, Field } from "formik";
import PortInput from "../utils/PortInput";

const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      errors[key] = `Field ${key} is required!`;
    }
  });

  return errors;
};
const CreateForm_house = ({ initialValues, onSubmit, buttonText }) => {
  console.log("create house ", initialValues);
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validate={validateInputs}
        onSubmit={onSubmit}
        enableReinitialize="true"
      >
        {({ isSubmitting }) => (
          <Form>
            <Field label="Name" type="text" name="name" component={PortInput} />
            <Field label="flat" type="text" name="flat" component={PortInput} />
            <Field
              label="floor"
              type="text"
              name="floor"
              component={PortInput}
            />
            <Field
              label="address"
              type="text"
              name="address"
              component={PortInput}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="nav__btn nav__btn--submit"
            >
              {buttonText}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm_house;
