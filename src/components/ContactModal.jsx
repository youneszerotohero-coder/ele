import { Mail, Phone, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactModal({ isOpen, onClose, footerContent, lang }) {
  if (!isOpen) return null;

  const t = {
    en: {
      title: "Let's connect",
      subtitle: "Pick how you'd like to reach us",
      email: "EMAIL",
      phone: "MOBILE",
      landline: "LANDLINE"
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Choisissez comment nous joindre",
      email: "E-MAIL",
      phone: "MOBILE",
      landline: "FIXE"
    }
  }[lang];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1730]/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md overflow-hidden bg-[#0A1730] p-8 shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center bg-white/10 text-white/70 transition hover:bg-[#E85D3F] hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-white">{t.title}</h2>
            <p className="mt-2 text-sm font-medium text-white/60">{t.subtitle}</p>
          </div>

          <div className="grid gap-4">
            {/* Mobile 1 */}
            <a
              href={`tel:${footerContent.phone.replace(/[\s]/g, '')}`}
              className="group flex items-center justify-between bg-[#E85D3F] p-4 text-white transition hover:-translate-y-1 shadow-lg shadow-[#E85D3F]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-white/80">{t.phone}</p>
                  <p className="text-base font-bold">{footerContent.phone}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            {/* Mobile 2 */}
            <a
              href={`tel:${footerContent.phoneAlt.replace(/[\s]/g, '')}`}
              className="group flex items-center justify-between bg-[#E85D3F] p-4 text-white transition hover:-translate-y-1 shadow-lg shadow-[#E85D3F]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-white/80">{t.phone}</p>
                  <p className="text-base font-bold">{footerContent.phoneAlt}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            {/* Landline */}
            <a
              href={`tel:${footerContent.landline.replace(/[\s]/g, '')}`}
              className="group flex items-center justify-between bg-[#DCE7F7] p-4 text-[#0A1730] transition hover:-translate-y-1 shadow-lg shadow-[#DCE7F7]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0A1730]/10">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#0A1730]/70">{t.landline}</p>
                  <p className="text-base font-bold">{footerContent.landline}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-[#0A1730]/10 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            {/* Email 1 */}
            <a
              href={`mailto:${footerContent.emails[0]}`}
              className="group flex items-center justify-between bg-[#3156A4] p-4 text-white transition hover:-translate-y-1 shadow-lg shadow-[#3156A4]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white/20">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-white/80">{t.email}</p>
                  <p className="text-sm sm:text-base font-bold truncate max-w-[180px] sm:max-w-none">{footerContent.emails[0]}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            {/* Email 2 */}
            <a
              href={`mailto:${footerContent.emails[1]}`}
              className="group flex items-center justify-between bg-[#3156A4] p-4 text-white transition hover:-translate-y-1 shadow-lg shadow-[#3156A4]/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white/20">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-white/80">{t.email}</p>
                  <p className="text-sm sm:text-base font-bold truncate max-w-[180px] sm:max-w-none">{footerContent.emails[1]}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
