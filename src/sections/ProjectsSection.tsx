import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import { LiveProjectButton } from '../components/LiveProjectButton'
import { FadeIn } from '../components/FadeIn'
import { PROJECT_IMAGES } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectItem } from '../i18n/translations'

function ProjectCard({
  project,
  images,
  index,
  totalCards,
}: {
  project: ProjectItem
  images: (typeof PROJECT_IMAGES)[number]
  index: number
  totalCards: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isLast = index === totalCards - 1
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className={
        isLast
          ? 'mb-10 md:mb-0 md:h-[115vh]'
          : 'mb-10 md:mb-0 md:h-[85vh]'
      }
    >
      <div
        className="md:sticky md:top-[calc(6rem+var(--card-offset))] lg:top-[calc(8rem+var(--card-offset))]"
        style={{ '--card-offset': `${index * 28}px` } as CSSProperties}
      >
        <motion.div
          style={{ scale }}
          className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        >
          <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span
                className="font-black text-[#D7E2EA]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/50">
                {project.period}
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
              <p className="mt-1 max-w-xl text-sm font-light leading-relaxed text-[#D7E2EA]/70">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs font-light leading-relaxed text-[#D7E2EA]/60 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B600A8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LiveProjectButton className="shrink-0 self-start" />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-[40%] md:flex-col md:gap-4">
              <img
                src={images.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={images.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="w-full md:w-[60%]">
              <img
                src={images.col2Image}
                alt={`${project.name} main preview`}
                loading="lazy"
                className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ minHeight: 'clamp(180px, 28vw, 420px)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {t.projects.items.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            images={PROJECT_IMAGES[index]}
            index={index}
            totalCards={t.projects.items.length}
          />
        ))}
        <div aria-hidden className="hidden md:block h-[20vh]" />
      </div>
    </section>
  )
}
