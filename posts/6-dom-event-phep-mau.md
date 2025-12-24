---
title: "DOM & Event: Phép màu làm website 'sống'"
date: "2025-12-20"
series: "HÀNH TRÌNH HỌC JAVA & JAVASCRIPT"
tags: [javascript, dom, event, web]
---

Tôi còn nhớ lần đầu làm được nút bấm đổi màu nền. Tôi ngồi ngắm nó cả buổi chiều.

"**Mình vừa làm cho website... sống!**"

Đó là khoảnh khắc tôi yêu JavaScript.

## DOM: Cây của website

**DOM (Document Object Model)** = Cách trình duyệt "nhìn" website.

```
document
  └── html
        ├── head
        │     └── title
        └── body
              ├── h1
              ├── p
              └── button
```

Mỗi thẻ HTML là một "nút". JavaScript có thể **tìm, sửa, thêm, xóa** bất kỳ nút nào!

## Event: Lắng nghe người dùng

**Event** = Sự kiện trên trang:
- `click` – nhấn chuột
- `hover` – di chuột qua
- `keydown` – nhấn phím
- `submit` – gửi form
- `scroll` – cuộn trang

JavaScript "nghe" event → phản hồi.

## Lần đầu thấy phép màu – Khoảnh khắc "Aha!"

Tôi tạo file HTML đơn giản:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Magic Button</title>
</head>
<body>
    <h1>Trang Web Đầu Tiên Của Tôi</h1>
    <button id="magicBtn">✨ Nhấn tôi!</button>
    <p id="message" style="font-size: 24px; color: gray;">Chưa có gì xảy ra...</p>

    <script>
        // JavaScript "lắng nghe" sự kiện click
        document.getElementById("magicBtn").addEventListener("click", function() {
            // Khi click, đổi text!
            document.getElementById("message").textContent = "🎉 WOW! Bạn vừa nhấn nút!";
            document.getElementById("message").style.color = "green";
        });
    </script>
</body>
</html>
```

Mở file HTML trên browser, click nút...

**BOOM!** Text thay đổi **NGAY LẬP TỨC** – không reload trang, không làm gì cả!

Tôi ngồi nhìn nó và nghĩ: "**Holy shit, tôi vừa làm cho website... SỐNG!**"

Đây là lần đầu tôi cảm nhận được sức mạnh của JavaScript. Không phải code console nhàm chán. Không phải text trắng đen. Mà là thứ **MỌI NGƯỜI NHÌN THẤY ĐƯỢC**, **TƯƠNG TÁC ĐƯỢC**!

### Nâng cấp: Thêm hiệu ứng

```html
<button id="colorBtn">Đổi màu nền</button>

<script>
document.getElementById("colorBtn").addEventListener("click", function() {
    // Random màu nền
    let colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
</script>
```

Click một cái → Màu nền đổi! Click lại → Đổi màu khác! 

**Tôi ngồi chơi với nó cả buổi chiều.** Cảm giác như đang làm phép thuật!

## Project đầu tiên: Todo List

Ứng dụng đầu tiên: Todo List đơn giản. Khi tôi có thể:
- Thêm task mới
- Đánh dấu hoàn thành
- Xóa task

...tôi cảm thấy như xây được "sản phẩm thật". Dù xấu, dù code lộn xộn, nhưng nó **HOẠT ĐỘNG**.

**Cảm giác đó tuyệt vời hơn điểm 10 trên trường.**

## Hiệu ứng thú vị chỉ vài dòng

### Rainbow cursor
```javascript
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = 
        `radial-gradient(circle at ${x}px ${y}px, #667eea, #764ba2)`;
});
```

Background đổi theo vị trí chuột! 🌈

### Auto-type effect
```javascript
const text = "Hello, World!";
let i = 0;
setInterval(() => {
    document.getElementById("text").textContent = text.slice(0, i++);
}, 100);
```

Chữ hiện từng chữ như đang gõ!

## Tại sao JS hấp dẫn?

1. **Kết quả nhìn thấy ngay** – không như Java phải tưởng tượng
2. **Sáng tạo không giới hạn** – animation, game, interactive UI
3. **Chia sẻ dễ** – Gửi link là bạn bè xài ngay

## Bắt đầu từ đâu?

1. **Học DOM manipulation** – getElementById, querySelector
2. **Học Events** – addEventListener
3. **Làm mini project** – Calculator, Clock, Todo
4. **Đừng chỉ đọc** – PHẢI làm mới nhớ

---

*JavaScript biến website từ "poster" thành "ứng dụng". Hãy bắt đầu với điều nhỏ nhất!* 🌟
