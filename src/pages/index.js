import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/Landing";
import Animation from "../components/Animation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="fixed  w-screen">
      <div className="">
        <Animation />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit flex flex-col  justify-center items-center bg-transparent">
        <div>
          <Image
            src="/pantheon_main_white.png"
            alt="pantheon"
            width={400}
            height={400}
            className="scale-100 sm:scale-110 md:scale-125 text-white "
            priority
          />
        </div>
        <div className="flex justify-center flex-col mt-10 items-center scale-[0.69] sm:scale-75 md:scale-100 ">
          <Landing />
          <h1 className="font-bold text-4xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-10 animate-bounce  ...">
            Merch Available
          </h1>
          <div className="cursor-pointer flex text-2xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            click here to buy now
          </div>
        </div>
      </div>
    </div>
  );
}
