import React, { useRef } from "react";
import clearanceLogo from "../../../assets/logos/black-logo.svg";
import clearanceLogoRight from "../../../assets/logos/logo.svg";
import LoginForm from "../../../forms/LoginForm";
import circleAsset from "../../../assets/images/circleAsset.svg";

function LoginPage() {
  return (
    <div className="flex min-h-screen text-clearanceDarkBlue">
      {/* Form */}
      <div className="lg:w-[40%] w-full py-10 lg:px-10 px-10">
        <div className="rounded-xl">
          <div className="">
            <img
              src={clearanceLogo}
              alt="Solynta Academy"
              className="w-[80px]"
            />
          </div>
          <div className="px-16 mt-20">
            <div className="my-10">
              <h2 className={`font-semibold text-2xl`}>Hello again!</h2>
              <p>Login to start creating resumes</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="lg:w-[60%] hidden relative lg:inline-block bg-gradient-to-br from-clearanceDarkBlue to-clearanceLightBlue">
        <div className="px-10 w-full h-full flex items-center justify-center">
          <img
            src={clearanceLogoRight}
            alt="Clearance Resume"
            className="max-w-xl"
          />
        </div>
        <img src={circleAsset} alt="" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

export default LoginPage;
