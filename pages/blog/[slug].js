import Layout from '@/components/Layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '@/lib/posts'
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
  const allPosts = getSortedPostsData()
  
  // Find current post index
  const currentIndex = allPosts.findIndex(post => post.id === params.slug)
  
  // Get prev and next posts
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  
  // Get all posts in the same series (if exists)
  const seriesPosts = postData.series 
    ? allPosts.filter(post => post.series === postData.series)
    : null
  
  return {
    props: {
      postData,
      prevPost,
      nextPost,
      seriesPosts,
    },
  }
}

export default function Post({ postData, prevPost, nextPost, seriesPosts }) {
  // Calculate reading time (rough estimate: 200 words per minute)
  const readingTime = Math.ceil(postData.contentHtml.split(' ').length / 200)
  return (
    <Layout>
      <article className="min-h-screen bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{postData.title}</span>
        </nav>

        {/* Post header with gradient background */}
        <header className="mb-12 bg-gradient-to-br from-primary via-blue-500 to-blue-400 rounded-2xl shadow-2xl shadow-primary/20 p-8 md:p-12 text-white relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            {/* Series Badge */}
            {postData.series && (
              <div className="mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold">
                  📚 Series: {postData.series}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {postData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">📅</span>
                {postData.date}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-xl">⏱️</span>
                {readingTime} phút đọc
              </span>
            </div>

            {/* Tags */}
            {postData.tags && postData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {postData.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Series Navigation (if part of a series) */}
        {postData.series && seriesPosts && seriesPosts.length > 1 && (
          <div className="mb-8 bg-card-dark rounded-2xl p-6 border border-card-border animate-slide-up">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📚</span>
              Bài viết trong series "{postData.series}"
            </h3>
            <div className="space-y-2">
              {seriesPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`p-3 rounded-lg transition-all ${
                    post.id === postData.id 
                      ? 'bg-primary/20 border-l-4 border-primary' 
                      : 'bg-background-dark hover:bg-card-border'
                  }`}
                >
                  {post.id === postData.id ? (
                    <span className="text-white font-semibold flex items-center gap-2">
                      <strong className="text-primary">{index + 1}.</strong> {post.title}
                      <span className="text-primary">✓</span>
                    </span>
                  ) : (
                    <Link href={`/blog/${post.id}`} className="text-text-secondary hover:text-primary flex items-center gap-2">
                      <strong className="text-primary">{index + 1}.</strong> {post.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Post content with improved typography */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-card-dark rounded-2xl shadow-xl p-6 md:p-10 lg:p-12 border border-card-border animate-fade-in">
              <div 
                className="markdown-body prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
            </div>

            {/* Post Navigation */}
            {(prevPost || nextPost) && (
              <nav className="mt-8 grid md:grid-cols-2 gap-4">
                {prevPost && (
                  <Link 
                    href={`/blog/${prevPost.id}`}
                    className="bg-card-dark border border-card-border rounded-xl p-4 hover:border-primary transition-all group"
                  >
                    <span className="text-sm text-text-secondary mb-1 block">← Bài trước</span>
                    <span className="text-white font-semibold group-hover:text-primary">{prevPost.title}</span>
                  </Link>
                )}
                {nextPost && (
                  <Link 
                    href={`/blog/${nextPost.id}`}
                    className="bg-card-dark border border-card-border rounded-xl p-4 hover:border-primary transition-all group text-right ml-auto"
                  >
                    <span className="text-sm text-text-secondary mb-1 block">Bài tiếp →</span>
                    <span className="text-white font-semibold group-hover:text-primary">{nextPost.title}</span>
                  </Link>
                )}
              </nav>
            )}

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
              <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border animate-slide-up">
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

              {/* Series info */}
              {postData.series && (
                <div className="bg-gradient-to-br from-primary to-blue-500 rounded-xl shadow-lg p-6 text-white animate-slide-up">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-xl">📚</span>
                    Series: {postData.series}
                  </h4>
                  <p className="text-sm text-white/90">
                    Đây là một phần của series chia sẻ kinh nghiệm học lập trình
                  </p>
                </div>
              )}

              {/* Quick links */}
              <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border animate-slide-up">
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
                  {postData.series && (
                    <Link 
                      href={`/blog?series=${postData.series}`}
                      className="block text-text-secondary hover:text-primary transition-colors duration-200 text-sm py-1"
                    >
                      → Bài viết cùng series
                    </Link>
                  )}
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
