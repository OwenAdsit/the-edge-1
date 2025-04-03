import React from "react";

const pratners = [
  {
    title: "pratner1",
    image: "/pratner-1.png",
  },
  {
    title: "pratner2",
    image: "/pratner-2.png",
  },
  {
    title: "pratner3",
    image: "/pratner-3.png",
  },
  {
    title: "pratner4",
    image: "/pratner-4.png",
  },
];
const PratnerSections = () => {
  return (
    <div className="w-full overflow-clip mt-16 app-container mx-auto">
      <div className="flex flex-row flex-nowrap items-center   ">
        {pratners.map((pratner, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 w-1/2 ipad-mini:w-1/4 ipad-pro:w-1/4 desktop:w-1/4"
          >
            <img
              src={window.location.origin + pratner.image}
              alt={pratner.title}
              className="w-28 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PratnerSections;
