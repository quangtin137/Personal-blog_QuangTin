import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => {
    if (path === '/blog' && router.pathname.startsWith('/blog')) return true
    return router.pathname === path
  }
  
  const navLinkClass = (path) => {
    return isActive(path)
      ? 'text-primary font-medium text-sm transition-colors'
      : 'text-text-secondary hover:text-primary font-medium text-sm transition-colors'
  }
  
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background-dark/95 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10 lg:px-20">
        {/* Left Section: Logo + Desktop Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white hover:text-primary transition-colors cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight hidden sm:block">Blog Lập Trình</h2>
          </Link>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className={navLinkClass('/')}>Trang chủ</Link>
            <Link href="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link href="/certifications" className={navLinkClass('/certifications')}>Chứng chỉ</Link>
            <Link href="/profile" className={navLinkClass('/profile')}>Giới thiệu</Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Bar */}
          <Link href="/blog" className="hidden sm:flex w-full max-w-[240px] items-center rounded-lg bg-card-dark border border-card-border px-3 py-2 cursor-pointer hover:border-primary transition-all">
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="ml-2 text-sm text-text-secondary">Tìm kiếm...</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
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
        <div className="md:hidden border-t border-card-border bg-card-dark p-4 flex flex-col gap-4">
          <Link href="/" className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
            Trang chủ
          </Link>
          <Link href="/blog" className={`text-sm font-medium ${isActive('/blog') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/certifications" className={`text-sm font-medium ${isActive('/certifications') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
            Chứng chỉ
          </Link>
          <Link href="/profile" className={`text-sm font-medium ${isActive('/profile') ? 'text-primary' : 'text-text-secondary hover:text-primary'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>
            Giới thiệu
          </Link>
        </div>
      )}
    </header>
  )
}
