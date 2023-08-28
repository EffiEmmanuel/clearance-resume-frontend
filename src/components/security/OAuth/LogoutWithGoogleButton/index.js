import React from "react";
import { GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "945407217800-shoebriah98d6s23l0jgan5c1k7cpfdt.apps.googleusercontent.com";

function LogoutWithGoogleButton() {
  function onSuccess() {
    console.log("LOGOUT SUCCESSFUL");
  }
  function onFailure() {
    console.log("LOGOUT FAILED");
  }

  return (
    <div className="" id="signInButton">
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText=""
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogoutWithGoogleButton;
