import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Layout>
      <div className="min-h-screen bg-background-dark">
        {/* Hero Section - 2/3 Content, 1/3 Portrait */}
        <section className="relative min-h-screen flex items-center py-12 px-4 md:px-8 lg:px-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left side - Content (2/3 on desktop) */}
            <div className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-3xl">
                {/* Welcome badge */}
                <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary border border-primary/30 animate-fade-in hover:bg-primary/30 transition-all cursor-default">
                  ✨ Chào mừng bạn đến với portfolio của mình
                </div>
                
                {/* Name */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-up text-white">
                  Xin chào, mình là{' '}
                  <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-primary transition-all duration-500">
                    Quang Tín
                  </span>
                </h1>
                
                {/* Title / Profession */}
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 animate-slide-up"
                    style={{ animationDelay: '0.1s' }}>
                  Đam mê lập trình & chia sẻ kiến thức 💻
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed animate-fade-in">
                  Học và chia sẻ về nhiều ngôn ngữ lập trình như{' '}
                  <span className="font-semibold text-cyan-400">Java</span>,{' '}
                  <span className="font-semibold text-yellow-400">JavaScript</span>,{' '}
                  <span className="font-semibold text-green-400">Python</span>{' '}
                  và nhiều công nghệ khác. Xây dựng blog để ghi lại hành trình học tập và kết nối với cộng đồng! 🚀
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
                  <Link 
                    href="/blog"
                    className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      📚 Xem bài viết
                    </span>
                  </Link>
                  <Link 
                    href="/profile"
                    className="px-8 py-4 bg-card-dark text-white font-semibold rounded-xl border-2 border-card-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                  >
                    👨‍💻 Về mình
                  </Link>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 animate-fade-in">
                  <a 
                    href="mailto:quangtin13072004@gmail.com"
                    className="w-12 h-12 bg-card-border hover:bg-primary rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title="Email"
                    aria-label="Email"
                  >
                    <span className="text-xl">📧</span>
                  </a>
                  <a 
                    href="https://github.com/quangtin137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card-border hover:bg-primary rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    title="GitHub"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Portrait Image (1/3 on desktop) */}
            <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-none animate-fade-in">
                {/* Decorative gradient background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary via-blue-500 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
                
                {/* Portrait container */}
                <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none overflow-hidden rounded-3xl shadow-2xl border-4 border-card-border group">
                  <Image 
                    src="/avatar.png" 
                    alt="Quang Tín - Portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Online status badge */}
                <div className="absolute bottom-6 right-6 bg-green-500 w-6 h-6 rounded-full border-4 border-card-dark shadow-lg animate-pulse"></div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 border-t border-card-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Dự án của tôi <span className="text-primary">🚀</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Các dự án lập trình mạng và web development tôi đã thực hiện
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 - T-TShopGear E-commerce */}
              <div className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-red-500 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-red-600 to-red-500 p-8 text-white">
                  <div className="text-5xl mb-4">🛒</div>
                  <h3 className="text-2xl font-bold">T-TShopGear E-commerce</h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Website bán hàng điện tử đầy đủ tính năng với quản lý sản phẩm, giỏ hàng, đơn hàng, thanh toán MoMo và phân quyền Admin/Customer.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">ASP.NET Core</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">C#</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Entity Framework</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">SQL Server</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Identity</span>
                  </div>
                  <a 
                    href="https://github.com/quangtin137/T-TShopGear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-semibold hover:text-red-300 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem trên GitHub →
                  </a>
                </div>
              </div>

              {/* Project 2 - Cinema Booking App */}
              <div className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-blue-500 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white">
                  <div className="text-5xl mb-4">🎬</div>
                  <h3 className="text-2xl font-bold">Cinema Booking App</h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Ứng dụng mobile đặt vé xem phim với Firebase Firestore, chọn ghế real-time, thanh toán và quản lý booking. Hỗ trợ dynamic pricing và transaction-based booking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Flutter</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Dart</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Firebase</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Firestore</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Authentication</span>
                  </div>
                  <a 
                    href="https://github.com/quocthaj/cinema_flutter_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem trên GitHub →
                  </a>
                </div>
              </div>

              {/* Project 3 - Emotion Recognition App */}
              <div className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-purple-500 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-gradient-to-br from-purple-600 to-purple-500 p-8 text-white">
                  <div className="text-5xl mb-4">😊</div>
                  <h3 className="text-2xl font-bold">Facial Emotion Recognition</h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Đồ án cơ sở: Ứng dụng mobile nhận diện cảm xúc khuôn mặt sử dụng CNN, MobileNet, ResNet18. Phát hiện và phân loại 6-7 loại cảm xúc từ camera và ảnh.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Flutter</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">TensorFlow</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">CNN</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Deep Learning</span>
                  </div>
                  <a 
                    href="https://github.com/Longhanhmid24/App_Mobile_Emotion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 font-semibold hover:text-purple-300 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem trên GitHub →
                  </a>
                </div>
              </div>

              {/* Project 4 - AI Virtual Assistant */}
              <div className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-green-500 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-br from-green-600 to-green-500 p-8 text-white">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold">AI Virtual Assistant</h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Đồ án chuyên ngành: Trợ lý ảo trò chuyện thông minh dựa trên nhận diện cảm xúc khuôn mặt. Tích hợp YOLO để phát hiện khuôn mặt và AI chatbot phản hồi theo cảm xúc người dùng.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Flutter</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">YOLO</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">TFLite</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">AI Chatbot</span>
                    <span className="px-3 py-1 bg-card-border text-text-secondary rounded-full text-sm font-medium">Computer Vision</span>
                  </div>
                  <a 
                    href="https://github.com/Longhanhmid24/Tro_Ly_Ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 font-semibold hover:text-green-300 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Xem trên GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 border-t border-card-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Kỹ năng <span className="text-primary">💪</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Công nghệ và công cụ tôi sử dụng trong phát triển phần mềm
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-card-dark rounded-2xl shadow-lg p-8 border border-card-border hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  Ngôn ngữ lập trình
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">Java</span>
                      <span className="text-red-400 font-medium">85%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">JavaScript</span>
                      <span className="text-yellow-400 font-medium">80%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">Python</span>
                      <span className="text-green-400 font-medium">70%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">C/C++</span>
                      <span className="text-blue-400 font-medium">65%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-card-dark rounded-2xl shadow-lg p-8 border border-card-border hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-3xl">🛠️</span>
                  Frameworks & Tools
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">React & Next.js</span>
                      <span className="text-primary font-medium">75%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">Node.js & Express</span>
                      <span className="text-green-400 font-medium">80%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">Socket Programming</span>
                      <span className="text-purple-400 font-medium">75%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">Git & GitHub</span>
                      <span className="text-pink-400 font-medium">85%</span>
                    </div>
                    <div className="h-3 bg-card-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 border-t border-card-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Liên hệ <span className="text-primary">📬</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Hãy kết nối với tôi qua các kênh dưới đây
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a 
                href="mailto:quangtin13072004@gmail.com"
                className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-card-border hover:border-primary transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <p className="text-text-secondary text-sm">Gửi email cho tôi</p>
                  </div>
                </div>
                <p className="text-primary font-medium group-hover:underline">
                  quangtin13072004@gmail.com
                </p>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/quangtin137"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-card-border hover:border-purple-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">GitHub</h3>
                    <p className="text-text-secondary text-sm">Xem các dự án của tôi</p>
                  </div>
                </div>
                <p className="text-purple-400 font-medium group-hover:underline">
                  github.com/quangtin137
                </p>
              </a>

              {/* Blog Card */}
              <Link 
                href="/blog"
                className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-card-border hover:border-green-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                    📝
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Blog</h3>
                    <p className="text-text-secondary text-sm">Đọc bài viết của tôi</p>
                  </div>
                </div>
                <p className="text-green-400 font-medium group-hover:underline">
                  Xem tất cả bài viết →
                </p>
              </Link>

              {/* Profile Card */}
              <Link 
                href="/profile"
                className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-card-border hover:border-cyan-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Về tôi</h3>
                    <p className="text-text-secondary text-sm">Tìm hiểu thêm về tôi</p>
                  </div>
                </div>
                <p className="text-cyan-400 font-medium group-hover:underline">
                  Xem profile →
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-500 to-blue-400 text-white py-20 px-4 mx-4 rounded-3xl my-16 shadow-2xl shadow-primary/20 animate-scale-in">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hãy cùng làm việc! 🤝</h2>
            <p className="text-xl mb-8 opacity-90">
              Tôi luôn sẵn sàng cho các dự án thú vị và cơ hội hợp tác mới. Hãy liên hệ với tôi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:quangtin13072004@gmail.com"
                className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Gửi Email ✉️
              </a>
              <Link 
                href="/blog"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
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
