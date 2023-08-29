import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../";
import { BiPlus } from "react-icons/bi";
import { Link, useSearchParams } from "react-router-dom";
import { MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import Modal from "react-modal";

// Images
import resumeSample from "../../../../../assets/images/resume.png";
import pdf from "../../../../../assets/logos/pdfLogo.svg";
import googleDocs from "../../../../../assets/logos/docslogo.svg";
import msWord from "../../../../../assets/logos/wordLogo.svg";
import {
  FaAt,
  FaCalendar,
  FaEnvelope,
  FaLink,
  FaMapPin,
  FaPhone,
  FaRocket,
  FaSpinner,
} from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Template() {
  const { user, projects } = useContext(UserContext);

  const [downloadOptions, setDownloadOptions] = useState(false);

  const [searcParams, setSearchParams] = useSearchParams();
  const resumeId = searcParams.get("resumeId");

  // LOADING STATES
  const [isLoading, setIsLoading] = useState(true);

  // RESUME
  const [resume, setResume] = useState();

  async function getResume() {
    setIsLoading(true);
    console.log("OVER HERE:");
    await axios
      .get(
        `http://3.23.64.240:8080/api/v1/users/resumes/get-resume/${user?._id}/${resumeId}`
      )
      .then((res) => {
        console.log("GET RESUME RESPONSE:", res.data);
        setResume(res.data.resume);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("GET RESUME ERROR:", err);
        //   setIsLoading(false);
      });
  }

  useEffect(() => {
    getResume();
  }, [resumeId]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
    const reactModal = document.querySelector(".ReactModalPortal");
    const resumeComp = document.querySelector("resume");
    console.log("reactModal::", reactModal);
    reactModal.style.position = "fixed";
    reactModal.style.zIndex = "90";
    //   reactModal?.styles.zIndex = '90'
  }
  function closeModal() {
    console.log("Hey");
    setIsModalOpen(false);
  }

  // DOWNLOAD CTAs
  let resumeToDownload = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  function downloadAsPDF() {
    setIsDownloading(true);
    const capture = document.querySelector(".resume");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("/img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();

      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save(`${resume?.name}.pdf`);
      setIsDownloading(false);
    });
  }

  function Export2Word(filename = "") {
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";

    var html =
      preHtml + document.getElementById("resume")?.innerHTML + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();

    document.body.removeChild(downloadLink);
  }

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="relative text-clearanceDarkBlue">
        <div className="flex gap-x-5 w-full">
          {/* LEFT PANE */}
          <div className="lg:w-[45%] w-full p-5">
            <div className="flex items-center gap-x-4">
              <h2 className="text-xl font-bold">Choose a template</h2>
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

            <div className="flex flex-wrap gap-y-14 gap-x-3 justify-normal lg:justify-normal mt-5">
              {/* RESUME CARD */}
              <Link
                to={`/dashboard/create-resume/customization?resumeId=${resumeId}`}
                className="h-[200px] w-[150px]"
              >
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
              </Link>
            </div>
          </div>

          {/* RIGHT PANE */}
          <div className="lg:w-[55%] right-pane w-full p-5 hidden lg:inline-block">
            <div className="flex items-center justify-between relative">
              <h2 className="text-xl font-bold">Real-time Customization</h2>

              <AiOutlineDownload
                onClick={() => {
                  setDownloadOptions(true);
                  openModal();
                }}
                size={24}
                className="text-clearanceDarkBlue hidden lg:inline-block cursor-pointer"
              />
            </div>

            {resume && (
              <div
                className={`bg-white shadow-lg p-10 mt-5 max-h-screen overflow-scroll`}
                style={{
                  letterSpacing: resume?.letterSpacing,
                }}
              >
                <h2
                  style={{
                    fontSize: resume?.fontSize,
                    color: `${resume?.primaryColor}`,
                  }}
                  className="font-bold"
                >
                  {resume?.firstName || resume?.lastName
                    ? `${resume?.firstName} ${resume?.lastName}`
                    : "DENVER DAHL"}
                </h2>
                <p
                  className={`font-semibold text-[${resume?.secondaryColor}]`}
                  style={{
                    color: `${resume?.secondaryColor}`,
                  }}
                >
                  {resume?.jobTitle ? `${resume?.jobTitle}` : "Account Manager"}
                </p>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-x-1">
                    <FaPhone
                      size={12}
                      className={`text-[${resume?.secondaryColor}]`}
                      style={{
                        color: `${resume?.secondaryColor}`,
                      }}
                    />
                    <small className="text-md">
                      {resume?.phone ? `${resume?.phone}` : "+1234567890"}
                    </small>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <FaAt
                      size={12}
                      className={`text-[${resume?.secondaryColor}]`}
                      style={{
                        color: `${resume?.secondaryColor}`,
                      }}
                    />
                    <small className="text-md">
                      {resume?.email ? `${resume?.email}` : "example@gmail.com"}
                    </small>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <FaLink
                      size={12}
                      className={`text-[${resume?.secondaryColor}]`}
                      style={{
                        color: `${resume?.secondaryColor}`,
                      }}
                    />
                    <small className="text-md">
                      {resume?.linkedin
                        ? `${resume?.linkedin}`
                        : "LINKEDIN URL"}
                    </small>
                  </div>
                </div>
                <div className="flex items-center gap-x-1 mt12">
                  <FaMapPin
                    size={14}
                    className={`text-[${resume?.secondaryColor}]`}
                    style={{
                      color: `${resume?.secondaryColor}`,
                    }}
                  />
                  <small className="text-md">
                    {resume?.location ? `${resume?.location}` : "Location"}
                  </small>
                </div>

                {/* EXPERIENCE */}
                {resume?.experience?.length > 0 && (
                  <div className="mt-8">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        EXPERIENCE
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    {/* EXPERIENCE CARD */}
                    {resume?.experience?.map((experience) => (
                      <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: `${resume?.primaryColor}` }}
                        >
                          {experience?.position}
                        </h3>
                        <p
                          className="text-[.9rem] font-semibold"
                          style={{ color: `${resume?.secondaryColor}` }}
                        >
                          {experience?.companyName}
                        </p>

                        <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                          <div className="flex items-center gap-x-1">
                            <FaCalendar size={12} className="text-gray-400" />
                            <small className="text-md">
                              From {experience?.startDate} to{" "}
                              {experience?.present
                                ? "Present"
                                : `${experience?.endDate}`}
                            </small>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <FaMapPin size={12} className="text-gray-400" />
                            <small className="text-md">
                              {experience?.location}
                            </small>
                          </div>
                        </div>

                        <p className="my-1 mt-2 text-[.8rem]">
                          {experience?.additionalInfo}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {!(resume?.experience?.length > 0) && (
                  <div className="mt-8">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        EXPERIENCE
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    {/* EXPERIENCE CARD */}
                    <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: `${resume?.primaryColor}` }}
                      >
                        Position / Role
                      </h3>
                      <p
                        className="text-[.9rem] font-semibold"
                        style={{ color: `${resume?.secondaryColor}` }}
                      >
                        Company Name
                      </p>

                      <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                        <div className="flex items-center gap-x-1">
                          <FaCalendar size={12} className="text-gray-400" />
                          <small className="text-md">
                            From 23/03/2022 to 23/04/2022
                          </small>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <FaMapPin size={12} className="text-gray-400" />
                          <small className="text-md">Remote</small>
                        </div>
                      </div>

                      <p className="my-1 mt-2 text-[.8rem]">
                        Company Description
                      </p>
                    </div>
                  </div>
                )}

                {/* EDUCATION */}
                {resume?.education?.length > 0 && (
                  <div className="mt-6">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        EDUCATION
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    {/* EXPERIENCE CARD */}
                    {resume?.education?.map((education) => (
                      <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: resume?.primaryColor }}
                        >
                          {education?.courseOfStudy}
                        </h3>
                        <p
                          className="text-[.9rem] font-semibold"
                          style={{ color: `${resume?.secondaryColor}` }}
                        >
                          {education?.institutionName}
                        </p>

                        <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                          <div className="flex items-center gap-x-1">
                            <FaCalendar size={12} className="text-gray-400" />
                            <small className="text-md">
                              {education?.graduationDate}
                            </small>
                          </div>
                          <div className="flex items-center gap-x-1">
                            <FaMapPin size={12} className="text-gray-400" />
                            <small className="text-md">
                              {education?.location}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!(resume?.education?.length > 0) && (
                  <div className="mt-6">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        EDUCATION
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    {/* EXPERIENCE CARD */}

                    <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                      <h3 className="text-xl font-semibold">
                        Software Engineering
                      </h3>
                      <p
                        className="text-[.9rem] font-semibold"
                        style={{ color: `${resume?.secondaryColor}` }}
                      >
                        Harvard University
                      </p>

                      <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                        <div className="flex items-center gap-x-1">
                          <FaCalendar size={12} className="text-gray-400" />
                          <small className="text-md">
                            From 23/03/2022 to 01/06/2026
                          </small>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <FaMapPin size={12} className="text-gray-400" />
                          <small className="text-md">Location</small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* KEY ACHIEVEMENTS */}
                {resume?.achievement?.length > 0 && (
                  <div className="mt-6">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        KEY ACHIEVEMENTS
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-y-5 items-center gap-x-8 pt-5">
                      {resume?.achievement?.map((achievement) => (
                        <div className="my-2 border-b-[.5px] border-b-gray-200 pb-5 flex items-start gap-x-1">
                          <FaRocket
                            size={18}
                            className="text-clearanceDarkBlue"
                            style={{ color: `${resume?.secondaryColor}` }}
                          />
                          <div>
                            <h3
                              className="text-[1.1rem] font-semibold"
                              style={{
                                color: `${resume?.primaryColor}`,
                              }}
                            >
                              {achievement?.title}
                            </h3>
                            <p className="text-[0.8rem]">
                              {achievement?.reason}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {!(resume?.achievement?.length > 0) && (
                  <div className="mt-6">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        KEY ACHIEVEMENTS
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-y-5 items-center gap-x-8 pt-5">
                      <div className="my-2 border-b-[.5px] border-b-gray-200 pb-5 flex items-start gap-x-1">
                        <FaRocket
                          size={18}
                          className="text-clearanceDarkBlue"
                          style={{ color: `${resume?.secondaryColor}` }}
                        />
                        <div>
                          <h3
                            className="text-[1.1rem] font-semibold"
                            style={{
                              color: `${resume?.primaryColor}`,
                            }}
                          >
                            Achievement
                          </h3>
                          <p className="text-[0.8rem]">
                            Reason you are proud of this achievement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SKILLS */}
                {resume?.skill?.length > 0 && (
                  <div className="">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        SKILLS
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    <div className="flex items-center flex-wrap mt-3 gap-x-4 gap-y-3">
                      {resume?.skill?.map((skill) => (
                        <p className="underline">{skill?.name}</p>
                      ))}
                    </div>
                  </div>
                )}
                {!(resume?.skill?.length > 0) && (
                  <div className="">
                    <div className="">
                      <h2
                        style={{
                          fontSize: `${
                            Number(resume?.fontSize?.split("px")[0]) - 7
                          }px`,
                          color: `${resume?.primaryColor}`,
                        }}
                        className="font-bold"
                      >
                        SKILLS
                      </h2>
                      <div
                        className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                        style={{
                          backgroundColor: `${resume?.primaryColor}`,
                        }}
                      />
                    </div>

                    <div className="flex items-center flex-wrap mt-3 gap-x-4 gap-y-3">
                      <p className="underline">Skill 1</p>
                      <p className="underline">Skill 2</p>
                      <p className="underline">Skill 3</p>
                      <p className="underline">Skill 4</p>
                      <p className="underline">Skill 5</p>
                      <p className="underline">Skill 6</p>
                      <p className="underline">Skill 7</p>
                      <p className="underline">Skill 8</p>
                      <p className="underline">Skill 9</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {isLoading && (
              <FaSpinner className="my-auto mt-20 mx-auto text-clearanceDarkBlue text-center text-2xl animate-spin" />
            )}
            {/* 
            <div className="flex justify-between items-center">
              <img
                src={resumeSample}
                alt="Resume file name"
                className="object-contain w-full h-full"
              />
            </div> */}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="shadow-lg mx-auto mt-[100px] h-auto lg:px-32"
      >
        <div className="">
          <div className="absolute flex flex-col gap-y-5 top-10 right-5 h-auto w-auto p-4 bg-white shadow-lg rounded-lg">
            <small className="text-sm">Download as:</small>
            <ReactToPrint
              trigger={() => {
                return (
                  <div
                    className="flex items-center gap-x-2 cursor-pointer"
                    // onClick={downloadAsPDF}
                  >
                    <img src={pdf} alt="Download as PDF" className="" />
                    <h2 className="text-sm font-bold">PDF</h2>
                  </div>
                );
              }}
              content={() => resumeToDownload}
              documentTitle={`${resume?.name}`}
              pageStyle="print"
            />
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => {
                Export2Word(`${resume?.name}`);
              }}
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
              onClick={() => {
                Export2Word(`${resume?.name}`);
              }}
            >
              <img
                src={msWord}
                alt="Download as Microsoft Word Document"
                className=""
              />
              <h2 className="text-sm font-bold">Word</h2>
            </div>
          </div>
        </div>
      </Modal>
      {isModalOpen && (
        <div className={`right-pane w-full p-5 hidden lg:inline-block`}>
          {resume && (
            <div
              className={`resume bg-white p-10`}
              id="resume"
              style={{
                letterSpacing: resume?.letterSpacing,
              }}
              ref={(el) => (resumeToDownload = el)}
            >
              <h2
                style={{
                  fontSize: resume?.fontSize,
                  color: `${resume?.primaryColor}`,
                }}
                className="font-bold"
              >
                {resume?.firstName || resume?.lastName
                  ? `${resume?.firstName} ${resume?.lastName}`
                  : "DENVER DAHL"}
              </h2>
              <p
                className={`font-semibold text-[${resume?.secondaryColor}]`}
                style={{
                  color: `${resume?.secondaryColor}`,
                }}
              >
                {resume?.jobTitle ? `${resume?.jobTitle}` : "Account Manager"}
              </p>
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-x-1">
                  <FaPhone
                    size={12}
                    className={`text-[${resume?.secondaryColor}]`}
                    style={{
                      color: `${resume?.secondaryColor}`,
                    }}
                  />
                  <small className="text-md">
                    {resume?.phone ? `${resume?.phone}` : "+1234567890"}
                  </small>
                </div>
                <div className="flex items-center gap-x-1">
                  <FaAt
                    size={12}
                    className={`text-[${resume?.secondaryColor}]`}
                    style={{
                      color: `${resume?.secondaryColor}`,
                    }}
                  />
                  <small className="text-md">
                    {resume?.email ? `${resume?.email}` : "example@gmail.com"}
                  </small>
                </div>
                <div className="flex items-center gap-x-1">
                  <FaLink
                    size={12}
                    className={`text-[${resume?.secondaryColor}]`}
                    style={{
                      color: `${resume?.secondaryColor}`,
                    }}
                  />
                  <small className="text-md">
                    {resume?.linkedin ? `${resume?.linkedin}` : "LINKEDIN URL"}
                  </small>
                </div>
              </div>
              <div className="flex items-center gap-x-1 mt12">
                <FaMapPin
                  size={14}
                  className={`text-[${resume?.secondaryColor}]`}
                  style={{
                    color: `${resume?.secondaryColor}`,
                  }}
                />
                <small className="text-md">
                  {resume?.location ? `${resume?.location}` : "Location"}
                </small>
              </div>
              {/* EXPERIENCE */}
              <div className="mt-8">
                <div className="">
                  <h2
                    style={{
                      fontSize: `${
                        Number(resume?.fontSize?.split("px")[0]) - 7
                      }px`,
                      color: `${resume?.primaryColor}`,
                    }}
                    className="font-bold"
                  >
                    EXPERIENCE
                  </h2>
                  <div
                    className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                    style={{
                      backgroundColor: `${resume?.primaryColor}`,
                    }}
                  />
                </div>

                {/* EXPERIENCE CARD */}
                {resume?.experience?.map((experience) => (
                  <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: `${resume?.primaryColor}` }}
                    >
                      {experience?.position}
                    </h3>
                    <p
                      className="text-[.9rem] font-semibold"
                      style={{ color: `${resume?.secondaryColor}` }}
                    >
                      {experience?.companyName}
                    </p>

                    <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                      <div className="flex items-center gap-x-1">
                        <FaCalendar size={12} className="text-gray-400" />
                        <small className="text-md">
                          From {experience?.startDate} to{" "}
                          {experience?.isPresent
                            ? "Present"
                            : `${experience?.endDate}`}
                        </small>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <FaMapPin size={12} className="text-gray-400" />
                        <small className="text-md">
                          {experience?.location}
                        </small>
                      </div>
                    </div>

                    <p className="my-1 mt-2 text-[.8rem]">
                      {experience?.additionalInfo}
                    </p>
                  </div>
                ))}

                {/* EXPERIENCE CARD */}
                <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: `${resume?.primaryColor}` }}
                  >
                    Key Account Manager
                  </h3>
                  <p
                    className="text-[.9rem] font-semibold"
                    style={{ color: `${resume?.secondaryColor}` }}
                  >
                    Company Name
                  </p>

                  <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                    <div className="flex items-center gap-x-1">
                      <FaCalendar size={12} className="text-gray-400" />
                      <small className="text-md">
                        From 23/03/2003 to Present
                      </small>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <FaMapPin size={12} className="text-gray-400" />
                      <small className="text-md">Location</small>
                    </div>
                  </div>

                  <p className="my-1 mt-2 text-[.8rem]">Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                </div>

                {/* EXPERIENCE CARD */}
                <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: `${resume?.primaryColor}` }}
                  >
                    Key Account Manager
                  </h3>
                  <p
                    className="text-[.9rem] font-semibold"
                    style={{ color: `${resume?.secondaryColor}` }}
                  >
                    Company Name
                  </p>

                  <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                    <div className="flex items-center gap-x-1">
                      <FaCalendar size={12} className="text-gray-400" />
                      <small className="text-md">
                        From 23/03/2003 to Present
                      </small>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <FaMapPin size={12} className="text-gray-400" />
                      <small className="text-md">Location</small>
                    </div>
                  </div>

                  <p className="my-1 mt-2 text-[.8rem]">Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                  <p className="text-[.8rem]">. Company Description</p>
                </div>
              </div>

              {/* EDUCATION */}
              {resume?.education?.length > 0 && (
                <div className="mt-6">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      EDUCATION
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  {/* EXPERIENCE CARD */}
                  {resume?.education?.map((education) => (
                    <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: resume?.primaryColor }}
                      >
                        {education?.courseOfStudy}
                      </h3>
                      <p
                        className="text-[.9rem] font-semibold"
                        style={{ color: `${resume?.secondaryColor}` }}
                      >
                        {education?.institutionName}
                      </p>

                      <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                        <div className="flex items-center gap-x-1">
                          <FaCalendar size={12} className="text-gray-400" />
                          <small className="text-md">
                            {education?.graduationDate}
                          </small>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <FaMapPin size={12} className="text-gray-400" />
                          <small className="text-md">
                            {education?.location}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!(resume?.education?.length > 0) && (
                <div className="mt-6">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      EDUCATION
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  {/* EXPERIENCE CARD */}

                  <div className="my-6 border-b-[.5px] border-b-gray-200 pb-5">
                    <h3 className="text-xl font-semibold">
                      Software Engineering
                    </h3>
                    <p
                      className="text-[.9rem] font-semibold"
                      style={{ color: `${resume?.secondaryColor}` }}
                    >
                      Harvard University
                    </p>

                    <div className="flex gap-x-4 items-center mt-1 text-gray-400">
                      <div className="flex items-center gap-x-1">
                        <FaCalendar size={12} className="text-gray-400" />
                        <small className="text-md">
                          From 23/03/2022 to 01/06/2026
                        </small>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <FaMapPin size={12} className="text-gray-400" />
                        <small className="text-md">Location</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KEY ACHIEVEMENTS */}
              {resume?.achievement?.length > 0 && (
                <div className="mt-6">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      KEY ACHIEVEMENTS
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-y-5 items-center gap-x-8 pt-5">
                    {resume?.achievement?.map((achievement) => (
                      <div className="my-2 border-b-[.5px] border-b-gray-200 pb-5 flex items-start gap-x-1">
                        <FaRocket
                          size={18}
                          className="text-clearanceDarkBlue"
                          style={{ color: `${resume?.secondaryColor}` }}
                        />
                        <div>
                          <h3
                            className="text-[1.1rem] font-semibold"
                            style={{
                              color: `${resume?.primaryColor}`,
                            }}
                          >
                            {achievement?.title}
                          </h3>
                          <p className="text-[0.8rem]">{achievement?.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {!(resume?.achievement?.length > 0) && (
                <div className="mt-6">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      KEY ACHIEVEMENTS
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-y-5 items-center gap-x-8 pt-5">
                    <div className="my-2 border-b-[.5px] border-b-gray-200 pb-5 flex items-start gap-x-1">
                      <FaRocket
                        size={18}
                        className="text-clearanceDarkBlue"
                        style={{ color: `${resume?.secondaryColor}` }}
                      />
                      <div>
                        <h3
                          className="text-[1.1rem] font-semibold"
                          style={{
                            color: `${resume?.primaryColor}`,
                          }}
                        >
                          Achievement
                        </h3>
                        <p className="text-[0.8rem]">
                          Reason you are proud of this achievement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {resume?.skill?.length > 0 && (
                <div className="">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      SKILLS
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  <div className="flex items-center flex-wrap mt-3 gap-x-4 gap-y-3">
                    {resume?.skill?.map((skill) => (
                      <p className="underline">{skill?.name}</p>
                    ))}
                  </div>
                </div>
              )}
              {!(resume?.skill?.length > 0) && (
                <div className="">
                  <div className="">
                    <h2
                      style={{
                        fontSize: `${
                          Number(resume?.fontSize?.split("px")[0]) - 7
                        }px`,
                        color: `${resume?.primaryColor}`,
                      }}
                      className="font-bold"
                    >
                      SKILLS
                    </h2>
                    <div
                      className={`h-1 w-full bg-[${resume?.primaryColor}]`}
                      style={{
                        backgroundColor: `${resume?.primaryColor}`,
                      }}
                    />
                  </div>

                  <div className="flex items-center flex-wrap mt-3 gap-x-4 gap-y-3">
                    <p className="underline">Skill 1</p>
                    <p className="underline">Skill 2</p>
                    <p className="underline">Skill 3</p>
                    <p className="underline">Skill 4</p>
                    <p className="underline">Skill 5</p>
                    <p className="underline">Skill 6</p>
                    <p className="underline">Skill 7</p>
                    <p className="underline">Skill 8</p>
                    <p className="underline">Skill 9</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {isLoading && (
            <FaSpinner className="my-auto mt-20 mx-auto text-clearanceDarkBlue text-center text-2xl animate-spin" />
          )}
          {/* 
            <div className="flex justify-between items-center">
              <img
                src={resumeSample}
                alt="Resume file name"
                className="object-contain w-full h-full"
              />
            </div> */}
        </div>
      )}
    </>
  );
}
