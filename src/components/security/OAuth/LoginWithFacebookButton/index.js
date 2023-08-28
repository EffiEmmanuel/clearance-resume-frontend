import React from "react";
import { createSvgIcon, createButton } from "react-social-login-buttons";
import facebookLogo from "../../../../assets/logos/facebookLogo.svg";

const config = {
  text: "Log in with facebook",
  icon: "facebook",
  iconFormat: (name) => `fa fa-${name}`,
  style: {
    background: "#3b5998",
  },
  activeStyle: { background: "#293e69" },
};
/** My Facebook login button. */
const LoginWithFacebookButton = createButton(config);

export default LoginWithFacebookButton;
