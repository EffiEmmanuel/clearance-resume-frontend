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
import DropFileInput from "../../../../../form/DropFileInput";

export default function Parsing() {
  const { user, projects } = useContext(UserContext);

  const [downloadOptions, setDownloadOptions] = useState(false);

  //   File drag and drop handler
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="relative text-clearanceDarkBlue">
        <div className="flex gap-x-5 w-full">
          {/* LEFT PANE */}
          <div className="lg:w-[50%] w-full p-5">
            <div className="flex items-center gap-x-4">
              <h2 className="text-xl font-bold">
                Upload existing informations
              </h2>
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

            <div className="mt-7">
              <h3 className="font-semibold mb-4">Upload a Resume</h3>
              <DropFileInput onFileChange={(files) => onFileChange(files)} />
            </div>

            <div className="flex items-center justify-center gap-x-3 my-7">
              <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
              <p className="text-gray-500">Or</p>
              <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
            </div>

            <div className="mt-7">
              <h3 className="font-semibold">Browse an existing resume</h3>

              <div className="flex flex-wrap gap-y-14 gap-x-3 justify-normal lg:justify-normal mt-5">
                {/* RESUME CARD */}
                <div className="h-[200px] w-[150px]">
                  <div className="relative">
                    <img
                      src={resumeSample}
                      alt="Resume Sample Name"
                      className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-start h-[70px] relative">
                    <p className="font-semibold">Resume Name</p>
                  </div>
                </div>
                {/* RESUME CARD */}
                <div className="h-[200px] w-[150px]">
                  <div className="relative">
                    <img
                      src={resumeSample}
                      alt="Resume Sample Name"
                      className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-start h-[70px] relative">
                    <p className="font-semibold">Resume Name</p>
                  </div>
                </div>
                {/* RESUME CARD */}
                <div className="h-[200px] w-[150px]">
                  <div className="relative">
                    <img
                      src={resumeSample}
                      alt="Resume Sample Name"
                      className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-start h-[70px] relative">
                    <p className="font-semibold">Resume Name</p>
                  </div>
                </div>
              </div>
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
