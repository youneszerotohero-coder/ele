import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Muzzyhud Construction Company is a reliable partner in the execution of construction projects. Their team consists of qualified professionals who are professional and precision.",
      name: "Andrew Forsyth",
      role: "Happy customer from Warsaw",
      image: "/ceo.jpg"
    },
    {
      id: 2,
      text: "From concept to completion, their attention to detail and dedication to quality was unmatched. They transformed our vision into a stunning reality, exceeding all our expectations.",
      name: "Sarah Jenkins",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "Their project management is flawless. Despite tight deadlines and complex architectural requirements, they delivered our commercial space perfectly on time and within budget.",
      name: "Marcus Thorne",
      role: "Real Estate Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .testimonial-animate {
          animation: fadeSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">Our customers' opinions</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-30 items-center min-h-[500px]">
          
          {/* Left Side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div key={`text-${currentTestimonial.id}`} className="testimonial-animate">
              <p className="text-2xl md:text-3xl font-medium text-[#1C1C1C] leading-snug mb-12">
                "{currentTestimonial.text}"
              </p>
              
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#1C1C1C] mb-1">{currentTestimonial.name}</h4>
                <p className="text-sm font-medium text-gray-400">{currentTestimonial.role}</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-auto">
              <button onClick={handlePrev} className="w-12 h-12 bg-[#1C1C1C] flex items-center justify-center hover:bg-black transition-colors group cursor-pointer z-10">
                <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
              </button>
              <button onClick={handleNext} className="w-12 h-12 bg-[#1C1C1C] flex items-center justify-center hover:bg-black transition-colors group cursor-pointer z-10">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div key={`img-${currentTestimonial.id}`} className="w-full max-w-[25em] h-[20em] md:h-[30em] mx-auto lg:mx-0 testimonial-animate bg-neutral-200"
            style={{
              backgroundImage: `url('${currentTestimonial.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
          </div>
          
        </div>
      </div>
    </section>
  );
}
