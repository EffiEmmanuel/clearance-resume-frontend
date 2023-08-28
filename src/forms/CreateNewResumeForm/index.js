import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../components/ui/Dashboard";
import CreateNewResumeSchema from "./validation";
import { useNavigate } from "react-router-dom";

export default function CreateNewResumeForm(props) {
  const Router = useNavigate();
  //   Get User Data
  const { user, folders, setFolders, setResumes, resumes } =
    useContext(UserContext);

  //   Loading state
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values, actions) {
    setIsLoading(true);
    // Send API request here
    axios
      .post(`http://localhost:8080/api/v1/users/resumes/create/${user?._id}`, {
        name: values?.name,
      })
      .then((res) => {
        console.log("CREATE RESUME RESPONSE:", res.data);
        toast.success("Resume created successfully!");
        // console.log("Folders:::", typeof folders);
        // const updateResumes = resumes?.push(res.data?.resume);
        // setResumes(updateResumes);
        props?.setIsCreateNew(false);
        Router(`/dashboard/create-resume?resumeId=${res.data?.resume?._id}`);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: CreateNewResumeSchema,
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
                File name:
              </label>
              <input
                className="w-full h-16 bg-gray-200 px-8 text-black text-sm mt-7 rounded-lg rounded-bl-lg focus:outline-none"
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Resume Name"
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
              className="bg-clearancePink cursor-pointer text-clearanceDarkBlue h-16 w-full px-8 rounded-lg rounded-br-lg hover:text-white text-sm hover:bg-gray-700 hover:border-black"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="my-auto mx-auto text-center text-lg animate-spin" />
                  {/* <span>Adding...</span> */}
                </>
              ) : (
                <>
                  <span className="text-center">Create Resume</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
