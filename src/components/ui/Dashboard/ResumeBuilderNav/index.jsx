import { FaBug, FaHeadset, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MdArrowBack, MdChat, MdDashboard, MdPlayLesson } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BiBarChartSquare } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiSend, FiSettings } from "react-icons/fi";
import { TbLogout, TbNotes, TbProgress } from "react-icons/tb";
import { AiOutlineCreditCard, AiOutlineFile } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { LiaIdCardSolid } from "react-icons/lia";
import clearanceLogo from "../../../../assets/logos/logo.svg";
import { useState } from "react";
import DropdownComp from "../DropdownComp";

export default function ResumeBuilderNav({ isNavHidden, user, page }) {
  const router = useNavigate();

  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isUploadCenterOpen, setIsUploadCenterOpen] = useState(false);

  const [searcParams, setSearchParams] = useSearchParams();
  const resumeId = searcParams.get("resumeId");

  return (
    <nav
      className={`bg-clearanceDarkBlue text-white md:w-1/4 lg:w-1/5 z-10 fixed w-2/4 min-h-screen lg:block text-accountableBrightGreen pl-2 pt-7 top-0 left-0 ${
        isNavHidden ? "hidden" : "block"
      }`}
    >
      <Link to="/dashboard">
        <MdArrowBack size={32} className="text-white" />
      </Link>

      <ul className="-mt-0">
        {/* CATEGORY */}
        <li className="my-11">
          {/* ITEMS */}
          <ul className="mt-3">
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "template" && "text-clearancePink font-semibold"
              }`}
            >
              <Link
                to={`/dashboard/create-resume/template?resumeId=${resumeId}`}
                className="flex items-center gap-2"
              >
                <span className=" text-sm">Template</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "customization" && "text-clearancePink font-semibold"
              }`}
            >
              <Link
                to={`/dashboard/create-resume/customization?resumeId=${resumeId}`}
                className="flex items-center gap-2"
              >
                <span className=" text-sm">Customization</span>
              </Link>
            </li>
            <li className={`ml-7 -mt-4 pl-3 rounded-l-lg`}>
              <DropdownComp
                title="Advanced"
                links={
                  <>
                    <Link
                      to={`/dashboard/create-resume/advanced/job-description?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 ${
                        page == "job-description" &&
                        "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Job Description</span>
                    </Link>
                    <Link
                      to={`/dashboard/create-resume/advanced/parsing?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 mt-6 ${
                        page == "parsing" && "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Parsing</span>
                    </Link>
                  </>
                }
              />
            </li>
            <li className={`ml-7 pl-3 rounded-l-lg`}>
              <DropdownComp
                title="Informations"
                links={
                  <>
                    <Link
                      to={`/dashboard/create-resume/informations/personal-details?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 ${
                        page == "personal-details" &&
                        "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Personal Details</span>
                    </Link>
                    <Link
                      to={`/dashboard/create-resume/informations/education?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 mt-6 ${
                        page == "education" &&
                        "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Education</span>
                    </Link>
                    <Link
                      to={`/dashboard/create-resume/informations/work-experience?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 mt-6 ${
                        page == "work-experience" &&
                        "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Work Experience</span>
                    </Link>
                    <Link
                      to={`/dashboard/create-resume/informations/skills?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 mt-6 ${
                        page == "skills" && "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Skills</span>
                    </Link>
                    <Link
                      to={`/dashboard/create-resume/informations/achievements?resumeId=${resumeId}`}
                      className={`flex items-center gap-2 mt-6 ${
                        page == "achievements" &&
                        "text-clearancePink font-semibold"
                      }`}
                    >
                      <span className="text-sm">Achievements</span>
                    </Link>
                  </>
                }
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
