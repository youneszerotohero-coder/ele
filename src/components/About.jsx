import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

export default function About({ content }) {
  return (
    <motion.section
      id="expertise"
      className="overflow-hidden bg-[#F6F8FB] px-4 py-24 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1fr] lg:items-center">
        <motion.div variants={fadeUp} transition={revealTransition} className="relative">
          <div className="media-hover-frame h-[25rem] w-full bg-[#DCE5EF] sm:h-[32rem]">
            <div
              className="media-hover-scale absolute inset-0"
              style={{ backgroundImage: "url('/engineer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/36 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 bg-[#F2B705] lg:block" />
          <div className="absolute -left-6 top-12 hidden h-24 w-24 border-[14px] border-[#1D7ED0] lg:block" />
        </motion.div>

        <motion.div variants={fadeUp} transition={revealTransition} className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#1D7ED0]">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-[#07111F] sm:text-5xl">
            {content.title}
          </h2>
          <div className="mt-7 space-y-5 text-base font-medium leading-8 text-[#4C5B6D] sm:text-lg">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 grid gap-3">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 border-t border-[#CBD5E1] pt-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0E9F6E]" />
                <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#07111F]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex bg-[#07111F] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#1D7ED0]"
          >
            {content.cta}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
