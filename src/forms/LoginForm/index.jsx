import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormSchema from "./validation";
import { useFormik } from "formik";

// Logos
import facebookLogo from "../../assets/logos/facebookLogo.svg";
import linkedinLogo from "../../assets/logos/linkedinLogo.svg";
import googleLogo from "../../assets/logos/googleLogo.svg";
import { MdLock, MdLockOutline, MdMailOutline } from "react-icons/md";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  // Remember me - state
  const [rememberMe, setRememberMe] = useState();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit,
  });

  return (
    <>
      <div className="my-10 flex items-center justify-between">
        <button
          onClick={() => {}}
          className="p-2 h-10 w-20 border-clearanceDarkBlue border-[0.7px] rounded-full flex items-center justify-center"
        >
          <img
            src={facebookLogo}
            alt="Sign in with Facebook"
            className="w-[20px] object-contain"
          />
        </button>
        <button
          onClick={() => {}}
          className="p-2 h-10 w-20 border-clearanceDarkBlue border-[0.7px] rounded-full flex items-center justify-center"
        >
          <img
            src={linkedinLogo}
            alt="Sign in with LinkedIn"
            className="w-[20px] object-contain"
          />
        </button>
        <button
          onClick={() => {}}
          className="p-2 h-10 w-20 border-clearanceDarkBlue border-[0.7px] rounded-full flex items-center justify-center"
        >
          <img
            src={googleLogo}
            alt="Sign in with Google"
            className="w-[20px] object-contain"
          />
        </button>
      </div>
      <form className="flex flex-col mt-14 items-center">
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

        {/* Don't have an account? */}
        <Link to="/" className="text-right text-clearanceDarkBlue w-full mt-3">
          Forgot Password?
        </Link>

        {/* Action buttons */}
        <div className="w-full mt-4">
          <button
            className="h-14 px-7 py-2 w-full rounded-full bg-clearanceDarkBlue text-white"
            onClick={() => {}}
          >
            Login
          </button>
          {/* Don't have an account? */}
          <p className="text-center mt-8">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-clearanceDarkBlue font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
