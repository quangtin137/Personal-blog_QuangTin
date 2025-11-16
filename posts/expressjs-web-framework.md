---
title: "Express.js - Web Framework cho Node.js"
date: "2024-12-22"
category: "JavaScript"
excerpt: "Xây dựng RESTful API nhanh chóng và hiệu quả với Express.js framework."
---

# Express.js - Web Framework cho Node.js

Express.js là web framework phổ biến nhất cho Node.js, giúp xây dựng web applications và APIs một cách nhanh chóng và dễ dàng.

## Cài đặt Express

```bash
# Khởi tạo project
npm init -y

# Cài Express
npm install express

# Cài thêm dependencies hữu ích
npm install dotenv cors
```

## Hello World với Express

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
```

**Chạy**:
```bash
node app.js
```

## Routing cơ bản

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/', (req, res) => {
    res.send('Trang chủ');
});

app.get('/about', (req, res) => {
    res.send('Giới thiệu');
});

// POST request
app.post('/api/users', (req, res) => {
    res.send('Tạo user mới');
});

// PUT request
app.put('/api/users/:id', (req, res) => {
    res.send(`Cập nhật user ${req.params.id}`);
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
    res.send(`Xóa user ${req.params.id}`);
});

// Handle tất cả methods
app.all('/secret', (req, res) => {
    res.send('Secret page');
});

app.listen(3000);
```

## Route Parameters

```javascript
// URL parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Multiple parameters
app.get('/posts/:year/:month', (req, res) => {
    const { year, month } = req.params;
    res.send(`Posts from ${month}/${year}`);
});

// Query parameters
// URL: /search?q=nodejs&limit=10
app.get('/search', (req, res) => {
    const { q, limit } = req.query;
    res.json({
        keyword: q,
        limit: limit || 20
    });
});
```

## Middleware

Middleware là functions xử lý request trước khi đến route handler:

```javascript
const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body
app.use(express.static('public')); // Serve static files

// Custom middleware - Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Quan trọng: gọi next() để tiếp tục
});

// Middleware cho specific route
app.use('/api', (req, res, next) => {
    console.log('API request');
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(3000);
```

## Response Methods

```javascript
app.get('/examples', (req, res) => {
    // Send text
    res.send('Hello');
    
    // Send JSON
    res.json({ message: 'Success', data: [] });
    
    // Send status
    res.sendStatus(404); // Tương đương res.status(404).send('Not Found')
    
    // Set status code
    res.status(201).json({ message: 'Created' });
    
    // Redirect
    res.redirect('/new-url');
    
    // Send file
    res.sendFile('/path/to/file.pdf');
    
    // Download file
    res.download('/path/to/file.pdf');
});
```

## RESTful API với Express

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
let users = [
    { id: 1, name: 'Quang Tín', email: 'tin@example.com' },
    { id: 2, name: 'Nguyen Van A', email: 'a@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
});

// POST new user
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    
    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
});

app.listen(3000, () => {
    console.log('API running on port 3000');
});
```

## Router - Tổ chức Routes

**routes/users.js**:
```javascript
const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Tin' }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
});

module.exports = router;
```

**app.js**:
```javascript
const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());

// Mount router
app.use('/api/users', usersRouter);

app.listen(3000);
```

## Error Handling

```javascript
// 404 handler - đặt sau tất cả routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handler - phải có 4 parameters
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Throw error trong route
app.get('/error', (req, res, next) => {
    const error = new Error('Something wrong');
    error.status = 400;
    next(error); // Pass to error handler
});
```

## Validation

```javascript
// Simple validation middleware
const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and email are required'
        });
    }
    
    if (!email.includes('@')) {
        return res.status(400).json({
            message: 'Invalid email format'
        });
    }
    
    next();
};

app.post('/api/users', validateUser, (req, res) => {
    // Validation passed
    const newUser = req.body;
    res.status(201).json(newUser);
});
```

## CORS Middleware

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS cho tất cả origins
app.use(cors());

// Hoặc configure cụ thể
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/api/data', (req, res) => {
    res.json({ message: 'CORS enabled' });
});

app.listen(3000);
```

## Environment Variables

**.env**:
```
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost/mydb
```

**app.js**:
```javascript
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
    res.json({
        environment: NODE_ENV,
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
```

## Best Practices

1. **Sử dụng Router**: Tách routes thành modules riêng
2. **Error Handling**: Luôn có error handler
3. **Validation**: Validate input data
4. **Environment Variables**: Dùng .env cho configs
5. **Async/Await**: Xử lý async operations đúng cách
6. **Security**: Dùng helmet, rate limiting
7. **Logging**: Sử dụng morgan hoặc winston

## Kết luận

Express.js giúp xây dựng web applications và RESTful APIs nhanh chóng và hiệu quả. Với hệ sinh thái middleware phong phú, Express là lựa chọn hàng đầu cho Node.js development.

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về WebSocket và real-time communication!
