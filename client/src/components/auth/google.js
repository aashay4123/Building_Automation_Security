import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Google = ({ informParent = (f) => f }) => {
  const responseGoogle = (response) => {
    axios({
      method: "POST",
      url: `api/google-login`,
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        informParent(response);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <GoogleLogin
        clientId={`${googleClient}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn--green "
          >
            <i></i> Login with Google
          </button>
        )}
      />
    </div>
  );
};

export default Google;
