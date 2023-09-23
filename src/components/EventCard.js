"use client"
import React from "react";
import { useState, useRef, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const EventCard = () => {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div
        className={`h-[450px] w-[320px] rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
            isHovered ? "hover:description-visible" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <Image
            src="/recruitmentvideo.png"
            alt="title"
            height={350}
            width={320}
            className="object-cover rounded-t-lg"
        />
        <div className="px-6 py-4 bg-gray-300">
            <div className="font-bold text-xl mb-2 text-gray-700">Title</div>
            <p className="text-gray-700 text-base">7th sept</p>
            <p className="text-gray-700 text-base">CAT Hall</p>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 bg-gray-300 p-2 text-gray-700 ${
                isHovered ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 `} >
            <div
                className=""
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                dapibus justo. Sed nec ullamcorper ligula. Nulla facilisi. Fusce
                bibendum sapien nec ultrices feugiat. Vestibulum ac ipsum quis ex
                blandit blandit sed at libero. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus nec dapibus justo. Sed nec ullamcorper
                ligula. Nulla facilisi. Fusce bibendum sapien nec ultrices feugiat.
                Vestibulum ac ipsum quis ex blandit blandit sed at libero.
                
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="cursor-pointer bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold px-3 py-2 rounded-md" >
                    Register
                </div>
            </div>
        </div>
        </div>
    );
};

export default EventCard;
