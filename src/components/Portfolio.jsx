import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useRef, useState } from 'react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

export default function Portfolio({ content }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all'
      ? content.projects
      : content.projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, content.projects]);

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 460, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="realisations"
      className="relative overflow-hidden bg-[#07111F] px-4 py-24 text-white sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      <div className="absolute right-0 top-0 h-28 w-28 bg-[#1D7ED0]" />
      <div className="absolute bottom-0 left-0 h-24 w-24 bg-[#F2B705]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div variants={fadeUp} transition={revealTransition} className="mb-12">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#F2B705]">
            {content.eyebrow}
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              {content.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {content.categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`border px-4 py-2.5 text-sm font-bold transition ${
                    activeCategory === category.id
                      ? 'border-[#F2B705] bg-[#F2B705] text-[#07111F]'
                      : 'border-white/16 text-white/64 hover:border-white/46 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            variants={staggerContainer}
            className="snap-x grid-flow-col gap-6 overflow-x-auto pb-6"
            style={{
              display: 'grid',
              gridAutoColumns: 'minmax(18rem, 25rem)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                transition={{ ...revealTransition, delay: index * 0.04 }}
                className="snap-start bg-white text-[#07111F]"
              >
                <div className="media-hover-frame h-72 w-full bg-[#DCE5EF]">
                  <img src={project.image} alt={project.title} className="media-hover-scale h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/42 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#F2B705] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#07111F]">
                    {project.label}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1D7ED0]">{project.meta}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">{project.title}</h3>
                  <p className="mt-4 min-h-[6rem] text-sm font-medium leading-7 text-[#526174]">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProjects.length > 2 && (
            <button
              type="button"
              onClick={slideRight}
              className="absolute right-0 top-36 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-white text-[#07111F] shadow-2xl shadow-black/30 transition hover:bg-[#F2B705]"
              aria-label="Next projects"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
