import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'
import { DECORATIVE_IMAGES } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import type { HighlightItem, HighlightMedia } from '../i18n/translations'

function mediaSrc(file: string) {
  return `${import.meta.env.BASE_URL}projects/${file}`
}

function MediaLightbox({
  item,
  onClose,
}: {
  item: HighlightMedia
  onClose: () => void
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0C0C0C] p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 text-2xl leading-none text-[#D7E2EA]/80 transition-colors hover:border-[#B600A8]/50 hover:text-[#D7E2EA] sm:right-6 sm:top-6"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <figure
        className="relative max-h-[90vh] max-w-[min(100%,56rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={mediaSrc(item.file)}
          alt={item.alt}
          className="max-h-[90vh] max-w-full rounded-xl border border-[#D7E2EA]/15 object-contain shadow-2xl"
        />
        {item.outlet ? (
          <figcaption className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-transparent px-4 pb-3 pt-10 text-center text-xs font-medium uppercase tracking-[0.15em] text-[#D7E2EA]/85 sm:text-sm">
            {item.outlet}
          </figcaption>
        ) : null}
      </figure>
    </div>,
    document.body,
  )
}

function HighlightMediaStrip({
  heading,
  media,
}: {
  heading: string
  media: HighlightMedia[]
}) {
  const [activeItem, setActiveItem] = useState<HighlightMedia | null>(null)
  const closeLightbox = useCallback(() => setActiveItem(null), [])

  return (
    <div className="mt-5 border-t border-[#D7E2EA]/10 pt-4">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D7E2EA]/40 sm:text-xs">
        {heading}
      </p>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {media.map((item) => (
          <button
            key={`${item.file}-${item.outlet ?? 'photo'}`}
            type="button"
            className="group relative w-[88px] shrink-0 overflow-hidden rounded-lg border border-[#D7E2EA]/10 transition-colors hover:border-[#B600A8]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8]/60 sm:w-[96px]"
            onClick={() => setActiveItem(item)}
            aria-label={`View full image: ${item.alt}`}
          >
            <img
              src={mediaSrc(item.file)}
              alt=""
              aria-hidden
              className="aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
            />
            {item.outlet ? (
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0C0C0C]/95 to-transparent px-1.5 pb-1.5 pt-6 text-[9px] font-medium uppercase tracking-wide text-[#D7E2EA]/80">
                {item.outlet}
              </span>
            ) : null}
            <span className="pointer-events-none absolute inset-0 bg-[#B600A8]/0 transition-colors group-hover:bg-[#B600A8]/10" />
          </button>
        ))}
      </div>

      {activeItem ? (
        <MediaLightbox item={activeItem} onClose={closeLightbox} />
      ) : null}
    </div>
  )
}

function HighlightCard({
  title,
  subtitle,
  period,
  items,
  media,
  mediaHeading,
  delay,
}: {
  title: string
  subtitle: string
  period: string
  items: string[]
  media?: HighlightMedia[]
  mediaHeading?: string
  delay: number
}) {
  return (
    <FadeIn delay={delay} y={20}>
      <div className="relative z-10 rounded-2xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50">
          {period}
        </p>
        <h3 className="mt-2 font-bold uppercase text-[#D7E2EA]">{title}</h3>
        <p className="mt-1 text-sm font-light text-[#D7E2EA]/70">{subtitle}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm font-light leading-relaxed text-[#D7E2EA]/80"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B600A8]" />
              {item}
            </li>
          ))}
        </ul>
        {media && media.length > 0 && mediaHeading ? (
          <HighlightMediaStrip heading={mediaHeading} media={media} />
        ) : null}
      </div>
    </FadeIn>
  )
}

function renderEducationCards(education: HighlightItem[], startDelay: number) {
  return education.map((edu, i) => (
    <HighlightCard
      key={`${edu.school}-${edu.period}`}
      title={edu.school ?? ''}
      subtitle={edu.degree ?? ''}
      period={edu.period}
      items={edu.highlights}
      media={edu.media}
      mediaHeading={edu.mediaHeading}
      delay={startDelay + i * 0.1}
    />
  ))
}

function renderExperienceCards(
  experience: HighlightItem[],
  startDelay: number,
) {
  return experience.map((exp, i) => (
    <HighlightCard
      key={`${exp.company}-${exp.period}`}
      title={exp.company ?? ''}
      subtitle={exp.role ?? ''}
      period={exp.period}
      items={exp.highlights}
      delay={startDelay + i * 0.1}
    />
  ))
}

function HighlightGroup({
  heading,
  children,
  delay = 0,
}: {
  heading: string
  children: ReactNode
  delay?: number
}) {
  return (
    <div className="flex w-full flex-col gap-4 sm:gap-5">
      <FadeIn delay={delay} y={16}>
        <h3
          className="text-center font-bold uppercase tracking-widest text-[#D7E2EA]/80 sm:text-left"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          {heading}
        </h3>
      </FadeIn>
      {children}
    </div>
  )
}

export function AboutSection() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="about"
      className="relative isolate flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src={DECORATIVE_IMAGES.moon}
            alt=""
            className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
          />
        </FadeIn>

        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src={DECORATIVE_IMAGES.object3d}
            alt=""
            className="absolute bottom-[2%] left-[-4%] w-[80px] opacity-40 sm:bottom-[4%] sm:left-[-2%] sm:w-[100px] sm:opacity-60 md:bottom-[6%] md:left-[1%] md:w-[140px] md:opacity-100 lg:w-[160px]"
          />
        </FadeIn>

        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src={DECORATIVE_IMAGES.lego}
            alt=""
            className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
          />
        </FadeIn>

        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src={DECORATIVE_IMAGES.group}
            alt=""
            className="absolute bottom-[2%] right-[-2%] w-[100px] opacity-40 sm:bottom-[4%] sm:right-[1%] sm:w-[130px] sm:opacity-60 md:bottom-[6%] md:right-[4%] md:w-[170px] md:opacity-100 lg:w-[200px]"
          />
        </FadeIn>
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.about.heading}
          </h2>
        </FadeIn>

        <div className="flex w-full flex-col gap-8 sm:gap-10">
          <FadeIn delay={0.08} y={24} className="w-full">
            <figure className="max-w-[640px] text-left">
              <blockquote
                className="font-light italic leading-snug tracking-wide text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.65rem)' }}
              >
                &ldquo;{t.about.motto}&rdquo;
              </blockquote>
              <figcaption className="sr-only">Personal motto</figcaption>
              <span
                className="mt-5 block h-px w-14 bg-gradient-to-r from-[#B600A8] to-transparent"
                aria-hidden
              />
            </figure>
          </FadeIn>

          <AnimatedText
            key={lang}
            text={t.about.text}
            className="max-w-[640px] text-left font-light leading-[1.8] text-[#D7E2EA]/80"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}
          />
        </div>

        <div className="flex w-full flex-col gap-10 sm:gap-12">
          <HighlightGroup heading={t.about.educationHeading} delay={0.1}>
            <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-5">
              {renderEducationCards(t.education, 0.15)}
            </div>
          </HighlightGroup>

          <HighlightGroup heading={t.about.experienceHeading} delay={0.25}>
            <div className="grid w-full gap-4 sm:max-w-xl">
              {renderExperienceCards(t.experience, 0.3)}
            </div>
          </HighlightGroup>
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
