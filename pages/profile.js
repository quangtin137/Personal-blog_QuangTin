import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Profile() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
              QT
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Quang Tín</h1>
            <p className="text-xl text-gray-600">Sinh viên Lập Trình Mạng</p>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Giới thiệu</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Xin chào! Mình là Quang Tín, một sinh viên đam mê lập trình mạng và phát triển web. 
              Blog này được tạo ra nhằm chia sẻ những kiến thức mình học được trong quá trình nghiên cứu 
              về Java, JavaScript và các công nghệ lập trình mạng.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mình tin rằng việc chia sẻ kiến thức không chỉ giúp người khác mà còn giúp bản thân 
              hiểu sâu hơn về những gì mình đã học. Hy vọng các bài viết của mình sẽ hữu ích cho bạn!
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kỹ năng</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Ngôn ngữ lập trình</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Java (Core, OOP, Socket Programming)</li>
                  <li>• JavaScript (ES6+, Node.js)</li>
                  <li>• Python</li>
                  <li>• C/C++</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Công nghệ & Framework</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Next.js, React</li>
                  <li>• Node.js, Express</li>
                  <li>• TCP/IP, HTTP, WebSocket</li>
                  <li>• Git, GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sở thích</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Lập trình mạng
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Open Source
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                Học công nghệ mới
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Chia sẻ kiến thức
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liên hệ</h2>
            <div className="space-y-2 text-gray-700">
              <p>📧 Email: quangtin13072004@gmail.com</p>
              <p>🔗 GitHub: github.com/quangtin137</p>
              <p>🌐 Website: Đây chính là blog của mình!</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-700 italic text-lg">
            &ldquo;Học không giới hạn, chia sẻ không ngừng nghỉ. Cùng nhau phát triển trong cộng đồng lập trình!&rdquo;
          </p>
        </div>
      </div>
    </Layout>
  )
}
