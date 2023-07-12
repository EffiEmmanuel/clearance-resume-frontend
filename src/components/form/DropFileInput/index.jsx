import React, { useRef, useState } from "react";

function DropFileInput({ onFileChange }) {
  const containerRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative py-5 px-7 hover:opacity-50 bg-[#AAADB9] rounded-lg border-[#3A415C] border-[1px] border-dashed"
    >
      <div className="text-center">
        <p className="font-semibold">
          Drag and Drop files or{" "}
          <span className="underline underline-offset-2">Browse</span>
          <input
            type="file"
            value=""
            onChange={onFileDrop}
            className="opacity-0 absolute top-0 left-0 w-[100%] h-[100%] cursor-pointer"
          />
        </p>
        <p className="text-gray-500">
          Supported formates : PNG, JPEG, PDF, Word
        </p>
      </div>
    </div>
  );
}

export default DropFileInput;
