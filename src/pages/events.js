import EventCard from "@/components/EventCard";
import Image from "next/image";
import data from "@/utils/bible.json";

const Events = () => {
  console.log(data["day1"]);
  return (
    <div className="bg-black bg-primary flex flex-col w-full justify-center items-center pt-[50px] pb-[50px]">
      <div className="text-5xl flex justify-center items-center text-white mb-3 font-bold pb-10">
        EVENTS
      </div>
      <div className="flex flex-wrap gap-[100px] items-center justify-center" >
        {data["day1"].map((event) => {
            return <EventCard day={"6 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
        {data["day2"].map((event) => {
            return <EventCard day={"7 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
        {data["day3"].map((event) => {
            return <EventCard day={"8 Oct"} event={event["event"]} venue={event["venue"]} timing={event["timing"]} category={event["category"]} desc={event["description"]} club={event["club"]} contact={event["contact"]} />
        })}
      </div>
    </div>
  );
};

export default Events;
