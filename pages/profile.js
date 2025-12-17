import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Profile() {
  const skills = [
    { name: 'Java', level: 85, color: 'bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A]' },
    { name: 'JavaScript', level: 80, color: 'bg-gradient-to-r from-[#DDC57A] to-[#CE7E5A]' },
    { name: 'React & Next.js', level: 75, color: 'bg-gradient-to-r from-[#CE7E5A] to-[#D34E4E]' },
    { name: 'Socket Programming', level: 70, color: 'bg-gradient-to-r from-[#DDC57A] to-[#D34E4E]' },
    { name: 'Node.js & Express', level: 75, color: 'bg-gradient-to-r from-[#D34E4E] to-[#DDC57A]' },
    { name: 'Git & GitHub', level: 80, color: 'bg-gradient-to-r from-[#CE7E5A] to-[#DDC57A]' }
  ]

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Hero Header with Gradient */}
        <div className="relative bg-gradient-to-br from-[#D34E4E] via-[#CE7E5A] to-[#DDC57A] rounded-2xl shadow-2xl p-12 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center">
            <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl font-bold bg-gradient-to-br from-[#D34E4E] to-[#CE7E5A] bg-clip-text text-transparent">
                QT
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">Quang Tín</h1>
            <p className="text-2xl text-white/90 mb-6">Sinh viên Lập Trình Mạng</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:quangtin13072004@gmail.com" 
                 className="bg-white text-[#D34E4E] px-6 py-3 rounded-lg font-semibold hover:bg-[#F9E7B2] transition-colors duration-200 shadow-lg">
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
                  Xin chào! Mình là <span className="font-semibold text-[#D34E4E]">Quang Tín</span>, 
                  một sinh viên đam mê lập trình mạng và phát triển web. Blog này được tạo ra nhằm chia sẻ 
                  những kiến thức mình học được trong quá trình nghiên cứu về Java, JavaScript và các công nghệ 
                  lập trình mạng.
                </p>
                <p className="text-lg">
                  Mình tin rằng việc chia sẻ kiến thức không chỉ giúp người khác mà còn giúp bản thân hiểu sâu hơn 
                  về những gì mình đã học. Hy vọng các bài viết của mình sẽ hữu ích cho bạn!
                </p>
                <div className="bg-gradient-to-r from-[#F9E7B2]/30 to-[#DDC57A]/20 border-l-4 border-[#D34E4E] p-4 rounded-r-lg mt-6">
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
                <div className="bg-gradient-to-br from-[#F9E7B2]/30 to-[#F9E7B2]/50 rounded-lg p-6 border-l-4 border-[#D34E4E] hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Ngôn ngữ lập trình</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#D34E4E]">☕</span> Java (Core, OOP, Socket)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#DDC57A]">⚡</span> JavaScript (ES6+, Node.js)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#CE7E5A]">🐍</span> Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#D34E4E]">⚙️</span> C/C++
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#DDC57A]/20 to-[#DDC57A]/40 rounded-lg p-6 border-l-4 border-[#CE7E5A] hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Framework & Tools</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#D34E4E]">⚛️</span> Next.js, React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#CE7E5A]">📦</span> Node.js, Express
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#DDC57A]">🌐</span> TCP/IP, HTTP, WebSocket
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
            <div className="bg-gradient-to-br from-[#D34E4E] to-[#CE7E5A] rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">📊 Thống kê</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">9</div>
                  <div className="text-sm text-white/90">Bài viết</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm text-white/90">Ngôn ngữ chính</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-sm text-white/90">Công nghệ</div>
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
                <span className="bg-[#F9E7B2] text-[#D34E4E] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#DDC57A] hover:text-white transition-all duration-200">
                  🌐 Lập trình mạng
                </span>
                <span className="bg-[#F9E7B2] text-[#CE7E5A] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#DDC57A] hover:text-white transition-all duration-200">
                  💻 Web Development
                </span>
                <span className="bg-[#F9E7B2] text-[#D34E4E] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#DDC57A] hover:text-white transition-all duration-200">
                  🌟 Open Source
                </span>
                <span className="bg-[#F9E7B2] text-[#CE7E5A] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#DDC57A] hover:text-white transition-all duration-200">
                  📚 Học công nghệ mới
                </span>
                <span className="bg-[#F9E7B2] text-[#D34E4E] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#DDC57A] hover:text-white transition-all duration-200">
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
                   className="flex items-center gap-3 text-gray-700 hover:text-[#D34E4E] transition-colors duration-200 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">📧</span>
                  <span className="text-sm">quangtin13072004@gmail.com</span>
                </a>
                <a href="https://github.com/quangtin137" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-gray-700 hover:text-[#CE7E5A] transition-colors duration-200 group">
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
