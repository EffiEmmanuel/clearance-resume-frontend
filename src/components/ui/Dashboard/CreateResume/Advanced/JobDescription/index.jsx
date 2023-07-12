import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../../";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";

// Images
import resumeSample from "../../../../../../assets/images/resume.png";
import pdf from "../../../../../../assets/logos/pdfLogo.svg";
import googleDocs from "../../../../../../assets/logos/docslogo.svg";
import msWord from "../../../../../../assets/logos/wordLogo.svg";

export default function JobDescription() {
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
              <h2 className="text-xl font-bold">Targeted Job Description</h2>
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
              <div className="w-full relative my-2">
                <label htmlFor="JobTitle" className="text-sm absolute left-0">
                  Job Title:
                </label>
                <input
                  className="w-full h-16 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                  id="JobTitle"
                  type="text"
                  name="JobTitle"
                  placeholder="Job Title"
                />
              </div>

              <div className="mt-5">
                <div className="w-full relative my-2">
                  <label htmlFor="message" className="text-sm absolute left-0">
                    Message:
                  </label>
                  <textarea
                    className="w-full h-32 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </form>
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
