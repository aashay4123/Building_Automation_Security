import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../container/layout/layout";
import { isAuth } from "../helper";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    props.onSignup(name, email, password);
  };

  const signupForm = () => (
    <form className="form-dash">
      <div className="form-land__group">
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-land__input"
          placeholder="Full name"
          id="name"
        />
      </div>

      <div className="form-land__group">
        <input
          onChange={handleChange("email")}
          type="text"
          className="form-land__input"
          placeholder="Email Id"
          value={email}
        />
      </div>

      <div className="form-land__group">
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-land__input"
          placeholder="password"
        />
      </div>

      <div>
        <button className="btn btn--blue btn--pad" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-med-3">
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="heading-1">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (email, password, informParent) =>
      dispatch(actions.signup(email, password, informParent)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
