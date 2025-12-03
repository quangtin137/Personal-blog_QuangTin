import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Profile() {
  const skills = [
    { name: 'Java', level: 85, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React & Next.js', level: 75, color: 'bg-blue-500' },
    { name: 'Socket Programming', level: 70, color: 'bg-purple-500' },
    { name: 'Node.js & Express', level: 75, color: 'bg-green-500' },
    { name: 'Git & GitHub', level: 80, color: 'bg-gray-700' }
  ]

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Hero Header with Gradient */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-12 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center">
            <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QT
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">Quang Tín</h1>
            <p className="text-2xl text-blue-100 mb-6">Sinh viên Lập Trình Mạng</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:quangtin13072004@gmail.com" 
                 className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                📧 Email
              </a>
              <a href="https://github.com/quangtin137" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">👨‍💻</span>
                Giới thiệu
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Xin chào! Mình là <span className="font-semibold text-purple-600">Quang Tín</span>, 
                  một sinh viên đam mê lập trình mạng và phát triển web. Blog này được tạo ra nhằm chia sẻ 
                  những kiến thức mình học được trong quá trình nghiên cứu về Java, JavaScript và các công nghệ 
                  lập trình mạng.
                </p>
                <p className="text-lg">
                  Mình tin rằng việc chia sẻ kiến thức không chỉ giúp người khác mà còn giúp bản thân hiểu sâu hơn 
                  về những gì mình đã học. Hy vọng các bài viết của mình sẽ hữu ích cho bạn!
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mt-6">
                  <p className="text-gray-700 italic">
                    &ldquo;Học không giới hạn, chia sẻ không ngừng nghỉ. Cùng nhau phát triển trong cộng đồng lập trình!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                Kỹ năng
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-gray-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-500 group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-4xl">🛠️</span>
                Công nghệ & Công cụ
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Ngôn ngữ lập trình</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">☕</span> Java (Core, OOP, Socket)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-500">⚡</span> JavaScript (ES6+, Node.js)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">🐍</span> Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">⚙️</span> C/C++
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Framework & Tools</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">⚛️</span> Next.js, React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">📦</span> Node.js, Express
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">🌐</span> TCP/IP, HTTP, WebSocket
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-700">🔧</span> Git, GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Interests */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">📊 Thống kê</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">9</div>
                  <div className="text-sm text-blue-100">Bài viết</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm text-blue-100">Ngôn ngữ chính</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-sm text-blue-100">Công nghệ</div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                Sở thích
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                  🌐 Lập trình mạng
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  💻 Web Development
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  🌟 Open Source
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-colors duration-200">
                  📚 Học công nghệ mới
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                  🤝 Chia sẻ kiến thức
                </span>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📬</span>
                Liên hệ
              </h3>
              <div className="space-y-3">
                <a href="mailto:quangtin13072004@gmail.com" 
                   className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">📧</span>
                  <span className="text-sm">quangtin13072004@gmail.com</span>
                </a>
                <a href="https://github.com/quangtin137" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">🔗</span>
                  <span className="text-sm">github.com/quangtin137</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">🌐</span>
                  <span className="text-sm">Đây chính là blog của mình!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
