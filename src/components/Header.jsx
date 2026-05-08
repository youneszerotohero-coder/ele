import { Menu, Phone, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { languages } from '../data/siteContent';

export default function Header({ content, lang, setLang, company }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderNavLinks = () =>
    content.nav.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="text-sm font-semibold text-white/78 transition hover:text-white"
      >
        {item.label}
      </a>
    ));

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border border-white/12 bg-[#0A1730]/86 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5 lg:gap-6">
        <a href="#accueil" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-9 shrink-0 items-center justify-center sm:h-12 sm:w-10">
            <img src="/salegLogo-transparent.png" alt={company} className="h-full w-auto object-contain" />
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-[0.16em] text-white sm:text-lg">{company}</span>
            <span className="mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#E85D3F]">
              HT / MT / BT
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">{renderNavLinks()}</nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex border border-white/15 bg-white/8 p-1">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLang(language.code)}
                  className={`px-3 py-1.5 text-xs font-bold transition ${
                    lang === language.code
                    ? 'bg-[#E85D3F] text-white'
                    : 'text-white/68 hover:text-white'
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-bold text-[#0A1730] transition hover:bg-[#E85D3F] hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {content.contact}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-2 max-w-7xl border border-white/12 bg-[#0A1730]/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl lg:hidden"
        >
          <nav className="grid gap-4 py-2">{renderNavLinks()}</nav>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
            <div className="flex border border-white/15 bg-white/8 p-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLang(language.code)}
                    className={`px-3 py-1.5 text-xs font-bold transition ${
                      lang === language.code
                      ? 'bg-[#E85D3F] text-white'
                      : 'text-white/68 hover:text-white'
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-bold text-[#0A1730]"
            >
              <Phone className="h-4 w-4" />
              {content.contact}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
