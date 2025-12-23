---
title: "Code chạy được ≠ Code tốt: Bài học từ code 'xấu'"
date: "2025-12-17"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [java, clean code, best practices, refactoring]
---

**3 giờ sáng**. Tôi nhìn code mình viết 2 tuần trước... không hiểu gì cả.

```java
public class X {
    int a = 10, b = 20, c = a + b;
    if(c > 25) { for(int i=0; i<c; i++) System.out.println(i); }
}
```

`a` là gì? `b` là gì? `c` tính cái quái gì? Deadline sắp tới. Tôi muốn khóc.

**Lúc đó tôi nhận ra: code không chỉ viết cho máy, mà còn cho người – kể cả tương lai của chính mình.**

## Quy tắc 1: Tên biến phải "nói chuyện"

### ❌ Code câm lặng
```java
int d = 7;
String s = "2025-12-23";
boolean f = true;
```
Đọc xong biết gì? KHÔNG GÌ.

### ✅ Code tự giải thích
```java
int daysUntilDeadline = 7;
String projectStartDate = "2025-12-23";
boolean isTaskCompleted = true;
```
Rõ ràng ngay!

## Quy tắc 2: Một function = Một việc

### ❌ Function "siêu nhân"
```java
void processUser(String name, int age) {
    if(name == null) return;  // validate
    database.save(name, age);  // save
    email.send(name);          // send email
    System.out.println(name);  // log
}
```
Làm 4 việc! Khó test, khó maintain.

### ✅ Chia trách nhiệm
```java
boolean validateUser(String name, int age) { /*...*/ }
void saveUser(String name, int age) { /*...*/ }
void sendWelcomeEmail(String name) { /*...*/ }
void logUserAdded(String name) { /*...*/ }
```
Mỗi function một nhiệm vụ. Clean!

## Quy tắc 3: Comment giải thích "TẠI SAO"

### ❌ Comment vô dụng
```java
i++;  // tăng i lên 1
if(age > 18) System.out.println("Adult");  // in Adult
```
Đọc code là đủ hiểu!

### ✅ Comment có giá trị
```java
// Using binary search vì array đã sort (O(log n) thay vì O(n))
int result = binarySearch(arr, target);

// Retry 3 lần vì payment API hay timeout
for(int i=0; i<3; i++) if(payment.process()) break;
```

## Đồ án năm 3: Bài học xương máu

Code backend app bán hàng. Tôi đặt tên: `Controller1`, `Controller2`, `Controller3`...

Debug lỗi? Mở từng file xem nó làm gì. **Mất 30 phút tìm logic xử lý đơn hàng.**

**Refactor**:
- `Controller1` → `ProductController`
- `Controller2` → `OrderController`  
- `Controller3` → `PaymentController`

Debug giờ chỉ 3 phút!

## Checklist trước commit

- ✅ Tên biến/function rõ nghĩa?
- ✅ Function làm quá nhiều việc?
- ✅ Code lặp lại 3 lần? (Refactor!)
- ✅ Người khác đọc có hiểu?
- ✅ Tôi đọc lại 1 tuần sau có hiểu?

**Trả lời "NO" câu nào → SỬA!**

---

*"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler*
