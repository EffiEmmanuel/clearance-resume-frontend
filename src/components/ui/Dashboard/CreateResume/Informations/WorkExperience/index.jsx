import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../../";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdAddCircle, MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";

// Images
import resumeSample from "../../../../../../assets/images/resume.png";
import pdf from "../../../../../../assets/logos/pdfLogo.svg";
import googleDocs from "../../../../../../assets/logos/docslogo.svg";
import msWord from "../../../../../../assets/logos/wordLogo.svg";

export default function WorkExperience() {
  const { user, projects } = useContext(UserContext);

  const [downloadOptions, setDownloadOptions] = useState(false);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="relative text-clearanceDarkBlue">
        <div className="flex gap-x-5 w-full">
          {/* LEFT PANE */}
          <div className="lg:w-[50%] w-full p-5">
            <div className="flex items-center gap-x-4">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <AiOutlineEye
                onClick={() => {}}
                size={24}
                className="text-clearanceDarkBlue lg:hidden"
              />
              <AiOutlineDownload
                onClick={() => {}}
                size={24}
                className="text-clearanceDarkBlue lg:hidden"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <form className="mt-7" onSubmit={() => {}}>
              <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
                <div className="flex items-center justify-between gap-x-6">
                  <div className="w-full relative my-2">
                    <label
                      htmlFor="institutionName"
                      className="text-sm absolute left-0"
                    >
                      Institution Name:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="institutionName"
                      type="text"
                      name="institutionName"
                      placeholder="Institution Name"
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
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-6">
                  <div className="w-full relative my-2">
                    <label
                      htmlFor="dateOfGraduation"
                      className="text-sm absolute left-0"
                    >
                      Date of Graduation:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="dateOfGraduation"
                      type="date"
                      name="dateOfGraduation"
                    />
                  </div>

                  <div className="w-full relative my-2">
                    <label
                      htmlFor="location"
                      className="text-sm absolute left-0"
                    >
                      Location:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="location"
                      type="text"
                      name="location"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="w-full relative my-2">
                  <label
                    htmlFor="additionalInformation"
                    className="text-sm absolute left-0"
                  >
                    Additional Informations:
                  </label>
                  <textarea
                    className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                    id="additionalInformation"
                    name="additionalInformation"
                    placeholder="Additional Information"
                  ></textarea>
                </div>
              </div>
            </form>

            <div
              onClick={() => {}}
              className="flex items-center gap-x-3 cursor-pointer text-[#103F91] mt-7"
            >
              <MdAddCircle size={24} className="" />
              <p>Add Work Experience</p>
            </div>
          </div>

          {/* RIGHT PANE */}
          <div className="lg:w-[45%] w-full p-5 hidden lg:inline-block">
            <div className="flex items-center justify-between relative">
              <h2 className="text-xl font-bold">Real-time Customization</h2>

              <AiOutlineDownload
                onClick={() => {
                  setDownloadOptions(true);
                }}
                size={24}
                className="text-clearanceDarkBlue hidden lg:inline-block cursor-pointer"
              />

              {downloadOptions && (
                <div className="absolute flex flex-col gap-y-5 top-0 right-0 h-auto w-auto p-4 bg-white shadow-lg rounded-lg">
                  <div
                    className="flex items-center gap-x-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <img src={pdf} alt="Download as PDF" className="" />
                    <h2 className="text-sm font-bold">PDF</h2>
                  </div>
                  <div
                    className="flex items-center gap-x-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <img
                      src={googleDocs}
                      alt="Download as Google Docs"
                      className=""
                    />
                    <h2 className="text-sm font-bold">Google Docs</h2>
                  </div>
                  <div
                    className="flex items-center gap-x-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <img
                      src={msWord}
                      alt="Download as Microsoft Word Document"
                      className=""
                    />
                    <h2 className="text-sm font-bold">Word</h2>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <img
                src={resumeSample}
                alt="Resume file name"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
