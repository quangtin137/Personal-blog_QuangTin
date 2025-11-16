---
title: "WebSocket và Real-time Communication với Socket.io"
date: "2024-12-25"
category: "JavaScript"
excerpt: "Xây dựng ứng dụng real-time với WebSocket và Socket.io trong Node.js."
---

# WebSocket và Real-time Communication với Socket.io

WebSocket là giao thức cho phép giao tiếp hai chiều (bidirectional) giữa client và server. Socket.io là thư viện phổ biến giúp làm việc với WebSocket dễ dàng hơn.

## HTTP vs WebSocket

### HTTP (Request-Response)
- Client gửi request → Server response
- Mỗi request tạo connection mới
- Không phù hợp cho real-time apps

### WebSocket
- Persistent connection (kết nối liên tục)
- Two-way communication (giao tiếp hai chiều)
- Low latency (độ trễ thấp)
- Phù hợp cho: chat, gaming, notifications

## Cài đặt Socket.io

```bash
npm install socket.io express
```

## WebSocket Server cơ bản

**server.js**:
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static('public'));

// Khi client kết nối
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Nhận message từ client
    socket.on('message', (data) => {
        console.log('Received:', data);
        
        // Gửi lại cho client
        socket.emit('response', { message: 'Server received: ' + data });
    });
    
    // Khi client disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

## WebSocket Client

**public/index.html**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Socket.io Demo</title>
</head>
<body>
    <h1>WebSocket Demo</h1>
    
    <input type="text" id="messageInput" placeholder="Nhập message...">
    <button onclick="sendMessage()">Gửi</button>
    
    <div id="messages"></div>
    
    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        
        // Kết nối thành công
        socket.on('connect', () => {
            console.log('Connected to server');
            addMessage('Đã kết nối đến server');
        });
        
        // Nhận response từ server
        socket.on('response', (data) => {
            addMessage('Server: ' + data.message);
        });
        
        // Gửi message
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value;
            
            if (message) {
                socket.emit('message', message);
                addMessage('You: ' + message);
                input.value = '';
            }
        }
        
        function addMessage(text) {
            const div = document.createElement('div');
            div.textContent = text;
            document.getElementById('messages').appendChild(div);
        }
        
        // Disconnect
        socket.on('disconnect', () => {
            addMessage('Mất kết nối');
        });
    </script>
</body>
</html>
```

## Broadcasting Messages

```javascript
io.on('connection', (socket) => {
    // Gửi đến tất cả clients (bao gồm sender)
    io.emit('broadcast', { message: 'Message to all' });
    
    // Gửi đến tất cả clients (trừ sender)
    socket.broadcast.emit('broadcast', { message: 'New user joined' });
    
    // Gửi đến client cụ thể
    socket.to(socketId).emit('private', { message: 'Private message' });
});
```

## Chat Application

**server.js**:
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Lưu users
const users = new Map();

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // User join
    socket.on('join', (username) => {
        users.set(socket.id, username);
        
        // Thông báo user joined
        socket.broadcast.emit('userJoined', {
            username: username,
            message: `${username} đã tham gia chat`
        });
        
        // Gửi danh sách users
        io.emit('users', Array.from(users.values()));
    });
    
    // Chat message
    socket.on('chatMessage', (data) => {
        const username = users.get(socket.id);
        
        // Broadcast message đến tất cả
        io.emit('message', {
            username: username,
            message: data.message,
            timestamp: new Date()
        });
    });
    
    // Typing indicator
    socket.on('typing', () => {
        const username = users.get(socket.id);
        socket.broadcast.emit('userTyping', username);
    });
    
    socket.on('stopTyping', () => {
        socket.broadcast.emit('userStopTyping');
    });
    
    // User disconnect
    socket.on('disconnect', () => {
        const username = users.get(socket.id);
        users.delete(socket.id);
        
        if (username) {
            io.emit('userLeft', {
                username: username,
                message: `${username} đã rời khỏi chat`
            });
            
            // Update users list
            io.emit('users', Array.from(users.values()));
        }
    });
});

server.listen(3000, () => {
    console.log('Chat server running on port 3000');
});
```

