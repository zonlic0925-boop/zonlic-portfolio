import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectDemo } from '../i18n/translations'

function demoSrc(file: string) {
  return `${import.meta.env.BASE_URL}projects/dragon-balloon/${file}`
}

export function ProjectDemoShowcase({
  heading,
  demos,
}: {
  heading: string
  demos: ProjectDemo[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const activeDemo = demos[activeIndex]

  const selectDemo = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [activeIndex])

  return (
    <div className="mt-8 border-t border-[#D7E2EA]/10 pt-6 sm:mt-10 sm:pt-8">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D7E2EA]/40 sm:text-xs">
        {heading}
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03]">
        <div className="relative aspect-video w-full bg-[#0C0C0C]">
          <video
            ref={videoRef}
            key={activeDemo.file}
            className="h-full w-full object-contain"
            controls
            playsInline
            preload="metadata"
            aria-label={activeDemo.title}
          >
            <source src={demoSrc(activeDemo.file)} type="video/mp4" />
          </video>
        </div>

        <div className="border-t border-[#D7E2EA]/10 px-3 py-3 sm:px-4 sm:py-4">
          <p className="text-sm font-medium text-[#D7E2EA]/90 sm:text-base">
            <span className="mr-2 font-black tabular-nums text-[#B600A8]/80">
              {activeDemo.number}
            </span>
            {activeDemo.title}
          </p>
          {activeDemo.description ? (
            <p className="mt-1 text-xs font-light leading-relaxed text-[#D7E2EA]/50 sm:text-sm">
              {activeDemo.description}
            </p>
          ) : null}
        </div>
      </div>

      <div
        className="mt-3 flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label={heading}
      >
        {demos.map((demo, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={demo.file}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`demo-panel-${demo.file}`}
              className={`group flex min-w-[7.5rem] shrink-0 flex-col gap-1 rounded-lg border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8]/60 sm:min-w-[8.5rem] ${
                isActive
                  ? 'border-[#B600A8]/55 bg-[#B600A8]/10'
                  : 'border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] hover:border-[#B600A8]/35 hover:bg-[#B600A8]/5'
              }`}
              onClick={() => selectDemo(index)}
            >
              <span
                className={`text-[10px] font-black tabular-nums tracking-wider transition-colors sm:text-xs ${
                  isActive ? 'text-[#B600A8]' : 'text-[#D7E2EA]/30 group-hover:text-[#B600A8]/70'
                }`}
              >
                {demo.number}
              </span>
              <span
                className={`text-[11px] font-medium leading-snug sm:text-xs ${
                  isActive ? 'text-[#D7E2EA]/90' : 'text-[#D7E2EA]/55 group-hover:text-[#D7E2EA]/75'
                }`}
              >
                {demo.title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
