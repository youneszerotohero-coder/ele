import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { heroImage } from '../data/siteContent';

export default function Hero({ content }) {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#07111F] px-4 pb-14 pt-36 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#07111F]/72" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.70)_45%,rgba(7,17,31,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F6F8FB] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#F2B705]">
            {content.eyebrow}
          </p>
          <h1 className="text-7xl font-black leading-none tracking-normal sm:text-8xl lg:text-[9.5rem]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
            {content.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72 sm:text-lg">
            {content.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F2B705] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#07111F] transition hover:bg-white"
            >
              {content.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/24 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-[#07111F]"
            >
              {content.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {content.badges.map((badge) => (
            <div key={badge} className="border-l-4 border-[#F2B705] bg-white/9 px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-white">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#expertise"
        className="absolute bottom-5 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center border border-white/24 text-white/80 transition hover:border-[#F2B705] hover:text-[#F2B705]"
        aria-label="Scroll"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
