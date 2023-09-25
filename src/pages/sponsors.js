import React from "react";
// import Header from "../components/Header";
// import iibg from "../assets/bg/bg.jpg";
// import iiibg from "../assets/bg/bg.jpg";

import Sliderss from "../components/Slider";
import SponsorBox from "../pages/Sponsors/Sponsor";


import {learnSponosor1,
   } from "../utils/Sponsors23";


const Sponsors = ({ data }) => {
  return (
    <>
      <div className="  overflow-hidden  ">
        <div
          
          className="  min-h-screen justify-center items-center  bg-black"
        >
          <div className="pt-8">
            <div id="sponsors" className=" pt-[50px] pb-[100px] px-0 
            new:text-left new:px-0 new:py-[50px] new:border-b-[0.2px] new:border-b-[rgba(255,255,255,0.5)] new:border-solid 
            text-center font-black
            ">
              <h1 className="text-white  block bg-[linear-gradient(_to_right,#ffc100,#ffc100,#ffc100,#ffbf00,#ffbf00_)] bg-clip-text text-[56px] text-center font-black pb-[50px] font-custom">Our Sponsors</h1>
              <h2 className="bg-clip-text text-[white] text-2xl text-center">Title Sponsor</h2>
             
             
              <h1 className="p-4"> 

</h1>
            
              <div className="flex justify-center flex-wrap rounded-[20px]">
                {learnSponosor1.map((sponsor,index) => {
                  return <SponsorBox data={sponsor} key={index} />;
                })}
              </div>
              
              <h2 className="bg-clip-text text-[white] text-2xl text-center">
                <h1 className="p-4"> 

                </h1>
                Past Sponsor
                <h1 className="p-4"> 

                </h1>
                </h2>
             
                
             <Sliderss />
            
             
             
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;






