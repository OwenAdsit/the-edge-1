import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

const EdgeResortFooter = () => {
  const [email, setEmail] = useState("");

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

  return (
    <div className="w-full app-container  mx-auto p-6 bg-white">
      {/* Logo - centered on mobile/tablet */}

      {/* Main footer content */}
      <div className="space-y-10 grid grid-cols-1 ipad-pro:grid-cols-3 ">
        <div className="text-center mb-12">
          <img src="/logo.png" alt="Logo" className="w-40 h-40 mx-auto" />
        </div>
        {/* Explore Section */}
        <div>
          <h2 className="text-gray-700 text-start font-normal mb-6">Explore</h2>

          {/* Desktop Grid - 4 columns */}
          <div className="hidden ipad-pro:grid ipad-pro:grid-cols-2 ipad-pro:gap-x-4 ipad-pro:gap-y-3">
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
        {/* <div>
          <h2 className="text-gray-700 font-normal mb-6">Accommodations</h2>

          <div className="hidden md:grid md:grid-cols-2 md:gap-x-4 lg:gap-y-3">
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
          <div className="hidden sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-3 md:hidden">
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:hidden">
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
        </div> */}

        {/* Newsletter Section */}
        {/* <div>
          <h2 className="text-gray-700 font-normal mb-4">Newsletter</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          </form>
        </div> */}

        {/* Help Section */}
        {/* <div>
          <h2 className="text-gray-700 font-normal mb-6">Help</h2>

          <div className="hidden md:grid md:grid-cols-4 md:gap-x-4 md:gap-y-3">
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:hidden">
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
        </div> */}
      </div>
    </div>
  );
};

export default EdgeResortFooter;
