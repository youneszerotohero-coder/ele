import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

export default function CTA({ content }) {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-[#07111F] px-4 py-28 text-white sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      <div className="absolute inset-0">
        <img src="/vid1.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#07111F]/78" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h2
          variants={fadeUp}
          transition={revealTransition}
          className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl"
        >
          {content.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={revealTransition}
          className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-white/72 sm:text-lg"
        >
          {content.text}
        </motion.p>
        <motion.a
          variants={fadeUp}
          transition={revealTransition}
          href="mailto:sarlsaleg@yahoo.fr"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-[#F2B705] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#07111F] transition hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          {content.button}
        </motion.a>
      </div>
    </motion.section>
  );
}
