import React, { useState, useEffect } from "react";
import Layout from "./layout/layout";
import axios from "axios";
import { isAuth, getcookie, signout, updateUser } from "../components/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import withAuth from "../components/hoc/withAuth";

const URL = process.env.REACT_APP_API;

const Private = ({ history }) => {
  const [values, setValues] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const token = getcookie("token");

  useEffect(() => {
    loadProfile();
    // eslint-disable-next-line
  }, []);

  const loadProfile = () => {
    axios({
      method: "GET",
      url: `${URL}/user/${isAuth()._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const { role, name, email } = response.data;
        setValues({ ...values, role, name, email });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          signout(() => {
            history.push("/signin");
          });
        }
      });
  };

  const { role, name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `api/user/update`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { name, password },
    })
      .then((response) => {
        updateUser(response, () => {
          setValues({ ...values, buttonText: "Submit again" });
          toast.success("Profile updated successfully");
        });
      })
      .catch((error) => {
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error);
      });
  };

  const updateForm = () => (
    <form className="form-dash">
      <div className="form-land__group">
        <input
          defaultValue={role}
          type="text"
          className="form-land__input"
          placeholder="Role"
          disabled
        />
      </div>
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
          defaultValue={email}
          type="text"
          className="form-land__input"
          placeholder="Email Id"
          disabled
        />
      </div>

      <div className="form-land__group">
        <input
          onChange={handleChange("password")}
          value={password}
          type="text"
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
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        <h1 className="heading-1">Profile</h1>
        {updateForm()}
      </div>
    </Layout>
  );
};

export default withAuth("subscriber")(Private);
