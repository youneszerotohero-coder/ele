export default function Stats() {
  const stats = [
    {
      number: "+21",
      label: "years of experience",
    },
    {
      number: "+33,107",
      label: "cubic of installed concrete",
    },
    {
      number: "+715",
      label: "completed construction sites",
    }
  ];

  return (
    <section className="min-h-[35em] h-auto flex flex-col justify-end items-center bg-red-400 py-10 md:py-16 relative">
      <div className="bg-white h-12 w-12 md:h-24 md:w-24 absolute bottom-0 right-0"></div>

      <div className="w-[90%] md:w-[80%] lg:w-[50em] h-[15em] sm:h-[20em] md:h-[30em] translate-y-[-200%] lg:translate-y-[-50%] absolute"
      style={{backgroundImage: `url('/vid1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="bg-white h-12 w-12 md:h-24 md:w-24"></div>
            <div className="bg-[#ede9d2] h-12 w-12 md:h-24 md:w-24"></div>
          </div>
          <div className="bg-white h-12 w-12 md:h-24 md:w-24"></div>
        </div>
        <div className="bg-red-400 h-12 w-12 md:h-24 md:w-24 absolute bottom-0 right-0"></div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-32 md:mt-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-14 border-t-1 border-white py-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 ">
              <span className="text-5xl lg:text-6xl font-bold text-white">{stat.number}</span>
              <span className="text-sm text-white font-semibold uppercase tracking-wider max-w-[120px] leading-tight">
                  {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
