import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../components/ui/Dashboard";
import CreateNewFolderSchema from "./validation";

export default function CreateNewFolderForm(props) {
  //   Get User Data
  const { user, folders, setFolders } = useContext(UserContext);

  //   Loading state
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values, actions) {
    setIsLoading(true);
    // Send API request here
    axios
      .post(`http://localhost:8080/api/v1/users/folders/create/${user?._id}`, {
        folderName: values?.name,
      })
      .then((res) => {
        console.log("RESPONSE;", res.data);
        toast.success("Folder created successfully!");
        console.log("Folders:::", typeof folders);
        // const updateFolders = folders?.push(res.data?.folder);
        // setFolders(updateFolders);
        // props?.setIsCreateNew(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: CreateNewFolderSchema,
    onSubmit,
  });

  return (
    <div className="mt-16">
      <ToastContainer />
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
            <div className="mx-auto w-full relative">
              <label
                htmlFor="email"
                className="uppercase text-sm absolute left-0"
              >
                Folder Name:
              </label>
              <input
                className="w-full h-16 bg-gray-200 px-8 text-black text-sm mt-7 rounded-lg rounded-bl-lg focus:outline-none"
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Folder Name"
              />

              <p className="text-left mt-3 text-xs">
                {errors.name ? errors.name : ""}
              </p>
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
