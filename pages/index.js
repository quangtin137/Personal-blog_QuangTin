import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - 2/3 Content, 1/3 Portrait */}
        <section className="relative min-h-screen flex items-center py-12 px-4 md:px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Left side - Content (2/3 on desktop) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="max-w-3xl">
                {/* Welcome badge */}
                <div className="inline-block mb-6 px-4 py-2 bg-[#F9E7B2] bg-opacity-40 rounded-full text-sm font-medium text-[#D34E4E] border border-[#DDC57A] animate-fade-in">
                  ✨ Chào mừng bạn đến với portfolio của mình
                </div>
                
                {/* Name */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
                  Xin chào, mình là{' '}
                  <span className="bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] bg-clip-text text-transparent">
                    Quang Tín
                  </span>
                </h1>
                
                {/* Title / Profession */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#CE7E5A] mb-6 animate-fade-in-up">
                  Sinh viên Lập Trình Mạng 💻
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
                  Đam mê khám phá và chia sẻ kiến thức về{' '}
                  <span className="font-semibold text-[#D34E4E]">Java</span>,{' '}
                  <span className="font-semibold text-[#DDC57A]">JavaScript</span>{' '}
                  và lập trình mạng. Cùng nhau học hỏi và phát triển! 🚀
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
                  <Link 
                    href="/blog"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📚 Xem bài viết
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#CE7E5A] to-[#DDC57A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    href="/profile"
                    className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-[#DDC57A] hover:border-[#D34E4E] hover:text-[#D34E4E] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                  >
                    👨‍💻 Về mình
                  </Link>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 animate-fade-in-up">
                  <a 
                    href="mailto:quangtin13072004@gmail.com"
                    className="w-12 h-12 bg-[#F9E7B2] bg-opacity-50 hover:bg-[#D34E4E] rounded-full flex items-center justify-center text-[#D34E4E] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title="Email"
                    aria-label="Email"
                  >
                    <span className="text-xl">📧</span>
                  </a>
                  <a 
                    href="https://github.com/quangtin137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#F9E7B2] bg-opacity-50 hover:bg-[#CE7E5A] rounded-full flex items-center justify-center text-[#CE7E5A] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title="GitHub"
                    aria-label="GitHub"
                  >
                    <span className="text-xl">🔗</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Portrait Image (1/3 on desktop) */}
            <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-none animate-fade-in">
                {/* Decorative gradient background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D34E4E] via-[#CE7E5A] to-[#DDC57A] rounded-3xl opacity-20 blur-3xl"></div>
                
                {/* Portrait container */}
                <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none overflow-hidden rounded-3xl shadow-2xl border-4 border-white group">
                  <Image 
                    src="/avatar.png" 
                    alt="Quang Tín - Portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Online status badge */}
                <div className="absolute bottom-6 right-6 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Dự án của tôi <span className="text-[#D34E4E]">🚀</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Các dự án lập trình mạng và web development tôi đã thực hiện
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 - Java TCP Server */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#D34E4E] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#D34E4E] to-[#CE7E5A] p-8 text-white">
                  <div className="text-5xl mb-4">☕</div>
                  <h3 className="text-2xl font-bold">Java TCP Server</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Server TCP đa luồng xử lý kết nối đồng thời, quản lý session và xử lý request/response hiệu quả.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Java</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">TCP/IP</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Socket</span>
                  </div>
                  <Link 
                    href="/blog/java-tcp-socket-basic"
                    className="text-[#D34E4E] font-semibold hover:text-[#CE7E5A] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

              {/* Project 2 - WebSocket Chat */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#DDC57A] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#DDC57A] to-[#CE7E5A] p-8 text-white">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold">WebSocket Chat</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Ứng dụng chat real-time sử dụng Socket.IO, hỗ trợ nhiều phòng và tin nhắn đa phương tiện.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Socket.IO</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">WebSocket</span>
                  </div>
                  <Link 
                    href="/blog/websocket-socketio"
                    className="text-[#DDC57A] font-semibold hover:text-[#D34E4E] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

              {/* Project 3 - REST API */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#CE7E5A] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#CE7E5A] to-[#D34E4E] p-8 text-white">
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold">REST API Server</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    RESTful API với Express.js, authentication JWT, validation và middleware xử lý lỗi chuyên nghiệp.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Express</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">REST</span>
                  </div>
                  <Link 
                    href="/blog/expressjs-web-framework"
                    className="text-[#CE7E5A] font-semibold hover:text-[#D34E4E] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

              {/* Project 4 - HTTP Server */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#D34E4E] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#D34E4E] to-[#DDC57A] p-8 text-white">
                  <div className="text-5xl mb-4">📡</div>
                  <h3 className="text-2xl font-bold">HTTP Server</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    HTTP server tự build từ Node.js core modules, routing, static files và template rendering.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">HTTP</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Core</span>
                  </div>
                  <Link 
                    href="/blog/nodejs-http-server"
                    className="text-[#D34E4E] font-semibold hover:text-[#CE7E5A] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

              {/* Project 5 - UDP Socket */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#DDC57A] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#DDC57A] to-[#D34E4E] p-8 text-white">
                  <div className="text-5xl mb-4">📦</div>
                  <h3 className="text-2xl font-bold">Java UDP Socket</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Ứng dụng truyền nhận datagram với UDP, xử lý packet loss và checksum validation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Java</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">UDP</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">DatagramSocket</span>
                  </div>
                  <Link 
                    href="/blog/java-udp-socket"
                    className="text-[#DDC57A] font-semibold hover:text-[#D34E4E] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>

              {/* Project 6 - Portfolio Website */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#CE7E5A] transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-[#CE7E5A] to-[#DDC57A] p-8 text-white">
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold">Portfolio Website</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Website portfolio cá nhân với Next.js, SSG, Tailwind CSS và markdown blog system.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">Tailwind</span>
                    <span className="px-3 py-1 bg-[#F9E7B2] text-[#CE7E5A] rounded-full text-sm font-medium">SSG</span>
                  </div>
                  <Link 
                    href="/blog"
                    className="text-[#CE7E5A] font-semibold hover:text-[#D34E4E] flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Kỹ năng <span className="text-[#D34E4E]">💪</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Công nghệ và công cụ tôi sử dụng trong phát triển phần mềm
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  Ngôn ngữ lập trình
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">Java</span>
                      <span className="text-[#D34E4E] font-medium">85%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">JavaScript</span>
                      <span className="text-[#DDC57A] font-medium">80%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#DDC57A] to-[#CE7E5A] rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">Python</span>
                      <span className="text-[#CE7E5A] font-medium">70%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#CE7E5A] to-[#D34E4E] rounded-full transition-all duration-500" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">C/C++</span>
                      <span className="text-[#DDC57A] font-medium">65%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#DDC57A] to-[#D34E4E] rounded-full transition-all duration-500" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">🛠️</span>
                  Frameworks & Tools
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">React & Next.js</span>
                      <span className="text-[#D34E4E] font-medium">75%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#D34E4E] to-[#DDC57A] rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">Node.js & Express</span>
                      <span className="text-[#CE7E5A] font-medium">80%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#CE7E5A] to-[#DDC57A] rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">Socket Programming</span>
                      <span className="text-[#D34E4E] font-medium">75%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">Git & GitHub</span>
                      <span className="text-[#DDC57A] font-medium">85%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#DDC57A] to-[#D34E4E] rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Liên hệ <span className="text-[#D34E4E]">📬</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hãy kết nối với tôi qua các kênh dưới đây
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a 
                href="mailto:quangtin13072004@gmail.com"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#D34E4E] transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D34E4E] to-[#CE7E5A] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm">Gửi email cho tôi</p>
                  </div>
                </div>
                <p className="text-[#D34E4E] font-medium group-hover:underline">
                  quangtin13072004@gmail.com
                </p>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/quangtin137"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#CE7E5A] transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#CE7E5A] to-[#DDC57A] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">GitHub</h3>
                    <p className="text-gray-600 text-sm">Xem các dự án của tôi</p>
                  </div>
                </div>
                <p className="text-[#CE7E5A] font-medium group-hover:underline">
                  github.com/quangtin137
                </p>
              </a>

              {/* Blog Card */}
              <Link 
                href="/blog"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#DDC57A] transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DDC57A] to-[#D34E4E] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    📝
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Blog</h3>
                    <p className="text-gray-600 text-sm">Đọc bài viết của tôi</p>
                  </div>
                </div>
                <p className="text-[#DDC57A] font-medium group-hover:underline">
                  Xem tất cả bài viết →
                </p>
              </Link>

              {/* Profile Card */}
              <Link 
                href="/profile"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#D34E4E] transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D34E4E] to-[#DDC57A] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Về tôi</h3>
                    <p className="text-gray-600 text-sm">Tìm hiểu thêm về tôi</p>
                  </div>
                </div>
                <p className="text-[#D34E4E] font-medium group-hover:underline">
                  Xem profile →
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#D34E4E] via-[#CE7E5A] to-[#DDC57A] text-white py-20 px-4 mx-4 rounded-3xl my-16">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse animation-delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hãy cùng làm việc! 🤝</h2>
            <p className="text-xl mb-8 opacity-90">
              Tôi luôn sẵn sàng cho các dự án thú vị và cơ hội hợp tác mới. Hãy liên hệ với tôi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:quangtin13072004@gmail.com"
                className="inline-block bg-white text-[#D34E4E] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#F9E7B2] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Gửi Email ✉️
              </a>
              <Link 
                href="/blog"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#D34E4E] transition-all duration-300 hover:scale-105"
              >
                Xem Blog 📚
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
