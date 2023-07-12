import React from "react";

function BenefitCard({ icon, heading, text, backgroundColor, isReversed }) {
  return (
    <div
      className={`flex gap-x-5 pl-20 py-5 pr-5 ${backgroundColor} max-w-3xl ${
        isReversed
          ? "rounded-tl-full rounded-bl-full"
          : "rounded-tr-full rounded-br-full"
      }`}
    >
      <img src={icon} alt="" className="w-12 object-contain" />
      <div className="flex flex-col">
        <h4 className="font-bold text-sm">{heading}</h4>
        <p className="leading-[1.2rem] text-sm mt-1">{text}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
