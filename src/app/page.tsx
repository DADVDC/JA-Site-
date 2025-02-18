export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full h-full z-10">
      <h1 className="text-8xl md:text-[12rem] text-center font-black mb-6 bg-gradient-to-r from-[#FFFFFF] to-[#E21484] inline-block text-transparent bg-clip-text z-20 relative">
        dot2dot
      </h1>

      <div className="absolute left-10 top-[10rem]">
        <img src="/home3.png" alt="Card 3" className="max-md:w-1/2 max-w-1/2 h-auto" />
      </div>
      <div className="absolute max-md:left-72 md:right-20 top-[10rem]">
        <img src="/home2.png" alt="Card 2" className="max-md:w-[25rem] max-w-1/2 h-auto max-md:h-40" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1 max-md:bottom-52">
        <img src="/home1.png" alt="Card 1" className="h-1/2 max-w-full max-md:w-full" />
      </div>
    </section>
  );
}
