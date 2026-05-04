export default function About() {
  return (
    <section className="py-24 pb-100 bg-[#Fdfdfc] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-12 lg:gap-20">
          
          {/* Left Side - Images */}
          <div className='media-hover-frame w-full max-w-[23em] h-[20em] md:h-[30em] mx-auto lg:mx-0'>
            <div
              className="media-hover-scale absolute inset-0"
              style={{ backgroundImage: `url('/engineer.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className='relative z-10 flex h-full flex-col justify-between'>
              <div className='self-end w-12 h-12 md:w-24 md:h-24 bg-black'></div>
              <div className='self-start flex flex-col'>
                <div className='w-12 h-12 md:w-24 md:h-24 bg-red-400'></div>
                <div className='w-12 h-12 md:w-24 md:h-24 bg-white border-l-4 border-b-4 border-white'></div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center max-w-xl">
            <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">Who we are</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#1C1C1C] tracking-tight">About our company</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-medium">
              We are primarily an architectural building company with years of its reliable practice, specializing in comprehensive services per project. Our team of qualified specialists, including architects and engineers, ensures high quality in the fields of our activities.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed font-medium">
              We engage in both the construction of new facilities and the renovation and modernization of existing buildings. Our inherent skill results directly in aesthetically pleasing. We translate ambitious architectural views and expectations of our clients.
            </p>
            <div>
              <button className="bg-black text-white font-bold px-8 py-4 text-sm hover:bg-[#d6966e] transition-colors">
                Read more about us
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
