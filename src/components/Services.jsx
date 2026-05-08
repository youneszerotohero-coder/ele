import { Activity, BatteryCharging, Gauge, ShieldCheck, SunMedium, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, staggerContainer } from '../lib/motionPresets';

const icons = [Activity, Zap, SunMedium, Gauge, BatteryCharging, ShieldCheck];

export default function Services({ content }) {
  return (
    <motion.section
      id="services"
      className="overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} transition={revealTransition} className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#3156A4]">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-[#0A1730] sm:text-5xl">
            {content.title}
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-[#D7DEE8] bg-[#D7DEE8] md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ ...revealTransition, delay: index * 0.03 }}
                className="group bg-white/72 p-7 transition hover:bg-[#0A1730]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-[#EAF2FF] text-[#3156A4] transition group-hover:bg-[#E85D3F] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-black text-[#A8B4C4] transition group-hover:text-white/42">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight text-[#0A1730] transition group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-5 min-h-[8rem] text-sm font-medium leading-7 text-[#526174] transition group-hover:text-white/70">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="border border-[#CAD5E2] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#526174] transition group-hover:border-white/18 group-hover:text-white/72"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
