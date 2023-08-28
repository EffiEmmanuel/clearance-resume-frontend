import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "..";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete, MdFolder, MdSearch, MdSettings } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Images
import resumeSample from "../../../../assets/images/resume.png";
import axios from "axios";
import CreateNewFolderForm from "../../../../forms/CreateNewFolderForm";
import { FaSpinner } from "react-icons/fa";
import AddResumeToFolderForm from "../../../../forms/AddResumeToFolderForm";

export default function DashboardHome() {
  const { user, folders, setFolders } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState();

  const [isCreateNew, setIsCreateNew] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFoldersLoading, setIsFoldersLoading] = useState(true);
  const [currentFolder, setCurrentFolder] = useState();
  const [isAllResumes, setIsAllResumes] = useState(true);
  const [allResumes, setAllResumes] = useState();
  const [folderResumes, setFolderResumes] = useState();

  async function fetchFolderResumes(folderId) {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .get(
        `http://localhost:8080/api/v1/users/folders/get-folder/${folderId}/${user?._id}`
      )
      .then((res) => {
        console.log("GET FOLDER RESPONSE:", res.data);
        setCurrentFolder(res.data?.folder);
        setFolderResumes(res.data?.folder?.resumes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("LOGIN ERROR:", err);
        setIsLoading(false);
      });
  }

  async function fetchResumes() {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .get(
        `http://localhost:8080/api/v1/users/resumes/get-resumes/${user?._id}`
      )
      .then((res) => {
        console.log("GET RESUMES RESPONSE:", res.data);
        setFolderResumes(res.data?.resumes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("GET RESUMES ERROR:", err);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    if (isAllResumes) fetchResumes();
  }, [user?._id, isAllResumes]);

  useEffect(() => {
    async function getFolders() {
      setIsFoldersLoading(true);
      await axios
        .get(
          `http://localhost:8080/api/v1/users/folders/get-folders/${user?._id}`
        )
        .then((res) => {
          console.log("GET FOLDERS RESPONSE:", res.data);
          setFolders(res.data?.folders);
          setIsFoldersLoading(false);
        })
        .catch((err) => {
          console.log("GET FOLDERS ERROR:", err);
          //   setIsFoldersLoading(false);
        });
    }
    getFolders();
  }, [user?._id]);

  function closeModal() {
    setIsCreateNew(false);
  }

  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [currentResume, setCurrentResume] = useState();
  function closeFolderModal() {
    setIsFolderModalOpen(false);
  }

  async function deleteResume(resumeId) {
    setIsLoading(true);
    // Send API request here
    axios
      .delete(
        `http://localhost:8080/api/v1/users/resumes/delete/${user?._id}/${resumeId}`
      )
      .then((res) => {
        console.log("RESPONSE;", res.data);
        toast.success("Resume deleted successfully!");
        fetchResumes();
        // const updateFolders = folders?.push(res.data?.folder);
        // setFolders(updateFolders);
        // window.location.reload();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        toast.success("Resume delete failed. Please try again");
      });
  }

  return (
    <div>
      <Modal
        isOpen={isCreateNew}
        onRequestClose={closeModal}
        className="bg-red-500 max-w-lg mx-auto mt-[120px]"
      >
        <div className="h-[350px] shadow-lg p-14 bg-white text-center">
          <h2 className="font-semibold text-lg">Add New Folder</h2>
          <CreateNewFolderForm setIsCreateNew={setIsCreateNew} />
        </div>
      </Modal>

      <Modal
        isOpen={isFolderModalOpen}
        onRequestClose={closeFolderModal}
        className="bg-red-500 max-w-lg mx-auto mt-[120px]"
      >
        <div className="h-[350px] shadow-lg p-14 bg-white text-center">
          <h2 className="font-semibold text-lg">Add Resume to Folder</h2>
          <AddResumeToFolderForm
            resume={currentResume}
            setIsFolderModalOpen={setIsFolderModalOpen}
          />
        </div>
      </Modal>

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
      <section className="mt-12 relative text-clearanceDarkBlue">
        <h2 className="text-xl font-bold">My Resumes</h2>

        <div className="flex gap-x-5 w-full mt-7">
          {/* LEFT PANE */}
          <div className="bg-white shadow-xl rounded-xl lg:w-auto min-h-[500px] p-5">
            <button
              onClick={() => {
                setIsCreateNew(true);
              }}
              className="flex items-center gap-2 w-10 lg:w-[130px] mx-auto h-10 rounded-lg bg-clearancePink text-clearanceDarkBlue justify-center font-semibold"
            >
              <BiPlus size={16} className="" />
              <span className="hidden lg:inline-block text-sm">Add Folder</span>
            </button>

            <div className={`mt-7 flex flex-col gap-y-10 text-center`}>
              {
                <button
                  onClick={() => {
                    setFolderResumes([]);
                    setCurrentFolder([]);
                    setIsAllResumes(true);
                    fetchResumes();
                  }}
                  className={`${isAllResumes && "font-semibold"}`}
                >
                  All Resumes
                </button>
              }

              {Array.isArray(folders)
                ? folders?.map((folder) => (
                    <button
                      key={folder?._id}
                      onClick={() => {
                        setIsAllResumes(false);
                        setFolderResumes([]);
                        // setCurrentFolder(folder);
                        fetchFolderResumes(folder?._id);
                      }}
                      className={`${
                        currentFolder?._id == folder?._id && "font-semibold"
                      }`}
                    >
                      {folder?.name}
                    </button>
                  ))
                : null}

              {folders?.length < 1 && <p>No folders yet...</p>}
              {isFoldersLoading && (
                <FaSpinner className="my-auto mx-auto text-clearanceDarkBlue text-center text-lg animate-spin" />
              )}
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

            {isAllResumes && (
              <div className="mt-5">
                <h2 className="text-2xl font-semibold mb-5">All Resumes</h2>
              </div>
            )}

            {currentFolder && (
              <div className="mt-5">
                <h2 className="text-2xl font-semibold mb-5">
                  {currentFolder?.name}
                </h2>
              </div>
            )}

            <div className="flex flex-wrap gap-y-5 gap-x-3 justify-center lg:justify-normal mt-5">
              {!isLoading && (
                <>
                  {folderResumes?.map((resume) => (
                    <div
                      className="h-[250px] w-[200px] bg-white rounded-xl"
                      key={resume?._id}
                    >
                      <div className="relative">
                        <Link
                          to={`/dashboard/create-resume?resumeId=${resume?._id}`}
                        >
                          <img
                            src={resume?.preview ?? resumeSample}
                            alt={resume?.name}
                            className="h-[180px] w-full rounded-xl border-[1.5px] border-clearanceDarkBlue object-cover"
                          />
                        </Link>

                        <div className="bg-clearanceDarkBlue h-10 w-20 rounded-full absolute top-3 right-4 justify-center flex items-center gap-x-2">
                          <MdDelete
                            size={23}
                            onClick={() => deleteResume(resume?._id)}
                            className="text-red-500 hover:text-red-300  cursor-pointer"
                          />

                          <MdFolder
                            size={23}
                            onClick={() => {
                              // DELETE RESUME HERE
                              setCurrentResume(resume);
                              setIsFolderModalOpen(true);
                            }}
                            className="text-gray-300 hover:text-gray-100 right-4 cursor-pointer"
                          />
                        </div>
                      </div>

                      <Link
                        to={`/dashboard/create-resume?resumeId=${resume?._id}`}
                      >
                        <div className="flex items-center justify-between px-3 h-[70px] border-[1.5px] relative rounded-br-xl rounded-bl-xl -top-2 border-t-transparent border-clearanceDarkBlue">
                          <p className="font-semibold">{resume?.name}</p>
                          {/* <CiMenuKebab size={20} className="rotate-90" /> */}
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}

              {currentFolder && folderResumes?.length == 0 && !isLoading && (
                <div className="mt-5 flex justify-center w-full">
                  <p>No resumes in this folder</p>
                </div>
              )}

              {isLoading && (
                <div className="mt-5 flex justify-center w-full">
                  <FaSpinner className="my-auto mx-auto text-black text-center text-lg animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
