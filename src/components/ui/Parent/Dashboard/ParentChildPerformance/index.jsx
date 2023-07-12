import { useContext } from "react";
import { UserContext } from "..";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { CiMenuKebab } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import student from "../../../../../assets/images/student.png";
import { MdCalendarToday, MdClass, MdSearch } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbDna2, TbMath } from "react-icons/tb";
import { PiAtom } from "react-icons/pi";
import { BsTranslate } from "react-icons/bs";
import { BiAtom } from "react-icons/bi";

// Register ChartJS
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function ParentChildPerformance() {
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

  // Line chart setup
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [60, 55, 65, 75, 65, 78],
        backgroundColor: "transparent",
        borderColor: "#FFD60C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        // min: 2,
        // max: 10,
        // ticks: {
        //   stepSize: 2,
        // },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-4 max-h-96 overflow-y-scroll">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">Assessment Scores</p>
          </div>

          <div className="flex items-center justify-between my-3">
            <small className="font-bold text-gray-400 w-1/4">
              The assessment name
            </small>
            <small className="text-gray-400 w-1/4">Grade</small>
            <small className="text-gray-400 w-1/4">Class average</small>
            <small className="text-gray-400 w-1/4">Feedback</small>
          </div>

          <hr />

          <div className="">
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Pre-Assessment</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Spelling Test</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">
                Reading Fluency Assessment
              </small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Vocabulary Quiz</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Problem-Solving Task</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
          </div>
        </div>

        <h3 className="text-xl text-white font-semibold mt-10 mb-5">
          Subject-wise Performance
        </h3>

        <div className="flex justify-between w-full lg:w-[50%] xl:w-[60%] items-center">
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

        <div className="w-full lg:w-[50%] xl:w-[60%] mt-10">
          <div className="flex flex-col gap-y-8">
            {/* ROW 1 */}
            <div className="flex items-center justify-between flex-wrap gap-y-5">
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <TbDna2 size={32} className="rotate-45" />
                  <p>Biology</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <BiAtom size={32} className="" />
                  <p>Physics</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <BsTranslate size={32} className="" />
                  <p>English</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <TbMath size={32} className="" />
                  <p>Maths</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex items-center justify-between flex-wrap gap-y-5">
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <TbDna2 size={32} className="rotate-45" />
                  <p>Biology</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <BiAtom size={32} className="" />
                  <p>Physics</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <BsTranslate size={32} className="" />
                  <p>English</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
              <div className="text-solyntaBlue bg-white h-[100px] max-h-[100px] min-h-[100px] w-[150px] rounded-lg">
                <div className="flex justify-end p-1 h-[5px]">
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
                <div className="flex justify-center items-center gap-x-2 h-[60px]">
                  <TbMath size={32} className="" />
                  <p>Maths</p>
                </div>
                <div className="bg-solyntaYellow h-[35px] rounded-lg flex items-center justify-center">
                  <p className="text-center font-bold">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0 lg:max-w-[30%] w-full">
          <div className="bg-solyntaYellow text-solyntaBlue shadow-lg rounded-lg p-5 max-h-96 h-96 w-full xl:ml-2">
            <h3 className="text-lg font-bold my-5">Overall Performance</h3>

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
                  trailColor: "#FFD60C",
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
                    trailColor: "#FFD60C",
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
          </div>

          <div className="bg-white text-black shadow-lg rounded-lg p-5 overflow-y-scroll lg:h-96">
            <h3 className="text-xl font-bold my-3">Completed Assignments</h3>

            <select
              name="subject"
              id="subject"
              className="w-full h-10 rounded-lg shadow-lg bg-cosretBlue-300 px-8 text-black text-sm mt-3 mb-5 focus:outline-none"
            >
              <option value="">Subject</option>
            </select>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
