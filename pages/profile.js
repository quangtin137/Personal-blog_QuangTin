import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Python', level: 70 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'Git', level: 80 },
];

export default function Profile() {
  return (
    <Layout>
      <div className="min-h-screen bg-background-dark">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-primary via-blue-500 to-indigo-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/30">
              <Image
                src="/avatar.png"
                alt="Quang Tin"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Văn Quang Tín</h1>
            <p className="text-xl text-white/90 mb-4">Software Developer & AI Enthusiast</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/quangtin137" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="mailto:quangtin13072004@gmail.com"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card-dark rounded-2xl p-8 shadow-xl border border-card-border mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">👤</span>
                Về tôi
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Xin chào! Tôi là <strong className="text-white">Văn Quang Tín</strong>, sinh ra và lớn lên tại Kon Tum, nay là Quảng Ngãi. 
                Hiện tại, tôi đang sống, học tập và làm việc tại Thành phố Hồ Chí Minh. 💻
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Từ nhỏ, tôi đã có niềm đam mê sâu sắc với công nghệ và máy tính. Sự tò mò và khát khao về kiến thức đã dẫn dắt tôi 
                đến với lĩnh vực công nghệ thông tin, nơi tôi có thể tự do khám phá và sáng tạo. Bên cạnh việc học tập, tôi luôn 
                dành thời gian nghiên cứu và tìm hiểu về các công nghệ mới. Tôi có nền tảng vững chắc về toán học và tư duy logic - 
                những kỹ năng mà tôi tin là thiết yếu cho bất kỳ lập trình viên nào. Tôi luôn háo hức học hỏi và đón nhận những 
                thử thách mới, từ việc học một ngôn ngữ lập trình mới đến phát triển các thuật toán phức tạp.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ngoài các hoạt động học thuật, tôi có nhiều sở thích và hoạt động giúp tôi thư giãn và cân bằng cuộc sống. 
                Tôi là một người yêu âm nhạc 🎵, đặc biệt là pop, hip-hop và R&B. Tôi cũng thích chơi game 🎮, điều này giúp 
                tôi thư giãn sau một ngày học tập dài.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong className="text-primary">Ước mơ nghề nghiệp</strong> của tôi là trở thành một AI Engineer. Tôi tin rằng trí tuệ nhân tạo 
                là tương lai của công nghệ, và tôi muốn đóng góp vào việc phát triển các hệ thống AI thông minh có thể cải thiện 
                cuộc sống của mọi người. Tôi mong muốn làm việc trong một môi trường năng động, sáng tạo, nơi tôi có thể áp dụng 
                kiến thức và kỹ năng của mình để giải quyết các vấn đề thực tế và tạo ra các sản phẩm công nghệ tiên tiến.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Tôi là một cá nhân có động lực cao, luôn tìm kiếm cơ hội để phát triển và cải thiện bản thân. Tôi không ngại 
                bước ra khỏi vùng an toàn và chấp nhận rủi ro, vì tôi tin rằng đây là cách tốt nhất để đạt được sự phát triển 
                cá nhân và nghề nghiệp. Tôi cũng là một người làm việc nhóm tốt, đánh giá cao sự hợp tác và tin rằng kết quả 
                tốt nhất đạt được khi làm việc cùng nhau. 🤝
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-card-dark rounded-2xl p-8 shadow-xl border border-card-border mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">💻</span>
                Kỹ năng
              </h2>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-[#283039] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="bg-card-dark rounded-2xl p-8 shadow-xl border border-card-border mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Công nghệ yêu thích
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'Node.js', icon: '💚' },
                  { name: 'Java', icon: '☕' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'TailwindCSS', icon: '🎨' },
                  { name: 'Git', icon: '📦' },
                  { name: 'VS Code', icon: '💻' },
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-[#283039] rounded-xl p-4 text-center hover:bg-[#323d4a] transition-all cursor-default border border-card-border"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <p className="mt-2 font-medium text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary to-blue-500 rounded-2xl p-6 text-center text-white shadow-xl">
                <div className="text-4xl font-bold mb-2">9+</div>
                <div className="text-white/90">Bài viết</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-6 text-center text-white shadow-xl">
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-white/90">Ngôn ngữ</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-2xl p-6 text-center text-white shadow-xl">
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-white/90">Series</div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-card-dark rounded-2xl p-8 shadow-xl border border-card-border mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Sở thích & Đam mê
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  '🤖 Artificial Intelligence',
                  '💻 Software Development',
                  '📱 Mobile Development',
                  '🌐 Web Technologies',
                  '🎵 Music (Pop, Hip-hop, R&B)',
                  '🎮 Gaming',
                  '📚 Học hỏi liên tục',
                  '🤝 Chia sẻ kiến thức',
                ].map((interest, index) => (
                  <span 
                    key={index}
                    className="bg-[#283039] text-text-secondary px-4 py-2 rounded-full text-sm hover:bg-[#323d4a] transition-all border border-card-border"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-r from-primary via-blue-500 to-indigo-500 rounded-2xl p-8 text-center text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Kết nối với tôi! 🤝</h2>
              <p className="mb-6 text-white/90">
                Bạn có câu hỏi hoặc muốn hợp tác? Đừng ngần ngại liên hệ!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://github.com/quangtin137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="mailto:quangtin13072004@gmail.com"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all"
                >
                  Email
                </a>
                <Link 
                  href="/blog"
                  className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-full font-medium transition-all"
                >
                  Xem Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
