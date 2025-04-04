import { MoveUpRight } from "lucide-react";
import React from "react";

function DiningSection() {
  return (
    <div className="w-full bg-white min-h-screen app-container">
      {/* Desktop and iPad Pro Layout (md and up) */}
      <div className="hidden lg:block">
        <div className="app-container mx-auto px-4 py-16 xl:py-24">
          {/* First Section */}
          <div className="grid grid-cols-2 gap-16 lg:mb-10 xl:mb-16">
            {/* Text Content */}
            <div className="flex flex-col flex-1 items-start justify-center  px-2 xl:px-24">
              <h1 className="display-6 font-normal mb-6 text-start ">
                High tea by the ocean, sunset spritz on the cliff, and elegant
                dinners—experience a true culinary escape in southern Bali.
              </h1>
              <button className="text-lg h transition-colors  flex flex-row gap-6 items-center border-b border-dark">
                See dining options <MoveUpRight size={20} strokeWidth={1} />
              </button>
            </div>

            {/* First Image */}
            <div className="flex flex-1 justify-end">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                alt="Elegant dining setup"
                className="w-[421px] xl:w-[622px] h-[499px] xl:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2  gap-16">
            {/* Second Image */}
            <div className="xl:-mt-40">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Restaurant ambiance"
                className="w-[421px] h-[499px] xl:w-[622px] xl:h-[612px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="flex flex-1 items-center justify-center px-2 xl:px-[21%]">
              <p className="text-body text-start ">
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

      <div className="lg:hidden">
        <div className="px-4 py-12  ">
          <div className="mb-[75.82px]">
            <h1 className="display-6 font-normal  text-start mb-7 sm:mb-4 ">
              High tea by the ocean, sunset spritz on the cliff, and elegant
              dinners—experience a true culinary escape in southern Bali.
            </h1>

            <button className="text-lg transition-colors  flex flex-row gap-6  items-center border-b border-dark ">
              See dining options <MoveUpRight size={20} strokeWidth={1} />
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
            alt="Elegant dining setup"
            className="w-[354px] h-[357px] sm:w-[691px] sm:h-[438px] object-cover "
          />

          <p className="text-body  text-start mt-28 mb-[75.82px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor.
          </p>

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
            alt="Restaurant ambiance"
            className="w-[354px] h-[357px] sm:w-[691px] sm:h-[438px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DiningSection;
