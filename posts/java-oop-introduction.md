---
title: "Giới thiệu về Java và lập trình hướng đối tượng"
date: "2024-12-01"
category: "Java"
excerpt: "Tìm hiểu về ngôn ngữ lập trình Java, các đặc điểm nổi bật và tại sao Java là lựa chọn hàng đầu cho lập trình mạng."
---

# Giới thiệu về Java và lập trình hướng đối tượng

Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Java được thiết kế với triết lý "Write Once, Run Anywhere" (WORA), có nghĩa là code Java có thể chạy trên bất kỳ nền tảng nào có JVM (Java Virtual Machine).

## Đặc điểm nổi bật của Java

### 1. Hướng đối tượng (OOP)

Java là ngôn ngữ hướng đối tượng thuần túy, mọi thứ trong Java đều là object (ngoại trừ các kiểu dữ liệu nguyên thủy). Các nguyên lý OOP chính:

- **Encapsulation (Đóng gói)**: Che giấu thông tin bên trong class
- **Inheritance (Kế thừa)**: Cho phép class con kế thừa từ class cha
- **Polymorphism (Đa hình)**: Một phương thức có thể có nhiều hình thái khác nhau
- **Abstraction (Trừu tượng)**: Ẩn đi chi tiết triển khai, chỉ hiển thị chức năng

### 2. Độc lập nền tảng

Code Java được biên dịch thành bytecode, sau đó được JVM thực thi. Điều này cho phép Java chạy trên Windows, Linux, macOS mà không cần thay đổi code.

### 3. Bảo mật cao

Java có nhiều tính năng bảo mật tích hợp sẵn:
- Không có con trỏ trực tiếp như C/C++
- Có Security Manager để kiểm soát quyền truy cập
- Bytecode được kiểm tra trước khi thực thi

## Ví dụ code Java cơ bản

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, Java!");
        
        // Tạo object
        Person person = new Person("Quang Tín", 20);
        person.introduce();
    }
}

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("Tôi là " + name + ", " + age + " tuổi");
    }
}
```

## Tại sao chọn Java cho lập trình mạng?

1. **Thư viện mạng phong phú**: Java cung cấp package `java.net` với đầy đủ class cho lập trình mạng
2. **Đa luồng mạnh mẽ**: Hỗ trợ multithreading tốt, quan trọng cho server handling nhiều clients
3. **Bảo mật**: Quan trọng khi xử lý dữ liệu qua mạng
4. **Hiệu năng cao**: JVM được tối ưu hóa qua nhiều năm phát triển

## Kết luận

Java là một ngôn ngữ mạnh mẽ và linh hoạt, đặc biệt phù hợp cho lập trình mạng. Với kiến trúc hướng đối tượng và các thư viện phong phú, Java giúp developers xây dựng các ứng dụng mạng an toàn và hiệu quả.

Trong các bài tiếp theo, chúng ta sẽ đi sâu vào Socket Programming, TCP/IP và các khái niệm lập trình mạng với Java!
