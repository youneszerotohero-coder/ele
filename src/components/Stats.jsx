import { Play, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import CountUp from './CountUp';
import { fadeUp, revealTransition, staggerContainer } from '../lib/motionPresets';

export default function Stats({ content }) {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#0A1730] px-4 py-24 text-white sm:px-6 lg:px-8"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="absolute right-0 top-0 h-28 w-28 bg-[#E85D3F]" />
      <div className="absolute bottom-0 left-0 h-24 w-24 bg-[#3156A4]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div variants={fadeUp} transition={revealTransition}>
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-[#E85D3F]">
            <Zap className="h-4 w-4" />
            {content.eyebrow}
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            {content.title}
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2">
            {content.items.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ ...revealTransition, delay: index * 0.04 }}
                className="bg-[#102247] p-6"
              >
                <div className="flex items-baseline gap-2">
                  <CountUp
                    to={stat.value}
                    duration={2.3}
                    separator=","
                    className="text-5xl font-black tracking-normal text-white"
                  />
                  <span className="text-2xl font-black text-[#E85D3F]">{stat.suffix}</span>
                  {stat.accent && <span className="text-sm font-black text-white/58">{stat.accent}</span>}
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/62">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} transition={revealTransition} className="relative">
          <div className="media-hover-frame media-video-card h-[21rem] w-full bg-[#17305D] sm:h-[32rem]">
            <div
              className="media-hover-scale absolute inset-0"
              style={{ backgroundImage: "url('/vid1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-[#0A1730]/18 transition-colors duration-300 hover:bg-[#0A1730]/32" />
            {/* <div
              aria-hidden="true"
              className="video-play-button absolute left-1/2 top-1/2 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white/94 md:h-20 md:w-20"
            >
              <Play className="video-play-icon h-7 w-7 text-[#0A1730] md:h-9 md:w-9" fill="currentColor" strokeWidth={1.75} />
            </div> */}
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-[14px] border-[#E85D3F] lg:block" />
        </motion.div>
      </div>
    </motion.section>
  );
}
