---
title: "console.log() Everywhere: Thói quen xấu cần bỏ"
date: "2025-12-21"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [javascript, debug, console, devtools]
---

Hồi mới học JS, code không chạy → tôi chỉ biết 1 chiêu:

**THÊM `console.log()` KHẮP NƠI!**

```javascript
function calculate(a, b) {
    console.log("a:", a);  // Log 1
    console.log("b:", b);  // Log 2
    let sum = a + b;
    console.log("sum:", sum);  // Log 3
    let result = sum * 2;
    console.log("result:", result);  // Log 4
    return result;
}
```

Console đầy rác. Tôi vẫn không biết lỗi ở đâu. 🤦

## console.log là gì?

In giá trị ra Console của browser:

```javascript
let name = "Tin";
console.log(name);  // In: Tin

let numbers = [1, 2, 3];
console.log(numbers);  // In: [1, 2, 3]
```

Hữu ích để check nhanh: "Biến này có đúng không?"

## Khi nào console.log KHÔNG đủ?

1. **Vòng lặp lớn** – Log 1000 lần = console nổ
2. **Logic phức tạp** – Nhiều function gọi nhau
3. **Async code** – Callback, Promise không rõ thứ tự
4. **Performance issue** – Log không cho biết đâu chậm

## Bước tiến: Debugger của browser

**F12** → Tab **Sources** → Click số dòng để đặt **breakpoint**.

Code sẽ **DỪNG** ở đó. Bạn xem được:
- Giá trị TẤT CẢ biến
- Call stack
- Step qua từng dòng

```javascript
function processData(data) {
    debugger;  // Code tự động dừng ở đây
    // Xem biến, step từng dòng
}
```

**Không cần log nữa!** Thấy mọi thứ real-time.

## Từ "log bừa" → "log có chiến lược"

### ❌ Log bừa
```javascript
console.log("start");
console.log(x);
console.log(y);
console.log(z);
console.log("end");
```

### ✅ Log có ý nghĩa
```javascript
console.log("=== Input ===");
console.log({ userId, action, timestamp });

console.log("=== Output ===");
console.log({ success, data, error });
```

Chỉ log **input** và **output** – đủ để debug!

## Console nâng cao – Những gì tôi ước biết sớm hơn

### 1. console.group() – Tổ chức log gọn gàng

```javascript
console.group("🔐 User Login Process");
console.log("Step 1: Validate username");
console.log("Username:", username);
console.log("Step 2: Check password");
console.log("Password length:", password.length);
console.log("Step 3: Generate token");
console.log("Token:", token);
console.groupEnd();

console.group("📧 Send Email");
console.log("To:", email);
console.log("Subject:", subject);
console.groupEnd();
```

**Output sẽ gọn gàng như folder!** Click mở/đóng từng group.

### 2. console.table() – Hiển thị data như bảng Excel

```javascript
let students = [
    { id: 1, name: "Quang Tín", grade: 8.5, major: "IT" },
    { id: 2, name: "Minh An", grade: 9.0, major: "CS" },
    { id: 3, name: "Thu Hà", grade: 7.5, major: "IT" }
];

console.table(students);
```

**Output**: Bảng đẹp, dễ nhìn hơn log thường gấp 100 lần!

```
┌─────────┬────┬────────────┬───────┬────────┐
│ (index) │ id │    name    │ grade │ major  │
├─────────┼────┼────────────┼───────┼────────┤
│    0    │  1 │ 'Quang Tín' │  8.5  │  'IT'  │
│    1    │  2 │  'Minh An'  │  9.0  │  'CS'  │
│    2    │  3 │  'Thu Hà'   │  7.5  │  'IT'  │
└─────────┴────┴────────────┴───────┴────────┘
```

### 3. console.time() – Đo performance

```javascript
console.time("Fetch API");
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.timeEnd("Fetch API");  // Output: Fetch API: 234ms
        console.log("Data:", data);
    });
```

Biết chính xác function nào chạy chậm!

### 4. console.warn() & console.error() – Phân loại log

```javascript
// Cảnh báo (màu vàng)
console.warn("⚠️ Function này sắp bị deprecated. Dùng newFunction() thay thế!");

// Lỗi nghiêm trọng (màu đỏ)
console.error("❌ Không kết nối được database!");
console.error("Error details:", errorObject);

// Log thường (màu trắng)
console.log("ℹ️ App started successfully");
```

Phân loại màu giúp debug nhanh hơn!

### 5. console.assert() – Test nhanh ngay trong code

```javascript
let age = 15;
console.assert(age >= 18, "❌ Lỗi: Tuổi phải >= 18!");
// Chỉ log nếu điều kiện SAI
```

### 6. console.trace() – Xem call stack

```javascript
function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace("Đây là call stack");
}

a();
```

**Output**: Hiển thị đường đi của function: `a() → b() → c()`

## Bài học

**console.log là bước đầu, không phải tất cả.**

1. Log có chiến lược – input/output
2. Dùng debugger khi phức tạp
3. Suy nghĩ logic trước khi log
4. Dọn log sau khi debug xong
5. Học thêm: Chrome DevTools

---

*Debugging = 50% kỹ năng lập trình. Đừng phụ thuộc console.log!* 🔍
