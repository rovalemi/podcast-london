import Nav from './components/Nav'
import Hero from './components/Hero'
import EpisodesSection from './components/EpisodesSection'
import ProductionSection from './components/ProductionSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const active = useActiveSection(['home', 'episodes', 'production', 'contact'])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <header>
        <Nav active={active} />
      </header>

      <main id="main-content">
        <Hero />
        <EpisodesSection />
        <ProductionSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
}
