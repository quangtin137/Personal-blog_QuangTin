---
title: "Socket Programming với Java - Phần 1: TCP Socket cơ bản"
date: "2024-12-05"
category: "Java"
excerpt: "Học cách xây dựng ứng dụng client-server đơn giản bằng TCP Socket trong Java."
---

# Socket Programming với Java - Phần 1: TCP Socket cơ bản

Socket programming là nền tảng của lập trình mạng. Trong bài này, chúng ta sẽ tìm hiểu cách tạo ứng dụng client-server đơn giản sử dụng TCP Socket trong Java.

## Socket là gì?

Socket là một endpoint trong giao tiếp hai chiều giữa hai chương trình chạy trên mạng. Một socket được gắn với một port number để TCP layer có thể xác định ứng dụng nào sẽ nhận dữ liệu.

## Các class chính trong Java Socket

### 1. ServerSocket
- Dùng để tạo server socket
- Lắng nghe các kết nối đến từ client
- Method `accept()` chờ và chấp nhận kết nối

### 2. Socket
- Dùng để tạo client socket
- Kết nối đến server
- Gửi và nhận dữ liệu

## Xây dựng TCP Server

```java
import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) {
        int port = 8888;
        
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server đang lắng nghe trên port " + port);
            
            while (true) {
                // Chờ client kết nối
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client đã kết nối: " + 
                    clientSocket.getInetAddress().getHostAddress());
                
                // Tạo luồng đọc/ghi
                BufferedReader in = new BufferedReader(
                    new InputStreamReader(clientSocket.getInputStream()));
                PrintWriter out = new PrintWriter(
                    clientSocket.getOutputStream(), true);
                
                // Đọc message từ client
                String message = in.readLine();
                System.out.println("Nhận từ client: " + message);
                
                // Gửi response về client
                out.println("Server: Đã nhận được - " + message);
                
                clientSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Xây dựng TCP Client

```java
import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 8888;
        
        try (Socket socket = new Socket(hostname, port)) {
            System.out.println("Đã kết nối đến server");
            
            // Tạo luồng đọc/ghi
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));
            
            // Gửi message đến server
            String message = "Xin chào Server!";
            out.println(message);
            System.out.println("Đã gửi: " + message);
            
            // Nhận response từ server
            String response = in.readLine();
            System.out.println("Nhận từ server: " + response);
            
        } catch (UnknownHostException e) {
            System.out.println("Không tìm thấy server: " + hostname);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Cách chạy chương trình

1. **Compile các file**:
```bash
javac TCPServer.java
javac TCPClient.java
```

2. **Chạy Server trước**:
```bash
java TCPServer
```

3. **Chạy Client** (trong terminal khác):
```bash
java TCPClient
```

## Luồng hoạt động

1. Server tạo ServerSocket và lắng nghe trên port 8888
2. Client tạo Socket và kết nối đến server
3. Server chấp nhận kết nối qua `accept()`
4. Client gửi message đến server
5. Server nhận message và gửi response
6. Đóng kết nối

## Ưu điểm của TCP

- **Đáng tin cậy**: Đảm bảo dữ liệu được gửi đầy đủ và đúng thứ tự
- **Kiểm soát lỗi**: Tự động phát hiện và sửa lỗi
- **Kiểm soát luồng**: Điều chỉnh tốc độ truyền dữ liệu

## Nhược điểm của TCP

- **Chậm hơn UDP**: Do cơ chế đảm bảo tin cậy
- **Overhead cao**: Header lớn hơn UDP
- **Phức tạp**: Cần thiết lập và đóng kết nối

## Kết luận

TCP Socket là nền tảng quan trọng trong lập trình mạng. Trong bài tiếp theo, chúng ta sẽ tìm hiểu về multithreading để server có thể xử lý nhiều client cùng lúc!
