import Layout from '../components/Layout'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../lib/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tạo mailto link với nội dung form
    const mailtoLink = `mailto:quangtin13072004@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Tên: ${formData.name}\nEmail: ${formData.email}\n\nNội dung:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setStatus('Đang mở ứng dụng email...')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background-dark py-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('contactTitle')} <span className="text-primary">✉️</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <div className="relative bg-card-dark rounded-2xl shadow-xl p-8 border border-card-border animate-slide-up group hover:border-primary/50 transition-all duration-300">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                <span>📝</span> {t('sendMessage')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">
                    {t('yourName')} {t('required')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background-dark border border-card-border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover:border-primary/50"
                    placeholder={t('yourName')}
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">
                    {t('yourEmail')} {t('required')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background-dark border border-card-border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover:border-primary/50"
                    placeholder={t('yourEmail')}
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">
                    {t('subject')} {t('required')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background-dark border border-card-border rounded-lg text-white focus:outline-none focus:border-primary transition-all"
                    placeholder={t('subject')}
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">
                    {t('message')} {t('required')}
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-background-dark border border-card-border rounded-lg text-white focus:outline-none focus:border-primary transition-all resize-none"
                    placeholder={t('message')}
                  />
                </div>
                <button
                  type="submit"
                  className="relative w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flow"></div>
                  <svg className="w-5 h-5 relative z-10 group-hover:animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="relative z-10">{t('sendMessage')}</span>
                </button>
                {status && (
                  <p className="text-center text-green-400 text-sm">{status}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="relative bg-card-dark rounded-2xl shadow-xl p-6 border border-card-border hover:border-primary transition-all hover:scale-105 animate-slide-up group" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-primary/30">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('emailCard')}</h3>
                    <p className="text-text-secondary text-sm mb-3">{t('emailDesc')}</p>
                    <a href="mailto:quangtin13072004@gmail.com" className="text-primary hover:text-blue-400 font-medium break-all">
                      quangtin13072004@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="bg-card-dark rounded-2xl shadow-xl p-6 border border-card-border hover:border-purple-500 transition-all hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('githubCard')}</h3>
                    <p className="text-text-secondary text-sm mb-3">{t('githubDesc')}</p>
                    <a href="https://github.com/quangtin137" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium">
                      github.com/quangtin137 →
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-card-dark rounded-2xl shadow-xl p-6 border border-card-border hover:border-blue-500 transition-all hover:scale-105 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('linkedinCard')}</h3>
                    <p className="text-text-secondary text-sm mb-3">{t('linkedinDesc')}</p>
                    <a href="https://www.linkedin.com/in/quang-tín-văn-3669433a1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium break-all">
                      linkedin.com/in/quang-tín-văn →
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Notice */}
              <div className="bg-gradient-to-br from-green-600/10 to-green-500/10 border border-green-500/30 rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-1">{t('responseTime')}</h4>
                    <p className="text-text-secondary text-sm">{t('responseDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
