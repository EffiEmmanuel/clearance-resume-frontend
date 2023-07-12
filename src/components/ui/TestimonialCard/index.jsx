import React from "react";
import { MdStar } from "react-icons/md";

function TestinomialCard({ icon, image, name, testimony }) {
  return (
    <div className="relative">
      <img src={icon} alt="" className="relative -z-10 top-12 right-5" />
      <div className="w-[300px] p-5 shadow-lg text-center bg-white">
        <img src={image} alt="" className="w-20 relative -top-10 mx-auto" />
        <h4 className="text-xl font-bold text-[#113775]">{name}</h4>
        <p className="my-4 text-[#3F3F3F]">Parent</p>
        <p className="">{testimony}</p>

        {/* Rating */}
        <div className="flex justify-center mt-3">
          <div className="flex gap-x-2s items-center">
            <MdStar size={20} color="#FFD60C" />
            <MdStar size={20} color="#FFD60C" />
            <MdStar size={20} color="#FFD60C" />
            <MdStar size={20} color="#FFD60C" />
            <MdStar size={20} color="#3F3F3F" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestinomialCard;
