import Layout from '@/components/Layout'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { useState } from 'react'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog({ allPostsData }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredPosts = allPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  const javaCount = allPostsData.filter(post => post.category === 'Java').length
  const jsCount = allPostsData.filter(post => post.category === 'JavaScript').length
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tất cả bài viết
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Khám phá {allPostsData.length} bài viết về lập trình mạng
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍 Tìm kiếm bài viết..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Tất cả ({allPostsData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Java')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === 'Java'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-50 border-2 border-orange-200'
            }`}
          >
            ☕ Java ({javaCount})
          </button>
          <button
            onClick={() => setSelectedCategory('JavaScript')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === 'JavaScript'
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-yellow-50 border-2 border-yellow-200'
            }`}
          >
            🟨 JavaScript ({jsCount})
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className={`h-2 ${
                post.category === 'Java' 
                  ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
              }`}></div>
              
              <div className="p-6">
                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    {post.date}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.category === 'Java' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all"
                >
                  Đọc tiếp
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600 mb-6">
              Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}
      </div>
    </Layout>
  )
}
