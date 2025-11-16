---
title: "JavaScript cơ bản và ES6+ Features"
date: "2024-12-18"
category: "JavaScript"
excerpt: "Tìm hiểu về JavaScript modern với các tính năng ES6+ như arrow functions, destructuring, promises và async/await."
---

# JavaScript cơ bản và ES6+ Features

JavaScript là ngôn ngữ lập trình phổ biến nhất cho web development. Với ES6 (ECMAScript 2015) và các phiên bản sau, JavaScript đã trở nên mạnh mẽ và hiện đại hơn rất nhiều.

## Biến: let, const, var

### var (cũ - tránh dùng)
```javascript
var x = 10;
var x = 20; // OK - có thể khai báo lại
```

### let (ES6)
```javascript
let y = 10;
y = 20; // OK - có thể gán lại
// let y = 30; // Error - không thể khai báo lại
```

### const (ES6)
```javascript
const z = 10;
// z = 20; // Error - không thể gán lại
// const z = 30; // Error - không thể khai báo lại

// Với object/array, có thể thay đổi properties
const user = { name: 'Tin' };
user.name = 'Quang'; // OK
user.age = 20; // OK
// user = {}; // Error - không thể gán lại object
```

**Best practice**: Dùng `const` mặc định, chỉ dùng `let` khi cần gán lại giá trị.

## Arrow Functions

```javascript
// Function truyền thống
function sum(a, b) {
    return a + b;
}

// Arrow function
const sum = (a, b) => a + b;

// Arrow function với nhiều dòng
const greet = (name) => {
    const message = `Xin chào, ${name}!`;
    return message;
};

// Arrow function với 1 tham số (bỏ được ngoặc)
const square = x => x * x;

// Không có tham số
const sayHello = () => console.log('Hello!');
```

**Lợi ích**: Cú pháp ngắn gọn, không bind `this` riêng.

## Template Literals

```javascript
const name = 'Quang Tín';
const age = 20;

// Cách cũ
console.log('Tên: ' + name + ', Tuổi: ' + age);

// Template literals (ES6)
console.log(`Tên: ${name}, Tuổi: ${age}`);

// Multi-line
const message = `
    Xin chào ${name}!
    Năm nay bạn ${age} tuổi.
    Chúc mừng sinh nhật!
`;

// Expression trong ${}
console.log(`Năm sau tôi ${age + 1} tuổi`);
```

## Destructuring

### Array Destructuring
```javascript
const numbers = [1, 2, 3, 4, 5];

// Cách cũ
const first = numbers[0];
const second = numbers[1];

// Destructuring
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Skip elements
const [a, , c] = numbers;
console.log(a); // 1
console.log(c); // 3
```

### Object Destructuring
```javascript
const user = {
    name: 'Quang Tín',
    age: 20,
    email: 'tin@example.com'
};

// Cách cũ
const name = user.name;
const age = user.age;

// Destructuring
const { name, age, email } = user;

// Đổi tên biến
const { name: userName, age: userAge } = user;

// Default values
const { name, country = 'Vietnam' } = user;
console.log(country); // 'Vietnam'

// Nested destructuring
const student = {
    info: {
        name: 'Tin',
        age: 20
    }
};
const { info: { name, age } } = student;
```

## Spread Operator (...)

```javascript
// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Nối arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Object
const user = { name: 'Tin', age: 20 };
const address = { city: 'Hanoi', country: 'Vietnam' };

// Merge objects
const userInfo = { ...user, ...address };

// Override properties
const updated = { ...user, age: 21 };
```

## Default Parameters

```javascript
// Cách cũ
function greet(name) {
    name = name || 'Guest';
    console.log('Hello, ' + name);
}

// ES6
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

// Với arrow function
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));    // 5
console.log(multiply(5, 2)); // 10
```

## Promises

```javascript
// Tạo Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: 'User data' });
            } else {
                reject('Error fetching data');
            }
        }, 1000);
    });
};

// Sử dụng Promise
fetchData()
    .then(result => {
        console.log('Success:', result);
        return result.data;
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Done');
    });
```

## Async/Await

```javascript
// Thay vì dùng .then()
const getUserData = async () => {
    try {
        const result = await fetchData();
        console.log('Result:', result);
        
        const moreData = await fetchMoreData();
        console.log('More data:', moreData);
        
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
};

// Gọi async function
getUserData();

// Multiple async operations
const getAllData = async () => {
    try {
        // Sequential
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        
        // Parallel
        const [users, comments] = await Promise.all([
            fetchUsers(),
            fetchComments()
        ]);
    } catch (error) {
        console.error(error);
    }
};
```

## Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform elements
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - lọc elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// find - tìm element đầu tiên
const found = numbers.find(n => n > 3);
console.log(found); // 4

// reduce - tính toán tổng hợp
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// some - kiểm tra có ít nhất 1 element
const hasEven = numbers.some(n => n % 2 === 0);

// every - kiểm tra tất cả elements
const allPositive = numbers.every(n => n > 0);

// forEach - duyệt qua elements
numbers.forEach(n => console.log(n));
```

## Classes (ES6)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Tôi là ${this.name}, ${this.age} tuổi`);
    }
    
    // Static method
    static create(name, age) {
        return new Person(name, age);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} đang học lớp ${this.grade}`);
    }
}

const student = new Student('Tin', 20, 'IT');
student.introduce(); // Từ Person
student.study();     // Từ Student
```

## Modules (Import/Export)

**math.js**:
```javascript
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}
```

**app.js**:
```javascript
import multiply, { PI, add } from './math.js';

console.log(PI);           // 3.14159
console.log(add(2, 3));    // 5
console.log(multiply(4, 5)); // 20
```

## Kết luận

ES6+ đã mang đến rất nhiều tính năng mạnh mẽ cho JavaScript. Những feature này giúp code ngắn gọn, dễ đọc và dễ maintain hơn. Hãy thực hành thường xuyên để thành thạo!

Trong bài tiếp theo, chúng ta sẽ tìm hiểu về Node.js và xây dựng server với JavaScript!
