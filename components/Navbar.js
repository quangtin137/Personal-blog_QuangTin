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
    const baseClass = "relative transition-all duration-300 group"
    return isActive(path)
      ? `${baseClass} text-[#D34E4E] font-semibold`
      : `${baseClass} text-gray-700 hover:text-[#D34E4E]`
  }
  
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D34E4E] to-[#CE7E5A] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">QT</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] bg-clip-text text-transparent hidden sm:block">
              Blog Lập Trình Mạng
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={navLinkClass('/')}>
              <span>Trang chủ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className={navLinkClass('/blog')}>
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/certifications" className={navLinkClass('/certifications')}>
              <span>Chứng chỉ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/profile" className={navLinkClass('/profile')}>
              <span>Giới thiệu</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${isActive('/') ? 'text-[#D34E4E] font-semibold' : 'text-gray-700'} hover:text-[#D34E4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F9E7B2]/30`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                href="/blog"
                className={`${isActive('/blog') ? 'text-[#D34E4E] font-semibold' : 'text-gray-700'} hover:text-[#D34E4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F9E7B2]/30`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/certifications"
                className={`${isActive('/certifications') ? 'text-[#D34E4E] font-semibold' : 'text-gray-700'} hover:text-[#D34E4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F9E7B2]/30`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Chứng chỉ
              </Link>
              <Link
                href="/profile"
                className={`${isActive('/profile') ? 'text-[#D34E4E] font-semibold' : 'text-gray-700'} hover:text-[#D34E4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F9E7B2]/30`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Giới thiệu
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
