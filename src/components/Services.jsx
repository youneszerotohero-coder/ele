import { ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: "1",
      title: "Build",
      description: "We specialize in building various types of houses catered to the individual needs and preferences of our clients. Direct focus on on-time and in-budget execution.",
      image: "bg-[url('/bg.jpg')]"
    },
    { 
      id: "2",
      title: "Invent",
      description: "Renovation and modernization of existing buildings. Our inherent skill results directly in aesthetically pleasing, highly functional spaces.",
      image: "bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')]"
    },
    { 
      id: "3",
      title: "Design",
      description: "Fit-out and interiors. See the interior where comfort blends with functional solutions tailored precisely to your vision and lifestyle.",
      image: "bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')]"
    }
  ];

  return (
    <section className="bg-white pt-20 pb-32 overflow-hidden relative">
    <div className="bg-red-400 h-24 w-24 absolute bottom-0 right-0 z-20"></div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">What we do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
            Our Services
          </h2>
        </div>
        
        <div className="flex flex-col border-t border-black/20">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col md:flex-row items-center border-b border-black/20 py-16 px-4 md:px-8 overflow-hidden cursor-pointer min-h-[300px]"
            >
              {/* Background Slide Image */}
              <div className={`absolute inset-0 ${service.image} bg-cover bg-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0`}>
                 <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Left Content (Number and Description) */}
              <div className="relative z-10 w-full md:w-1/3 flex gap-6 mb-8 md:mb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black group-hover:border-white flex items-center justify-center text-sm text-black group-hover:text-white transition-colors duration-300">
                  {service.id}
                </div>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed font-medium max-w-[280px]">
                  {service.description}
                </p>
              </div>

              {/* Center Content (Huge Title) */}
              <div className="relative z-10 w-full md:w-1/3 flex justify-center items-center">
                <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:2px_black] group-hover:text-white group-hover:[-webkit-text-stroke:0] transition-all duration-300 relative">
                  {service.title}
                  <div className="absolute left-0 -bottom-2 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></div>
                </h3>
              </div>

              {/* Right Content (Arrow) */}
              <div className="relative z-10 w-full md:w-1/3 flex justify-end items-center opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex">
                <ArrowRight className="w-16 h-16 text-white" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
