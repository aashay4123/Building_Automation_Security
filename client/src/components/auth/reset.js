import React, { useState, useEffect } from "react";
import Layout from "../../container/layout/layout";
import jwt from "jsonwebtoken";
import "react-toastify/dist/ReactToastify.min.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Reset = (props) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password",
  });
  useEffect(() => {
    let token = props.match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
    // eslint-disable-next-line
  }, []);
  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Reseting password" });
    props.onReset(newPassword, token);
  };
  // console.log(jwt.decode(token));

  const ResetPasswordForm = () => (
    <form className="form-dash">
      <div className="form-land__group">
        <input
          onChange={handleChange}
          value={newPassword}
          type="password"
          className="form-land__input"
          placeholder="Type new password"
        />
      </div>
      <div>
        <button className="btn btn--blue" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-med-3">
        <h1 className="heading-2">Hey {name}, enter new password</h1>
        {ResetPasswordForm()}
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: (newPassword, token) =>
      dispatch(actions.reset(newPassword, token)),
  };
};

export default connect(null, mapDispatchToProps)(Reset);
