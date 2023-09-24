import React from "react";
// import Header from "../components/Header";
// import iibg from "../assets/bg/bg.jpg";
// import iiibg from "../assets/bg/bg.jpg";

import Sliderss from "../components/Slider";
import SponsorBox from "../pages/Sponsors/Sponsor";
import styled from "styled-components";
import {
  NewSponsors,
  TitleSponsor,
  copreSponsor,
  associationSponsor,
  investSponsor,
  mediaSponsor,
  gameSponsor,
  learnSponosor,
  startSponsor,
  copowSponsor,
} from "../utils/data";
import { sponsors,TitleSponsor1,
  copreSponsor1,
  associationSponsor1,mediaSponsor1,learnSponosor1,
  startSponsor1,
  copowSponsor1, } from "../utils/Sponsors23";


const Sponsors = ({ data }) => {
  return (
    <>
      <div className="  overflow-hidden  ">
        <div
          
          className="  min-h-screen justify-center items-center  bg-black"
        >
          <div className="pt-8">
            <SectionContainer id="sponsors">
              <Heading className="text-white">Our Sponsors</Heading>
              <SponsorHeading>Title Sponsor</SponsorHeading>
             
             
              <h1 className="p-4"> 

</h1>
            
              <EventsContainer>
                {learnSponosor1.map((sponsor,index) => {
                  return <SponsorBox data={sponsor} key={index} />;
                })}
              </EventsContainer>
              
              <SponsorHeading>
                <h1 className="p-4"> 

                </h1>
                Past Sponsor
                <h1 className="p-4"> 

                </h1>
                </SponsorHeading>
             
                
             <Sliderss />
            
             
             
            </SectionContainer>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;

const SectionContainer = styled.div`
  padding: 50px 0px 100px 0px;
  @media screen and (max-width: 800px) {
    padding: 50px 0px 50px 0px;
    text-align: left;
    border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
  }
  text-align: center;
  font-weight: 900;
`;

const Heading = styled.h1`
  display: block;
  background-image: linear-gradient(
    to right,
    #ffc100,
    #ffc100,
    #ffc100,
    #ffbf00,
    #ffbf00
  );
  -webkit-background-clip: text;
  background-clip: text;
  
  font-size: 56px;
  padding-bottom: 50px;
  text-align: center;
  font-family: Orbitron;
  font-weight: 900;
`;

const SponsorHeading = styled.h1`
  display: block;
  background-image: linear-gradient(
    to right,
    #ffc107,
    #ffc107,
    #ffc107,
    #ffc107,
    #ffc107
  );
  -webkit-background-clip: text;
  background-clip: text;
  
  color: white;
  font-size: 24px;
  text-align: center;
`;
//background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: ${(props) => {
    if (props.back) {
      return "20px";
    } else {
      return "20px 0px 30px 0px";
    }
  }};
  background-color: ${(props) => {
    if (props.back) {
      return "#151629";
    } else {
      return "rgba(0,0,0,0)";
    }
  }};
`;
