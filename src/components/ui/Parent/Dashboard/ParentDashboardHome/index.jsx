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
import { MdBook, MdClass, MdList, MdShare } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import video from "../../../../../assets/images/video.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function ParentDashboardHome() {
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
        borderRadius: 200
      },
    ],
  };

  const options = {};

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full lg:w-[50%] xl:w-[60%] my-10">
          <div className="bg-solyntaBlue  w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <MdClass size={30} color="" className="text-solyntaBlue" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Attendances</p>
              <p className="font-semibold">5</p>
            </div>
          </div>
          <div className="bg-[#92AFDD] w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <TbUserX size={30} color="" className="text-solyntaBlue" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Absences</p>
              <p className="font-semibold">10</p>
            </div>
          </div>

          <div className="bg-solyntaBlue w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <MdList size={33} color="" className="text-solyntaBlue" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Subjects</p>
              <p className="font-semibold">9</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col xl:flex-row justify-between items-center md:flex-col gap-y-10 rounded-xl">
          <div className="p-10 w-full xl:w-1/2 bg-white shadow-md rounded-xl max-h-96 h-96">
            <div className="">
              <div className="flex justify-between text-solyntaBlue items-center mb-7">
                <h4 className="text-xl font-semibold">Assignments</h4>
                <small>View all</small>
              </div>
              <div className="flex flex-col gap-y-10">
                <div className="flex justify-between gap-x-5">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white shadow-xl rounded-lg h-10 p-2">
                      <TbMath size={24} className="text-solyntaBlue" />
                    </div>

                    <div className="">
                      <p className="font-bold text-black">Math</p>
                      <small className="text-gray-400">
                        Deadline 12 June 2023 (11:59 pm)
                      </small>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3 text-black">
                    <Link to="">
                      <GoLinkExternal size={28} className="text-gray-500" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between gap-x-5">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white shadow-xl rounded-lg h-10 p-2">
                      <TbDna2
                        size={24}
                        className="text-solyntaBlue rotate-45"
                      />
                    </div>

                    <div className="">
                      <p className="font-bold text-black">Biology</p>
                      <small className="text-gray-400">
                        Deadline 12 June 2023 (11:59 pm)
                      </small>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 text-black">
                    <Link to="">
                      <GoLinkExternal size={28} className="text-gray-500" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between gap-x-5">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white shadow-xl rounded-lg h-10 p-2">
                      <TbAtom size={24} className="text-solyntaBlue" />
                    </div>

                    <div className="">
                      <p className="font-bold text-black">Physics</p>
                      <small className="text-gray-400">
                        Deadline 12 June 2023 (11:59 pm)
                      </small>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3 text-black">
                    <Link to="">
                      <GoLinkExternal size={28} className="text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-black shadow-lg rounded-lg p-5 max-h-96 h-96 w-full xl:w-1/2 xl:ml-2">
            <h3 className="text-lg font-bold my-5">
              On Time Assignment Completion
            </h3>

            <div className="relative flex justify-center w-full gap-y-5">
              <CircularProgressbar
                value={70}
                maxValue={100}
                minValue={0}
                className="w-[200px] -rotate-90"
                text={``}
                // counterClockwise={true}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                  textColor: "#f88",
                  trailColor: "#fff",
                  backgroundColor: "#3e98c7",

                  text: {
                    // Text color
                    fill: "#f88",
                    // Text size
                    fontSize: "16px",
                    transform: "rotate(-90deg0",
                  },
                })}
              />
              <div className="absolute top-7 mx-auto">
                <CircularProgressbar
                  value={60}
                  maxValue={100}
                  minValue={0}
                  className="w-[150px] -rotate-90"
                  // text={`hi`}
                  // counterClockwise={true}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#D1D5DB`,
                    textColor: "#f88",
                    trailColor: "#fff",
                    backgroundColor: "#D1D5DB",

                    text: {
                      // Text color
                      fill: "#f88",
                      // Text size
                      fontSize: "16px",
                      transform: "rotate(0.25turn)",
                    },
                  })}
                />
              </div>

              <p className="absolute top-20 text-2xl text-solyntaBlue font-bold">
                70%
              </p>
            </div>

            <div className="flex gap-x-10 justify-center items-center mt-10">
              <div className="flex items-center gap-x-2">
                <div className="h-3 w-3 bg-solyntaBlue rounded-full"></div>
                <p className="text-gray-500">Progress</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                <p className="text-gray-500">Done</p>
              </div>
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-10">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">Total Revenue</p>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-solyntaYellow"></div>
                <small className="text-black">Earning</small>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                <small className="text-black">Expense</small>
              </div>
            </div>
          </div>

          <Bar className="" data={data} options={options}></Bar>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0">
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">Today, 06 June</h3>

            <div className="flex justify-between items-center gap-x-3">
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>04</p>
                <p>Sun</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>05</p>
                <p>Mon</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlue">
                <p>06</p>
                <p>Tue</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>07</p>
                <p>Wed</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>08</p>
                <p>Thu</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-black shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">Studying hours</h3>

            <div className="relative flex justify-center w-full gap-y-5">
              <CircularProgressbar
                value={70}
                maxValue={100}
                minValue={0}
                className="w-[200px] -rotate-90"
                text={``}
                // counterClockwise={true}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${100 / 100})`,
                  textColor: "#f88",
                  trailColor: "#fff",
                  backgroundColor: "#3e98c7",

                  text: {
                    // Text color
                    fill: "#f88",
                    // Text size
                    fontSize: "16px",
                    transform: "rotate(-90deg0",
                  },
                })}
              />
              <div className="absolute top-7 mx-auto">
                <CircularProgressbar
                  value={60}
                  maxValue={100}
                  minValue={0}
                  className="w-[150px] -rotate-90"
                  // text={`hi`}
                  // counterClockwise={true}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#D1D5DB`,
                    textColor: "#f88",
                    trailColor: "#fff",
                    backgroundColor: "#D1D5DB",

                    text: {
                      // Text color
                      fill: "#f88",
                      // Text size
                      fontSize: "16px",
                      transform: "rotate(0.25turn)",
                    },
                  })}
                />
              </div>

              <p className="absolute top-20 text-2xl text-solyntaBlue font-bold">
                70%
              </p>
            </div>

            <div className="flex gap-x-10 justify-center items-center mt-10">
              <div className="flex items-center gap-x-2">
                <div className="h-3 w-3 bg-solyntaBlue rounded-full"></div>
                <p className="text-gray-500">Progress</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                <p className="text-gray-500">Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
