import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full h-full z-10">
      <h1 className="text-8xl md:text-[12rem] text-center font-black mb-6 bg-gradient-to-r from-[#FFFFFF] to-[#E21484] inline-block text-transparent bg-clip-text z-20 relative">
        dot2dot
      </h1>

      <div className="absolute left-10 top-[10rem]">
        <Image src="/home3.png" alt="Card 3" width={0} height={0} sizes="250vw" className="w-full h-auto" />
      </div>
      <div className="absolute right-10 top-[10rem]">
        <Image src="/home2.png" alt="Card 2" width={0} height={0} sizes="250vw" className="w-full h-auto" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1 max-md:bottom-52">
        <Image src="/home1.png" alt="Card 1" width={0} height={0} sizes="250vw" className="w-full h-auto" />
      </div>
    </section>
  );
}
