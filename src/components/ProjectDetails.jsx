import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

export default function ProjectDetails({ projectId, lang, setLang, content }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    async function loadProject() {
      try {
        const response = await fetch(`/api/projects?lang=${lang}&id=${projectId}`);
        if (!response.ok) throw new Error('Failed to load project');
        
        const data = await response.json();
        if (isMounted) {
          setProject(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProject();

    return () => {
      isMounted = false;
    };
  }, [projectId, lang]);

  if (loading) {
    return (
      <main dir={content.dir} className="min-h-screen bg-[#F3EFE3] font-sans text-[#0A1730]">
        <Header content={content.header} footerContent={content.footer} lang={lang} setLang={setLang} company={content.company} onContactClick={() => setContactModalOpen(true)} />
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-xl font-bold">Loading...</p>
        </div>
        <Footer content={content.footer} company={content.company} />
      </main>
    );
  }

  if (!project) {
    return (
      <main dir={content.dir} className="min-h-screen bg-[#F3EFE3] font-sans text-[#0A1730]">
        <Header content={content.header} footerContent={content.footer} lang={lang} setLang={setLang} company={content.company} onContactClick={() => setContactModalOpen(true)} />
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-black">Project not found</h1>
          <a href="/" className="bg-[#E85D3F] px-6 py-3 font-bold text-white hover:bg-[#0A1730]">Return Home</a>
        </div>
        <Footer content={content.footer} company={content.company} />
      </main>
    );
  }

  const images = project.images?.length > 0 ? project.images : (project.image ? [project.image] : []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main dir={content.dir} className="min-h-screen bg-[#F3EFE3] font-sans text-[#0A1730]">
      <Header content={content.header} footerContent={content.footer} lang={lang} setLang={setLang} company={content.company} onContactClick={() => setContactModalOpen(true)} />
      
      <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#E85D3F]">
            {project.label || project.category}
          </p>
          <h1 className="text-4xl font-black md:text-5xl lg:text-6xl">{project.title}</h1>
        </header>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {images.length > 0 && (
              <div className="group relative mb-12 overflow-hidden bg-[#DCE7F7] shadow-2xl">
                <div className="aspect-video w-full">
                  <img 
                    src={images[currentIndex]} 
                    alt={`${project.title} - ${currentIndex + 1}`} 
                    className="h-full w-full object-cover transition-opacity duration-300" 
                  />
                </div>
                
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage} 
                      className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white/90 text-[#0A1730] shadow-lg opacity-0 transition hover:bg-[#E85D3F] hover:text-white group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white/90 text-[#0A1730] shadow-lg opacity-0 transition hover:bg-[#E85D3F] hover:text-white group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
                      {images.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2.5 rounded-full shadow-sm transition-all ${idx === currentIndex ? 'w-10 bg-[#E85D3F]' : 'w-2.5 bg-white/70 hover:bg-white'}`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            {images.length > 1 && (
              <div className="mb-12 grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6">
                {images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-[#E85D3F] shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside>
            <div className="sticky top-8 bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-xl font-black text-[#0A1730]">
                {lang === 'fr' ? 'Détails du projet' : 'Project Details'}
              </h2>
              {project.description && (
                <div className="prose prose-sm prose-[#0A1730] mb-6 whitespace-pre-wrap font-medium">
                  {project.description}
                </div>
              )}
              {project.meta && (
                <p className="text-sm font-bold text-[#526174]">
                  {project.meta}
                </p>
              )}
              <div className="mt-8">
                <a href="/#portfolio" className="inline-flex items-center gap-2 font-bold text-[#3156A4] hover:text-[#E85D3F]">
                  &larr; {lang === 'fr' ? 'Retour aux projets' : 'Back to projects'}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer content={content.footer} company={content.company} />
      
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        footerContent={content.footer}
        lang={lang}
      />
    </main>
  );
}
