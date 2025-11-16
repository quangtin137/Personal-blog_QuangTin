---
title: "HTTP Client và RESTful API trong Java"
date: "2024-12-15"
category: "Java"
excerpt: "Tìm hiểu cách sử dụng HttpClient để tương tác với RESTful APIs và xử lý JSON trong Java."
---

# HTTP Client và RESTful API trong Java

Trong thời đại hiện đại, hầu hết ứng dụng đều cần tương tác với web services thông qua HTTP. Java cung cấp HttpClient (từ Java 11) để làm việc với HTTP một cách dễ dàng.

## HttpClient trong Java 11+

Java 11 giới thiệu `java.net.http.HttpClient` - một API hiện đại, hỗ trợ HTTP/2 và hoạt động async.

### Ưu điểm của HttpClient mới
- ✅ Hỗ trợ HTTP/2
- ✅ Sync và Async requests
- ✅ Reactive Streams
- ✅ WebSocket support
- ✅ API fluent dễ sử dụng

## GET Request cơ bản

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpGetExample {
    public static void main(String[] args) {
        try {
            // Tạo HttpClient
            HttpClient client = HttpClient.newHttpClient();
            
            // Tạo request
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
                .GET()
                .build();
            
            // Gửi request và nhận response
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            // In kết quả
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body:");
            System.out.println(response.body());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## POST Request với JSON

```java
import java.net.URI;
import java.net.http.*;

public class HttpPostExample {
    public static void main(String[] args) {
        try {
            HttpClient client = HttpClient.newHttpClient();
            
            // Tạo JSON body
            String json = """
                {
                    "title": "Bài viết mới",
                    "body": "Nội dung bài viết",
                    "userId": 1
                }
                """;
            
            // Tạo POST request
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
            
            // Gửi request
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Status: " + response.statusCode());
            System.out.println("Response: " + response.body());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Async Request với CompletableFuture

```java
import java.util.concurrent.CompletableFuture;

public class AsyncHttpExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://jsonplaceholder.typicode.com/users"))
            .build();
        
        // Async request
        CompletableFuture<HttpResponse<String>> responseFuture = 
            client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
        
        // Xử lý response khi hoàn thành
        responseFuture.thenApply(HttpResponse::body)
            .thenAccept(body -> {
                System.out.println("Nhận được dữ liệu:");
                System.out.println(body);
            })
            .join(); // Chờ hoàn thành
        
        System.out.println("Request đã được gửi!");
    }
}
```

## Xử lý JSON với Jackson

Để parse JSON, ta dùng thư viện Jackson:

**pom.xml** (nếu dùng Maven):
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```

**User.java**:
```java
public class User {
    private int id;
    private String name;
    private String email;
    
    // Constructors, getters, setters
    public User() {}
    
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "', email='" + email + "'}";
    }
}
```

**Sử dụng Jackson**:
```java
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonParsingExample {
    public static void main(String[] args) {
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/users/1"))
                .build();
            
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            // Parse JSON
            ObjectMapper mapper = new ObjectMapper();
            User user = mapper.readValue(response.body(), User.class);
            
            System.out.println("User: " + user);
            System.out.println("Name: " + user.getName());
            System.out.println("Email: " + user.getEmail());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## RESTful API Client hoàn chỉnh

```java
import java.net.URI;
import java.net.http.*;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RestApiClient {
    private final HttpClient client;
    private final ObjectMapper mapper;
    private final String baseUrl;
    
    public RestApiClient(String baseUrl) {
        this.client = HttpClient.newHttpClient();
        this.mapper = new ObjectMapper();
        this.baseUrl = baseUrl;
    }
    
    public <T> T get(String endpoint, Class<T> responseType) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + endpoint))
            .GET()
            .build();
        
        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        return mapper.readValue(response.body(), responseType);
    }
    
    public <T, R> R post(String endpoint, T body, Class<R> responseType) 
            throws Exception {
        String json = mapper.writeValueAsString(body);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + endpoint))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
        
        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        return mapper.readValue(response.body(), responseType);
    }
    
    public void delete(String endpoint) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + endpoint))
            .DELETE()
            .build();
        
        client.send(request, HttpResponse.BodyHandlers.ofString());
    }
}

// Sử dụng
public class Main {
    public static void main(String[] args) throws Exception {
        RestApiClient api = new RestApiClient(
            "https://jsonplaceholder.typicode.com"
        );
        
        // GET request
        User user = api.get("/users/1", User.class);
        System.out.println("User: " + user);
        
        // POST request
        User newUser = new User();
        newUser.setName("Quang Tín");
        newUser.setEmail("tin@example.com");
        
        User created = api.post("/users", newUser, User.class);
        System.out.println("Created: " + created);
    }
}
```

## Authentication với Bearer Token

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/protected"))
    .header("Authorization", "Bearer YOUR_TOKEN_HERE")
    .GET()
    .build();
```

## Xử lý errors

```java
try {
    HttpResponse<String> response = client.send(request, 
        HttpResponse.BodyHandlers.ofString());
    
    if (response.statusCode() >= 400) {
        throw new RuntimeException("HTTP Error: " + response.statusCode());
    }
    
    // Xử lý response thành công
    
} catch (Exception e) {
    System.err.println("Request failed: " + e.getMessage());
}
```

## Best Practices

1. **Reuse HttpClient**: Tạo một instance và dùng lại
2. **Set timeouts**: Tránh block vô thời hạn
3. **Handle errors**: Kiểm tra status code
4. **Connection pooling**: HttpClient tự động quản lý
5. **Close resources**: Sử dụng try-with-resources

## Kết luận

HttpClient trong Java 11+ là công cụ mạnh mẽ để làm việc với RESTful APIs. Kết hợp với Jackson để parse JSON, bạn có thể xây dựng các ứng dụng tương tác với web services một cách hiệu quả.

Đây là bài cuối cùng trong series Java! Tiếp theo chúng ta sẽ chuyển sang JavaScript.
