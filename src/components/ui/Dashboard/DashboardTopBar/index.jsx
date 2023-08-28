import React from "react";
import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../Dashboard";
import { Link } from "react-router-dom";
import { PiWalletFill } from "react-icons/pi";
import { RiNotification2Fill } from "react-icons/ri";

// Images
import profileImage from "../../../../assets/images/profileImage.png";

export default function DahboardTopBar(props) {
  const { user } = useContext(UserContext);
  const initials = `${user?.fullName?.split(" ")[0]?.split("")[0]}${
    user?.fullName?.split(" ")[1]?.split("")[0]
  }`;

  console.log("INITIALS:", initials);
  return (
    <div className="pb-3 flex justify-end bg-accountableDarkGreen pl-10 lg:pl-[22%] py-4 pr-10">
      <div className="flex items-center gap-x-3">
        <div className="">
          <div className="h-[35px] w-[35px] rounded-full bg-gray-500 flex justify-center items-center text-white">
            <p>{initials}</p>
          </div>
        </div>
        <p className="text-xs">{user?.fullName}</p>
      </div>
    </div>
  );
}
