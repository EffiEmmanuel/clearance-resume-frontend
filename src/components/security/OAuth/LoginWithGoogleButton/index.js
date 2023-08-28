import React from "react";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID =
  "945407217800-shoebriah98d6s23l0jgan5c1k7cpfdt.apps.googleusercontent.com";

function LoginWithGoogleButton(res) {
  function onSuccess() {
    console.log("LOGIN SUCCESSFUL::", res);
  }
  function onFailure(res) {
    console.log("LOGIN SUCCESSFUL::", res);
  }
  return (
    <div className="" id="signInButton">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText=""
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginWithGoogleButton;
