import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "..";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";

// Images
import resumeSample from "../../../../assets/images/resume.png";

export default function DashboardHome() {
  const { user, projects } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState();

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-12 relative text-clearanceDarkBlue">
        <h2 className="text-xl font-bold">My Resumes</h2>

        <div className="flex gap-x-5 w-full mt-7">
          {/* LEFT PANE */}
          <div className="bg-white shadow-xl rounded-xl lg:w-auto min-h-[500px] p-5">
            <button
              onClick={() => {}}
              className="flex items-center gap-2 w-10 lg:w-[130px] mx-auto h-10 rounded-lg bg-clearancePink text-clearanceDarkBlue justify-center font-semibold"
            >
              <BiPlus size={16} className="" />
              <span className="hidden lg:inline-block text-sm">Add Folder</span>
            </button>

            <div className="mt-7 flex flex-col gap-y-10 text-center font-semibold">
              <Link to="">Folder Name</Link>
              <Link to="">Folder Name</Link>
              <Link to="">Folder Name</Link>
              <Link to="">Folder Name</Link>
            </div>
          </div>

          {/* RIGHT PANE */}
          <div className="bg-white shadow-xl rounded-xl w-full min-h-[500px] px-5 py-2">
            <div className="flex justify-between items-center">
              <div className="max-w-xl relative border-[2px] my-4 bg-transparent border-clearanceDarkBlue flex items-center rounded-lg px-5 gap-x-3">
                <input
                  className="w-full h-10 bg-cosretBlue- px-4 text-black text-sm focus:outline-none bg-transparent"
                  id="searchQuery"
                  type="text"
                  name="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                />

                <label htmlFor="searchQuery" className="text-sm inline-block">
                  <MdSearch size={20} className="text-clearanceDarkBlue" />
                </label>
              </div>

              <div className="flex items-center gap-x-4">
                <p className="hidden lg:inline-block">Filter</p>
                <GiSettingsKnobs
                  size={20}
                  className="text-clearanceDarkBlue rotate-90"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-y-5 gap-x-3 justify-center lg:justify-normal mt-5">
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
              {/* RESUME CARD */}
              <div className="h-[250px] w-[200px] bg-white rounded-xl">
                <div className="relative">
                  <img
                    src={resumeSample}
                    alt="Resume Sample Name"
                    className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                  />

                  <MdDelete
                    size={23}
                    onClick={() => {}}
                    className="text-red-500 absolute top-3 right-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                  <p className="font-semibold">Resume Name</p>
                  <CiMenuKebab size={20} className="rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
