import { Building2, Factory, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

const icons = [Building2, Factory, Handshake];

export default function Testimonials({ content }) {
  return (
    <motion.section
      id="clients"
      className="overflow-hidden bg-[#F6F8FB] px-4 py-24 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} transition={revealTransition} className="max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#1D7ED0]">
            {content.eyebrow}
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-[#07111F] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#526174] sm:text-lg">
            {content.intro}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.groups.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                transition={{ ...revealTransition, delay: index * 0.06 }}
                className="border border-[#D7DEE8] bg-white p-7"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center bg-[#E8F1FC] text-[#1D7ED0]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-black text-[#07111F]">{group.title}</h3>
                <div className="mt-7 grid gap-3">
                  {group.names.map((name) => (
                    <div key={name} className="border-t border-[#E2E8F0] pt-3 text-sm font-bold text-[#526174]">
                      {name}
                    </div>
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
