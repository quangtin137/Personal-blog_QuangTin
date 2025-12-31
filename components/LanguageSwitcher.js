import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-card-border hover:bg-primary/20 text-text-secondary hover:text-primary transition-all hover:scale-105 group overflow-hidden"
      aria-label="Switch Language"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span className="text-sm font-semibold relative z-10">
        {language === 'vi' ? 'EN' : 'VI'}
      </span>
    </button>
  )
}
