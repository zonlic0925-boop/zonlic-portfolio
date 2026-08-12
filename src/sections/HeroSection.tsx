import { AnimatedPortrait } from '../components/AnimatedPortrait'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'
import { LanguageToggle } from '../components/LanguageToggle'
import { Magnet } from '../components/Magnet'
import { HERO_PORTRAIT, NAV_HREFS, PERSON } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.about, href: NAV_HREFS[0].href },
    { label: t.nav.skills, href: NAV_HREFS[1].href },
    { label: t.nav.projects, href: NAV_HREFS[2].href },
    { label: t.nav.contact, href: NAV_HREFS[3].href },
  ]

  return (
    <section className="relative flex h-screen flex-col overflow-x-clip px-6 md:px-10">
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-30 flex items-center justify-between gap-4 pt-6 md:pt-8">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:gap-6 md:gap-8 lg:gap-12">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <LanguageToggle />
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="mt-6 w-full sm:mt-4 md:-mt-5">
        <h1
          className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(4.5rem, 22vw, 15rem)' }}
        >
          {PERSON.displayName}
        </h1>
        <p
          className="mt-3 text-center font-light uppercase tracking-[0.35em] text-[#D7E2EA]/50"
          style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
        >
          {PERSON.fullName}
        </p>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <ul
            className="flex flex-col gap-1.5 font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:gap-2"
            style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1.125rem)' }}
          >
            {t.hero.taglines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:w-[360px] sm:translate-y-0 sm:bottom-0 md:w-[440px] lg:w-[520px]"
        >
          <AnimatedPortrait
            src={HERO_PORTRAIT}
            alt={`${PERSON.fullName} (${PERSON.alias}) portrait`}
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
