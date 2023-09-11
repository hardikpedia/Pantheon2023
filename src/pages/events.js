import EventCard from "@/components/EventCard";
import Image from "next/image";


const Events = () => {
  

  return (
    <div className="bg-black bg-primary  w-full justify-center flex flex-wrap gap-[100px] align-center pt-[50px] pb-[50px]">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
    </div>
  );
};

export default Events;
