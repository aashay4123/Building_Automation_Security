import React from "react";

const PortInput = ({
  label,
  type,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div className="form-land__group">
      <label className="form-land__label">{label}</label>
      <input className="form-land__input" type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="form__error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default PortInput;
