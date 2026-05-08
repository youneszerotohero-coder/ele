import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import ProjectDetails from './components/ProjectDetails';
import { siteContent } from './data/siteContent';
import ContactModal from './components/ContactModal';

function App() {
  const [lang, setLang] = useState('en');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mongoProjectsByLang, setMongoProjectsByLang] = useState({});
  const content = siteContent[lang];
  const portfolioContent = {
    ...content.portfolio,
    projects: mongoProjectsByLang[lang] ?? content.portfolio.projects,
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content.dir;
  }, [content.dir, lang]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fallbackImages = content.portfolio.projects.map((project) => project.image);

    async function loadProjects() {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';
        const response = await fetch(`${apiBaseUrl}/projects?lang=${lang}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Projects request failed with ${response.status}`);
        }

        const data = await response.json();

        if (!isMounted || !Array.isArray(data.projects)) {
          return;
        }

        setMongoProjectsByLang((currentProjects) => ({
          ...currentProjects,
          [lang]: data.projects.map((project, index) => ({
            ...project,
            image: project.image || fallbackImages[index % fallbackImages.length],
          })),
        }));
      } catch (error) {
        if (error.name !== 'AbortError') {
          setMongoProjectsByLang((currentProjects) => {
            const nextProjects = { ...currentProjects };
            delete nextProjects[lang];
            return nextProjects;
          });
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [content.portfolio.projects, lang]);

  if (window.location.pathname.startsWith('/admin')) {
    return <AdminPanel />;
  }

  if (window.location.pathname.startsWith('/project/')) {
    const projectId = window.location.pathname.split('/')[2];
    return <ProjectDetails projectId={projectId} lang={lang} setLang={setLang} content={content} />;
  }

  return (
    <main
      dir={content.dir}
      className="min-h-screen bg-[#F3EFE3] font-sans text-[#0A1730] selection:bg-[#E85D3F] selection:text-white"
    >
      <Header content={content.header} footerContent={content.footer} lang={lang} setLang={setLang} company={content.company} onContactClick={() => setContactModalOpen(true)} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Stats content={content.stats} />
      <Services content={content.services} />
      <Portfolio content={portfolioContent} />
      <Testimonials content={content.clients} />
      <CTA content={content.cta} onContactClick={() => setContactModalOpen(true)} />
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

export default App;
