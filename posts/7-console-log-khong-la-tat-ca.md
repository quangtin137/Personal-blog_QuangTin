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

## Console nâng cao

```javascript
// Group logs
console.group("User Login");
console.log("Username:", user);
console.log("Time:", new Date());
console.groupEnd();

// Table format
console.table([
    { name: "Tin", age: 21 },
    { name: "An", age: 22 }
]);

// Timer
console.time("Process");
// ... code ...
console.timeEnd("Process");  // In: Process: 123ms

// Warning & Error
console.warn("⚠️ Deprecated function!");
console.error("❌ API failed!");
```

## Bài học

**console.log là bước đầu, không phải tất cả.**

1. Log có chiến lược – input/output
2. Dùng debugger khi phức tạp
3. Suy nghĩ logic trước khi log
4. Dọn log sau khi debug xong
5. Học thêm: Chrome DevTools

---

*Debugging = 50% kỹ năng lập trình. Đừng phụ thuộc console.log!* 🔍
