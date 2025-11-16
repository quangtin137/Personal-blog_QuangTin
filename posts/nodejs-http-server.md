---
title: "Node.js và xây dựng HTTP Server"
date: "2024-12-20"
category: "JavaScript"
excerpt: "Học cách sử dụng Node.js để xây dựng HTTP server và xử lý requests với built-in modules."
---

# Node.js và xây dựng HTTP Server

Node.js là runtime environment cho phép chạy JavaScript trên server. Với Node.js, chúng ta có thể xây dựng web servers, APIs, và các ứng dụng backend mạnh mẽ.

## Node.js là gì?

Node.js được xây dựng trên V8 JavaScript engine của Chrome, cho phép thực thi JavaScript ngoài trình duyệt. Đặc điểm nổi bật:

- ⚡ **Non-blocking I/O**: Xử lý nhiều requests đồng thời
- 🔄 **Event-driven**: Dựa trên event loop
- 📦 **NPM**: Hệ sinh thái packages lớn nhất
- 🚀 **Hiệu năng cao**: Phù hợp cho real-time apps

## HTTP Module cơ bản

Node.js có built-in module `http` để tạo server:

```javascript
const http = require('http');

// Tạo server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send response
    res.end('Hello from Node.js Server!');
});

// Lắng nghe trên port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
```

**Chạy server**:
```bash
node server.js
```

## Xử lý Routes

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    
    // Set header
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // Route handling
    if (url === '/' && method === 'GET') {
        res.writeHead(200);
        res.end('<h1>Trang chủ</h1>');
    } 
    else if (url === '/about' && method === 'GET') {
        res.writeHead(200);
        res.end('<h1>Giới thiệu</h1><p>Đây là trang giới thiệu</p>');
    }
    else if (url === '/api/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = [
            { id: 1, name: 'Quang Tín' },
            { id: 2, name: 'Nguyen Van A' }
        ];
        res.end(JSON.stringify(users));
    }
    else {
        res.writeHead(404);
        res.end('<h1>404 - Không tìm thấy trang</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

## Xử lý POST Request

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'POST') {
        let body = '';
        
        // Nhận data từ request
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        // Khi nhận đủ data
        req.on('end', () => {
            try {
                const user = JSON.parse(body);
                console.log('Received user:', user);
                
                // Gửi response
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'User created',
                    user: user
                }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000);
```

**Test với curl**:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Tin","age":20}'
```

## File System Module

Đọc và ghi file:

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Đọc HTML file
        const filePath = path.join(__dirname, 'index.html');
        
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
    else if (req.url === '/data') {
        // Đọc JSON file
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
});

server.listen(3000);
```

## Serving Static Files

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Build file path
    let filePath = path.join(
        __dirname, 
        'public',
        req.url === '/' ? 'index.html' : req.url
    );
    
    // Get file extension
    const extname = path.extname(filePath);
    
    // Set content type
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(3000);
```

## URL Module

Parse URL và query parameters:

```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    
    if (pathname === '/search') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            keyword: query.q,
            page: query.page || 1,
            limit: query.limit || 10
        }));
    }
});

// Test: http://localhost:3000/search?q=nodejs&page=2&limit=20
server.listen(3000);
```

## Environment Variables

```javascript
// Load từ .env file (cần dotenv package)
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer((req, res) => {
    res.end(`Server running on ${HOST}:${PORT}`);
});

server.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`);
});
```

**.env**:
```
PORT=8080
HOST=0.0.0.0
```

## Simple REST API

```javascript
const http = require('http');

// In-memory database
let users = [
    { id: 1, name: 'Quang Tín', email: 'tin@example.com' },
    { id: 2, name: 'Nguyen Van A', email: 'a@example.com' }
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    
    // GET all users
    if (url === '/api/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    
    // GET user by ID
    else if (url.match(/\/api\/users\/([0-9]+)/) && method === 'GET') {
        const id = parseInt(url.split('/')[3]);
        const user = users.find(u => u.id === id);
        
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }
    
    // POST new user
    else if (url === '/api/users' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length + 1;
            users.push(newUser);
            
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newUser));
        });
    }
    
    // DELETE user
    else if (url.match(/\/api\/users\/([0-9]+)/) && method === 'DELETE') {
        const id = parseInt(url.split('/')[3]);
        users = users.filter(u => u.id !== id);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User deleted' }));
    }
    
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('REST API running on port 3000');
});
```

## Kết luận

Node.js HTTP module cung cấp những công cụ cơ bản để xây dựng web server. Tuy nhiên, trong thực tế, chúng ta thường dùng framework như Express.js để code nhanh và dễ hơn.

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về Express.js!
