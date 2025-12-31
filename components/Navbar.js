import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

export default function Navbar() {
  const router = useRouter()
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const isActive = (path) => {
    if (path === '/blog' && router.pathname.startsWith('/blog')) return true
    return router.pathname === path
  }
  
  const navLinkClass = (path) => {
    return isActive(path)
      ? 'text-primary font-semibold text-sm transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-500 after:shadow-lg after:shadow-primary/50'
      : 'text-text-secondary hover:text-primary font-medium text-sm transition-all hover:scale-105 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-500 hover:after:w-full after:transition-all after:duration-300'
  }
  
  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-background-dark/80 backdrop-blur-xl shadow-xl border-card-border/50' 
        : 'bg-background-dark/70 backdrop-blur-md shadow-lg border-card-border/30'
    }`}>
      {/* Gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="flex items-center justify-between whitespace-nowrap px-4 py-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        {/* Left Section: Logo + Desktop Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 text-white hover:text-primary transition-all cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6 group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight hidden sm:block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all">Blog Lập Trình</h2>
          </Link>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass('/')}>{t('home')}</Link>
            <Link href="/blog" className={navLinkClass('/blog')}>{t('blog')}</Link>
            <Link href="/certifications" className={navLinkClass('/certifications')}>{t('certifications')}</Link>
            <Link href="/profile" className={navLinkClass('/profile')}>{t('profile')}</Link>
            <Link href="/contact" className={navLinkClass('/contact')}>{t('contact')}</Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Download CV Button - Desktop */}
          <a
            href="/Văn_Quang_Tín_cv.pdf"
            download="Van_Quang_Tin_CV.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-4 h-4 relative z-10 group-hover:animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative z-10">{t('cv')}</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-all hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-card-dark/95 backdrop-blur-sm p-4 flex flex-col gap-4 animate-fade-in">
          <Link href="/" className={`text-sm font-medium py-2 ${isActive('/') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            🏠 {t('home')}
          </Link>
          <Link href="/blog" className={`text-sm font-medium py-2 ${isActive('/blog') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            📝 {t('blog')}
          </Link>
          <Link href="/certifications" className={`text-sm font-medium py-2 ${isActive('/certifications') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            🏆 {t('certifications')}
          </Link>
          <Link href="/profile" className={`text-sm font-medium py-2 ${isActive('/profile') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            👤 {t('profile')}
          </Link>
          <Link href="/contact" className={`text-sm font-medium py-2 ${isActive('/contact') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            📬 {t('contact')}
          </Link>
          {/* Download CV - Mobile */}
          <a
            href="/Văn_Quang_Tín_cv.pdf"
            download="Van_Quang_Tin_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium text-sm transition-all hover:bg-green-500 justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('downloadCV')}
          </a>
        </div>
      )}
    </header>
  )
}
