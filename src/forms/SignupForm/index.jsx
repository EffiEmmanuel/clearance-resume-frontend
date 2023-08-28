import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { MdLock, MdLockOutline, MdMailOutline, MdPerson } from "react-icons/md";
import SignupFormSchema from "./validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import jwt_decode from "jwt-decode";

// Logos
import facebookLogo from "../../assets/logos/facebookLogo.svg";
import linkedinLogo from "../../assets/logos/linkedinLogo.svg";
import googleLogo from "../../assets/logos/googleLogo.svg";
import { FaSpinner } from "react-icons/fa";
import { LoginSocialFacebook } from "reactjs-social-login";
import LoginWithFacebookButton from "../../components/security/OAuth/LoginWithFacebookButton";
import { useEffect } from "react";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  // Remember me - state
  const [rememberMe, setRememberMe] = useState();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post(`http://localhost:8080/api/v1/users/signup`, {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log("SIGNUP RESPONSE:", res.data);
        toast.success(res.data?.message);
        setIsLoading(false);
        Router("/auth/login");
      })
      .catch((err) => {
        console.log("SIGNUP ERROR:", err);
        toast.error(err?.response?.data?.message);
      });
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupFormSchema,
    onSubmit,
  });

  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleCallBackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log("GOOGLE SIGN IN RESPONSE:", userObject);

    setIsGoogleLoading(true);

    await axios
      .post(`http://localhost:8080/api/v1/users/oauth/google`, {
        fullName: `${userObject?.name}`,
        email: userObject?.email,
        password: userObject?.sub,
      })
      .then((res) => {
        console.log("GOOGLE RESPONSE:", res.data);
        setIsGoogleLoading(false);
        toast.success(
          "Authentication successful! Redirecting to your dashboard"
        );

        localStorage.setItem("token", JSON.stringify(res.data?.token));
        localStorage.setItem("user", JSON.stringify(res.data?.user));

        Router("/dashboard");
      })
      .catch((err) => {
        console.log("GOOGLE CODE ERROR:", err);
        if (err?.response?.status == 409) {
          toast.error(err?.response?.data?.message);
          setIsGoogleLoading(false);
        }
      });

    // TO-DO: Send API request to the DB to sign up user if account does not exist and to log in user
  }

  // GOOGLE OAUTH
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "945407217800-shoebriah98d6s23l0jgan5c1k7cpfdt.apps.googleusercontent.com",
      ux_mode: "popup",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "dark",
      //   type: "icon",
      //   size: "large",
      //   longtitle: false,
    });
  }, []);

  // FACEBOOK OAUTH
  async function loginWithFacebookResolve(response) {
    console.log("FACEBOOK LOGIN SUCCESS:", response.data);

    await axios
      .post(`http://localhost:8080/api/v1/users/oauth/facebook`, {
        fullName: response?.data?.full_name,
        email: response?.data?.email,
        password: response?.data?.id,
      })
      .then((res) => {
        console.log("LINKEDIN CODE RESPONSE:", res.data);
        setIsLoading(false);
        toast.success(
          "Authentication successful! Redirecting to your dashboard"
        );

        localStorage.setItem("token", JSON.stringify(res.data?.token));
        localStorage.setItem("user", JSON.stringify(res.data?.user));

        Router("/dashboard");
      })
      .catch((err) => {
        console.log("LINKEDIN CODE ERROR:", err);
        if (err?.response?.status == 409) {
          toast.error(err?.response?.data?.message);
          setIsLoading(false);
        }
      });
  }
  function loginWithFacebookReject(response) {
    console.log("FACEBOOK LOGIN FAILED:", response);
  }

  // LINKEDIN OAUTH
  async function handleLoginWithLinkedIn() {
    const REDIRECT_URL = "http%3A%2F%2Flocalhost%3A3000";
    const CLIENT_ID = "77ax1k2mcit2q9";
    const CLIENT_SECRET = "FNtQyVZ2FQGbCaMN";

    const URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=openid profile email&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;

    window.open(URL, "_self");
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code"); // LinkedIn response

  async function validateLinkedinCode() {
    if (code) setIsLoading(true);

    await axios
      .post(`http://localhost:8080/api/v1/users/oauth/linkedin`, {
        code: code,
      })
      .then((res) => {
        console.log("LINKEDIN CODE RESPONSE:", res.data);
        setIsLoading(false);
        toast.success(
          "Authentication successful! Redirecting to your dashboard"
        );

        localStorage.setItem("token", JSON.stringify(res.data?.token));
        localStorage.setItem("user", JSON.stringify(res.data?.user));

        Router("/dashboard");
      })
      .catch((err) => {
        console.log("LINKEDIN CODE ERROR:", err);
        if (err?.response?.status == 409) {
          toast.error(err?.response?.data?.message);
          setIsLoading(false);
        }
      });
  }

  useEffect(() => {
    if (code) validateLinkedinCode();
  }, [code]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="light"
      />
      <div className="my-10 flex flex-col justify-between">
        <div
          id="signInDiv"
          style={{
            display: "inline-block",
            background: "white",
            color: "#444",
            // width: "100%",
            // borderRadius: "40px",
            // overflow: "hidden",
            // border: "thin solid #888",
            // boxShadow: "1px 1px 1px grey",
            // whiteSpace: "nowrap",
          }}
        ></div>

        <LoginSocialFacebook
          appId="282477587821953"
          onResolve={loginWithFacebookResolve}
          onReject={loginWithFacebookReject}
          className="text-xs"
        >
          <img
            src={facebookLogo}
            alt="Sign up with Facebook"
            className="w-[20px] object-contain relative top-10 left-4"
          />
          <LoginWithFacebookButton />
        </LoginSocialFacebook>

        <button
          onClick={handleLoginWithLinkedIn}
          className="p-2 h-14 border-clearanceDarkBlue border-[0.7px] gap-x-3 flex items-center justify-center mt-5"
        >
          {!isLoading ? (
            <>
              <img
                src={linkedinLogo}
                alt="Sign in with Linkedin"
                className="w-[20px] object-contain"
              />

              <p>Sign up with LinkedIn</p>
            </>
          ) : (
            <FaSpinner className="my-auto mx-auto text-clearanceDarkBlue text-center text-2xl animate-spin" />
          )}
        </button>
      </div>
      <form
        className="flex flex-col mt-14 items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full relative border-[2px] my-4 bg-transparent border-clearanceDarkBlue flex items-center rounded-full px-5 gap-x-3">
          <label htmlFor="fullName" className="text-sm inline-block">
            <MdPerson size={20} className="text-clearanceDarkBlue" />
          </label>
          <input
            className="w-full h-14 rounded-full bg-cosretBlue- px-4 text-black text-sm focus:outline-none bg-transparent"
            id="fullName"
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />

          <p className="text-left mt-3 text-xs">
            {errors.fullName ? errors.fullName : ""}
          </p>
        </div>
        <div className="w-full relative border-[2px] my-4 bg-transparent border-clearanceDarkBlue flex items-center rounded-full px-5 gap-x-3">
          <label htmlFor="email" className="text-sm inline-block">
            <MdMailOutline size={20} className="text-clearanceDarkBlue" />
          </label>
          <input
            className="w-full h-14 rounded-full bg-cosretBlue- px-4 text-black text-sm focus:outline-none bg-transparent"
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email Address"
          />

          <p className="text-left mt-3 text-xs">
            {errors.email ? errors.email : ""}
          </p>
        </div>
        <div className="w-full relative border-[2px] my-4 bg-transparent border-clearanceDarkBlue flex items-center rounded-full px-5 gap-x-3">
          <label htmlFor="password" className="text-sm inline-block">
            <MdLockOutline size={20} className="text-clearanceDarkBlue" />
          </label>
          <input
            className="w-full h-14 rounded-full bg-cosretBlue- px-4 text-black text-sm focus:outline-none bg-transparent"
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <p className="text-left mt-3 text-xs">
            {errors.password ? errors.password : ""}
          </p>
        </div>

        {/* Action buttons */}
        <div className="w-full mt-4">
          <button
            type="submit"
            className="h-14 px-7 py-2 w-full rounded-full bg-clearanceDarkBlue text-white"
            onClick={() => {}}
          >
            {isLoading ? (
              <Dots size={28} color="#FFF" style={{ margin: 0 }} />
            ) : (
              "Sign Up"
            )}
          </button>
          {/* Don't have an account? */}
          <p className="text-center mt-8">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-clearanceDarkBlue font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
