import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      id: 1,
      name: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      icon: '🌐',
      description: 'Chứng chỉ về mạng máy tính, routing, switching và network security.',
      skills: ['TCP/IP', 'Routing', 'Switching', 'Network Security'],
      color: 'from-[#D34E4E] to-[#CE7E5A]',
      badge: '/certifications/Badge-networking-basics.png',
      certificate: '/certifications/Certificate-NetworkingBasics.png'
    },
    {
      id: 2,
      name: 'JavaScript Essentials 1 (JSE1)',
      issuer: 'Oracle',
      date: '2025',
      icon: '☕',
      description: 'Chứng chỉ lập trình Java cơ bản: OOP, data types, control structures.',
      skills: ['Java Basics', 'OOP', 'Exception Handling', 'Collections'],
      color: 'from-[#DDC57A] to-[#CE7E5A]',
      badge: '/certifications/Badge-javascript-essentials-1.png',
      certificate: '/certifications/Certificate-JSE1.png'
    },
    {
      id: 3,
      name: 'JavaScript Essentials 2 (JSE2)',
      issuer: 'Oracle',
      date: '2025',
      icon: '☕',
      description: 'Chứng chỉ lập trình Java nâng cao: multithreading, I/O, networking.',
      skills: ['Multithreading', 'Java I/O', 'JDBC', 'Network Programming'],
      color: 'from-[#CE7E5A] to-[#D34E4E]',
      badge: '/certifications/Badge-javascript-essentials-2.png',
      certificate: '/certifications/Certificate-JSE2.png'
    }
  ]

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen bg-background-dark">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Chứng chỉ của tôi
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Các chứng chỉ và khóa học tôi đã hoàn thành trong hành trình học tập và phát triển
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-primary mb-1">{certifications.length}</div>
            <div className="text-text-secondary">Chứng chỉ</div>
          </div>
          <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-2">🔗</div>
            <div className="text-3xl font-bold text-cyan-400 mb-1">{certifications.filter(c => c.certificate).length}</div>
            <div className="text-text-secondary">Chứng chỉ có Certificate</div>
          </div>
          <div className="bg-card-dark rounded-xl shadow-lg p-6 border border-card-border text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-purple-400 mb-1">2025</div>
            <div className="text-text-secondary">Năm gần nhất</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-card-border hover:border-primary transform hover:-translate-y-2"
            >
              {/* Badge Image - Clickable */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="block relative h-64 overflow-hidden bg-[#283039] cursor-pointer group/image w-full border-0 p-0"
              >
                <Image
                  src={cert.badge}
                  alt={cert.name}
                  fill
                  className="object-contain p-6 group-hover/image:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"/>
                    </svg>
                  </div>
                </div>
              </button>

              {/* Content */}
              <div className="p-6">
                {/* Title and Issuer */}
                <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{cert.issuer}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-text-secondary mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#283039] text-cyan-400 rounded-full text-xs font-medium hover:bg-[#323d4a] transition-all duration-200 border border-card-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-card-border pt-4 flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Đã xác thực ✓</span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-primary hover:text-blue-400 font-semibold text-sm flex items-center gap-1 group/link bg-transparent border-none cursor-pointer"
                  >
                    Xem Certificate
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-[#283039]/80 to-[#1c232d] rounded-2xl p-8 border border-card-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tiếp tục học hỏi 📖
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Tôi luôn cố gắng học hỏi và nâng cao kỹ năng thông qua các khóa học và chứng chỉ mới.
              Hãy theo dõi trang này để cập nhật các chứng chỉ mới nhất!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:shadow-lg"
              >
                📚 Đọc Blog
              </Link>
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 bg-transparent text-primary px-8 py-3 rounded-xl font-semibold border-2 border-primary hover:bg-primary/10 transition-all duration-300"
              >
                👨‍💻 Xem Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card-dark rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-card-border">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="font-bold text-white mb-2">Networking</h3>
            <p className="text-sm text-text-secondary">Cisco Networking Basics</p>
          </div>
          <div className="bg-card-dark rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-card-border">
            <div className="text-4xl mb-3">☕</div>
            <h3 className="font-bold text-white mb-2">Java SE</h3>
            <p className="text-sm text-text-secondary">JSE1, JSE2</p>
          </div>
          <div className="bg-card-dark rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-card-border">
            <div className="text-4xl mb-3">🏅</div>
            <h3 className="font-bold text-white mb-2">Chuyên môn</h3>
            <p className="text-sm text-text-secondary">3 Chứng chỉ</p>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-card-dark rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden animate-scale-in border border-card-border">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-card-border">
                <h2 className="text-2xl font-bold text-white">{selectedCert.name}</h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-text-secondary hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Modal Body - Certificate Image */}
              <div className="relative w-full overflow-y-auto bg-[#283039]" style={{ maxHeight: 'calc(90vh - 100px)' }}>
                <div className="relative w-full h-auto min-h-96">
                  <Image
                    src={selectedCert.certificate}
                    alt={`${selectedCert.name} Certificate`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-card-border bg-[#1c232d]">
                <div>
                  <p className="text-sm text-text-secondary mb-1">Issuer: {selectedCert.issuer}</p>
                  <p className="text-sm text-text-secondary">Date: {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 bg-gradient-to-r from-[#D34E4E] to-[#CE7E5A] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 border-none cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
