import React from "react";
import { useState } from "react";

export const About = () => {
  const [sectionConfig, setSectionConfig] = useState("Section-1");
  const setVisibilityConfig = (section) => setSectionConfig(section); // Created a function to change the visibility config and passed to child component
  return (
    <>
      <div className="p-2 bg-red-400 flex justify-around">
        <span className="text-2xl">
          Mocked About Us Page From Swiggy Website
        </span>
      </div>
      {/* Quote Section */}
      <div className="p-12 bg-orange-500 flex flex-col justify-around">
        <img
          src="https://careers.swiggy.com/assets/img/inverted-commas.png"
          className="w-[128px] h-[128x]"
        />
        <span className="text-white text-[30px]">
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </span>
      </div>
      {/* Swiggy Journey */}
      <div className="py-[70px] flex flex-col">
        <span className="mb-[30px] text-4xl text-center">
          The Swiggy <span className="font-bold">Journey</span>
        </span>
        <img
          className="px-4"
          src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
        />
      </div>
      {/* Store for Future */}
      <div className="mx-[109.6px] px-4 py-12 ">
        <div className="flex flex-col text-center p-4 mx-52">
          <span className="mb-12 text-5xl font-bold">
            What’s In Store For The Future?
          </span>
          <p className="mb-4 text-base font-light leading-[1.61rem] ">
            Swiggy has grand plans to be India’s most loved hyperlocal player.
            It aims to be the most accessible platform on the network -
            reimagining the meaning of convenience in the country through a
            variety of service offerings.
          </p>
        </div>
      </div>
      <hr class="h-px my-4 bg-gray-300 border-0" />
      {/* Changing the game */}
      <div className="py-[70px]">
        <div className="mx-24 py-12 px-4 grid grid-cols-6 gap-4">
          <div className="mb-12 text-5xl col-span-2 ">
            Changing <br /> <span className="font-bold">the game</span>
          </div>

          <div className="py-7 border-[1px] border-orange-500 rounded-md">
            <div className="text-5xl font-bold text-center">150000+</div>
            <div className=" text-gray-500 text-center">
              Restaurant Partners Countrywide
            </div>
          </div>
          <div className="py-7 border-[1px] border-orange-500 rounded-md">
            <div className="text-5xl font-bold text-center ">5000+</div>
            <div className=" text-gray-500 text-center">
              Employees across the Country
            </div>
          </div>
          <div className="py-7 border-[1px] border-orange-500 rounded-md">
            <div className="text-5xl font-bold text-center">260000+</div>
            <div className=" text-gray-500 text-center">
              Delivery <br /> Executives
            </div>
          </div>
          <div className="py-7 border-[1px] border-orange-500 rounded-md">
            <div className="text-5xl font-bold text-center">500+</div>
            <div className=" text-gray-500 text-center">
              Cites <br /> PAN India
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
