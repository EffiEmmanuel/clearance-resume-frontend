import React, { useRef } from "react";
import clearanceLogo from "../../../assets/logos/black-logo.svg";
import clearanceLogoRight from "../../../assets/logos/logo.svg";
import circleAssetLeft from "../../../assets/images/circleAssetLeft.svg";
import SignupForm from "../../../forms/SignupForm";

function SignupPage() {
  return (
    <div className="flex flex-row-reverse min-h-screen text-clearanceDarkBlue">
      {/* Form */}
      <div className="lg:w-[40%] w-full py-10 lg:px-10 px-10">
        <div className="rounded-xl">
          <div className="w-full flex justify-end">
            <img
              src={clearanceLogo}
              alt="Solynta Academy"
              className="w-[80px]"
            />
          </div>
          <div className="px-16 mt-10">
            <div className="my-10">
              <h2 className={`font-semibold text-2xl`}>Hello!</h2>
              <p>
                Welcome to ClearanceResume, the only resume generator made for
                the cleared and military community.
              </p>
            </div>
            <SignupForm />
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
        <img
          src={circleAssetLeft}
          alt=""
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
}

export default SignupPage;
