import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

export default function Footer({ content, company }) {
  return (
    <motion.footer
      className="bg-white px-4 pb-8 pt-18 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#D7DEE8] pb-12 lg:grid-cols-[1.1fr_1fr_1fr]">
          <motion.div variants={fadeUp} transition={revealTransition}>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center border border-[#D7DEE8] bg-white">
                <img src="/salegLogo.png" alt={company} className="h-10 w-10 object-contain" />
              </span>
              <div>
                <div className="text-2xl font-black tracking-[0.18em] text-[#07111F]">{company}</div>
                <div className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-[#1D7ED0]">HT / MT / BT</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-[#526174]">{content.tagline}</p>
          </motion.div>

          <motion.div variants={fadeUp} transition={revealTransition} className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#1D7ED0]" />
              <p className="text-sm font-semibold leading-7 text-[#526174]">{content.address}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-[#1D7ED0]" />
              <div className="text-sm font-bold leading-7 text-[#07111F]">
                <a href={`tel:${content.phone.replaceAll(' ', '')}`} className="block hover:text-[#1D7ED0]">
                  {content.phone}
                </a>
                <a href={`tel:${content.phoneAlt.replaceAll(' ', '')}`} className="block hover:text-[#1D7ED0]">
                  {content.phoneAlt}
                </a>
                <span className="block text-[#526174]">{content.landline}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-[#1D7ED0]" />
              <div className="text-sm font-bold leading-7 text-[#07111F]">
                {content.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block hover:text-[#1D7ED0]">
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={revealTransition} className="grid gap-8 sm:grid-cols-2">
            {content.columns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#07111F]">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link} className="text-sm font-semibold text-[#526174]">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm font-semibold text-[#738195] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company}. {content.rights}</p>
          <p>{content.city}</p>
        </div>
      </div>
    </motion.footer>
  );
}
