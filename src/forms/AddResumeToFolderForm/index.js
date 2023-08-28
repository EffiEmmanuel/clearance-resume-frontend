import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../components/ui/Dashboard";
import CreateNewFolderSchema from "./validation";
import AddResumeToFolderFormSchema from "./validation";

export default function AddResumeToFolderForm(props) {
  //   Get User Data
  const { user, folders, setFolders } = useContext(UserContext);
  const [folderPicked, setFolderPicked] = useState();

  //   Loading state
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (!folderPicked) toast.error("You must pick a folder");
    setIsLoading(true);
    // Send API request here
    axios
      .patch(
        `http://localhost:8080/api/v1/users/folders/add-resume/${folderPicked}/${props?.resume?._id}/${user?._id}`
      )
      .then((res) => {
        console.log("RESPONSE;", res.data);
        props?.setIsFolderModalOpen(false);
        toast.success("Resume added to folder successfully!");
        console.log("Folders:::", typeof folders);
        // const updateFolders = folders?.push(res.data?.folder);
        // setFolders(updateFolders);
        // window.location.reload();
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  //   const { values, errors, handleSubmit, handleChange } = useFormik({
  //     initialValues: {
  //       folder: "",
  //     },
  //     validationSchema: AddResumeToFolderFormSchema,
  //     onSubmit,
  //   });

  return (
    <div className="mt-16">
      <ToastContainer />
      <form className="" onSubmit={onSubmit}>
        <div className="">
          <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
            <div className="mx-auto w-full relative">
              <label
                htmlFor="folder"
                className="uppercase text-sm absolute left-0"
              >
                Folder:
              </label>

              <select
                className="w-full h-16 bg-gray-200 px-8 text-black text-sm mt-7 rounded-lg rounded-bl-lg focus:outline-none"
                name="folder"
                id="folder"
                value={folderPicked}
                onChange={(e) => {
                  console.log("VALUE:", e.target.value);
                  setFolderPicked(e.target.value);
                }}
              >
                <option value="">--SELECT-FOLDER--</option>
                {folders?.map((folder) => (
                  <option value={`${folder?._id}`}>{folder?.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full flex justify-between mt-5">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-clearancePink text-clearanceDarkBlue h-16 w-full px-8 rounded-lg rounded-br-lg hover:text-white text-sm hover:bg-gray-700 hover:border-black"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
                  {/* <span>Adding...</span> */}
                </>
              ) : (
                <>
                  <span className="text-center">Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
