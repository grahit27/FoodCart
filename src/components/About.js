import React from "react";
import { useState } from "react";
import SocialMediaLinks from "./SocialMediaLink";

export const About = () => {
  const [sectionConfig, setSectionConfig] = useState("Section-1");
  const setVisibilityConfig = (section) => setSectionConfig(section); // Created a function to change the visibility config and passed to child component
  return (
    <>
      <div className="bg-red-400 flex justify-around">
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
      {/* Swiggy Jamoree */}
      <div className="items-center bg-purple-600">
        <div className="grid grid-cols-2 items-center">
          <div className="p-12 mb-14 text-white">
            <h1 className="text-3xl">
              <span className="font-bold">Swiggy's</span> first Jamboree
            </h1>
            <p className="mb-4 text-base">
              After two years of remote working at Swiggy, we had the first
              installment of our in-office Jamboree! It was a fun-filled week
              that covered - interesting knowledge sharing sessions with
              leaders, teams getting together in-person, and activities ranging
              from concerts to game sessions. Here's a glimpse into the makings
              of this delightful week.
            </p>
            <a
              type="button"
              target="_blank"
              className="my-[10px] mx-[1px] px-12 py-4 rounded-3xl bg-white text-red-600 text-xl"
              href="https://www.youtube.com/watch?v=JHJQ7j3_S6M"
            >
              Swiggy's first Jamboree
            </a>
          </div>

          <img src="https://careers.swiggy.com/assets/img/jamboree-2022.jpg" />
        </div>
      </div>
      {/* Swiggy Swagester */}
      <div className="items-center bg-orange-600">
        <div className="grid grid-cols-2 items-center text-right">
          <img src="https://careers.swiggy.com/assets/img/future-of-work.jpg" />
          <div className="p-12 mb-14 text-white">
            <h1 className="text-3xl">
              <span className="font-bold">Swiggster Speak: </span>
              Experiencing Swiggy's <br /> Future of Work
            </h1>
            <p className="mb-4 text-base">
              From finding time to workout to spending precious moments with
              family and prioritising mental health — Swiggy's Remote-First way
              of working has been helping Swiggsters across the country. Watch
              this video to understand how things have been changing for them.
            </p>
            <a
              type="button"
              target="_blank"
              className="my-[10px] mx-[1px] px-12 py-4 rounded-3xl bg-white text-red-600 text-xl"
              href="https://www.youtube.com/watch?v=5gnRbRT9cTE"
            >
              Remote-First Future Of Work
            </a>
          </div>
        </div>
      </div>
      {/* Swiggy Inside Scoop */}
      <div className="items-center bg-purple-600">
        <div className="grid grid-cols-2 items-center">
          <div className="p-12 mb-14 text-white">
            <h1 className="text-3xl">
              We Are Swiggy |{" "}
              <span className="font-bold">The Inside Scoop</span>
            </h1>
            <p className="mb-4 text-base">
              Want to know what's buzzing at the Swiggy side of the planet?
              There here is what you need to follow. We Are Swiggy channels on
              Social Media will give you an inside-out view of the everyday
              serious and fun stuff within our world. All you need to do is to
              click your preferred channel and make sure you follow us.
            </p>
            {/* Links */}
            <SocialMediaLinks />
          </div>
          <img src="https://careers.swiggy.com/assets/img/about_img3.jpg" />
        </div>
      </div>
      {/* Swiggy Diaries */}
      <div className="items-center bg-orange-600">
        <div className="grid grid-cols-2 items-center text-right">
          <img src="https://careers.swiggy.com/assets/img/Swiggy-Diaries_1.jpg" />
          <div className="p-12 mb-14 text-white">
            <h1 className="text-3xl">
              <span className="font-bold">What's Buzzing at </span>
              Swiggy
            </h1>
            <p className="mb-4 text-base">
              From food guides to the culture inside, we are sure you are
              curious to learn more about what's happening inside and around the
              Swiggy world. Well, if that's the case, you have landed at the
              right spot. Swiggy Diaries is a journal of everything you need to
              know about our side of the planet. So dive in and get on with it.
            </p>
            <a
              type="button"
              target="_blank"
              className="my-[10px] mx-[1px] px-12 py-4 rounded-3xl bg-white text-red-600 text-xl"
              href="https://blog.swiggy.com/"
            >
              Turn the Page
            </a>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className="py-[70px] mx-24">
        <div className="grid grid-cols-2 mb-12 -ms-4 -me-4 items-center ">
          <div className="px-4 ">
            <h1 className="mt-8 mb-4 text-3xl tracking-[8px]">
              Get In <span className="font-bold">Touch</span>
            </h1>
            <h1 className="text-orange-600 text-4xl mb-7">Head Office</h1>
            <p className="mb-4 text-base">
              <span className="font-bold">Bundl Technologies Pvt. Ltd.</span>
              <br />
              No. 55 Sy No 8 to 14 I & J Block - Ground Floor, Embassy Tech
              Village |
              <br />
              Outer Ring Road, Devarbisanahalli, Varthur Bengaluru - 560130
            </p>
          </div>
          <div>
            <iframe
              _ngcontent-cwr-c55=""
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.478052870141!2d77.6903534!3d12.9321588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x441b54d2e7912e06!2sEmbassy%20TechVillage!5e0!3m2!1sen!2sin!4v1608122793152!5m2!1sen!2sin"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="rounded-full"
              // style="border: 0; width: 100%;"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
