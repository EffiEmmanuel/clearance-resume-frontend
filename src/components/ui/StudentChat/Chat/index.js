import { UserContext } from "../../Dashboard";
import { useContext, useEffect, useRef } from "react";
import MessageBubble from "../MessageBubble";

export default function Chat(props) {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  });
  //   const { user } = useContext(UserContext);
  console.log("ALL MESSAGES FROM CHAT COMP:", props?.messages);
  return (
    <div className="mt-10">
      {/* CHAT MESSAGES */}
      <div className="-mt-10 flex flex-col justify-start h-[473px] overflow-y-scroll chat-scroll">
        {props?.messages?.map((message) => (
          <div key={message?._id} ref={scrollRef}>
            <MessageBubble
              isMyMessage={
                message?.sender?._id === props.role?._id ? true : false
              }
              message={message}
              project={props?.project}
              isEngineer={props?.isEngineer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
