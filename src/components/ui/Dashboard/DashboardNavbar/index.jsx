import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import DashboardNav from "../DashboardNav";
import ResumeBuilderNav from "../ResumeBuilderNav";

export default function DashboardNavbar(props) {
  const [isNavHidden, setIsNavHidden] = useState(true);

  // Get user from user context
  const { user } = useContext(UserContext);

  return (
    <>
      {/* Nabvar */}
      <div className="bg-clearanceDarkBlue lg:hidden w-full flex justify-between items-center px-10 py-7">
        <h1 className="text-white font-bold text-xl uppercase">
          Clearance Resume
        </h1>
        <div className="lg:hidden">
          {isNavHidden ? (
            <FaBars
              size={25}
              color="#fff"
              className="cursor-pointer"
              onClick={() => setIsNavHidden(false)}
            />
          ) : (
            <FaTimes
              size={25}
              color="#fff"
              className="cursor-pointer"
              onClick={() => setIsNavHidden(true)}
            />
          )}
        </div>
      </div>

      {props?.isResumeBuilder ? (
        <ResumeBuilderNav
          user={user}
          isNavHidden={isNavHidden}
          setIsNavHidden={setIsNavHidden}
          page={props?.page}
        />
      ) : (
        <DashboardNav
          user={user}
          isNavHidden={isNavHidden}
          setIsNavHidden={setIsNavHidden}
          page={props?.page}
        />
      )}
    </>
  );
}
