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

const createForm_remote = ({ initialValues, onSubmit, buttonText }) => {
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
              placeholder="Name"
              type="text"
              name="name"
              component={PortInput}
            />
            <Field
              placeholder="Topic"
              type="text"
              name="topic"
              component={PortInput}
            />

            <Field
              placeholder="Company"
              type="text"
              name="company"
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

export default createForm_remote;
