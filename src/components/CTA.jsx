export default function CTA() {
  return (
    <section className=" py-32 flex justify-center items-center bg-black overflow-hidden">
      <div className="media-hover-frame relative w-[95vw] md:w-[80vw] h-[20em] md:h-[25em] flex flex-col justify-center items-center text-center px-4">
        <div
          className="media-hover-scale absolute inset-0"
          style={{ backgroundImage: "url('/cta.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        {/* Dark overlay to ensure text is readable against the background image */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">
            Don't wait for your dreams! <br />
            Make them with us now!
          </h2>
          <button className="bg-red-400 text-white font-bold px-8 py-4 text-sm hover:bg-red-500 transition-colors cursor-pointer">
            Start a project
          </button>
        </div>
      </div>
    </section>
  );
}
