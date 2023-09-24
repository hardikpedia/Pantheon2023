import React from "react";
import CarouselSlider from "react-carousel-slider";
export default function Carousel() {
  let data = [
    {
      id: "1",
      imgSrc: "/1.jpg"
    },
    {
      id: "2",
      imgSrc: "/2.jpg"
    },
    {
      id: "3",
      imgSrc: "/3.jpg"
    },
    {
      id: "4",
      imgSrc: "/4.jpg"
    },
    {
      id: "5",
      imgSrc: "/5.jpg"
    }
  ];

  let manner = {
    autoSliding: { interval: "2s" }
  };
  let buttonSetting = {
    placeOn: "bottom-beneath",
    //hoverEvent: true,
    style: {
      left: {
        margin: "0px 0px 0px 10px"
      },
      right: {
        margin: "0px 10px 0px 0px"
      }
    }
  };
  let itemsStyle = {
    margin: "0px 0px",
    padding: "0px"
  };
  return (
    <div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  );
}
