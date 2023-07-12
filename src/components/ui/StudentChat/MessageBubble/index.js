import { UserContext } from "../../Dashboard";
import { useContext } from "react";

export default function MessageBubble(props) {
  return (
    <>
      {props?.isMyMessage ? (
        /* USER MESSAGE */
        <div className="w-full flex justify-end gap-x-2">
          <p className="space-y-48 text-left text-sm p-3 text-white rounded-lg my-5 max-w-[43%] shadow-lg bg-green-500 h-auto ">
            {props?.message.message}
          </p>
          <div className="text-sm flex justify-center text-white bg-slate-600 h-10 w-10 my-auto rounded-full">
            <span className="my-auto">
              {props?.message?.sender?.firstName?.split("")[0]}
              {props?.message?.sender?.lastName?.split("")[0]}
            </span>
          </div>
        </div>
      ) : (
        /* ENGINEER MESSAGE */
        <div className="w-full flex justify-start gap-x-2">
          <div className="text-sm flex justify-center text-white bg-slate-600 h-10 w-10 my-auto rounded-full">
            <span className="my-auto">
              {props?.isEngineer ? (
                <>
                  {props?.project?.owner?.firstName?.split("")[0]}
                  {props?.project?.owner?.lastName?.split("")[0]}
                </>
              ) : (
                <>
                  {props?.project?.engineerAssigned?.firstName?.split("")[0]}
                  {props?.project?.engineerAssigned?.lastName?.split("")[0]}
                </>
              )}
            </span>
          </div>
          <p className="space-y-48 text-sm p-3 shadow-lg text-white rounded-lg my-5 max-w-[43%] bg-[#181818] h-auto text-left">
            {props?.message.message}
          </p>
        </div>
      )}
    </>
  );
}
