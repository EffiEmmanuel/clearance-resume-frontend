import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "..";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { AiFillCheckCircle } from "react-icons/ai";

// Images
import resumeSample from "../../../../assets/images/resume.png";
import mastercardLogo from "../../../../assets/images/mastercardLogo.svg";
import visaLogo from "../../../../assets/images/visaLogo.svg";
import americanExpressLogo from "../../../../assets/images/americanExpressLogo.svg";
import paypalLogo from "../../../../assets/images/paypalLogo.svg";

export default function Payment() {
  const { user, projects } = useContext(UserContext);

  // Tab states
  const [isPaymentPlans, setIsPaymentPlans] = useState(true);
  const [isBillingInformations, setIsBillingInformations] = useState(false);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-12 relative text-clearanceDarkBlue">
        <div className="flex justify-between items-center border-b-[3px] border-b-clearanceDarkBlue">
          <h2
            onClick={() => {
              setIsPaymentPlans(true);
              setIsBillingInformations(false);
            }}
            className={`text-[1rem] cursor-pointer ${
              isPaymentPlans
                ? "text-clearanceDarkBlue font-bold border-b-clearanceDarkBlue border-b-[3px]"
                : "text-[#323232]"
            }`}
          >
            Payment Plans
          </h2>
          <h2
            onClick={() => {
              setIsPaymentPlans(false);
              setIsBillingInformations(true);
            }}
            className={`text-[1rem] cursor-pointer ${
              isBillingInformations
                ? "text-clearanceDarkBlue font-bold border-b-clearanceDarkBlue border-b-[3px]"
                : "text-[#323232]"
            }`}
          >
            Billing Informations
          </h2>
        </div>

        {isPaymentPlans && (
          <div className="w-full flex lg:overflow-x-hidden overflow-x-scroll">
            {/* COL 1 */}
            <div className="max-w-[200px]">
              <div className="p-3 h-32 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <h2 className="font-semibold text-xl">Compare Plans</h2>
                <p className="text-[#323232] mt-2">
                  Choose the right plan for you
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">Create optimized resumes</p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Copy and paste content from site
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">Unlimited resume edits</p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Unlimited resume downloads
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Organize resumes in folders
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Save multiple variations of resume
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Save resume as .pdf, .docx, or .gdo
                </p>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <p className="text-[#323232] mt-2">
                  Add unlimited teammates to account
                </p>
              </div>
            </div>
            {/* COL 2 */}
            <div className="max-w-[200px]">
              <div className="p-3 h-32 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <h2 className="font-semibold text-2xl text-center">
                  Free{" "}
                  <small className="text-xs text-[#323232]">/Lifetime</small>
                </h2>

                <button
                  onClick={() => {}}
                  className="w-44 mt-2 rounded-lg h-10 flex items-center justify-center bg-clearanceDarkBlue text-white"
                >
                  Choose This Plan
                </button>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px] flex items-center justify-center">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>
            </div>
            {/* COL 3 */}
            <div className="max-w-[200px]">
              <div className="p-3 h-32 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <h2 className="font-semibold text-2xl text-center">
                  $50{" "}
                  <small className="text-xs text-[#323232]">
                    /One Time Purchase
                  </small>
                </h2>

                <button
                  onClick={() => {}}
                  className="w-44 mt-2 rounded-lg h-10 flex items-center justify-center bg-clearanceDarkBlue text-white"
                >
                  Choose This Plan
                </button>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px] flex items-center justify-center"></div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>
            </div>
            {/* COL 4 */}
            <div className="max-w-[200px]">
              <div className="p-3 h-32 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <h2 className="font-semibold text-2xl text-center">
                  $40 <small className="text-xs text-[#323232]">Premium</small>
                </h2>

                <button
                  onClick={() => {}}
                  className="w-44 mt-2 rounded-lg h-10 flex items-center justify-center bg-clearanceDarkBlue text-white"
                >
                  Choose This Plan
                </button>
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]"></div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px] flex items-center justify-center"></div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>
            </div>
            {/* COL 5 */}
            <div className="max-w-[200px]">
              <div className="p-3 h-32 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <h2 className="font-semibold text-2xl text-center">
                  $100{" "}
                  <small className="text-xs text-[#323232]">Enterprise</small>
                </h2>

                <button
                  onClick={() => {}}
                  className="w-44 mt-2 rounded-lg h-10 flex items-center justify-center bg-clearanceDarkBlue text-white"
                >
                  Choose This Plan
                </button>
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px] flex items-center justify-center">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>

              <div className="p-3 h-24 flex items-center justify-center border-b-clearanceDarkBlue border-b-[1px] border-r-clearanceDarkBlue border-r-[1px]">
                <AiFillCheckCircle size={24} className="text-clearancePink" />
              </div>
            </div>
          </div>
        )}

        {isBillingInformations && (
          <div className="mt-7">
            <h2 className="font-semibold">Please choose your payment method</h2>

            <div className="flex lg:flex-row lg:justify-between lg:items-center mt-7 flex-col justify-center items-center gap-y-5">
              <div className="h-20 w-full lg:w-80 bg-white border-[3px] border-clearanceDarkBlue shadow-lg flex items-center justify-between p-3">
                <button onClick={() => {}}>
                  <img
                    src={mastercardLogo}
                    alt="Pay With MasterCard"
                    className=""
                  />
                </button>
                <button onClick={() => {}}>
                  <img src={visaLogo} alt="Pay With Visa" className="" />
                </button>
                <button onClick={() => {}}>
                  <img
                    src={americanExpressLogo}
                    alt="Pay With American Express"
                    className=""
                  />
                </button>
              </div>
              <div className="h-20 w-full lg:w-80 bg-white border-[3px] border-clearanceDarkBlue shadow-lg flex items-center justify-center p-3">
                <button onClick={() => {}}>
                  <img src={paypalLogo} alt="Pay With PayPal" className="" />
                </button>
              </div>
            </div>

            <hr className="border-[#323232] borer-[1px] my-20 mx-auto max-w-xl" />

            <div className="lg:px-24">
              <form className="" onSubmit={() => {}}>
                <div className="">
                  <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
                    <div className="flex items-center justify-between gap-x-6">
                      <div className="w-full relative my-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm absolute left-0"
                        >
                          First Name:
                        </label>
                        <input
                          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg border-[#323232]"
                          id="firstName"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="w-full relative my-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm absolute left-0"
                        >
                          Last Name:
                        </label>
                        <input
                          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg border-[#323232]"
                          id="lastName"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="w-full relative my-2">
                      <label
                        htmlFor="cardNumber"
                        className="text-sm absolute left-0"
                      >
                        Card Number:
                      </label>
                      <input
                        className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg border-[#323232]"
                        id="cardNumber"
                        type="number"
                        name="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />

                      {/* <img src={mastercardLogo} alt="" className="" /> */}
                      {/* <img src={visaLogo} alt="" className="" /> */}
                      {/* <img src={americanExpressLogo} alt="" className="" /> */}
                    </div>

                    <div className="flex items-center justify-between gap-x-6">
                      <div className="w-full relative my-2">
                        <label
                          htmlFor="expiryDate"
                          className="text-sm absolute left-0"
                        >
                          Expiry Date:
                        </label>
                        <input
                          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg border-[#323232]"
                          id="expiryDate"
                          type="date"
                          name="expiryDate"
                          placeholder="Expiry Date"
                        />
                      </div>

                      <div className="w-full relative my-2">
                        <label
                          htmlFor="cvv"
                          className="text-sm absolute left-0"
                        >
                          CVV:
                        </label>
                        <input
                          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg border-[#323232]"
                          id="cvv"
                          type="number"
                          name="cvv"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-center lg:mt-10 mt-10">
                    <button
                      type="submit"
                      className="rounded-lg text-white h-16 w-1/2 px-8 text-sm bg-clearanceDarkBlue"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
