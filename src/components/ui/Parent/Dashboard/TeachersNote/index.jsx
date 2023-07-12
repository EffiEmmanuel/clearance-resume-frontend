import { useState } from "react";
import { MdArrowCircleUp, MdArrowDropDownCircle } from "react-icons/md";
import teacher from "../../../../../assets/images/teacher.png";
import { Fade } from "react-reveal";

function TeachersNote(props) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      <Fade up duration={800}>
        {/* FAQ */}
        <div
          className="w-full mx-auto text-left mt-5 cursor-pointer"
          onClick={() => setIsFaqOpen(!isFaqOpen)}
        >
          {/* QUESTION */}
          <div className="bg-blupayBlue-300 h-16 flex justify-between align-middle px-10 pt-10">
            <div className="flex items-center gap-x-3">
              <img src={teacher} className="" />

              <div className="flex flex-col">
                <h4 className="font-medium">Course name</h4>
                <small className="text-gray-500">Teacher name</small>
              </div>
            </div>
            <button>
              {isFaqOpen ? (
                <span>
                  <MdArrowCircleUp size={28} className="text-black" />
                </span>
              ) : (
                <span>
                  <MdArrowDropDownCircle size={28} className="text-black" />
                </span>
              )}
            </button>
          </div>

          {/* ANSWER */}
          <div
            className="px-10 mt-5 shadow-sm pb-5"
            style={{
              display: isFaqOpen ? "block" : "none",
              height: !isFaqOpen ? "0px" : "auto",
            }}
          >
            <div className="mt-16">
              <div className="my-5">
                <h3 className="font-semibold text-xl text-solyntaBlue">
                  Overall Note:
                </h3>
                <ul className="list-disc pl-14">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                    hendrerit sapien. Nam sem erat, vulputate et . Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                    hendrerit sapien. Nam sem erat, vulputate et . Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </li>
                </ul>
              </div>
              <div className="my-5">
                <h3 className="font-semibold text-xl text-solyntaBlue">
                  Strengths:
                </h3>
                <ul className="list-disc pl-14">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                    hendrerit sapien. Nam sem erat, vulputate et . Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                    hendrerit sapien. Nam sem erat, vulputate et . Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.{" "}
                  </li>
                </ul>
              </div>
              <div className="my-5">
                <h3 className="font-semibold text-xl text-solyntaBlue">
                  Areas for improvement:
                </h3>
                <ul className="list-disc pl-14">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                    hendrerit sapien. Nam sem erat, vulputate et . Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    efficitur ante non sapien pulvinar porttitor. Nam in
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default TeachersNote;
