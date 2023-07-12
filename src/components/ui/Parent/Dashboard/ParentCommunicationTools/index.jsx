import { useContext } from "react";
import { UserContext } from "..";
import ParentChat from "../ParentChat";

export default function ParentCommunicationTools() {
  const { user, projects } = useContext(UserContext);
  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative bg-white rounded-xl text-black">
        <ParentChat />
      </section>
    </>
  );
}
