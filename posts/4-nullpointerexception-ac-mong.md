---
title: "NullPointerException: Ác mộng của người mới học Java"
date: "2025-12-18"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [java, debug, exception, error]
---

Màn hình đỏ lòm. Hàng chục dòng chữ. Tôi chỉ muốn... tắt máy.

```
Exception in thread "main" java.lang.NullPointerException
    at MyClass.calculate(MyClass.java:15)
    at MyClass.process(MyClass.java:10)
    at MyClass.main(MyClass.java:5)
```

**NullPointerException** – cái tên nghe đã thấy sợ. Nhưng sau 100 lần gặp, tôi nhận ra: **lỗi không phải kẻ thù, lỗi là thầy**.

## 2 loại lỗi trong Java

### Compile Error – Lỗi trước khi chạy
```java
System.out.println("Hello")  // ❌ Thiếu dấu ;
```
- Dễ phát hiện – IDE báo ngay
- Dễ sửa – lỗi syntax

### Runtime Error – Lỗi khi đang chạy  
```java
int[] arr = {1, 2, 3};
System.out.println(arr[5]);  // ❌ ArrayIndexOutOfBoundsException
```
- Khó phát hiện – chỉ lỗi khi chạy đến
- Cần đọc stack trace

## NullPointerException: Ác mộng số 1

```java
String name = null;
System.out.println(name.length());  // 💥 BOOM!
```

Gọi method trên object **chưa khởi tạo** (null) → Crash!

90% lỗi Java của newbie là NPE. Seriously.

## Cách đọc Stack Trace (không còn sợ!)

Lúc đầu thấy stack trace, tôi hoảng loạn. Sau nhiều lần, tôi tìm ra quy luật:

### 1. Đọc từ trên xuống
```
Exception in thread "main" java.lang.NullPointerException  ← Loại lỗi
```

### 2. Tìm file của mình (bỏ qua thư viện Java)
```
at MyClass.java:15  ← LỖI Ở ĐÂY!
at java.base/java.util.ArrayList...  ← Bỏ qua
at java.base/java.lang.Thread...     ← Bỏ qua
```

### 3. Check dòng 15
```java
15: System.out.println(user.getName());  // user = null!
```

**Aha! `user` bị null rồi!**

## Debug 101: Check null trước khi dùng

```java
// ❌ Nguy hiểm
System.out.println(name.length());

// ✅ An toàn
if (name != null) {
    System.out.println(name.length());
} else {
    System.out.println("Name is null!");
}

// ✅ Ngắn gọn hơn (Java 14+)
int length = (name != null) ? name.length() : 0;
```

## Từ sợ lỗi → yêu lỗi

Lúc đầu: "Ối lỗi rồi, chắc tôi ngu..."
Bây giờ: "Lỗi đây! Đọc message xem Java nói gì..."

**Error messages là gợi ý, không phải punishment.**

## Mẹo xử lý lỗi

1. **Đọc kỹ error message** – Java nói rõ lắm
2. **Google nguyên văn lỗi** – 99% người khác đã gặp
3. **Dùng debugger** – Step-by-step xem biến nào null
4. **Print debug** – Khi debugger quá phức tạp
5. **Hỏi ChatGPT/Stack Overflow** – Đừng ngại!

---

*Đừng sợ lỗi! Mỗi lần debug thành công = hiểu Java hơn một chút.* 🐛🔧
