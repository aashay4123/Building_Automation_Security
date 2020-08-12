import React, { useState } from "react";
import Layout from "../../container/layout/layout";
import "react-toastify/dist/ReactToastify.min.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Forgot = (props) => {
  const [values, setValues] = useState({
    email: "",
    buttonText: "Request Password Reset Link",
  });
  const { email, buttonText } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Requesting password" });
    props.onforgot(email);
  };
  const passwordForgotForm = () => (
    <form className="form-dash">
      <div className="form-land__group">
        <input
          onChange={handleChange("email")}
          value={email}
          type="text"
          className="form-land__input"
          placeholder="Email Id"
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
      <div>
        <h1 className="heading-2">Forgot password</h1>
        {passwordForgotForm()}
      </div>
    </Layout>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onforgot: (email) => dispatch(actions.forgot(email)),
  };
};

export default connect(null, mapDispatchToProps)(Forgot);
