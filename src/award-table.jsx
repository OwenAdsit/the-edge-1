import React from "react";

const ResponsiveAwardsTable = () => {
  // Award data
  const awards = [
    {
      year: "2024",
      award: "Best Luxury Coastal Resort",
      issuer: "Luxury Lifestyle Award",
    },
    {
      year: "2024",
      award: "Winner Number 8 Small Hotel in Indonesia",
      issuer: "TripAdvisor Travelers Choice",
    },
    {
      year: "2023",
      award: "Best Unique Concept Dining",
      issuer: "Exquisite Magazine Award",
    },
    {
      year: "2023",
      award: "Winner Number 8 Small Hotel in Indonesia",
      issuer: "TripAdvisor Travelers Choice",
    },
    {
      year: "2023",
      award: "Best Unique Concept Dining",
      issuer: "Exquisite Magazine Award",
    },
    {
      year: "2022",
      award: "Best Luxury Fine Dining Experience",
      issuer: "Luxury Lifestyle Award",
    },
    { year: "2022", award: "Gold Circle Award", issuer: "Agoda" },
    {
      year: "2022",
      award: "Luxury Hotels, Spas, Venues Award Winner",
      issuer: "Conde Nast Johansens",
    },
    {
      year: "2021",
      award: "Best Wedding Venue",
      issuer: "Exquisite Magazine Award",
    },
  ];

  return (
    <div className="w-full app-container mx-auto">
      <h1 className="display-1 font-normal mb-6 text-start">Awards</h1>
      <hr />
      <div className="divide-y ">
        {awards.map((item, index) => (
          <div key={index} className="py-[38px] sm:py-[32px]">
            {/* Mobile view (default) - Stacked layout */}
            <div className="sm:hidden flex flex-col items-start space-y-4 text-lg">
              <div className="">{item.year}</div>
              <div className="">{item.award}</div>
              <div className="">{item.issuer}</div>
            </div>

            {/* Desktop view (md and up) - Grid layout */}
            <div className="hidden sm:grid sm:grid-cols-2 text-lg">
              <div className="flex flex-row items-center gap-14">
                <div className=" text-start ">{item.year}</div>
                <div className=" text-start">{item.award}</div>
              </div>
              <div className="text-right  ">{item.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ResponsiveAwardsTable;
