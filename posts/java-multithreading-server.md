---
title: "Multithreading trong Java cho ứng dụng Server"
date: "2024-12-08"
category: "Java"
excerpt: "Tìm hiểu cách sử dụng đa luồng để xây dựng server có khả năng xử lý nhiều client đồng thời."
---

# Multithreading trong Java cho ứng dụng Server

Khi xây dựng server thực tế, chúng ta cần xử lý nhiều client cùng lúc. Đây là lúc multithreading phát huy tác dụng. Trong bài này, chúng ta sẽ học cách sử dụng Thread để tạo server đa luồng.

## Vấn đề với Single-threaded Server

Server trong bài trước chỉ xử lý được một client tại một thời điểm. Khi client thứ nhất đang kết nối, các client khác phải chờ đợi. Điều này không hiệu quả!

## Thread trong Java

Thread là một luồng thực thi độc lập trong chương trình. Java cung cấp hai cách tạo thread:

### 1. Extend Thread class
```java
class MyThread extends Thread {
    public void run() {
        // Code thực thi trong thread
    }
}
```

### 2. Implement Runnable interface (khuyến nghị)
```java
class MyRunnable implements Runnable {
    public void run() {
        // Code thực thi trong thread
    }
}
```

## Xây dựng Multithreaded Server

```java
import java.io.*;
import java.net.*;

public class MultithreadedServer {
    public static void main(String[] args) {
        int port = 8888;
        
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server đang lắng nghe trên port " + port);
            
            while (true) {
                // Chấp nhận kết nối mới
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới kết nối: " + 
                    clientSocket.getInetAddress().getHostAddress());
                
                // Tạo thread mới để xử lý client
                ClientHandler handler = new ClientHandler(clientSocket);
                Thread thread = new Thread(handler);
                thread.start();
                
                System.out.println("Đã tạo thread mới cho client");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket clientSocket;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    @Override
    public void run() {
        try {
            // Tạo streams
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true);
            
            // Gửi welcome message
            out.println("Chào mừng đến với server!");
            
            // Đọc và xử lý messages
            String message;
            while ((message = in.readLine()) != null) {
                System.out.println("Nhận: " + message);
                
                // Xử lý lệnh
                if (message.equalsIgnoreCase("quit")) {
                    out.println("Tạm biệt!");
                    break;
                }
                
                // Echo message
                out.println("Echo: " + message);
            }
            
        } catch (IOException e) {
            System.out.println("Lỗi xử lý client: " + e.getMessage());
        } finally {
            try {
                clientSocket.close();
                System.out.println("Đã đóng kết nối client");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

## Thread Pool - Cải thiện hiệu năng

Tạo thread mới cho mỗi client tốn kém tài nguyên. Thread Pool giúp tái sử dụng thread:

```java
import java.util.concurrent.*;

public class ThreadPoolServer {
    private static final int THREAD_POOL_SIZE = 10;
    
    public static void main(String[] args) {
        int port = 8888;
        
        // Tạo thread pool
        ExecutorService executor = Executors.newFixedThreadPool(THREAD_POOL_SIZE);
        
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server với Thread Pool đang chạy...");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới: " + 
                    clientSocket.getInetAddress().getHostAddress());
                
                // Submit task vào thread pool
                executor.submit(new ClientHandler(clientSocket));
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}
```

## Synchronized - Xử lý đồng bộ

Khi nhiều thread truy cập cùng một tài nguyên, ta cần đồng bộ hóa:

```java
class Counter {
    private int count = 0;
    
    // Method synchronized
    public synchronized void increment() {
        count++;
    }
    
    // Block synchronized
    public void decrement() {
        synchronized(this) {
            count--;
        }
    }
    
    public synchronized int getCount() {
        return count;
    }
}
```

## Ví dụ thực tế: Chat Server

```java
import java.io.*;
import java.net.*;
import java.util.*;

public class ChatServer {
    private static Set<ClientHandler> clientHandlers = new HashSet<>();
    
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8888);
        System.out.println("Chat Server đang chạy...");
        
        while (true) {
            Socket socket = serverSocket.accept();
            ClientHandler handler = new ClientHandler(socket);
            clientHandlers.add(handler);
            new Thread(handler).start();
        }
    }
    
    // Broadcast message đến tất cả clients
    public static synchronized void broadcast(String message, ClientHandler sender) {
        for (ClientHandler client : clientHandlers) {
            if (client != sender) {
                client.sendMessage(message);
            }
        }
    }
    
    public static synchronized void removeClient(ClientHandler handler) {
        clientHandlers.remove(handler);
    }
}
```

## Best Practices

1. **Luôn đóng resources**: Sử dụng try-with-resources
2. **Xử lý exceptions**: Catch và log errors đúng cách
3. **Sử dụng Thread Pool**: Thay vì tạo thread mới liên tục
4. **Synchronized khi cần**: Tránh race conditions
5. **Graceful shutdown**: Đóng threads một cách an toàn

## Kết luận

Multithreading là kỹ năng quan trọng khi xây dựng server có khả năng mở rộng. Thread Pool giúp tối ưu hiệu năng, còn synchronized đảm bảo tính nhất quán dữ liệu.

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về UDP Socket và khi nào nên sử dụng UDP thay vì TCP!
