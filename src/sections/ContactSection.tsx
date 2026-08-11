import { Mail, Phone, Linkedin } from 'lucide-react'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'
import { PERSON } from '../data/content'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p
            className="font-light leading-relaxed text-[#D7E2EA]/70"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            {PERSON.fullName} ({PERSON.alias}) — {PERSON.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-col items-center gap-5 sm:gap-6">
            <a
              href={`mailto:${PERSON.email}`}
              className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
            >
              <Mail size={20} />
              <span className="font-medium">{PERSON.email}</span>
            </a>
            <a
              href={`tel:${PERSON.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
            >
              <Phone size={20} />
              <span className="font-medium">{PERSON.phone}</span>
            </a>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
            >
              <Linkedin size={20} />
              <span className="font-medium">linkedin.com/in/zonlic6</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