**public/chat.html**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Chat App</title>
    <style>
        #messages { 
            height: 400px; 
            overflow-y: scroll; 
            border: 1px solid #ccc; 
            padding: 10px;
        }
        .message { margin: 5px 0; }
        .system { color: #999; font-style: italic; }
        .typing { color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <h1>Chat Room</h1>
    
    <div id="loginForm">
        <input type="text" id="username" placeholder="Nhập tên...">
        <button onclick="join()">Tham gia</button>
    </div>
    
    <div id="chatBox" style="display: none;">
        <div id="users"></div>
        <div id="messages"></div>
        <div id="typingIndicator" class="typing"></div>
        
        <input type="text" id="messageInput" placeholder="Nhập tin nhắn...">
        <button onclick="sendMessage()">Gửi</button>
    </div>
    
    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        let username = '';
        let typingTimer;
        
        function join() {
            username = document.getElementById('username').value;
            if (username) {
                socket.emit('join', username);
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('chatBox').style.display = 'block';
            }
        }
        
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value;
            
            if (message) {
                socket.emit('chatMessage', { message });
                input.value = '';
                socket.emit('stopTyping');
            }
        }
        
        // Listen for messages
        socket.on('message', (data) => {
            addMessage(`<strong>${data.username}:</strong> ${data.message}`);
        });
        
        socket.on('userJoined', (data) => {
            addMessage(data.message, 'system');
        });
        
        socket.on('userLeft', (data) => {
            addMessage(data.message, 'system');
        });
        
        socket.on('users', (usersList) => {
            document.getElementById('users').innerHTML = 
                '<strong>Online:</strong> ' + usersList.join(', ');
        });
        
        socket.on('userTyping', (user) => {
            document.getElementById('typingIndicator').textContent = 
                `${user} đang gõ...`;
        });
        
        socket.on('userStopTyping', () => {
            document.getElementById('typingIndicator').textContent = '';
        });
        
        function addMessage(text, className = '') {
            const div = document.createElement('div');
            div.className = 'message ' + className;
            div.innerHTML = text;
            document.getElementById('messages').appendChild(div);
            div.scrollIntoView();
        }
        
        // Typing indicator
        document.getElementById('messageInput').addEventListener('input', () => {
            socket.emit('typing');
            clearTimeout(typingTimer);
            typingTimer = setTimeout(() => {
                socket.emit('stopTyping');
            }, 1000);
        });
        
        // Enter to send
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    </script>
</body>
</html>
```

## Rooms (Phòng chat)

```javascript
io.on('connection', (socket) => {
    // Join room
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);
        console.log(`${socket.id} joined room ${roomName}`);
        
        // Gửi message cho room
        io.to(roomName).emit('message', {
            message: `New user joined ${roomName}`
        });
    });
    
    // Leave room
    socket.on('leaveRoom', (roomName) => {
        socket.leave(roomName);
        console.log(`${socket.id} left room ${roomName}`);
    });
    
    // Message to specific room
    socket.on('roomMessage', ({ room, message }) => {
        io.to(room).emit('message', {
            room: room,
            message: message
        });
    });
});
```

## Namespaces

```javascript
// Admin namespace
const adminNamespace = io.of('/admin');

adminNamespace.on('connection', (socket) => {
    console.log('Admin connected');
    
    socket.on('adminAction', (data) => {
        // Handle admin actions
    });
});

// Regular users namespace
const usersNamespace = io.of('/users');

usersNamespace.on('connection', (socket) => {
    console.log('User connected');
});
```

**Client**:
```javascript
// Connect to specific namespace
const adminSocket = io('/admin');
const userSocket = io('/users');
```

## Authentication

```javascript
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    
    if (isValidToken(token)) {
        next();
    } else {
        next(new Error('Authentication error'));
    }
});

// Client
const socket = io({
    auth: {
        token: 'YOUR_TOKEN_HERE'
    }
});
```

## Real-time Notifications

```javascript
// Server
io.on('connection', (socket) => {
    socket.on('subscribe', (userId) => {
        socket.join(`user:${userId}`);
    });
});

// Gửi notification cho user cụ thể
function sendNotification(userId, notification) {
    io.to(`user:${userId}`).emit('notification', notification);
}

// Client
socket.emit('subscribe', userId);

socket.on('notification', (data) => {
    showNotification(data);
});
```

## Kết luận

WebSocket và Socket.io mở ra khả năng xây dựng các ứng dụng real-time như chat, gaming, collaborative tools, live updates. Socket.io giúp quá trình này trở nên đơn giản với API dễ sử dụng và nhiều tính năng hữu ích.

Với 9 bài viết về Java và JavaScript, bạn đã có nền tảng vững chắc về lập trình mạng! Chúc bạn thành công với đồ án!
