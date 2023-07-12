import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function PlanCard({
  backgroundColor,
  buttonColor,
  checkColor,
  planName,
  price,
  title,
  link,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl my-10 lg:my-20">
      {/* Left */}'
      <div
        className={`lg:w-1/4 w-full text-center flex justify-center items-center flex-col p-10 ${
          backgroundColor ?? "bg-solyntaYellowFaded"
        } h-72 rounded-tl-xl rounded-bl-xl`}
      >
        <h4 className="text-xl my-2 font-bold">{planName} Plan</h4>
        <h2 className="text-4xl my-2 font-extrabold">${price}</h2>
        <h4 className="text-xl my-2 font-bold">Per Year</h4>

        <Link
          to={link}
          className={`w-[200px] lg:w-full my-3 p-4 ${
            buttonColor ?? "bg-solyntaYellow"
          } text-solyntaBlack font-semibold`}
        >
          Get started
        </Link>
      </div>
      {/* Right */}
      <div className="w-3/4 px-10 mt-5 lg:mt-0">
        <p>{title}</p>

        <div>
          <div className="flex items-center gap-x-3 my-4">
            <MdCheckCircle
              size={20}
              style={{ minWidth: '20px', maxWidth: '20px' }}
              className={`${checkColor ?? "text-solyntaYellow min-w-[19px]"}`}
            />
            <p>{benefit1}</p>
          </div>
          <div className="flex items-center gap-x-3 my-4">
            <MdCheckCircle
              size={20}
              style={{ minWidth: '20px', maxWidth: '20px' }}
              className={`${checkColor ?? "text-solyntaYellow min-w-[19px]"}`}
            />
            <p>{benefit2}</p>
          </div>
          <div className="flex items-center gap-x-3 my-4">
            <MdCheckCircle
              size={20}
              style={{ minWidth: '20px', maxWidth: '20px' }}
              className={`${checkColor ?? "text-solyntaYellow min-w-[19px]"}`}
            />
            <p>{benefit3}</p>
          </div>
          <div className="flex items-center gap-x-3 my-4">
            <MdCheckCircle
              size={20}
              style={{ minWidth: '20px', maxWidth: '20px' }}
              className={`${checkColor ?? "text-solyntaYellow min-w-[19px]"}`}
            />
            <p>{benefit4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
