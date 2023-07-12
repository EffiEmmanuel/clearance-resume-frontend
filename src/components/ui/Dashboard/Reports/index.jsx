import { useContext, useState } from "react";
import { UserContext } from "../";
import ReportChat from "../../StudentChat";

export default function Reports() {
  const { user, projects } = useContext(UserContext);
  const [uploadType, setUploadType] = useState();

  const [isUploading, setIsUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState();

  return (
    <>
      <section className="mt-10 relative">
        <ReportChat />
      </section>
    </>
  );
}
