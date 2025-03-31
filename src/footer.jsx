import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

const EdgeResortFooter = () => {
  // Navigation data
  const exploreLinks = [
    { title: "Home" },
    { title: "The resort" },
    { title: "The spa" },
    { title: "Weddings" },
    { title: "Trip Ideas" },
    { title: "About" },
    { title: "Offers" },
    { title: "Dining" },
    { title: "Blog" },
  ];

  const accommodationLinks = [
    { title: "The one", bedrooms: 1 },
    { title: "The villa", bedrooms: 1 },
    { title: "The breeze", bedrooms: 1 },
    { title: "The mood", bedrooms: 2 },
    { title: "The ocean", bedrooms: 2 },
    { title: "The shore", bedrooms: 2 },
    { title: "The ridge", bedrooms: 3 },
    { title: "The view", bedrooms: 5 },
  ];

  const helpLinks = [
    { title: "FAQ's" },
    { title: "Getting here" },
    { title: "Terms & conditions" },
    { title: "Contact" },
    { title: "Privacy policy" },
    { title: "Resort map" },
    { title: "Photo locations" },
  ];

  const socialLinks = [
    { title: "fb", logo: "/fb.png", url: "" },
    { title: "ig", logo: "/insta.png", url: "" },
    { title: "tk", logo: "/tk.png", url: "" },
    { title: "yt", logo: "/yt.png", url: "" },
    { title: "tro", logo: "/tro.png", url: "" },
  ];

  return (
    <div className="w-full app-container  mx-auto p-6 bg-white">
      {/* Logo - centered on mobile/tablet */}

      {/* Main footer content */}
      <div className="space-y-10 grid grid-cols-1 ipad-pro:grid-cols-3 ">
        <div className="text-center mb-12">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 ipad-mini:w-24 ipad-mini:h-24 ipad-pro:w-32 ipad-pro:h-32 desktop:w-40 desktop:h-40 mx-auto"
          />
        </div>
        {/* Explore Section */}
        <div className="text-start">
          <h2 className="text-gray-700 text-start font-normal mb-6">Explore</h2>

          {/* Desktop Grid - 4 columns */}
          <div className="hidden ipad-pro:grid ipad-pro:grid-cols-2 ipad-pro:gap-x-2 ipad-pro:gap-y-2">
            {exploreLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="hidden  ipad-mini:grid ipad-mini:grid-cols-4 ipad-mini:gap-x-4 sm:gap-y-3 ipad-pro:hidden ">
            {exploreLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Grid - 3 columns for explore */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-3 ipad-mini:hidden">
            {exploreLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Accommodations Section */}
        <div className="text-start">
          <h2 className="text-gray-700 font-normal mb-6">Accommodations</h2>

          <div className="hidden ipad-pro:grid md:grid-cols-2 ipad-pro:gap-x-2 ipad-pro:gap-y-3">
            {accommodationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}{" "}
                <span className="text-gray-500">({link.bedrooms} Bedroom)</span>
              </a>
            ))}
          </div>
          <div className="hidden ipad-mini:grid ipad-mini:grid-cols-4 ipad-mini:gap-x-4 ipad-mini:gap-y-3 ipad-pro:hidden">
            {accommodationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}{" "}
                <span className="text-gray-500">({link.bedrooms} Bedroom)</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 ipad-mini:hidden">
            {accommodationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}{" "}
                <span className="text-gray-500">({link.bedrooms} Bedroom)</span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-start">
          <h2 className="text-gray-700 font-normal mb-4">Newsletter</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-64 p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            required
          />
          <p className="text-xs text-gray-500 mt-2 mb-4">
            By subscribing I accept the Privacy Policy of this site.
          </p>
          <button
            type="submit"
            className="inline-flex items-center text-gray-700 font-medium hover:text-gray-900"
          >
            Subscribe
          </button>
        </div>

        {/* Help Section */}
        <div className="text-start">
          <h2 className="text-gray-700 font-normal mb-6">Help</h2>

          <div className="hidden ipad-pro:grid ipad-pro:grid-cols-2 ipad-pro:gap-x-4 ipad-pro:gap-y-3">
            {helpLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="hidden ipad-mini:grid ipad-mini:grid-cols-4 ipad-mini:gap-x-4 ipad-mini:gap-y-3 ipad-pro:hidden">
            {helpLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 ipad-mini:hidden">
            {helpLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        {/* Socal Media Section */}
        <div className="text-start">
          <h1 className="text-gray-700 font-normal mb-4">Socials</h1>
          <div className="grid grid-cols-5 gap-x-3 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-gray-900"
              >
                <img
                  src={window.location.origin + link.logo}
                  alt={link.title}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeResortFooter;
