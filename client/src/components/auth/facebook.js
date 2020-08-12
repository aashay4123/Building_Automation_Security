import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
const URL = process.env.REACT_APP_API;

const facebookID = process.env.REACT_APP_FACEBOOK_ID;
const Facebook = ({ informParent = (f) => f }) => {
  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: `${URL}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken },
    })
      .then((response) => {
        informParent(response);
      })
      .catch((err) => {});
  };
  return (
    <div className="pb-3">
      <FacebookLogin
        appId={`${facebookID}`}
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="btn btn--blue">
            <i className="fab fa-facebook pr-2"></i> Login with Facebook
          </button>
        )}
      />
    </div>
  );
};

export default Facebook;
