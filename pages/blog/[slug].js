import Layout from '@/components/Layout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link 
          href="/blog"
          className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors duration-200"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>Quay lại danh sách bài viết</span>
        </Link>

        {/* Post header with gradient background */}
        <header className="mb-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <span className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg ${
                postData.category === 'Java' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-yellow-400 text-gray-900'
              }`}>
                {postData.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {postData.title}
            </h1>
            
            <div className="flex items-center gap-6 text-blue-100">
              <span className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">📅</span>
                {postData.date}
              </span>
              <span className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">⏱️</span>
                5 phút đọc
              </span>
            </div>

            {postData.excerpt && (
              <p className="mt-6 text-xl text-blue-50 leading-relaxed">
                {postData.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Post content with improved typography */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-10 lg:p-12">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                  prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
                  prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-gray-700 prose-li:my-2
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>

            {/* Share section */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Bài viết hữu ích?</h3>
              <p className="text-gray-700 mb-4">
                Chia sẻ kiến thức này với bạn bè và cộng đồng lập trình của bạn!
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  📱 Chia sẻ
                </button>
                <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium">
                  ⭐ Lưu bài viết
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                <span>←</span>
                <span>Xem tất cả bài viết</span>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    QT
                  </div>
                  <h4 className="font-bold text-gray-900">Quang Tín</h4>
                  <p className="text-sm text-gray-600">Sinh viên Lập Trình Mạng</p>
                </div>
                <Link 
                  href="/profile"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Xem Profile
                </Link>
              </div>

              {/* Category info */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  Chủ đề: {postData.category}
                </h4>
                <p className="text-sm text-blue-100">
                  {postData.category === 'Java' 
                    ? 'Khám phá sức mạnh của Java trong lập trình mạng và ứng dụng doanh nghiệp.'
                    : 'Tìm hiểu JavaScript hiện đại và công nghệ web development.'
                  }
                </p>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🔗</span>
                  Liên kết nhanh
                </h4>
                <div className="space-y-2">
                  <Link 
                    href="/blog"
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm py-1"
                  >
                    → Tất cả bài viết
                  </Link>
                  <Link 
                    href={`/blog?category=${postData.category}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm py-1"
                  >
                    → Bài viết {postData.category}
                  </Link>
                  <Link 
                    href="/"
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm py-1"
                  >
                    → Trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
