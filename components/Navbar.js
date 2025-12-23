import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
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
      ? 'text-primary font-semibold text-sm transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
      : 'text-text-secondary hover:text-primary font-medium text-sm transition-all hover:scale-105'
  }
  
  return (
    <header className={`sticky top-0 z-50 border-b border-card-border transition-all duration-300 ${
      scrolled ? 'bg-background-dark shadow-xl' : 'bg-background-dark/95 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="flex items-center justify-between whitespace-nowrap px-4 py-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
        {/* Left Section: Logo + Desktop Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 text-white hover:text-primary transition-all cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:rotate-6 group-hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight hidden sm:block">Blog Lập Trình</h2>
          </Link>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass('/')}>Trang chủ</Link>
            <Link href="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link href="/certifications" className={navLinkClass('/certifications')}>Chứng chỉ</Link>
            <Link href="/profile" className={navLinkClass('/profile')}>Giới thiệu</Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Contact Button - Desktop */}
          <a
            href="mailto:quangtin13072004@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Liên hệ
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
            🏠 Trang chủ
          </Link>
          <Link href="/blog" className={`text-sm font-medium py-2 ${isActive('/blog') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            📝 Blog
          </Link>
          <Link href="/certifications" className={`text-sm font-medium py-2 ${isActive('/certifications') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            🏆 Chứng chỉ
          </Link>
          <Link href="/profile" className={`text-sm font-medium py-2 ${isActive('/profile') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-all hover:translate-x-2`} onClick={() => setMobileMenuOpen(false)}>
            👤 Giới thiệu
          </Link>
          <a
            href="mailto:quangtin13072004@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm transition-all hover:bg-primary/90 justify-center mt-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Liên hệ
          </a>
        </div>
      )}
    </header>
  )
}
