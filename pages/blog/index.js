import Layout from '@/components/Layout'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { useState, useMemo } from 'react'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog({ allPostsData }) {
  const [selectedSeries, setSelectedSeries] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get unique series
  const allSeries = useMemo(() => {
    const seriesSet = new Set(allPostsData.map(post => post.series).filter(Boolean))
    return ['all', ...Array.from(seriesSet)]
  }, [allPostsData])

  const filteredPosts = allPostsData.filter(post => {
    const matchesSeries = selectedSeries === 'all' || post.series === selectedSeries
    const matchesSearch = !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    return matchesSeries && matchesSearch
  })

  return (
    <Layout>
      <div className="min-h-screen bg-background-dark">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 pt-12">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                📝 Blog của tôi
              </span>
            </h1>
            <p className="text-text-secondary text-lg animate-slide-up">
              Chia sẻ kiến thức và kinh nghiệm trong hành trình học lập trình - {allPostsData.length} bài viết
            </p>
          </div>

          {/* Filters Section */}
          <div className="mb-8 bg-card-dark rounded-2xl p-6 border border-card-border">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="🔍 Tìm kiếm bài viết theo tiêu đề, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border-2 border-card-border bg-background-dark text-white placeholder-text-secondary focus:border-primary focus:outline-none transition-colors text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Series Filter */}
            <div className="mb-4">
              <label className="block text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">📚</span>
                Lọc theo Series:
              </label>
              <div className="flex flex-wrap gap-2">
                {allSeries.map(series => (
                  <button
                    key={series}
                    onClick={() => setSelectedSeries(series)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedSeries === series
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-background-dark text-text-secondary hover:text-white border border-card-border hover:border-primary'
                      }`}
                  >
                    {series === 'all' ? 'Tất cả' : series}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-text-secondary text-sm">
              Hiển thị <strong className="text-primary">{filteredPosts.length}</strong> bài viết
              {selectedSeries !== 'all' && ` trong series "${selectedSeries}"`}
            </p>
          </div>

          {/* Posts List */}
          <div className="space-y-4 mb-12">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-primary transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Series Badge */}
                      {post.series && (
                        <div className="mb-2">
                          <span className="inline-block bg-gradient-to-r from-primary to-blue-400 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                            📚 {post.series}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h2>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-2">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {post.date}
                        </span>
                      </div>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Read More Button */}
                    <div className="md:ml-4 md:flex-shrink-0">
                      <div className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                        Đọc tiếp
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy bài viết</h3>
              <p className="text-text-secondary mb-6">
                Thử tìm kiếm với từ khóa khác hoặc chọn series khác
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSeries('all')
                }}
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
