import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  
  const isActive = (path) => {
    return router.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
  }
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Blog Lập Trình Mạng
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/" className={`${isActive('/')} transition-colors`}>
              Trang chủ
            </Link>
            <Link href="/blog" className={`${isActive('/blog')} transition-colors`}>
              Blog
            </Link>
            <Link href="/profile" className={`${isActive('/profile')} transition-colors`}>
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
