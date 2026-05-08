import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { heroImage } from '../data/siteContent';

export default function Hero({ content }) {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#0A1730] px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
    >
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0A1730]/74" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,23,48,0.96)_0%,rgba(30,58,124,0.72)_46%,rgba(89,125,200,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F3EFE3] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] lg:items-end xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#E85D3F]">
            {content.eyebrow}
          </p>
          <h1 className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[clamp(4rem,13vw,8.75rem)] font-black leading-none tracking-normal sm:gap-x-5 lg:text-[clamp(5.5rem,9vw,9rem)]">
            <span>{content.title}</span>
            <span className="flex h-[clamp(4.25rem,10vw,8.5rem)] w-[clamp(3.25rem,7.2vw,6.25rem)] shrink-0 items-center justify-center">
              <img
                src="/salegLogo-transparent.png"
                alt={`${content.title} logo`}
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-tight text-white">
            {content.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/72 sm:text-lg">
            {content.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E85D3F] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#0A1730]"
            >
              {content.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/24 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-[#0A1730]"
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
            <div key={badge} className="border-l-4 border-[#E85D3F] bg-white/9 px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-white">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center border border-white/24 text-white/80 transition hover:border-[#E85D3F] hover:text-[#E85D3F]"
        aria-label="Scroll"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
