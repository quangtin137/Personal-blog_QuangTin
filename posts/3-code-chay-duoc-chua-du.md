---
title: "Code chạy được khác Code tốt: Bài học từ code 'xấu'"
date: "2025-12-17"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [java, clean code, best practices, refactoring]
---

**3 giờ sáng**. Tôi mở lại code mình viết 2 tuần trước để fix bug. Nhìn vào màn hình, tôi... **không hiểu gì cả**.

```java
public class X {
    int a = 10, b = 20, c = a + b;
    if(c > 25) { for(int i=0; i<c; i++) System.out.println(i); }
}
```

Một đống câu hỏi trong đầu:
- Class `X` là cái gì?
- `a` là gì? Đơn vị là gì?
- `b` là gì? Tại sao lại là 20?
- `c` tính cái quái gì? Tại sao phải lớn hơn 25?
- Vòng for này in ra để làm gì?

Deadline sắp tới. Bug chưa fix được. Tôi ngồi đọc lại code của chính mình mà như người lạ. **Tôi muốn khóc.**

**Lúc đó tôi nhận ra một chân lý đau đớn:**

> "Code không chỉ viết cho máy chạy. Code còn viết cho con người đọc – kể cả chính bản thân tương lai của mình."

Nếu refactor lại:

```java
public class DiscountCalculator {
    private int basePrice = 10;
    private int taxAmount = 20;
    private int totalAmount = basePrice + taxAmount;
    
    public void printEligibleDays() {
        if (totalAmount > 25) {
            for (int day = 0; day < totalAmount; day++) {
                System.out.println("Day " + day + " is eligible for discount");
            }
        }
    }
}
```

**BÂY GIỜ MỚI RÕ RÀNG!** Đọc là hiểu ngay logic.

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
