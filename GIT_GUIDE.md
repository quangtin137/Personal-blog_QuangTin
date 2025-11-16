# Git Commit Messages - Mẫu cho project

## Initial Commit
```bash
git add .
git commit -m "🎉 Initial commit: Blog cá nhân về lập trình mạng

✨ Features:
- Next.js 15 với Pages Router
- Tailwind CSS responsive design
- 9 bài viết về Java & JavaScript
- Static Site Generation (SSG)
- Markdown-based content system

📁 Structure:
- Components: Layout, Navbar
- Pages: Home, Blog, Profile, Blog Detail
- Posts: 5 Java + 4 JavaScript articles
- Full documentation: README, DEPLOY, SUMMARY

🛠️ Tech Stack:
- Next.js 15
- React 18
- Tailwind CSS 3.4
- gray-matter + marked
- ESLint

✅ Ready for:
- Local development
- Production build
- Vercel deployment"
```

## Thêm bài viết mới
```bash
git add posts/new-article.md
git commit -m "📝 Thêm bài viết: Tiêu đề bài viết mới

- Nội dung về [chủ đề]
- Code examples
- Vietnamese content"
```

## Fix bugs
```bash
git add .
git commit -m "🐛 Fix: Mô tả bug đã sửa

- Chi tiết về bug
- Cách sửa"
```

## Cập nhật UI
```bash
git add .
git commit -m "💄 UI: Cải thiện giao diện

- Cập nhật navbar
- Thêm animations
- Responsive improvements"
```

## Refactor code
```bash
git add .
git commit -m "♻️ Refactor: Component optimization

- Clean up code
- Improve performance
- Better organization"
```

## Cập nhật docs
```bash
git add README.md DEPLOY.md
git commit -m "📚 Docs: Cập nhật documentation

- Bổ sung hướng dẫn
- Fix typos
- Add examples"
```

---

## Push lên GitHub

```bash
# Lần đầu
git remote add origin https://github.com/quangtin137/Personal-blog_QuangTin.git
git branch -M main
git push -u origin main

# Các lần sau
git push
```

---

## Emoji Guide (Optional)

- 🎉 `:tada:` - Initial commit
- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/styling
- ♻️ `:recycle:` - Refactor
- 🚀 `:rocket:` - Performance
- 🔧 `:wrench:` - Configuration
- 📦 `:package:` - Dependencies
