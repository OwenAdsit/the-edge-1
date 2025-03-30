import React from "react";
// import { ArrowUpRight } from "lucide-react";

function DiningSection() {
  return (
    <div className="w-full bg-white h-screen">
      {/* Desktop and iPad Pro Layout (md and up) */}
      <div className="hidden md:block">
        <div className="app-container mx-auto px-4 py-16 lg:py-24">
          {/* First Section */}
          <div className="grid grid-cols-2 gap-16 md:mb-10 lg:mb-16">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-wide mb-6">
                High tea by the ocean, sunset spritz on the cliff, and elegant
                dinners—experience a true culinary escape in southern Bali.
              </h1>
              <a
                href="#"
                className="inline-flex items-center text-lg hover:text-gray-600 transition-colors"
              >
                See dining options
              </a>
            </div>

            {/* First Image */}
            <div className="flex flex-1 justify-end">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                alt="Elegant dining setup"
                className="w-[600px] h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-16">
            {/* Second Image */}
            <div className="lg:-mt-40">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Restaurant ambiance"
                className="w-[600px] h-[600px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="flex items-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* iPad Mini and Mobile Layout (below md) */}
      <div className="md:hidden">
        <div className="px-4 py-12">
          <h1 className="text-3xl font-light tracking-wide mb-6">
            High tea by the ocean, sunset spritz on the cliff, and elegant
            dinners—experience a true culinary escape in southern Bali.
          </h1>

          <a
            href="#"
            className="inline-flex items-center text-lg mb-8 hover:text-gray-600 transition-colors"
          >
            See dining options
          </a>

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
            alt="Elegant dining setup"
            className="w-full h-[300px] object-cover mb-8"
          />

          <p className="text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor.
          </p>

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DiningSection;
