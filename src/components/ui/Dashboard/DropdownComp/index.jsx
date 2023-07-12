import { useState } from "react";
import { MdArrowCircleUp, MdArrowDropDownCircle } from "react-icons/md";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Fade } from "react-reveal";

function DropdownComp(props) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      {/* FAQ */}
      <div
        className="w-full text-left cursor-pointer"
        onClick={() => setIsFaqOpen(!isFaqOpen)}
      >
        {/* QUESTION */}
        <div className="h-16 flex justify-between align-middle pr-5">
          <h4 className="my-auto">{props.title}</h4>
          <button>
            {isFaqOpen ? (
              <span>
                <RxCaretUp size={28} className="text-white" />
              </span>
            ) : (
              <span>
                <RxCaretDown size={28} className="text-white" />
              </span>
            )}
          </button>
        </div>

        {/* ANSWER */}
        <div
          className="px-5 mt-5 shadow-sm pb-5"
          style={{
            display: isFaqOpen ? "block" : "none",
            height: !isFaqOpen ? "0px" : "auto",
          }}
        >
          {props?.links}
        </div>
      </div>
    </>
  );
}

export default DropdownComp;
