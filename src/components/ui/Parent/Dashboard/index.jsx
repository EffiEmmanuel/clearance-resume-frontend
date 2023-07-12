import { createContext, useEffect, useState } from "react";

import DahboardTopBar from "./DashboardTopBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

// Creating a user context to manage state
export const UserContext = createContext();

function ParentDashboard(props) {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState();

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
    async function validateSession() {
      const token = localStorage.getItem("token");
      if (!token) {
        Router("/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/users/verifyToken`, {
          token,
        })
        .then((res) => {
          console.log("RESPONSE:", res.data);
          setIsUserLoggedIn(true);
          setIsLoading(false);
          return axios
            .get(
              `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/${res.data.data._id}`
            )
            .then((res) => {
              console.log("SECOND RES:", res.data);
              setUser(res.data.data);
              setProjects(res.data.data.projects);
            })
            .catch((err) => {});
        })
        .catch((err) => {
          //   toast.error(err.response.data.message);
          Router("/login");
          toast.error(
            "Session expired. Please log in to continue to your dashboard."
          );
          setIsLoading(false);
        });
    }
    // validateSession();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, projects, setProjects, currentPage, setTheCurrentPage }}
    >
      <ToastContainer />
      <DashboardNavbar page={props?.page} />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] scrollbar-thin bg-[#113775] text-white min-h-screen">
        <DahboardTopBar />
        {props.children}
      </div>
    </UserContext.Provider>
  );
}

export default ParentDashboard;
