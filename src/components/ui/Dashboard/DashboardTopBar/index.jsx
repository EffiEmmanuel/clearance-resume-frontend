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
  return (
    <div className="pb-3 flex justify-end bg-accountableDarkGreen pl-10 lg:pl-[22%] py-4 pr-10">
      <div className="flex items-center gap-x-5">
        <div className="">
          <img
            src={profileImage}
            alt="User Profile Image"
            className="w-[35px]"
          />
        </div>
        <p className="text-xs">Jane Doe</p>
      </div>
    </div>
  );
}
