import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import DashboardNav from "../DashboardNav";
import solyntaLogo from "../../../../../assets/logos/solynta-logo.png";

export default function DashboardNavbar(props) {
  const [isNavHidden, setIsNavHidden] = useState(true);

  // Get user from user context
  const { user } = useContext(UserContext);

  return (
    <>
      {/* Nabvar */}
      <div className="bg-black lg:hidden w-full flex justify-between items-center px-10 py-7">
        <img
          src={solyntaLogo}
          alt="Solynta Academy"
          className="max-w-[40px]"
        />
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

      <DashboardNav
        user={user}
        isNavHidden={isNavHidden}
        setIsNavHidden={setIsNavHidden}
        page={props?.page}
      />
    </>
  );
}
