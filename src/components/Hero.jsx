
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#A8B2C1] flex flex-col items-center overflow-hidden pt-32 pb-32">
      {/* Background Image Placeholder */}
      <div className=" absolute inset-0 bg-neutral-300">
        <img src="bg.png" alt="" className=" w-full h-full object-cover" />
      </div>
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center text-white mt-16 lg:mt-24">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight max-w-4xl leading-[1.1] mb-10 drop-shadow-sm">
          Professional <br /> construction services <br /> for your needs
        </h1>
        <button className="bg-red-400 text-white px-8 py-4 text-sm font-medium hover:bg-red-500 transition-colors">
          Start a project
        </button>
      </div>
      
      {/* Abstract decorative blocks */}
      <div className="absolute bottom-0 right-0 flex flex-col items-end scale-50 sm:scale-75 lg:scale-100 origin-bottom-right">
        <div className="flex">
          <div className="bg-white opacity-15 blur-[1px] h-24 w-24"></div>
          <div className="bg-white opacity-30 blur-[2px] h-24 w-24"></div>
        </div>
        <div className="flex">
          <div className="bg-white opacity-25 blur-[1px] h-24 w-24"></div>
          <div className="bg-black h-24 w-24"></div>
          <div className="bg-red-400 h-24 w-24"></div>
        </div>
        <div className="flex">
          <div className="bg-white opacity-20 blur-[1px] h-24 w-24"></div>
          <div className="bg-white h-24 w-24 border-r-6 border-white"></div>
          <div className="bg-white h-24 w-24 border-l-6 border-white"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col items-start scale-50 sm:scale-75 lg:scale-100 origin-bottom-left">
        <div className="bg-white w-24 h-24 opacity-20 blur-[3px]"></div>
        <div className="flex">
          <div className="bg-[#eee9d2] w-24 h-24 "></div>
          <div className="bg-white w-24 h-24 opacity-15 blur-[1px]"></div>
          <div className="bg-white w-24 h-24 opacity-15 blur-[1px]"></div>
        </div>
        <div className="flex">
          <div className="bg-white w-24 h-24 border-r-6 border-white"></div>
          <div className="bg-white w-24 h-24 border-l-6 border-white"></div>
          <div className="bg-[#badad8] w-24 h-24"></div>
          <div className="bg-white w-24 h-24 opacity-20 blur-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
