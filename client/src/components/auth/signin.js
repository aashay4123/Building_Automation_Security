import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../container/layout/layout";
import Google from "./google";
import { authenticate, isAuth } from "../helper";
import { toast } from "react-toastify";
import Facebook from "./facebook";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const Signin = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { email, password, buttonText } = values;

  const informParent = (response) => {
    authenticate(response, () => {
      setValues({
        ...values,
        email: "",
        password: "",
        buttonText: "submitted",
      });
      toast.success(`hey ${response.data.user.name} welcome back!!`);
      props.history.push("/profile");
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    props.onSignin(email, password, informParent);
  };

  const signinForm = () => (
    <form className="form-dash">
      <div className="btn--flex">
        <Google informParent={informParent} />
        <Facebook informParent={informParent} />
      </div>
      <div className="form-group">
        <div className="form-land__group">
          <input
            onChange={handleChange("email")}
            value={email}
            type="text"
            className="form-land__input"
            placeholder="Email Id"
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
      </div>
      <div>
        <button className="btn btn--blue btn--pad" onClick={clickSubmit}>
          {buttonText}
        </button>
        <br />
        <Link to="/auth/password/forgot" className="btn btn--red">
          Forgot Password
        </Link>
        <Link to="/signup" className="btn btn--green">
          Create Account
        </Link>
      </div>
    </form>
  );
  return (
    <Layout>
      <div>
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="heading-1">Signin</h1>
        {signinForm()}
      </div>
    </Layout>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignin: (email, password, informParent) =>
      dispatch(actions.signin(email, password, informParent)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
