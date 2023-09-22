import EventCard from "@/components/EventCard";
import Image from "next/image";

const Events = () => {
  return (
    <div className="bg-black bg-primary flex flex-col w-full justify-center items-center pt-[50px] pb-[50px]">
      <div className="text-5xl flex justify-center items-center text-white mb-3 font-bold pb-10">
        EVENTS
      </div>
      <div className="flex flex-wrap gap-[100px] items-center justify-center" >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
