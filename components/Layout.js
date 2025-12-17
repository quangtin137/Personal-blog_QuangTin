import Navbar from './Navbar'
import Link from 'next/link'

export default function Layout({ children }) {
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
                <a href="https://github.com/quangtin137" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  GitHub
                </a>
                <a href="mailto:quangtin13072004@gmail.com" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  Email
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">
                  RSS Feed
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
                <a href="https://github.com/quangtin137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-card-border hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <span className="text-lg">🔗</span>
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
              &copy; 2024 Blog Lập Trình. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
