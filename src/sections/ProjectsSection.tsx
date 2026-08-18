import { FadeIn } from '../components/FadeIn'
import { ProjectDemoShowcase } from '../components/ProjectDemoShowcase'
import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectItem } from '../i18n/translations'

function ProjectEntry({
  project,
  index,
  total,
}: {
  project: ProjectItem
  index: number
  total: number
}) {
  return (
    <FadeIn delay={index * 0.08} y={24}>
      <article
        className="group relative py-10 sm:py-12 md:py-16"
        style={{
          borderBottom:
            index < total - 1 ? '1px solid rgba(215, 226, 234, 0.12)' : undefined,
        }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:gap-10 lg:gap-16">
          <div className="flex shrink-0 items-start gap-4 md:w-28 md:flex-col md:gap-2 lg:w-32">
            <span
              className="font-black leading-none text-[#D7E2EA]/25 transition-colors duration-300 group-hover:text-[#B600A8]/80"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              {project.number}
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-[#B600A8]/60 to-transparent md:block" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-sm">
              <span>{project.period}</span>
              <span className="text-[#B600A8]/70" aria-hidden>
                ·
              </span>
              <span>{project.category}</span>
            </div>

            <h3
              className="mt-3 font-medium uppercase leading-tight text-[#D7E2EA] sm:mt-4"
              style={{ fontSize: 'clamp(1.35rem, 3.2vw, 2.25rem)' }}
            >
              {project.name}
            </h3>

            <p
              className="mt-3 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/65 sm:mt-4"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)' }}
            >
              {project.description}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-light leading-relaxed text-[#D7E2EA]/55 sm:text-base"
                >
                  <span
                    className="mt-2 h-px w-4 shrink-0 bg-[#B600A8]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            {project.demos && project.demos.length > 0 ? (
              <ProjectDemoShowcase
                heading={project.demosHeading ?? 'Feature Demos'}
                demos={project.demos}
              />
            ) : null}
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()
  const total = t.projects.items.length

  return (
    <section
      id="projects"
      className="relative -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20">
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[#D7E2EA]/12">
        {t.projects.items.map((project, index) => (
          <ProjectEntry
            key={project.number}
            project={project}
            index={index}
            total={total}
          />
        ))}
      </div>
    </section>
  )
}
