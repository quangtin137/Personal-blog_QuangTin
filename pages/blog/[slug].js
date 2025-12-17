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
      <article className="min-h-screen bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link 
          href="/blog"
          className="group inline-flex items-center gap-2 text-primary hover:text-blue-400 mb-8 font-medium transition-colors duration-200"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span>Quay lại danh sách bài viết</span>
        </Link>

        {/* Post header with gradient background */}
        <header className="mb-12 bg-gradient-to-br from-primary via-blue-500 to-blue-400 rounded-2xl shadow-2xl shadow-primary/20 p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <span className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg ${
                postData.category === 'Java' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-yellow-500 text-white'
              }`}>
                {postData.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {postData.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/90">
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">📅</span>
                {postData.date}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">⏱️</span>
                5 phút đọc
              </span>
            </div>

            {postData.excerpt && (
              <p className="mt-6 text-xl text-white leading-relaxed">
                {postData.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Post content with improved typography */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-card-dark rounded-2xl shadow-xl p-10 lg:p-12 border border-card-border">
              <div 
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-white
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
                  prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-card-border
                  prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:text-blue-400 hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-bold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                  prose-pre:bg-[#0f172a] prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-card-border
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-text-secondary prose-li:my-2
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/10 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-text-secondary
                  prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>

            {/* Share section */}
            <div className="mt-8 bg-primary/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-4">💡 Bài viết hữu ích?</h3>
              <p className="text-text-secondary mb-4">
                Chia sẻ kiến thức này với bạn bè và cộng đồng lập trình của bạn!
              </p>
              <div className="flex gap-3">
                <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-lg shadow-primary/20">
                  📱 Chia sẻ
                </button>
                <button className="bg-card-border text-text-secondary px-5 py-2 rounded-lg hover:bg-card-dark hover:text-white transition-all duration-200 font-medium">
                  ⭐ Lưu bài viết
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl font-semibold"
              >
                <span>←</span>
                <span>Xem tất cả bài viết</span>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author card */}
              <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    QT
                  </div>
                  <h4 className="font-bold text-white">Quang Tín</h4>
                  <p className="text-sm text-text-secondary">Sinh viên Lập Trình Mạng</p>
                </div>
                <Link 
                  href="/profile"
                  className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm font-medium"
                >
                  Xem Profile
                </Link>
              </div>

              {/* Category info */}
              <div className={`rounded-xl shadow-lg p-6 text-white ${
                postData.category === 'Java'
                  ? 'bg-gradient-to-br from-red-600 to-red-500'
                  : 'bg-gradient-to-br from-yellow-500 to-yellow-400'
              }`}>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  Chủ đề: {postData.category}
                </h4>
                <p className="text-sm text-white/90">
                  {postData.category === 'Java' 
                    ? 'Khám phá sức mạnh của Java trong lập trình mạng và ứng dụng doanh nghiệp.'
                    : 'Tìm hiểu JavaScript hiện đại và công nghệ web development.'
                  }
                </p>
              </div>

              {/* Quick links */}
              <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-xl">🔗</span>
                  Liên kết nhanh
                </h4>
                <div className="space-y-2">
                  <Link 
                    href="/blog"
                    className="block text-text-secondary hover:text-primary transition-colors duration-200 text-sm py-1"
                  >
                    → Tất cả bài viết
                  </Link>
                  <Link 
                    href={`/blog?category=${postData.category}`}
                    className="block text-text-secondary hover:text-primary transition-colors duration-200 text-sm py-1"
                  >
                    → Bài viết {postData.category}
                  </Link>
                  <Link 
                    href="/"
                    className="block text-text-secondary hover:text-primary transition-colors duration-200 text-sm py-1"
                  >
                    → Trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </article>
    </Layout>
  )
}
