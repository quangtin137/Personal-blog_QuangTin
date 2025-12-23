---
title: "Code JavaScript gọn gàng: Đừng viết hết vào 1 file!"
date: "2025-12-22"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [javascript, clean code, modules, organization]
---

Dự án đầu tiên: một file `script.js` dài... **800 dòng**.

Mọi thứ ở đó: xử lý form, animation, API call, validation. Lúc viết thấy "tiện", lúc sửa muốn khóc.

**Mất 2 giờ chỉ để tìm 1 function.**

## Vấn đề: "Một file cho tất cả"

```
script.js (800 dòng)
├── Login logic (1-150)
├── Cart logic (151-350)
├── Animations (351-500)
├── API calls (501-650)
└── Utils (651-800)
```

**Hậu quả**:
- Scroll mỏi tay mới thấy function
- 2 người sửa cùng file = conflict
- Không test được từng phần
- Copy-paste khi tái sử dụng

## Giải pháp: Chia file theo nhiệm vụ

```
js/
├── auth.js         (login/logout)
├── cart.js         (giỏ hàng)
├── animations.js   (hiệu ứng)
├── api.js          (gọi API)
├── utils.js        (helper functions)
└── main.js         (điều phối)
```

**Một file = Một nhiệm vụ!**

## Module hóa code

### Cách cũ (ES5)
```html
<script src="utils.js"></script>
<script src="auth.js"></script>
<script src="main.js"></script>
```
Thứ tự quan trọng. Rối!

### Cách mới (ES6 Modules)

**auth.js**:
```javascript
export function login(username, password) {
    // logic
}

export function logout() {
    // logic
}
```

**main.js**:
```javascript
import { login, logout } from './auth.js';

login("user", "pass");
```

Rõ ràng! Import cái nào xài cái đó.

## Quy tắc đặt tên file

### ❌ Tên chung chung
```
script1.js
script2.js
utils.js (chứa mọi thứ)
```

### ✅ Tên rõ nghĩa
```
userAuth.js
productCart.js
paymentProcessor.js
dateFormatter.js
```

Đọc tên file là biết nó làm gì!

## Function nên ngắn (< 30 dòng)

### ❌ Function dài 100 dòng
```javascript
function processOrder() {
    // Validate (20 dòng)
    // Calculate price (30 dòng)
    // Check inventory (25 dòng)
    // Send email (15 dòng)
    // Update DB (10 dòng)
}
```

Khó đọc, khó test!

### ✅ Tách nhỏ
```javascript
function processOrder(order) {
    if (!validateOrder(order)) return false;
    const price = calculatePrice(order);
    if (!checkInventory(order)) return false;
    sendConfirmationEmail(order);
    updateDatabase(order);
    return true;
}
```

Mỗi function làm 1 việc. Đọc như đọc truyện!

## Bài học từ project thật

**Trước**: `script.js` 800 dòng. Sửa 1 bug mất 4 giờ.

**Sau**: Chia thành 8 files. Sửa bug giờ chỉ 30 phút.

**ROI = 8x!**

## Checklist tổ chức code

- ✅ Mỗi file < 200 dòng?
- ✅ Mỗi function < 30 dòng?
- ✅ Tên file/function rõ nghĩa?
- ✅ Có dùng modules?
- ✅ Code có lặp lại 3 lần? (Extract!)

## Tools giúp tổ chức tốt

- **ESLint** – Check code style
- **Prettier** – Format tự động
- **Webpack/Vite** – Bundle modules
- **Folder structure** – Học từ React/Vue

---

*Tổ chức code tốt = Tiết kiệm hàng giờ sau này. Bắt đầu ngay từ project đầu!* 📁✨
