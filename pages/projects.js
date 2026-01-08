import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function Projects() {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Personal Blog & Portfolio',
      titleVi: 'Blog Cá Nhân & Portfolio',
      category: 'Web Development',
      featured: true,
      thumbnail: '/projects/blog-thumbnail.png',
      demoUrl: 'https://personal-blog-quang-tin.vercel.app',
      githubUrl: 'https://github.com/quangtin137/Personal-blog_QuangTin',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Markdown', 'Vercel'],
      descriptionEn: 'A modern, responsive personal portfolio website with an integrated programming knowledge-sharing blog. Built with Next.js for optimal performance using Static Site Generation (SSG), styled with Tailwind CSS for a sleek interface, and uses Markdown for easy content management.',
      descriptionVi: 'Website portfolio cá nhân hiện đại, responsive với blog chia sẻ kiến thức lập trình tích hợp. Xây dựng bằng Next.js để tối ưu hiệu suất với SSG, styled bằng Tailwind CSS cho giao diện đẹp mắt, sử dụng Markdown để quản lý nội dung dễ dàng.',
      roleEn: 'Full-stack Developer - Solo Project',
      roleVi: 'Full-stack Developer - Dự án cá nhân',
      responsibilitiesEn: [
        'Designed and implemented complete UI/UX with dark mode theme',
        'Built bilingual system (Vietnamese/English) with persistent language preference',
        'Created responsive navigation with mobile-friendly menu',
        'Implemented blog system with markdown parsing and syntax highlighting',
        'Optimized SEO with static generation and meta tags',
        'Deployed and configured CI/CD pipeline with Vercel'
      ],
      responsibilitiesVi: [
        'Thiết kế và triển khai UI/UX hoàn chỉnh với chủ đề dark mode',
        'Xây dựng hệ thống đa ngôn ngữ (Tiếng Việt/Tiếng Anh) với lưu trữ preference',
        'Tạo navigation responsive với menu mobile-friendly',
        'Triển khai hệ thống blog với markdown parsing và syntax highlighting',
        'Tối ưu SEO với static generation và meta tags',
        'Deploy và cấu hình CI/CD pipeline với Vercel'
      ],
      highlightsEn: [
        '150+ translation keys for full bilingual support',
        'Tech-inspired animations with particle systems',
        'Performance Score: 95+ on Lighthouse',
        'Fully responsive across all devices'
      ],
      highlightsVi: [
        '150+ translation keys hỗ trợ đa ngôn ngữ đầy đủ',
        'Animations lấy cảm hứng từ công nghệ với particle systems',
        'Performance Score: 95+ trên Lighthouse',
        'Responsive hoàn toàn trên mọi thiết bị'
      ]
    },
    {
      id: 2,
      title: 'T-TShopGear E-commerce Platform',
      titleVi: 'Nền tảng Thương mại Điện tử T-TShopGear',
      category: 'Web Development',
      featured: true,
      thumbnail: '/projects/ecommerce-thumbnail.png',
      demoUrl: null,
      githubUrl: 'https://github.com/quangtin137/T-TShopGear',
      techStack: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'Identity', 'MoMo Payment'],
      descriptionEn: 'A full-featured e-commerce platform for electronic products with comprehensive admin and customer management. Includes product catalog, shopping cart, order processing, MoMo payment integration, and role-based access control.',
      descriptionVi: 'Nền tảng thương mại điện tử đầy đủ tính năng cho sản phẩm điện tử với quản lý admin và khách hàng toàn diện. Bao gồm catalog sản phẩm, giỏ hàng, xử lý đơn hàng, tích hợp thanh toán MoMo, và phân quyền dựa trên vai trò.',
      roleEn: 'Backend Developer & Database Designer',
      roleVi: 'Backend Developer & Thiết kế Cơ sở Dữ liệu',
      responsibilitiesEn: [
        'Designed and implemented relational database schema with Entity Framework',
        'Built RESTful API endpoints for product, cart, and order management',
        'Integrated MoMo payment gateway for secure transactions',
        'Implemented role-based authentication with ASP.NET Identity',
        'Created admin dashboard for inventory and order management',
        'Optimized database queries for improved performance'
      ],
      responsibilitiesVi: [
        'Thiết kế và triển khai schema cơ sở dữ liệu quan hệ với Entity Framework',
        'Xây dựng RESTful API endpoints cho quản lý sản phẩm, giỏ hàng, đơn hàng',
        'Tích hợp cổng thanh toán MoMo cho giao dịch an toàn',
        'Triển khai xác thực phân quyền với ASP.NET Identity',
        'Tạo admin dashboard để quản lý kho và đơn hàng',
        'Tối ưu database queries để cải thiện hiệu suất'
      ],
      highlightsEn: [
        'Secure payment processing with MoMo API',
        'Real-time inventory management',
        'Multi-role authorization (Admin/Customer)',
        'Responsive admin panel'
      ],
      highlightsVi: [
        'Xử lý thanh toán an toàn với MoMo API',
        'Quản lý kho real-time',
        'Phân quyền đa vai trò (Admin/Customer)',
        'Admin panel responsive'
      ]
    },
    {
      id: 3,
      title: 'Cinema Booking Mobile App',
      titleVi: 'Ứng dụng Đặt Vé Xem Phim',
      category: 'Mobile Development',
      featured: true,
      thumbnail: '/projects/cinema-thumbnail.png',
      demoUrl: null,
      githubUrl: 'https://github.com/quangtin137/cinema_flutter_app',
      techStack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth'],
      descriptionEn: 'A feature-rich mobile cinema booking application with real-time seat selection, payment processing, and booking management. Built with Flutter for cross-platform compatibility and Firebase for backend services.',
      descriptionVi: 'Ứng dụng mobile đặt vé xem phim đầy đủ tính năng với chọn ghế real-time, xử lý thanh toán, và quản lý đặt chỗ. Xây dựng bằng Flutter cho khả năng cross-platform và Firebase cho backend services.',
      roleEn: 'Mobile Developer',
      roleVi: 'Mobile Developer',
      responsibilitiesEn: [
        'Developed cross-platform mobile app using Flutter',
        'Implemented real-time seat selection with Firestore',
        'Built user authentication system with Firebase Auth',
        'Created transaction-based booking flow',
        'Designed intuitive UI/UX for seamless booking experience',
        'Integrated push notifications for booking confirmations'
      ],
      responsibilitiesVi: [
        'Phát triển ứng dụng mobile cross-platform bằng Flutter',
        'Triển khai chọn ghế real-time với Firestore',
        'Xây dựng hệ thống xác thực người dùng với Firebase Auth',
        'Tạo quy trình đặt vé dựa trên giao dịch',
        'Thiết kế UI/UX trực quan cho trải nghiệm đặt vé mượt mà',
        'Tích hợp push notifications cho xác nhận đặt vé'
      ],
      highlightsEn: [
        'Real-time seat availability updates',
        'Dynamic pricing based on seat type',
        'Cross-platform (iOS & Android)',
        'Offline-first architecture'
      ],
      highlightsVi: [
        'Cập nhật tình trạng ghế real-time',
        'Định giá linh hoạt theo loại ghế',
        'Cross-platform (iOS & Android)',
        'Kiến trúc offline-first'
      ]
    },
    {
      id: 4,
      title: 'Facial Emotion Recognition System',
      titleVi: 'Hệ thống Nhận diện Cảm xúc Khuôn mặt',
      category: 'AI & Machine Learning',
      featured: true,
      thumbnail: '/projects/emotion-thumbnail.png',
      demoUrl: null,
      githubUrl: 'https://github.com/quangtin137/App_Mobile_Emotion',
      techStack: ['Flutter', 'Python', 'TensorFlow', 'CNN', 'MobileNet', 'ResNet18'],
      descriptionEn: 'Foundation project: A mobile application that detects and classifies facial emotions using Convolutional Neural Networks (CNN). Trained with MobileNet and ResNet18 architectures to recognize 6-7 different emotion types from camera feed and images.',
      descriptionVi: 'Đồ án cơ sở: Ứng dụng mobile phát hiện và phân loại cảm xúc khuôn mặt sử dụng Convolutional Neural Networks (CNN). Huấn luyện với kiến trúc MobileNet và ResNet18 để nhận diện 6-7 loại cảm xúc khác nhau từ camera và ảnh.',
      roleEn: 'AI/ML Engineer & Mobile Developer',
      roleVi: 'AI/ML Engineer & Mobile Developer',
      responsibilitiesEn: [
        'Trained CNN models (MobileNet, ResNet18) for emotion classification',
        'Preprocessed and augmented facial emotion dataset',
        'Converted trained models to TensorFlow Lite for mobile deployment',
        'Developed Flutter app with real-time camera emotion detection',
        'Optimized model inference speed for mobile devices',
        'Achieved 85%+ accuracy on test dataset'
      ],
      responsibilitiesVi: [
        'Huấn luyện các mô hình CNN (MobileNet, ResNet18) để phân loại cảm xúc',
        'Tiền xử lý và augment dataset cảm xúc khuôn mặt',
        'Chuyển đổi mô hình đã train sang TensorFlow Lite cho mobile',
        'Phát triển ứng dụng Flutter với phát hiện cảm xúc real-time từ camera',
        'Tối ưu tốc độ inference của mô hình cho thiết bị mobile',
        'Đạt độ chính xác 85%+ trên test dataset'
      ],
      highlightsEn: [
        'Real-time emotion detection from camera',
        'Support for 6-7 emotion categories',
        'On-device ML inference (no server required)',
        'Optimized for mobile performance'
      ],
      highlightsVi: [
        'Phát hiện cảm xúc real-time từ camera',
        'Hỗ trợ 6-7 loại cảm xúc',
        'ML inference trên thiết bị (không cần server)',
        'Tối ưu cho hiệu suất mobile'
      ]
    },
    {
      id: 5,
      title: 'AI Virtual Assistant with Emotion Recognition',
      titleVi: 'Trợ lý Ảo AI với Nhận diện Cảm xúc',
      category: 'AI & Machine Learning',
      featured: true,
      thumbnail: '/projects/ai-assistant-thumbnail.png',
      demoUrl: null,
      githubUrl: 'https://github.com/quangtin137/Personal-blog_QuangTin',
      techStack: ['Flutter', 'YOLO', 'TensorFlow Lite', 'AI Chatbot', 'Computer Vision'],
      descriptionEn: 'Capstone project: An intelligent virtual assistant chatbot that responds based on detected facial emotions. Integrates YOLO for face detection and emotion-aware AI chatbot that adapts responses according to user emotions.',
      descriptionVi: 'Đồ án chuyên ngành: Trợ lý ảo chatbot thông minh phản hồi dựa trên cảm xúc khuôn mặt được phát hiện. Tích hợp YOLO để phát hiện khuôn mặt và AI chatbot nhận biết cảm xúc để điều chỉnh phản hồi theo cảm xúc người dùng.',
      roleEn: 'AI Engineer & Full-stack Developer',
      roleVi: 'AI Engineer & Full-stack Developer',
      responsibilitiesEn: [
        'Integrated YOLO object detection for real-time face detection',
        'Combined emotion recognition model with chatbot system',
        'Designed emotion-aware response generation algorithm',
        'Built conversational AI with context-aware responses',
        'Developed mobile interface for seamless user interaction',
        'Conducted user testing and iterative improvements'
      ],
      responsibilitiesVi: [
        'Tích hợp YOLO object detection để phát hiện khuôn mặt real-time',
        'Kết hợp mô hình nhận diện cảm xúc với hệ thống chatbot',
        'Thiết kế thuật toán sinh phản hồi nhận biết cảm xúc',
        'Xây dựng conversational AI với phản hồi context-aware',
        'Phát triển giao diện mobile cho tương tác mượt mà',
        'Thực hiện user testing và cải tiến lặp đi lặp lại'
      ],
      highlightsEn: [
        'Emotion-aware conversational AI',
        'Real-time face detection with YOLO',
        'Context-aware response generation',
        'Adaptive communication based on user mood'
      ],
      highlightsVi: [
        'AI hội thoại nhận biết cảm xúc',
        'Phát hiện khuôn mặt real-time với YOLO',
        'Sinh phản hồi context-aware',
        'Giao tiếp thích ứng dựa trên tâm trạng người dùng'
      ]
    }
  ]

  const categories = ['all', 'Web Development', 'Mobile Development', 'AI & Machine Learning']

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <Layout>
      <div className="min-h-screen bg-background-dark py-12 px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
              {language === 'en' ? '🚀 My Projects' : '🚀 Dự Án Của Tôi'}
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {language === 'en' 
                ? 'A showcase of projects I\'ve built with passion and dedication. Each project represents a learning journey and problem-solving experience.'
                : 'Những dự án tôi đã xây dựng với đam mê và tận tâm. Mỗi dự án đại diện cho một hành trình học tập và trải nghiệm giải quyết vấn đề.'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-card-dark text-text-secondary border border-card-border hover:border-primary hover:text-white'
                }`}
              >
                {category === 'all' ? (language === 'en' ? 'All Projects' : 'Tất cả') : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card-dark rounded-3xl shadow-2xl overflow-hidden border border-card-border hover:border-primary transition-all duration-500 hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  {/* Title & Category */}
                  <div>
                    <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {language === 'en' ? project.title : project.titleVi}
                    </h2>
                    <p className="text-text-secondary text-lg">
                      <strong className="text-primary">{language === 'en' ? 'Role:' : 'Vai trò:'}</strong> {language === 'en' ? project.roleEn : project.roleVi}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {language === 'en' ? project.descriptionEn : project.descriptionVi}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🛠️</span> {language === 'en' ? 'Tech Stack' : 'Công nghệ'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background-dark border border-card-border text-text-secondary rounded-lg text-sm hover:border-primary hover:text-primary transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>📋</span> {language === 'en' ? 'Key Responsibilities' : 'Trách nhiệm chính'}
                    </h3>
                    <ul className="space-y-2">
                      {(language === 'en' ? project.responsibilitiesEn : project.responsibilitiesVi).map((resp, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>⭐</span> {language === 'en' ? 'Highlights' : 'Điểm nổi bật'}
                    </h3>
                    <ul className="space-y-2">
                      {(language === 'en' ? project.highlightsEn : project.highlightsVi).map((highlight, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                      >
                        <span>🚀</span>
                        {language === 'en' ? 'Live Demo' : 'Xem Demo'}
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-card-border hover:bg-card-border/80 text-white rounded-xl font-semibold transition-all hover:scale-105 border border-card-border hover:border-primary"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {language === 'en' ? 'View Code' : 'Xem Code'}
                    </a>
                  </div>
                </div>

                {/* Project Thumbnail Placeholder */}
                <div className="relative h-64 md:h-full min-h-[400px] bg-gradient-to-br from-card-border to-background-dark rounded-2xl overflow-hidden border border-card-border flex items-center justify-center">
                  <div className="text-center text-text-secondary">
                    <div className="text-6xl mb-4">
                      {project.category === 'Web Development' ? '🌐' : 
                       project.category === 'Mobile Development' ? '📱' : '🤖'}
                    </div>
                    <p className="text-sm">{language === 'en' ? 'Project Screenshot' : 'Ảnh dự án'}</p>
                    <p className="text-xs mt-2 opacity-60">{language === 'en' ? 'Coming soon' : 'Sắp có'}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'Want to collaborate?' : 'Muốn hợp tác?'}
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            {language === 'en' 
              ? 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.'
              : 'Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo, hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn.'}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            {language === 'en' ? 'Get In Touch' : 'Liên Hệ Ngay'}
          </Link>
        </div>
      </div>
    </Layout>
  )
}
