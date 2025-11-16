import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Chào mừng đến với Blog Lập Trình Mạng
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Chia sẻ kiến thức về Java, JavaScript và lập trình mạng
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Xem bài viết
            </Link>
            <Link 
              href="/profile"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Giới thiệu
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2">Java</h3>
            <p className="text-gray-600">
              Khám phá sức mạnh của Java trong lập trình mạng, socket programming và các framework hiện đại.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🟨</div>
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-600">
              Tìm hiểu JavaScript từ cơ bản đến nâng cao, Node.js và các công nghệ web hiện đại.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">Lập trình mạng</h3>
            <p className="text-gray-600">
              Khám phá các giao thức mạng, TCP/IP, HTTP và xây dựng ứng dụng mạng thực tế.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng học tập?</h2>
          <p className="text-lg mb-6">
            Khám phá các bài viết chất lượng về Java, JavaScript và lập trình mạng
          </p>
          <Link 
            href="/blog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Bắt đầu ngay
          </Link>
        </div>
      </div>
    </Layout>
  )
}
