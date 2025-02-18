import Image from "next/image";

export default function Page() {
  return (
  <div className="overflow-hidden">
    <section className="relative min-h-screen flex flex-col items-center justify-start w-full h-full z-10">
      <h1 className="text-8xl md:text-[9rem] text-center font-black">
        Our Mission
      </h1>
      <p className="md:text-4xl text-center w-2/3 z-20">
        To foster a community that encourages inclusiveness through raising awareness of the day-to-day realities faced by the visually impaired. Through a braille-based game, we connect the sighted with the visually impaired with a common language, developing empathy through shared experiences. 
      </p>
      <div className="items-center flex justify-center self-center z-10">
        <div className="absolute left-1/4 transform -translate-x-1/2 bottom-20 md:bottom-44">
          <Image src="/about1.png" alt="About Card 1" width={0} height={0} sizes="225vw" className="w-full h-auto hover:rotate-6 transition-all duration-500" />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 md:bottom-[15rem]">
          <Image src="/about2.png" alt="About Card 2" width={0} height={0} sizes="225vw" className="w-full h-auto hover:-translate-y-4 transition-all duration-500" />
        </div>
        <div className="absolute right-0 transform -translate-x-1/2 bottom-20 md:bottom-44">
          <Image src="/about3.png" alt="About Card 3" width={0} height={0} sizes="225vw" className="w-full h-auto hover:-rotate-6 transition-all duration-500" />
        </div>
      </div>
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 md:bottom-32 max-md:hidden"> */}
        {/* <Image src="/Rectangle.png" alt="Rectangle" width={0} height={0} sizes="200vw" className="w-full h-auto max-md:hidden object-cover" /> */}
      {/* </div> */}
      {/* <div className="w-full bg-gradient-to-r from-[#ff9eb6] via-[#d4a5ff] to-[#87CEEB] h-10" /> */}
      <div className="absolute h-64 w-full bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 rounded-t-full scale-x-105 transform bottom-32 overflow-hidden" />
    </section>

    <section className="relative min-h-screen flex items-center justify-center w-full h-full">
      <div className="w-1/2 flex flex-col items-center justify-center content-center">
          <h1 className="font-black text-4xl md:text-7xl">
            Our product
          </h1>
          <p className="md:text-4xl text-center mt-6 w-2/3">
            Our product is a multi-player card game, combining it with braille to reinforce the concept of inequalities, allowing the user to experience the struggles visually impaired individuals face, and ultimately educating the general public how to read braille. 
          </p>
      </div>
      <div className="w-1/3 h-1/2">
        <Image src="/about4.png" alt="About Card 4" width={0} height={0} sizes="100vw" className="w-full h-auto" />
        <Image src="/Rectangle2.png" alt="Rectangle 2" width={0} height={0} sizes="75vw" className="w-full h-auto bottom-24" />
      </div>
    </section>
  </div>

  );
}
