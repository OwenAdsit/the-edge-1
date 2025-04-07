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
    <div className="w-full overflow-clip mt-16 app-container mx-auto sm:px-10">
      <div className="flex flex-row flex-nowrap items-center   ">
        {pratners.map((pratner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 sm:w-1/4 lg:w-1/4 xl:w-1/4 xl:px-16"
          >
            <img
              src={window.location.origin + pratner.image}
              alt={pratner.title}
              className="w-28 xl:w-32 xl:h-12 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PratnerSections;
