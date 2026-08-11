import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'

function App() {
  return (
    <div
      className="font-kanit"
      style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
