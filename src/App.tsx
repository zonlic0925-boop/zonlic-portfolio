import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'
import { useLanguage } from './i18n/LanguageContext'

function App() {
  const { lang } = useLanguage()

  return (
    <div
      className={lang === 'zh' ? 'font-noto-tc' : 'font-kanit'}
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
