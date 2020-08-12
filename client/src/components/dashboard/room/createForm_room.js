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
const CreateForm_room = ({ initialValues, onSubmit, buttonText }) => {
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
            <Field
              // label="Name"
              type="text"
              name="name"
              component={PortInput}
              placeholder="Name"
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

export default CreateForm_room;
