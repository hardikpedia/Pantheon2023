import EventCard from "@/components/EventCard";
import Image from "next/image";
import StarsCanvas from "@/components/Stars";
const Events = () => {
  return (
    <div className="bg-black bg-primary flex flex-col w-full justify-center items-center pt-[50px] pb-[50px] relative z-0">
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
      <StarsCanvas />
    </div>
  );
};

export default Events;
