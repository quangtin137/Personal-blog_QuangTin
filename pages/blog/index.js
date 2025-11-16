import Layout from '@/components/Layout'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tất cả bài viết</h1>
        
        {/* Filter tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Tất cả ({allPostsData.length})
          </span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
            Java ({allPostsData.filter(post => post.category === 'Java').length})
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">
            JavaScript ({allPostsData.filter(post => post.category === 'JavaScript').length})
          </span>
        </div>

        {/* Posts list */}
        <div className="space-y-6">
          {allPostsData.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      📅 {post.date}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Java' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {allPostsData.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl">Chưa có bài viết nào.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}
