import React, { useState, useEffect } from "react";
import Layout from "./layout/layout";
import axios from "axios";
import { getcookie, signout, updateUser } from "../components/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import withAuth from "../components/hoc/withAuth";
import ImageUploader from "../components/utils/ImageUploader";

const Private = ({ history }) => {
  const [values, setValues] = useState({
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
      url: `/api/user/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const { role, name, email } = response.data.data;
        setValues({ ...values, role, name, email });
      })
      .catch((error) => {
        if (error.status === 401) {
          signout(() => {
            history.push("/signin");
          });
        }
      });
  };

  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    if (password !== "") {
      axios({
        method: "PATCH",
        url: `api/user/updateMyPassword`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { password },
      })
        .then((_) => {
          setValues({ ...values, buttonText: "Submit again" });
          toast.success("password updated successfully");
        })
        .catch((error) => {
          setValues({ ...values, buttonText: "Submit" });
          toast.error(error);
        });
    } else {
      axios({
        method: "PATCH",
        url: `api/user/updateMe`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { name },
      })
        .then((response) => {
          console.log(response);

          updateUser(response.data.user, () => {
            setValues({ ...values, buttonText: "Submit again" });
            toast.success("Profile updated successfully");
          });
        })
        .catch((error) => {
          setValues({ ...values, buttonText: "Submit" });
          toast.error(error);
        });
    }
  };

  const updateForm = () => (
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
          type="password"
          className="form-land__input"
          placeholder="update password"
        />
      </div>
      {<ImageUploader />}
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

export default withAuth()(Private);
