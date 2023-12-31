import { FaBug, FaHeadset, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdChat, MdDashboard, MdPlayLesson } from "react-icons/md";
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
import Modal from "react-modal";
import CreateNewResumeForm from "../../../../forms/CreateNewResumeForm";

export default function DashboardNav({ isNavHidden, user, page }) {
  const Router = useNavigate();

  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isUploadCenterOpen, setIsUploadCenterOpen] = useState(false);

  const [isCreateNew, setIsCreateNew] = useState(false);
  function closeModal() {
    setIsCreateNew(false);
  }

  return (
    <>
      <Modal
        isOpen={isCreateNew}
        onRequestClose={closeModal}
        className="max-w-lg mx-auto mt-[120px]"
      >
        <div className="h-[350px] shadow-lg p-14 bg-white text-center">
          <h2 className="font-semibold text-lg">Create New Resume</h2>
          <CreateNewResumeForm setIsCreateNew={setIsCreateNew} />
        </div>
      </Modal>

      <nav
        className={`bg-clearanceDarkBlue text-white md:w-1/4 lg:w-1/5 z-10 fixed w-2/4 min-h-screen lg:block text-accountableBrightGreen pl-2 pt-7 top-0 left-0 ${
          isNavHidden ? "hidden" : "block"
        }`}
      >
        <img
          src={clearanceLogo}
          alt="Clearance Resume"
          className="w-[150px] mx-auto"
        />
        <ul className="-mt-0">
          {/* CATEGORY */}
          <li className="my-11">
            {/* ITEMS */}
            <ul className="mt-3">
              <li className={`my-8 ml-7 py-2 pl-3 rounded-l-lg pr-7`}>
                <button
                  // to="/dashboard/create-resume"
                  onClick={() => setIsCreateNew(true)}
                  className="flex items-center justify-center rounded-lg gap-2 w-full h-10 bg-clearancePink text-clearanceDarkBlue font-semibold"
                >
                  <span className=" text-sm">Create Resume</span>
                </button>
              </li>
              <li
                className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                  page == "my-resumes" && "text-clearancePink font-semibold"
                }`}
              >
                <Link to="/dashboard" className="flex items-center gap-2">
                  <AiOutlineFile size={16} className="" />
                  <span className=" text-sm">My Resumes</span>
                </Link>
              </li>
              <li
                className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                  page == "resume-formatting" &&
                  "text-clearancePink font-semibold"
                }`}
              >
                <Link
                  to="/dashboard/resume-formatting"
                  className="flex items-center gap-2"
                >
                  <FiFileText size={16} className="" />
                  <span className="text-sm">Resume Formatting</span>
                </Link>
              </li>
              <li
                className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                  page == "payment" && "text-clearancePink font-semibold"
                }`}
              >
                <Link
                  to="/dashboard/payment"
                  className="flex items-center gap-2"
                >
                  <AiOutlineCreditCard size={16} className="" />
                  <span className="text-sm">Payment</span>
                </Link>
              </li>
              <li
                className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                  page == "my-profile" && "text-clearancePink font-semibold"
                }`}
              >
                <Link
                  to="/dashboard/my-profile"
                  className="flex items-center gap-2"
                >
                  <LiaIdCardSolid size={16} className="" />
                  <span className="text-sm">My Profie</span>
                </Link>
              </li>
              <li
                className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                  page == "settings" && "text-clearancePink font-semibold"
                }`}
              >
                <Link
                  to="/dashboard/settings"
                  className="flex items-center gap-2"
                >
                  <FiSettings size={16} className="" />
                  <span className="text-sm">Settings</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="absolute bottom-0">
          <ul>
            <li className={`my-8 ml-7 py-2 pl-3 rounded-l-lg text-white`}>
              <div
                onClick={() => {
                  localStorage.clear();
                  Router("/");
                }}
                className="flex items-center gap-2"
              >
                <TbLogout size={16} className="" />
                <span className=" text-sm">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
