import Navbar from './Navbar'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hiện nút khi scroll xuống 300px
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-card-border bg-card-dark/50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">Blog Lập Trình</span>
              </div>
              <p className="text-text-secondary text-sm">
                Chia sẻ kiến thức về Java, JavaScript, Node.js và lập trình mạng
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Navigation</h4>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Trang chủ
                </Link>
                <Link href="/blog" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/certifications" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Chứng chỉ
                </Link>
                <Link href="/profile" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Giới thiệu
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/quangtin137" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="mailto:quangtin13072004@gmail.com" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Email
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Connect</h4>
              <p className="text-text-secondary text-sm">
                Theo dõi để cập nhật những bài viết mới nhất về lập trình
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/quangtin137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-card-border hover:bg-primary/20 hover:text-primary transition-all duration-300" title="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:quangtin13072004@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-lg bg-card-border hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <span className="text-lg">📧</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              &copy; 2025 Blog Lập Trình. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/25 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        title="Về đầu trang"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  )
}
