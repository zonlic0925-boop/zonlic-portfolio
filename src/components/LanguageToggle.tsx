import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 p-1 backdrop-blur-md sm:right-6 sm:top-6"
      role="group"
      aria-label={t.language.label}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors sm:px-4 sm:text-sm ${
          lang === 'en'
            ? 'bg-[#D7E2EA] text-[#0C0C0C]'
            : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'
        }`}
      >
        {t.language.en}
      </button>
      <button
        type="button"
        onClick={() => setLang('zh')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wider transition-colors sm:px-4 sm:text-sm ${
          lang === 'zh'
            ? 'bg-[#D7E2EA] text-[#0C0C0C]'
            : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'
        }`}
      >
        {t.language.zh}
      </button>
    </div>
  )
}
