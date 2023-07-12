import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../Dashboard";

export default function DahboardTopBar(props) {
  const { user } = useContext(UserContext);
  return (
    <div className="pb-3 flex justify-between">
      <div>
        <h1 className="text-2xl font-bold max-w-sm">
          Hello, {user?.lastName} {user?.firstName}!
        </h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div>
        <div className="bg-red-500 h-2 w-2 rounded-full relative top-2 left-4"></div>
        <FaRegBell size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}
