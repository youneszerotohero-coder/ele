import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, staggerContainer } from '../lib/motionPresets';

export default function CTA({ content }) {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-[#0A1730] px-4 py-28 text-white sm:px-6 lg:px-8"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="absolute inset-0">
        <img src="/vid1.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0A1730]/78" />
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
          className="mt-10 inline-flex items-center justify-center gap-2 bg-[#E85D3F] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#0A1730]"
        >
          <Mail className="h-4 w-4" />
          {content.button}
        </motion.a>
      </div>
    </motion.section>
  );
}
