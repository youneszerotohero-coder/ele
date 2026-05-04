import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, revealViewport, staggerContainer } from '../lib/motionPresets';

export default function Footer({ content, company }) {
  return (
    <motion.footer
      id="contact"
      className="bg-[#07111F] border-t border-white/10 text-white"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={staggerContainer}
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* About/Company Section */}
          <motion.div variants={fadeUp} transition={revealTransition} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 rounded-lg">
                <img src="/salegLogo.png" alt={company} className="h-8 w-8 object-contain brightness-0 invert" />
              </span>
              <div>
                <div className="text-xl font-black tracking-[0.1em] text-white">{company}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.15em] text-[#F2B705]">HT / MT / BT</div>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/60">
              {content.tagline}
            </p>
          </motion.div>

          {/* Quick Links Columns */}
          {content.columns.map((column) => (
            <motion.div key={column.title} variants={fadeUp} transition={revealTransition}>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#F2B705] mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 cursor-default">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={fadeUp} transition={revealTransition}>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-[#F2B705] mb-6">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#1D7ED0]" />
                <p className="text-sm font-semibold leading-relaxed text-white/70">
                  {content.address}
                </p>
              </div>
              
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#1D7ED0]" />
                <div className="text-sm font-bold text-white">
                  <a href={`tel:${content.phone.replaceAll(' ', '')}`} className="block hover:text-[#F2B705] transition-colors">
                    {content.phone}
                  </a>
                  <a href={`tel:${content.phoneAlt.replaceAll(' ', '')}`} className="block hover:text-[#F2B705] transition-colors">
                    {content.phoneAlt}
                  </a>
                  <span className="block text-white/50 font-medium mt-1">{content.landline}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#1D7ED0]" />
                <div className="text-sm font-bold text-white">
                  {content.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block hover:text-[#F2B705] transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div 
          variants={fadeUp} 
          transition={revealTransition}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.111406462303!2d3.1924707748909342!3d36.71498907249989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5194f8789fe7%3A0x777a4233730997c7!2sSarl%20SALEG!5e1!3m2!1sen!2sdz!4v1777903260964!5m2!1sen!2sdz" 
              width="100%" 
              height="100%" 
              // style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/20 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-white/40">
            <p>© 2026 {company}. {content.rights}</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#F2B705]" />
              <span>{content.city}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

