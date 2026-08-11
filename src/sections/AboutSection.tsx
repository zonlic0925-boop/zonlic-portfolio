import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'
import {
  ABOUT_TEXT,
  DECORATIVE_IMAGES,
  EDUCATION,
  WORK_EXPERIENCE,
} from '../data/content'

function HighlightCard({
  title,
  subtitle,
  period,
  items,
  delay,
}: {
  title: string
  subtitle: string
  period: string
  items: string[]
  delay: number
}) {
  return (
    <FadeIn delay={delay} y={20}>
      <div className="rounded-2xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 p-5 sm:p-6">
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
      </div>
    </FadeIn>
  )
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
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
          className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
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
          className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
        />
      </FadeIn>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[640px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-5">
          {EDUCATION.map((edu, i) => (
            <HighlightCard
              key={edu.school}
              title={edu.school}
              subtitle={edu.degree}
              period={edu.period}
              items={edu.highlights}
              delay={0.1 + i * 0.1}
            />
          ))}
          {WORK_EXPERIENCE.map((exp, i) => (
            <HighlightCard
              key={exp.company}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              items={exp.highlights}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
