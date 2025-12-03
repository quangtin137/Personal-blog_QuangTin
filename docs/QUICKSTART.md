# 🚀 HƯỚNG DẪN NHANH

## Chạy project trong 3 bước:

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Chạy development server
```bash
npm run dev
```

### Bước 3: Mở trình duyệt
```
http://localhost:3000
```

---

## 📂 Các trang có sẵn:

- **Trang chủ**: http://localhost:3000/
- **Blog**: http://localhost:3000/blog
- **Profile**: http://localhost:3000/profile
- **Chi tiết bài viết**: http://localhost:3000/blog/java-oop-introduction

---

## 📝 Thêm bài viết mới:

1. Tạo file `.md` trong folder `posts/`
2. Thêm frontmatter:
```markdown
---
title: "Tiêu đề bài viết"
date: "2024-12-25"
category: "Java"
excerpt: "Mô tả ngắn"
---

Nội dung bài viết...
```
3. Restart server hoặc refresh trang

---

## 🌐 Deploy lên Vercel:

Xem file `DEPLOY.md` để biết hướng dẫn chi tiết.

**Tóm tắt**:
1. Push code lên GitHub
2. Import vào Vercel
3. Deploy!

---

## 📚 Đọc thêm:

- `README.md` - Hướng dẫn đầy đủ
- `DEPLOY.md` - Hướng dẫn deploy Vercel  
- `SUMMARY.md` - Tổng kết đồ án

---

## ❓ Gặp vấn đề?

### Port 3000 đã được sử dụng:
```bash
# Dùng port khác
npm run dev -- -p 3001
```

### Build lỗi:
```bash
# Xóa cache và rebuild
rm -rf .next
npm run build
```

### Module not found:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

**Chúc bạn thành công! 🎉**
