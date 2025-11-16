# Blog Cá Nhân - Lập Trình Mạng

Blog cá nhân chia sẻ kiến thức về Java, JavaScript và lập trình mạng. Được xây dựng với Next.js (Pages Router), Tailwind CSS và Static Site Generation (SSG).

## 🎯 Tính năng

- ✅ Trang chủ với hero section và feature highlights
- ✅ Trang Blog hiển thị danh sách bài viết
- ✅ Trang Profile giới thiệu cá nhân
- ✅ Chi tiết bài viết với Markdown rendering
- ✅ 9 bài viết về Java & JavaScript
- ✅ Responsive design với Tailwind CSS
- ✅ Static Site Generation (SSG) với Next.js

## 📁 Cấu trúc dự án

```
Personal-blog_QuangTin/
├── components/
│   ├── Layout.js         # Layout chung cho toàn bộ trang
│   └── Navbar.js         # Navigation bar
├── lib/
│   └── posts.js          # Utilities để đọc và parse Markdown
├── pages/
│   ├── _app.js           # Custom App component
│   ├── _document.js      # Custom Document component
│   ├── index.js          # Trang chủ
│   ├── profile.js        # Trang giới thiệu
│   └── blog/
│       ├── index.js      # Danh sách bài viết
│       └── [slug].js     # Chi tiết bài viết
├── posts/
│   ├── java-oop-introduction.md
│   ├── java-tcp-socket-basic.md
│   ├── java-multithreading-server.md
│   ├── java-udp-socket.md
│   ├── java-http-client-rest-api.md
│   ├── javascript-es6-features.md
│   ├── nodejs-http-server.md
│   ├── expressjs-web-framework.md
│   └── websocket-socketio.md
├── styles/
│   └── globals.css       # Tailwind CSS imports
├── .gitignore
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # File này
```

## 🚀 Cài đặt và chạy local

### Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

### Các bước thực hiện

1. **Clone repository** (nếu từ GitHub):
```bash
git clone https://github.com/quangtin137/Personal-blog_QuangTin.git
cd Personal-blog_QuangTin
```

2. **Cài đặt dependencies**:
```bash
npm install
```

3. **Chạy development server**:
```bash
npm run dev
```

4. **Mở trình duyệt** và truy cập:
```
http://localhost:3000
```

### Các lệnh khác

- **Build cho production**:
```bash
npm run build
```

- **Chạy production build**:
```bash
npm start
```

- **Lint code**:
```bash
npm run lint
```

## 📝 Danh sách bài viết

### Java (5 bài)

1. **Giới thiệu về Java và lập trình hướng đối tượng** - Tìm hiểu về Java, OOP principles và tại sao Java phù hợp cho lập trình mạng.

2. **Socket Programming với Java - Phần 1: TCP Socket cơ bản** - Xây dựng ứng dụng client-server đơn giản với TCP Socket.

3. **Multithreading trong Java cho ứng dụng Server** - Sử dụng đa luồng để server xử lý nhiều client đồng thời.

4. **UDP Socket Programming trong Java** - So sánh UDP với TCP và cách implement UDP trong Java.

5. **HTTP Client và RESTful API trong Java** - Tương tác với RESTful APIs bằng HttpClient và parse JSON.

### JavaScript (4 bài)

6. **JavaScript cơ bản và ES6+ Features** - Arrow functions, destructuring, promises, async/await và các tính năng modern.

7. **Node.js và xây dựng HTTP Server** - Xây dựng HTTP server với Node.js built-in modules.

8. **Express.js - Web Framework cho Node.js** - Tạo RESTful API nhanh chóng với Express.js.

9. **WebSocket và Real-time Communication với Socket.io** - Xây dựng ứng dụng real-time như chat app.

## 🎨 Công nghệ sử dụng

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS 3.4
- **Markdown**: gray-matter + marked
- **Deployment**: Vercel (khuyến nghị)

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "gray-matter": "^4.0.3",
    "marked": "^11.1.1"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1"
  }
}
```

## 🌐 Deploy lên Vercel

### Bước 1: Push code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit - Blog cá nhân"
git remote add origin https://github.com/quangtin137/Personal-blog_QuangTin.git
git branch -M main
git push -u origin main
```

### Bước 2: Deploy với Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub account
3. Click **"New Project"**
4. Import repository `Personal-blog_QuangTin`
5. Vercel tự động detect Next.js và configure build settings
6. Click **"Deploy"**

### Bước 3: Cấu hình Domain (Optional)

1. Trong Vercel dashboard → Settings → Domains
2. Thêm custom domain của bạn
3. Cập nhật DNS records theo hướng dẫn

### Build Settings (Vercel tự động detect)

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 🔧 Thêm bài viết mới

1. Tạo file `.md` mới trong thư mục `posts/`:

```markdown
---
title: "Tiêu đề bài viết"
date: "2024-12-25"
category: "Java" hoặc "JavaScript"
excerpt: "Mô tả ngắn về bài viết"
---

# Nội dung bài viết

Viết nội dung ở đây...
```

2. File name sẽ là URL slug (vd: `my-post.md` → `/blog/my-post`)

3. Restart dev server để thấy bài viết mới

## 📖 Cấu trúc Markdown File

Mỗi file Markdown cần có frontmatter (metadata) ở đầu:

```yaml
---
title: "Tiêu đề"           # Bắt buộc
date: "YYYY-MM-DD"          # Bắt buộc
category: "Java|JavaScript" # Bắt buộc
excerpt: "Mô tả ngắn"       # Bắt buộc
---
```

Sau đó là nội dung Markdown với các heading, code blocks, lists, v.v.

## 🎯 Tính năng nổi bật

### Static Site Generation (SSG)

- Tất cả bài viết được generate thành static HTML tại build time
- Tốc độ load cực nhanh
- SEO-friendly
- Không cần database

### Markdown Support

- Hỗ trợ full Markdown syntax
- Code highlighting
- Tables, lists, quotes
- Frontmatter metadata

### Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Responsive navigation
- Optimized cho mọi screen sizes

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy tạo Pull Request hoặc mở Issue nếu bạn tìm thấy lỗi hoặc có ý tưởng cải thiện.

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và học tập.

## 👤 Tác giả

**Quang Tín**
- GitHub: [@quangtin137](https://github.com/quangtin137)
- Email: quangtin@example.com

## 🙏 Cảm ơn

Cảm ơn bạn đã ghé thăm blog của mình! Hy vọng các bài viết hữu ích cho hành trình học tập của bạn.

---

**Ngày tạo**: Tháng 12, 2024  
**Phiên bản**: 1.0.0  
**Đồ án**: Lập Trình Mạng
