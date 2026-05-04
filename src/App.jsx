import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="font-sans min-h-screen selection:bg-[#E8A57A] selection:text-[#1C1C1C]">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default App