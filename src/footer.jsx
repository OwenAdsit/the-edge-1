import { MoveUpRight } from "lucide-react";
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

  const awards = [
    { title: "award1", image: "/award-1.png" },
    { title: "award4", image: "/award-4.png" },
    { title: "award5", image: "/award-5.png" },
    { title: "award2", image: "/award-2.png" },
    { title: "award3", image: "/award-3.png" },
  ];

  return (
    <div className="w-full app-container  mx-auto bg-white h-screen mt-10 text-body">
      {/* Logo - centered on mobile/tablet */}

      {/* Main footer content */}
      <div className=" grid grid-cols-1 gap-y-24 lg:grid-cols-3   lg:gap-x-[11%] ">
        <div className=" flex justify-center lg:justify-start ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[134px] h-[64px] xl:w-[228px] xl:h-[118px] lg:w-[184px] lg:h-[87px]  "
          />
        </div>
        {/* Explore Section */}
        <div className="text-start">
          <h2 className=" text-start font-semibold  mb-6">Explore</h2>

          {/* xl Grid - 4 columns */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-2 lg:gap-y-3 test-start">
            {exploreLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}
              </a>
            ))}
          </div>
          <div className="hidden  sm:grid sm:grid-cols-4 sm:gap-x-2 sm:gap-y-3 lg:hidden text-start ">
            {exploreLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Grid - 3 columns for explore */}
          <div className="grid grid-cols-3 gap-x-2 gap-y-3 sm:hidden text-start">
            {exploreLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Accommodations Section */}
        <div className="text-start">
          <h2 className=" font-semibold   mb-6">Accommodations</h2>

          <div className="hidden lg:grid lg:grid-cols-2 gap-x-4 xl:gap-x-10 lg:gap-y-3 text-start">
            {accommodationLinks.map((link, index) => (
              <a key={index} href="#">
                {link.title}{" "}
                <span className="text-xs">({link.bedrooms} Bedroom)</span>
              </a>
            ))}
          </div>
          <div className="hidden sm:grid sm:grid-cols-4 sm:gap-x-2 sm:gap-y-3 lg:hidden text-start">
            {accommodationLinks.map((link, index) => (
              <a key={index} href="#" className="text-15">
                {link.title}{" "}
                <span className="text-xs">({link.bedrooms} Bedroom)</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:hidden text-start">
            {accommodationLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}{" "}
                <span className="text-xs">({link.bedrooms}Bedroom)</span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-start">
          <h2 className=" font-semibold mb-6">Newsletter</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-72 p-2 border-b border-dark"
            required
          />
          <p className="text-13 mt-2 mb-4">
            By subscribing I accept the Privacy Policy of this site.
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 border-b border-dark"
          >
            Subscribe <MoveUpRight size={20} strokeWidth={1} />
          </button>
        </div>

        {/* Help Section */}
        <div className="text-start">
          <h2 className="font-semibold sm:text-15  mb-6">Help</h2>

          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3  text-start ">
            {helpLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}
              </a>
            ))}
          </div>
          <div className="hidden sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-3 lg:hidden  text-start">
            {helpLinks.map((link, index) => (
              <a key={index} href="#" className="">
                {link.title}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:hidden ">
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
          <h1 className="font-semibold  mb-6">Socials</h1>
          <div className="flex felx-row gap-10 items-center  ">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="">
                <img
                  src={window.location.origin + link.logo}
                  alt={link.title}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
        {/*award showcase section*/}
      </div>
      <div className="w-full  mt-24">
        <div className="flex flex-row flex-nowrap items-center overflow-clip  gap-x-none sm:gap-x-[2.6%] ">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0  w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <img
                src={window.location.origin + award.image}
                alt={award.title}
                className="w-[80px] sm:w-[161px] h-[99px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-s">
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center mb-6 ">
          <span>Reservations@theedgebali.com</span>
          <span>+62 361 847 0700</span>
          <span>© 2025 The Edge, All rights reserved.</span>
          <span>
            Made With ❤︎ By{" "}
            <button className="border-b border-dark"> Two Moons Studio</button>
          </span>
          <button className="border-b border-dark">Back to top</button>
        </div>
        <div className="hidden sm:flex flex-col gap-5 lg:hidden mb-6">
          <div className="flex items-center justify-between">
            {" "}
            <span>Reservations@theedgebali.com</span>
            <span>+62 361 847 0700</span>
            <span>© 2025 The Edge, All rights reserved.</span>
          </div>
          <div className=" flex items-center justify-between">
            <span>
              Made With ❤︎ By{" "}
              <button className="border-b border-dark">
                {" "}
                Two Moons Studio
              </button>
            </span>
            <button className="border-b border-dark">Back to top</button>
          </div>
        </div>
        <div className=" flex flex-col gap-5 sm:hidden mb-6">
          <div className="flex items-center justify-between">
            {" "}
            <span>Reservations@theedgebali.com</span>
            <span>+62 361 847 0700</span>
          </div>
          <span>© 2025 The Edge, All rights reserved.</span>
          <div className=" flex items-center justify-between">
            <span>
              Made With ❤︎{" "}
              <button className="border-b border-dark">
                {" "}
                Two Moons Studio
              </button>
            </span>
            <button className="border-b border-dark">Back to top</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeResortFooter;
