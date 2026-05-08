import { useEffect, useState } from 'react';
import { CheckCircle2, FileText, Presentation, X } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, revealTransition, staggerContainer } from '../lib/motionPresets';

const documentIcons = {
  presentation: Presentation,
  details: FileText,
};

function getDocumentPages(document) {
  if (!document?.pageCount || !document?.pagePath) return [];

  return Array.from({ length: document.pageCount }, (_, index) => {
    const pageNumber = String(index + 1).padStart(2, '0');
    return `${document.pagePath}${pageNumber}.jpg`;
  });
}

export default function About({ content }) {
  const [activeDocument, setActiveDocument] = useState(null);
  const activePages = getDocumentPages(activeDocument);

  useEffect(() => {
    if (!activeDocument) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDocument(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDocument]);

  return (
    <>
      <motion.section
        id="about"
        className="overflow-hidden bg-[#F3EFE3] px-4 py-24 sm:px-6 lg:px-8"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1fr] lg:items-center">
          <motion.div variants={fadeUp} transition={revealTransition} className="relative">
            <div className="media-hover-frame h-[25rem] w-full bg-[#DCE7F7] sm:h-[32rem]">
              <div
                className="media-hover-scale absolute inset-0"
                style={{ backgroundImage: "url('/engineer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1730]/36 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 bg-[#E85D3F] lg:block" />
            <div className="absolute -left-6 top-12 hidden h-24 w-24 border-[14px] border-[#3156A4] lg:block" />
          </motion.div>

          <motion.div variants={fadeUp} transition={revealTransition} className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#3156A4]">
              {content.eyebrow}
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-normal text-[#0A1730] sm:text-5xl">
              {content.title}
            </h2>
            <div className="mt-7 space-y-5 text-base font-medium leading-8 text-[#4C5B6D] sm:text-lg">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid gap-3">
              {content.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 border-t border-[#C4D2EA] pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E85D3F]" />
                  <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#0A1730]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-10 inline-flex bg-[#0A1730] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#3156A4]"
            >
              {content.cta}
            </a>

            <div className="mt-10 border-t border-[#C4D2EA] pt-6">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#3156A4]">
                {content.documentsLabel}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.documents.map((document) => {
                  const Icon = documentIcons[document.type] ?? FileText;

                  return (
                    <button
                      key={document.href}
                      type="button"
                      onClick={() => setActiveDocument(document)}
                      className="group flex min-h-16 items-center gap-4 border border-[#C4D2EA] bg-white/48 px-4 py-3 text-left transition hover:border-[#E85D3F] hover:bg-white"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#E85D3F] text-white transition group-hover:bg-[#0A1730]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-black uppercase tracking-[0.12em] text-[#0A1730]">
                        {document.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {activeDocument && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1730]/78 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeDocument.label}
        >
          <div className="flex h-[88svh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-[#D7E0EF] bg-[#F3EFE3] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#3156A4]">
                  {content.documentsLabel}
                </p>
                <h3 className="truncate text-base font-black uppercase tracking-[0.08em] text-[#0A1730] sm:text-lg">
                  {activeDocument.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDocument(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0A1730] text-white transition hover:bg-[#E85D3F]"
                aria-label={content.closeLabel}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-full overflow-y-auto bg-[#D7E0EF] px-3 py-5 sm:px-6">
              <div className="mx-auto grid max-w-5xl gap-5">
                {activePages.map((page, index) => (
                  <img
                    key={page}
                    src={page}
                    alt={`${activeDocument.label} - page ${index + 1}`}
                    className="w-full bg-white shadow-lg"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
