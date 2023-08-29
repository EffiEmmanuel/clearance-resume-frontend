import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../../";
import { BiPlus } from "react-icons/bi";
import { Link, useResolvedPath, useSearchParams } from "react-router-dom";
import { MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaAt,
  FaCalendar,
  FaLink,
  FaMapPin,
  FaPhone,
  FaRocket,
  FaSpinner,
} from "react-icons/fa";
import Modal from "react-modal";

// Images
import resumeSample from "../../../../../../assets/images/resume.png";
import pdf from "../../../../../../assets/logos/pdfLogo.svg";
import googleDocs from "../../../../../../assets/logos/docslogo.svg";
import msWord from "../../../../../../assets/logos/wordLogo.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

export default function PersonalDetails() {
  const { user, projects } = useContext(UserContext);

  const [downloadOptions, setDownloadOptions] = useState(false);

  // LOADING STATES
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // RESUME
  const [resume, setResume] = useState();

  // QUERY PARAMS
  const [searcParams, setSearchParams] = useSearchParams();
  const resumeId = searcParams.get("resumeId");

  // FORM FIELDS
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [graduationDate, setGraduationDate] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [linkedin, setLinkedin] = useState();

  async function saveProgress() {
    setIsSaving(true);
    await axios
      .patch(
        `http://3.23.64.240:8080/api/v1/users/resumes/update/${user?._id}/${resumeId}`,
        {
          firstName,
          lastName,
          graduationDate,
          location,
          email,
          phone,
          linkedin,
        }
      )
      .then((res) => {
        console.log("SAVE PROGRESS RESPONSE:", res.data);
        getResume();
        toast.success("Save Successful!");
        setIsSaving(false);
      })
      .catch((err) => {
        console.log("SAVE PROGRESS ERROR:", err);
        //   setIsSaving(false);
      });
  }

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

        //   PRE-FILL FORM FIELDS IF THEY EXIST ON THE RESUME ALREADY
        setFirstName(res.data?.resume?.firstName ?? "");
        setLastName(res.data?.resume?.lastName ?? "");
        setGraduationDate(res.data?.resume?.graduationDate ?? "");
        setLocation(res.data?.resume?.location ?? "");
        setEmail(res.data?.resume?.email ?? "");
        setPhone(res.data?.resume?.phone ?? "");
        setLinkedin(res.data?.resume?.linkedin ?? "");

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

      {/* LATEST ACTIVITY */}
      <section className="relative text-clearanceDarkBlue">
        <div className="flex gap-x-5 w-full">
          {/* LEFT PANE */}
          <div className="lg:w-[50%] w-full p-5">
            <div className="flex items-center gap-x-4">
              <h2 className="text-xl font-bold">Personal Informations</h2>
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

            {!isLoading && (
              <form className="mt-7" onSubmit={() => {}}>
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
                        className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                        value={graduationDate}
                        onChange={(e) => setGraduationDate(e.target.value)}
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
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                      />
                    </div>
                  </div>

                  <div className="w-full relative my-2">
                    <label htmlFor="email" className="text-sm absolute left-0">
                      E-mail:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="w-full relative my-2">
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm absolute left-0"
                    >
                      Phone Number:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="w-full relative my-2">
                    <label
                      htmlFor="linkedin"
                      className="text-sm absolute left-0"
                    >
                      Linkedin Account:
                    </label>
                    <input
                      className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                      id="linkedin"
                      type="url"
                      name="linkedin"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="Linkedin Account"
                    />
                  </div>
                </div>

                <button
                  className="h-14 px-7 mt-5 py-2 w-full rounded-full bg-clearanceDarkBlue text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    saveProgress();
                  }}
                >
                  {isSaving ? (
                    <FaSpinner className="my-auto mx-auto text-white text-center text-lg animate-spin" />
                  ) : (
                    "Save"
                  )}
                </button>
              </form>
            )}

            {isLoading && (
              <div className="mt-20">
                <FaSpinner className="my-auto mx-auto text-clearanceDarkBlue text-center text-2xl animate-spin" />
              </div>
            )}
          </div>

          {/* RIGHT PANE */}
          <div
            className={`lg:w-[55%] right-pane w-full p-5 hidden lg:inline-block`}
          >
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

                    <p className="my-1 mt-2 text-[.8rem]">
                      Company Description
                    </p>
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

                    <p className="my-1 mt-2 text-[.8rem]">
                      Company Description
                    </p>
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
