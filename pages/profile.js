import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Socket', level: 70 },
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
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/avatar.png"
                alt="Quang Tin"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Quang Tín</h1>
            <p className="text-xl text-white/90 mb-4">Web Developer & Socket Programming Enthusiast</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/quangtin137" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
              >
                GitHub
              </a>
              <a 
                href="mailto:contact@example.com"
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
                Xin chào! Tôi là <strong className="text-white">Quang Tín</strong>, một sinh viên đam mê về 
                phát triển web và lập trình mạng. Tôi đặc biệt quan tâm đến Socket Programming, 
                xây dựng các ứng dụng real-time và học hỏi các công nghệ mới.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Blog này là nơi tôi chia sẻ kiến thức, kinh nghiệm và các dự án cá nhân trong quá trình 
                học tập và làm việc. Hy vọng những bài viết của tôi sẽ hữu ích cho bạn! 🚀
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
                  { name: 'Socket.io', icon: '🔌' },
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
                <div className="text-4xl font-bold mb-2">2+</div>
                <div className="text-white/90">Ngôn ngữ</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-2xl p-6 text-center text-white shadow-xl">
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-white/90">Công nghệ</div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-card-dark rounded-2xl p-8 shadow-xl border border-card-border mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Sở thích & Mục tiêu
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  '🌐 Web Development',
                  '🔌 Network Programming',
                  '📱 Mobile Apps',
                  '🤖 AI & Machine Learning',
                  '☁️ Cloud Computing',
                  '🎮 Game Development',
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
                  href="https://github.com/QuangTin1-hus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:contact@example.com"
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
