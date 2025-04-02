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
    <div className="p-6 w-full app-container mx-auto">
      <h1 className="text-45 ipad-pro:text-55 font-normal mb-6 text-start">
        Awards
      </h1>
      <hr />
      <div className="divide-y ">
        {awards.map((item, index) => (
          <div key={index} className="py-4">
            {/* Mobile view (default) - Stacked layout */}
            <div className="md:hidden flex flex-col items-start">
              <div className="text-14">{item.year}</div>
              <div className="text-14">{item.award}</div>
              <div className="text-14">{item.issuer}</div>
            </div>

            {/* Desktop view (md and up) - Grid layout */}
            <div className="hidden md:grid md:grid-cols-3 py-6">
              <div className=" text-start text-14">{item.year}</div>
              <div className="text-14 text-start">{item.award}</div>
              <div className="text-right text-14 ">{item.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ResponsiveAwardsTable;
