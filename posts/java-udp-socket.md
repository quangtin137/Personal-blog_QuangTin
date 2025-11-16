---
title: "UDP Socket Programming trong Java"
date: "2024-12-12"
category: "Java"
excerpt: "So sánh UDP với TCP và học cách xây dựng ứng dụng sử dụng UDP DatagramSocket."
---

# UDP Socket Programming trong Java

UDP (User Datagram Protocol) là giao thức truyền dữ liệu không tin cậy nhưng nhanh hơn TCP. Trong bài này, chúng ta sẽ tìm hiểu khi nào nên dùng UDP và cách implement trong Java.

## TCP vs UDP

### TCP (Transmission Control Protocol)
- ✅ Đáng tin cậy - đảm bảo dữ liệu đến đầy đủ
- ✅ Có thứ tự - packets đến đúng thứ tự
- ✅ Kiểm soát lỗi - tự động gửi lại nếu mất
- ❌ Chậm hơn - do overhead của việc kiểm tra
- ❌ Phức tạp - cần thiết lập kết nối

### UDP (User Datagram Protocol)
- ✅ Nhanh - không overhead của TCP
- ✅ Đơn giản - không cần thiết lập kết nối
- ✅ Broadcast/Multicast - gửi đến nhiều địa chỉ
- ❌ Không đảm bảo - packet có thể mất
- ❌ Không có thứ tự - packets có thể đến sai thứ tự

## Khi nào dùng UDP?

UDP phù hợp cho:
- 🎮 **Gaming** - tốc độ quan trọng hơn độ chính xác
- 📹 **Video streaming** - mất vài frame không vấn đề
- 🎤 **VoIP** - âm thanh thời gian thực
- 📡 **DNS queries** - request đơn giản, nhanh
- 📊 **Monitoring** - gửi metrics định kỳ

## DatagramSocket và DatagramPacket

Java cung cấp hai class chính cho UDP:

### DatagramSocket
- Tạo socket để gửi/nhận datagram
- Không cần kết nối như TCP

### DatagramPacket
- Đóng gói dữ liệu để gửi qua UDP
- Chứa data, địa chỉ đích và port

## UDP Server

```java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        int port = 9999;
        
        try (DatagramSocket socket = new DatagramSocket(port)) {
            System.out.println("UDP Server đang lắng nghe trên port " + port);
            
            byte[] buffer = new byte[1024];
            
            while (true) {
                // Tạo packet để nhận dữ liệu
                DatagramPacket receivePacket = new DatagramPacket(buffer, buffer.length);
                
                // Nhận packet từ client
                socket.receive(receivePacket);
                
                // Lấy dữ liệu từ packet
                String message = new String(receivePacket.getData(), 0, 
                    receivePacket.getLength());
                
                System.out.println("Nhận từ " + 
                    receivePacket.getAddress().getHostAddress() + 
                    ": " + message);
                
                // Chuẩn bị response
                String response = "Echo: " + message;
                byte[] responseData = response.getBytes();
                
                // Tạo packet để gửi
                DatagramPacket sendPacket = new DatagramPacket(
                    responseData, 
                    responseData.length,
                    receivePacket.getAddress(),
                    receivePacket.getPort()
                );
                
                // Gửi response
                socket.send(sendPacket);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## UDP Client

```java
import java.net.*;
import java.util.Scanner;

public class UDPClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 9999;
        
        try (DatagramSocket socket = new DatagramSocket()) {
            InetAddress address = InetAddress.getByName(hostname);
            Scanner scanner = new Scanner(System.in);
            
            while (true) {
                System.out.print("Nhập message (hoặc 'quit'): ");
                String message = scanner.nextLine();
                
                if (message.equalsIgnoreCase("quit")) {
                    break;
                }
                
                // Chuẩn bị packet để gửi
                byte[] sendData = message.getBytes();
                DatagramPacket sendPacket = new DatagramPacket(
                    sendData,
                    sendData.length,
                    address,
                    port
                );
                
                // Gửi packet
                socket.send(sendPacket);
                System.out.println("Đã gửi: " + message);
                
                // Nhận response
                byte[] receiveData = new byte[1024];
                DatagramPacket receivePacket = new DatagramPacket(
                    receiveData,
                    receiveData.length
                );
                socket.receive(receivePacket);
                
                String response = new String(receivePacket.getData(), 0,
                    receivePacket.getLength());
                System.out.println("Nhận: " + response);
            }
            
            scanner.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Broadcast với UDP

UDP cho phép broadcast message đến tất cả máy trong subnet:

```java
import java.net.*;

public class UDPBroadcast {
    public static void main(String[] args) {
        int port = 9999;
        
        try (DatagramSocket socket = new DatagramSocket()) {
            socket.setBroadcast(true);
            
            String message = "Broadcast message!";
            byte[] data = message.getBytes();
            
            // Broadcast address
            InetAddress broadcast = InetAddress.getByName("255.255.255.255");
            
            DatagramPacket packet = new DatagramPacket(
                data,
                data.length,
                broadcast,
                port
            );
            
            socket.send(packet);
            System.out.println("Đã broadcast message");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Xử lý Timeout

Đặt timeout để tránh block vô thời hạn:

```java
try (DatagramSocket socket = new DatagramSocket(port)) {
    // Đặt timeout 5 giây
    socket.setSoTimeout(5000);
    
    DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
    
    try {
        socket.receive(packet);
        // Xử lý packet
    } catch (SocketTimeoutException e) {
        System.out.println("Timeout! Không nhận được dữ liệu");
    }
}
```

## So sánh hiệu năng

Để đo hiệu năng:

```java
long startTime = System.currentTimeMillis();

// Gửi packet
socket.send(packet);

// Nhận response
socket.receive(receivePacket);

long endTime = System.currentTimeMillis();
System.out.println("Round-trip time: " + (endTime - startTime) + " ms");
```

## Lưu ý khi dùng UDP

1. **Kiểm tra packet size**: Max 65,507 bytes
2. **Implement retry logic**: Tự xử lý việc gửi lại
3. **Sequence numbers**: Đánh số để phát hiện mất packet
4. **Checksums**: Kiểm tra tính toàn vẹn dữ liệu
5. **Firewall**: UDP dễ bị block hơn TCP

## Kết luận

UDP là lựa chọn tốt khi tốc độ quan trọng hơn độ tin cậy. Tuy nhiên, bạn cần tự implement các cơ chế kiểm soát lỗi và đảm bảo thứ tự nếu cần thiết.

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về HTTP client và cách tương tác với RESTful APIs trong Java!
