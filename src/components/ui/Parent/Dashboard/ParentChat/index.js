import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaPlaneDeparture } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { io } from "socket.io-client";
import { UserContext } from "../../Dashboard";
import Chat from "./Chat";
import { MdSearch } from "react-icons/md";
import student from "../../../../../assets/images/student.png";

// SOCKET.IO CONFIG
// const socket = io.connect(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}`);
// const socket = io.connect("https://www.corset-backend.vercel.app");

export default function ParentChat(props) {
  const { user } = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  //   Ref to prevent useEffect from running twice
  const dataFetchRef = useRef(false);

  //   Load all messages from this chat room
  // async function getMessages() {
  //   await axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_BASE_URL_API}/messages/${props?.project?.chatRoom}/get-messages`
  //     )
  //     .then((res) => {
  //       console.log("MESSAGES FROM PROJECT CHAT COMP:", res.data);
  //       setMessages(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR:", err);
  //     });
  // }

  // Connect to Web Socket here to enable chat functionality
  // function joinChatRoom() {
  //   socket.emit("join-room", `${props?.project?.chatRoom}`);
  // }
  // Use websocket to send message
  async function sendMessage() {
    //   if (!newMessage.replace(/\s/g, "").length) {
    //     toast.info("Message box cannot contain only whitespaces");
    //     return;
    //   } else {
    //     socket.emit("send-message", {
    //       text: newMessage,
    //       chatRoom: props?.project?.chatRoom,
    //       sender: user._id,
    //       modelType: "User",
    //     });
    //     //   Get message
    //     setMessages((message) => {
    //       console.log("MESSAGE OOOO:", message);
    //       return [
    //         ...message,
    //         {
    //           message: newMessage,
    //           chatRoom: props?.project?.chatRoom,
    //           sender: user,
    //           modelType: "User",
    //         },
    //       ];
    //     });
    //     console.log("SEND MESSAGE:", messages);
    //     //   Reset input field
    //     setNewMessage("");
    //   }
  }

  useEffect(() => {
    // getMessages();
    // joinChatRoom();
  }, []);

  // async function updateMessages(data) {
  //   setMessages((message) => [
  //     ...message,
  //     {
  //       _id: data._id,
  //       message: data.message,
  //       sender: {
  //         _id: data.sender._id,
  //         firstName: data.sender.firstName,
  //         lastName: data.sender.lastName,
  //         email: data.sender.email,
  //       },
  //     },
  //   ]);
  //   return;
  // }

  //   Listen to changes on socket server
  // useEffect(() => {
  //   socket.on("receive-message", async (data) => {
  //     if (dataFetchRef.current) return;
  //     dataFetchRef.current = true;
  //     updateMessages(data);
  //   });
  // },[socket]);

  //   Listen to changes on socket server

  return (
    <>
      <ToastContainer />
      {/* OVERVIEW */}
      <div className="flex justify-between">
        <div className="w-1/4 py-10 px-5 hidden lg:inline-block">
          {/* Search bar */}
          <div className="flex bg-solyntaBlueFaded h-10 rounded-lg p-2">
            <MdSearch size={20} className="text-gray-600 my-auto" />
            <input
              type="text"
              name="search"
              className="bg-transparent text-sm placeholder:text-xs my-auto ml-2"
              placeholder="Search..."
            />
          </div>

          <div className="flex flex-col gap-y-8 mt-7">
            <div className="flex justify-between items-center">
              <img src={student} alt="Student Name" className="max-w-[40px]" />

              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between items-center">
                  <small className="font-bold">Student Name</small>
                  <small className="text-gray-400">1:00pm</small>
                </div>

                <small className="text-gray-400 text-[.6rem]">
                  Hello, i hope you are doing fine ...
                </small>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img src={student} alt="Student Name" className="max-w-[40px]" />

              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between items-center">
                  <small className="font-bold">Student Name</small>
                  <small className="text-gray-400">1:00pm</small>
                </div>

                <small className="text-gray-400 text-[.6rem]">
                  Hello, i hope you are doing fine ...
                </small>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img src={student} alt="Student Name" className="max-w-[40px]" />

              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between items-center">
                  <small className="font-bold">Student Name</small>
                  <small className="text-gray-400">1:00pm</small>
                </div>

                <small className="text-gray-400 text-[.6rem]">
                  Hello, i hope you are doing fine ...
                </small>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img src={student} alt="Student Name" className="max-w-[40px]" />

              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between items-center">
                  <small className="font-bold">Student Name</small>
                  <small className="text-gray-400">1:00pm</small>
                </div>

                <small className="text-gray-400 text-[.6rem]">
                  Hello, i hope you are doing fine ...
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[.5px] p-7 h-[600px] w-full lg:w-3/4 relative rounded-lg">
          <div className="border-b-[.5px] pb-3">
            <h1 className="text-xl font-bold">
              {props?.project?.engineerAssigned?.firstName}{" "}
              {props?.project?.engineerAssigned?.lastName}
            </h1>
            <div className="flex gap-1">
              <div className="h-[5px] w-[5px] my-auto bg-green-400 rounded-full"></div>
              <p className="text-xs my-auto mt-[1.5px]">Active now</p>
            </div>
            {/* <div className="flex gap-1">
            <div className="h-[5px] w-[5px] my-auto bg-gray-400 rounded-full"></div>
            <p className="text-xs my-auto mt-[1.5px]">Offline</p>
          </div> */}
          </div>

          {/* CHAT */}
          <Chat role={user} messages={messages} project={props?.project} />

          <form
            className="absolute bottom-4 left-0 right-0 mx-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex h-12 align-middle border-[.5px] px-4">
              <input
                type="text"
                name="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full h-full border-gray-400  px-8 text-black text-sm rounded-lg rounded-bl-lg focus:outline-none"
              />
              <button type="submit" onClick={sendMessage}>
                <FaPaperPlane className="text-lg my-auto self-center" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
