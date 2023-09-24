import EventCard from "@/components/EventCard";
import Image from "next/image";
import data from "@/utils/bible.json";

import StarsCanvas from "@/components/Stars";
const Events = () => {
  console.log(data["day1"]);
  return (
    <div className="bg-black bg-primary flex flex-col w-full justify-center items-center pt-[50px] pb-[50px] relative z-0">
      <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">EVENTS</h1>
      <div className="flex flex-wrap gap-[100px] items-center justify-center p-12" >
        {data["day1"].map((event, ind) => {
            return <EventCard key={ind} day={"6 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
        {data["day2"].map((event, ind) => {
            return <EventCard key={ind} day={"7 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
        {data["day3"].map((event, ind) => {
            return <EventCard key={ind} day={"8 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Events;
