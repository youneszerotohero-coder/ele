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
import { siteContent } from './data/siteContent';

function App() {
  const [lang, setLang] = useState('fr');
  const content = siteContent[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content.dir;
  }, [content.dir, lang]);

  return (
    <main
      dir={content.dir}
      className="min-h-screen bg-[#F6F8FB] font-sans text-[#07111F] selection:bg-[#F2B705] selection:text-[#07111F]"
    >
      <Header content={content.header} lang={lang} setLang={setLang} company={content.company} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Stats content={content.stats} />
      <Services content={content.services} />
      <Portfolio content={content.portfolio} />
      <Testimonials content={content.clients} />
      <CTA content={content.cta} />
      <Footer content={content.footer} company={content.company} />
    </main>
  );
}

export default App;
