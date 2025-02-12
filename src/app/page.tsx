import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url(/homepage-bg.png)] w-full h-full">
      {/* <Image src="/homepage-bg.png" alt="background image" width={3532} height={5036}> */}
      <h1 className="text-5xl 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-4xl text-center font-black mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">dot2dot</h1>
      {/* </Image> */}
    </section>
  );
}
