import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);

  const categories = ["All", "Houses", "Blocks of flats", "Garages", "Hotels"];
  
  const allProjects = [
    {
      title: "Single-family house Krzycko",
      category: "Houses",
      description: "To połączenie elegancji i funkcjonalności, stworzone z myślą o komforcie rodziny, oferujące przestronne wnętrza i piękny ogród.",
      image: "bg-neutral-300" 
    },
    {
      title: "WorkTravel Hotel reception",
      category: "Hotels",
      description: "With a focus on creating a welcoming and efficient space, the reception seamlessly blends modern aesthetics with a warm ambiance.",
      image: "bg-neutral-400"
    },
    {
      title: "Underground garage for a block of flats",
      category: "Garages",
      description: "Innovative construction solutions and meticulous planning enabled the optimal utilization of the underground space.",
      image: "bg-neutral-500"
    },
    {
      title: "Two-story detached house",
      category: "Houses",
      description: "The two-story detached house is an example of modern architecture combining functionality with aesthetics.",
      image: "bg-neutral-600"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black px-16 py-32 text-white relative">
      <div className="absolute top-0 right-0 flex flex-col items-end z-10 scale-50 lg:scale-100 origin-top-right">
        <div className="flex">
          <div className="bg-red-400 h-24 w-24"></div>
          <div className="bg-black h-24 w-24"></div>
        </div>
        <div className="bg-[#badad8] h-24 w-24"></div>
      </div>
      <div className="bg-red-400 h-12 w-12 md:h-24 md:w-24 absolute bottom-0 left-0 z-10"></div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-20">
        <div className="mb-16">
          <p className="text-xs font-medium text-gray-400 mb-3">Gallery</p>
          <h2 className="text-5xl font-medium tracking-tight mb-12">Our Realizations</h2>
          
          <div className="flex flex-wrap items-center gap-10">
            {categories.map((cat, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'border border-white/60 px-8 py-3 text-white' 
                    : 'text-gray-400 hover:text-white px-0 py-3'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div key={index} className="min-w-[250px] md:min-w-[300px] lg:min-w-[320px] flex-1 snap-start group flex flex-col">
                <div className={`w-full h-[250px] ${project.image} bg-cover bg-center mb-8`}>
                </div>
                <div className="flex flex-col flex-grow items-start">
                  <p className="text-sm font-semibold text-red-400 underline underline-offset-8 decoration-red-400 mb-6">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[95%]">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide Button */}
          {filteredProjects.length > 2 && (
            <button 
              onClick={slideRight}
              className="absolute right-0 top-[125px] -translate-y-1/2 w-16 h-16 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-2xl z-30 cursor-pointer"
            >
              <ArrowRight className="w-6 h-6 text-black" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
      
    </section>
  );
}
