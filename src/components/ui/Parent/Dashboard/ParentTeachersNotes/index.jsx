import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { PiStudentFill } from "react-icons/pi";
import { MdBook, MdClass, MdList, MdSearch, MdShare } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import video from "../../../../../assets/images/video.png";
import student from "../../../../../assets/images/student.png";
import { RiMessage2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import TeachersNote from "../TeachersNote";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function ParentTeachersNote() {
  const { user, projects } = useContext(UserContext);

  // Bar Chart Setup
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [20, 10, 20, 40, 30, 60],
        backgroundColor: "#FFD60C",
        borderWidth: 0.5,
        barThickness: 10,
        borderRadius: 200,
      },
    ],
  };

  const options = {};

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full lg:w-[50%] xl:w-[60%] my-10">
          <div className="flex bg-solyntaBlueFaded h-10 rounded-lg p-2">
            <MdSearch size={20} className="text-gray-600 my-auto" />
            <input
              type="text"
              name="search"
              className="bg-transparent text-sm placeholder:text-xs my-auto ml-2"
              placeholder="Search..."
            />
          </div>

          <div
            className="flex items-center gap-x-3 cursor-pointer"
            onClick={() => {}}
          >
            <span>Filter</span>
            <GiSettingsKnobs
              onClick={() => {}}
              size={20}
              className="text-white rotate-90"
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col xl:flex-row justify-between items-center md:flex-col gap-y-10 rounded-xl">
          <div className="text-black w-full min-h-[150px] bg-white shadow-md rounded-xl">
            <TeachersNote />
          </div>
        </div>

        <div className="w-full lg:w-[50%] mt-10 xl:w-[60%] flex flex-col xl:flex-row justify-between items-center md:flex-col gap-y-10 rounded-xl">
          <div className="text-black w-full min-h-[150px] bg-white shadow-md rounded-xl">
            <TeachersNote />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black items-end flex lg:max-w-[30%] w-full flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0">
          <div className="w-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center justify-between">
              <RiMessage2Line size={20} className="text-solyntaBlue" />
              <CiMenuKebab size={20} className="text-solyntaBlue rotate-90" />
            </div>

            <img src={student} alt="Student" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">Student Name</h3>
            <p className="text-gray-500 text-center">Class</p>
          </div>
        </div>
      </section>
    </>
  );
}
