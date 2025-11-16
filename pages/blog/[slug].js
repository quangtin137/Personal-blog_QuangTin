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
      <article className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center"
        >
          ← Quay lại danh sách bài viết
        </Link>

        {/* Post header */}
        <header className="mb-8 mt-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {postData.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center">
              📅 {postData.date}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              postData.category === 'Java' 
                ? 'bg-orange-100 text-orange-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {postData.category}
            </span>
          </div>
        </header>

        {/* Post content */}
        <div 
          className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            ← Xem tất cả bài viết
          </Link>
        </div>
      </article>
    </Layout>
  )
}
