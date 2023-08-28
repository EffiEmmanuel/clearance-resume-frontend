import { createContext, useEffect, useState } from "react";

import DahboardTopBar from "./DashboardTopBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

// Creating a user context to manage state
export const UserContext = createContext();

function Dashboard(props) {
  const [user, setUser] = useState();
  const [folders, setFolders] = useState();
  const [resumes, setResumes] = useState();

  //   Current page
  const [currentPage, setCurrectPage] = useState("home");

  function setTheCurrentPage(page) {
    setCurrectPage(page);
  }

  //   Protect page
  const Router = useNavigate();
  const [loading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    async function getUser() {
      const jsonUser = JSON.parse(localStorage.getItem("user"));
      if (jsonUser) {
        setUser(jsonUser);
      } else {
        Router("/auth/login");
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getFolders() {
      await axios
        .get(
          `http://localhost:8080/api/v1/users/folders/get-folders/${user?._id}`
        )
        .then((res) => {
          console.log("GET FOLDERS RESPONSE:", res.data);
          setFolders(res.data?.folders);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("LOGIN ERROR:", err);
          setIsLoading(false);
        });
    }
    getFolders();
  }, [user]);

  useEffect(() => {
    async function getResumes() {
      await axios
        .get(
          `http://localhost:8080/api/v1/users/resumes/get-resumes/${user?._id}`
        )
        .then((res) => {
          console.log("GET RESUMES RESPONSE:", res.data);
          setResumes(res.data?.resumes);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("LOGIN ERROR:", err);
          setIsLoading(false);
        });
    }
    getResumes();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        folders,
        setFolders,
        resumes,
        setResumes,
        currentPage,
        setTheCurrentPage,
      }}
    >
      <ToastContainer />
      <DashboardNavbar
        page={props?.page}
        isResumeBuilder={props?.isResumeBuilder}
      />
      {/* BODY */}
      <DahboardTopBar />
      <div className="p-10 lg:pl-[25%] scrollbar-thin bg-white text-clearanceDarkBlue min-h-screen">
        {props.children}
      </div>
    </UserContext.Provider>
  );
}

export default Dashboard;
