# Hướng dẫn Deploy Blog lên Vercel

Tài liệu này hướng dẫn chi tiết cách deploy blog Next.js của bạn lên Vercel.

## 📋 Yêu cầu trước khi deploy

- [x] Code đã hoàn thành và test local thành công
- [x] Tài khoản GitHub
- [x] Tài khoản Vercel (miễn phí)

## 🚀 Bước 1: Chuẩn bị Git Repository

### 1.1. Khởi tạo Git (nếu chưa có)

```bash
git init
```

### 1.2. Thêm files vào staging

```bash
git add .
```

### 1.3. Commit lần đầu

```bash
git commit -m "Initial commit: Blog cá nhân về lập trình mạng"
```

### 1.4. Tạo repository trên GitHub

1. Truy cập [github.com](https://github.com)
2. Click nút **"+"** → **"New repository"**
3. Điền thông tin:
   - **Repository name**: `Personal-blog_QuangTin` (hoặc tên bạn muốn)
   - **Description**: "Blog cá nhân chia sẻ về Java, JavaScript và lập trình mạng"
   - **Public** hoặc **Private**: Chọn Public để deploy miễn phí
   - **Không** tick "Initialize with README" (vì đã có local)
4. Click **"Create repository"**

### 1.5. Push code lên GitHub

```bash
# Thay YOUR_USERNAME bằng username GitHub của bạn
git remote add origin https://github.com/quangtin137/Personal-blog_QuangTin.git
git branch -M main
git push -u origin main
```

## 🌐 Bước 2: Deploy với Vercel

### 2.1. Tạo tài khoản Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Chọn **"Continue with GitHub"**
4. Authorize Vercel truy cập GitHub của bạn

### 2.2. Import Project

1. Trong Vercel Dashboard, click **"New Project"**
2. Trong mục **"Import Git Repository"**:
   - Tìm repository `Personal-blog_QuangTin`
   - Click **"Import"**

### 2.3. Configure Project

Vercel tự động detect Next.js. Kiểm tra settings:

**Build & Development Settings:**
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `next build` (mặc định)
- **Output Directory**: `.next` (mặc định)
- **Install Command**: `npm install` (mặc định)

**Root Directory:**
- Để trống (`.`) nếu `package.json` ở root

**Environment Variables:**
- Không cần (blog tĩnh)

### 2.4. Deploy

1. Click nút **"Deploy"**
2. Đợi 1-2 phút để Vercel:
   - Install dependencies
   - Build project
   - Deploy lên edge network
3. Khi thấy 🎉 "Congratulations!" → Deploy thành công!

### 2.5. Lấy URL

Sau khi deploy xong, bạn sẽ nhận được URL:

```
https://personal-blog-quang-tin.vercel.app
```

(URL thực tế sẽ khác, dựa trên tên project)

## 🔧 Bước 3: Custom Domain (Optional)

Nếu bạn muốn dùng domain riêng (vd: `tinblog.com`):

### 3.1. Mua domain

Mua domain từ:
- Namecheap
- GoDaddy
- Google Domains
- Hoặc nhà cung cấp khác

### 3.2. Thêm domain vào Vercel

1. Trong Vercel Dashboard → Chọn project
2. Tab **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Nhập domain của bạn (vd: `tinblog.com`)
5. Click **"Add"**

### 3.3. Cấu hình DNS

Vercel sẽ hiển thị DNS records cần thêm:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Thêm records này vào DNS settings của domain provider.

### 3.4. Chờ DNS propagate

- DNS thường mất 5-30 phút để cập nhật
- Có thể mất đến 48 giờ
- Kiểm tra tại [whatsmydns.net](https://www.whatsmydns.net)

## 🔄 Bước 4: Automatic Deployments

Vercel tự động deploy mỗi khi bạn push code:

### 4.1. Sửa code local

```bash
# Sửa file bất kỳ
# Ví dụ: Thêm bài viết mới vào posts/
```

### 4.2. Commit và push

```bash
git add .
git commit -m "Thêm bài viết mới"
git push
```

### 4.3. Auto deploy

- Vercel tự động detect push mới
- Tự động build và deploy
- Nhận notification qua email
- Mất ~1-2 phút

### 4.4. Preview Deployments

Mỗi Pull Request tạo preview deployment riêng:
- Test changes trước khi merge
- URL riêng cho mỗi PR
- Tự động cleanup khi close PR

## ✅ Bước 5: Kiểm tra Deployment

### 5.1. Test các trang

Truy cập và kiểm tra:

- [x] Homepage: `https://your-domain.vercel.app/`
- [x] Blog page: `https://your-domain.vercel.app/blog`
- [x] Profile: `https://your-domain.vercel.app/profile`
- [x] Chi tiết bài viết: `https://your-domain.vercel.app/blog/java-oop-introduction`

### 5.2. Test trên mobile

- Mở link trên điện thoại
- Kiểm tra responsive design
- Test navigation

### 5.3. Performance

Kiểm tra performance tại:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Nhập URL của bạn
- Next.js SSG thường đạt 90-100 điểm!

## 📊 Analytics (Optional)

### Vercel Analytics

1. Tab **"Analytics"** trong project
2. Click **"Enable Analytics"**
3. Xem traffic, performance metrics

### Google Analytics

Thêm vào `pages/_document.js`:

```javascript
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## 🐛 Troubleshooting

### Build failed

**Lỗi**: Build command failed

**Giải pháp**:
1. Check build logs trong Vercel
2. Test local: `npm run build`
3. Fix errors và push lại

### 404 on routes

**Lỗi**: Trang không tìm thấy

**Giải pháp**:
- Kiểm tra file paths
- Đảm bảo exports đúng
- Check `getStaticProps` và `getStaticPaths`

### Module not found

**Lỗi**: Cannot find module

**Giải pháp**:
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

## 🎯 Best Practices

### 1. Environment Variables

Nếu cần secrets (API keys):

```bash
# Trong Vercel Settings → Environment Variables
DATABASE_URL=your-connection-string
API_KEY=your-api-key
```

### 2. Custom Headers

File `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}
```

### 3. Redirects

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
}
```

## 📱 Chia sẻ blog

Sau khi deploy thành công, chia sẻ blog của bạn:

- Facebook
- LinkedIn  
- GitHub README
- Portfolio website

## 🎓 Nộp đồ án

Khi nộp đồ án, cung cấp:

1. **GitHub Repository URL**:
   ```
   https://github.com/quangtin137/Personal-blog_QuangTin
   ```

2. **Live Demo URL**:
   ```
   https://personal-blog-quang-tin.vercel.app
   ```

3. **Documentation**:
   - README.md
   - Hướng dẫn deploy (file này)
   - Screenshots

4. **Source Code**:
   - Clone hoặc download từ GitHub
   - Nén thành .zip nếu cần

## 🚀 Kết luận

Chúc mừng! Bạn đã:

- ✅ Xây dựng blog Next.js SSG hoàn chỉnh
- ✅ Deploy lên Vercel production
- ✅ Có URL live để chia sẻ
- ✅ Setup automatic deployments

Blog của bạn giờ đây:
- 🚀 Tốc độ load cực nhanh (SSG)
- 🌍 Global CDN (Vercel Edge Network)
- 📱 Responsive trên mọi thiết bị
- 🔄 Auto deploy khi push code

Happy coding! 🎉

---

**Hỗ trợ**:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Tạo issue nếu gặp vấn đề
