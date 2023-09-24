import React from "react";
import { useState, useRef, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const EventCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`h-[450px] w-[320px]  overflow-hidden shadow-lg transition-transform transform hover:scale-105 border-white border-2 rounded-2xl ${
        isHovered ? "hover:description-visible" : ""
      }` }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onClick={handleClick}
      onClick={() => {
        setIsHovered(!isHovered);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div>
        <Image
          src="/recruitmentvideo.png"
          alt="title"
          className="w-full h-350 object-cover rounded-t-lg"
          width={320}
          height={350}
        />
      </div>

      <div
        className="px-6 py-4 bg-gray-300 rounded-lg "
        onClick={() => {
          setIsHovered(!isHovered);
        }}
      >
        <div className="font-bold text-xl mb-2 text-gray-700">Title</div>
        <p className="text-gray-700 text-base">7th sept</p>
        <p className="text-gray-700 text-base">CAT Hall</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gray-300 p-2 text-gray-700 rounded-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 `}
      >
        <div className="rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          dapibus justo. Sed nec ullamcorper ligula. Nulla facilisi. Fusce
          bibendum sapien nec ultrices feugiat. Vestibulum ac ipsum quis ex
          blandit blandit sed at libero. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus nec dapibus justo. Sed nec ullamcorper
          ligula. Nulla facilisi. Fusce bibendum sapien nec ultrices feugiat.
          Vestibulum ac ipsum quis ex blandit blandit sed at libero.
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="cursor-pointer bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold px-3 py-2 rounded-md">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
