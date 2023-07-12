import { FaBug, FaHeadset, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdChat, MdDashboard, MdNote } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BiLibrary } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import solyntaLogo from "../../../../../assets/logos/solynta-logo.png";

export default function DashboardNav({ isNavHidden, user, page }) {
  const router = useNavigate();
  return (
    <nav
      className={`bg-white md:w-1/4 lg:w-1/5 z-10 fixed w-2/4 min-h-screen lg:block text-black pl-2 pt-7 top-0 left-0 ${
        isNavHidden ? "hidden" : "block"
      }`}
    >
      <img
        src={solyntaLogo}
        alt="Solynta Academy"
        className="max-w-[60px] mx-auto"
      />
      <ul className="mt-14">
        {/* CATEGORY */}
        <li className="my-11">
          {/* ITEMS */}
          <ul className="mt-3">
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "dashboard" && "bg-[#113775] text-white"
              }`}
            >
              <Link to="/parent/dashboard" className="flex items-center gap-2">
                <MdDashboard size={16} className="" />
                <span className=" text-sm">Dashboard</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "childs-performance" && "bg-[#113775] text-white"
              }`}
            >
              <Link to="/parent/dashboard/childs-performance" className="flex items-center gap-2">
                <GiGraduateCap size={16} className="" />
                <span className=" text-sm">Child's Performance</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "teachers-notes" && "bg-[#113775] text-white"
              }`}
            >
              <Link to="/parent/dashboard/teachers-notes" className="flex items-center gap-2">
                <MdNote size={16} className="" />
                <span className=" text-sm">Teacher's Notes</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "communication-tools" && "bg-[#113775] text-white"
              }`}
            >
              <Link to="/parent/dashboard/communication-tools" className="flex items-center gap-2">
                <MdChat size={16} className="" />
                <span className=" text-sm">Communication Tools</span>
              </Link>
            </li>
          </ul>
        </li>

        {/* CATEGORY */}
        <li className="my-11 absolute bottom-0">
          {/* ITEMS */}
          <ul className="mt-3">
            <li className="ml-7 my-4">
              <span
                onClick={() => {
                  localStorage.removeItem("token");
                  router("/auth/login");
                }}
                className="flex align-middle gap-2 mt-4"
              >
                <IoMdSettings size={16} className="my-auto" />
                <span className="my-auto">Settings</span>
              </span>
            </li>
            <li className="ml-7 my-4">
              <span
                onClick={() => {
                  localStorage.removeItem("token");
                  router("/auth/login");
                }}
                className="flex align-middle gap-2 mt-4"
              >
                <AiOutlineLogout size={16} className="my-auto" />
                <span className="my-auto">Log out</span>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
