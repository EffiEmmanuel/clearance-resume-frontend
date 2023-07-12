import React from "react";
import BenefitCard from "../BenefitCard";

function BenefitSection({
  heading,
  subtitle,
  firstCard,
  secondCard,
  thirdCard,
  sectionImage,
  isReversed,
}) {
  return (
    <div
      className={`flex justify-between ${isReversed && "flex-row-reverse"}`}
    >
      {/* Left */}
      <div>
        {/* Heading and text */}
        <div className="lg:px-20 px-10 text-center bg-red-300s">
          <h2 className="font-semibold text-3xl">{heading}</h2>
          <p className="lg:max-w-2xl mt-2">{subtitle}</p>
        </div>

        {/* Benefits */}
        <div className={`${isReversed && 'items-end'} mt-10 flex flex-col gap-y-5`}>
          <BenefitCard
            isReversed={isReversed}
            backgroundColor={firstCard.bgColor}
            icon={firstCard.icon}
            heading={firstCard.heading}
            text={firstCard.text}
          />
          <BenefitCard
            isReversed={isReversed}
            backgroundColor={secondCard.bgColor}
            icon={secondCard.icon}
            heading={secondCard.heading}
            text={secondCard.text}
          />
          <BenefitCard
            isReversed={isReversed}
            backgroundColor={thirdCard.bgColor}
            icon={thirdCard.icon}
            heading={thirdCard.heading}
            text={thirdCard.text}
          />
        </div>
      </div>

      {/* Right */}
      <div className="">
        <img src={sectionImage} alt="" className="lg:max-w-lg lg:relative lg:top-16 hidden lg:inline-block" />
      </div>
    </div>
  );
}

export default BenefitSection;
