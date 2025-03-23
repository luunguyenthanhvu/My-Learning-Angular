# TypeScript - Tổng Quan và Cách Sử Dụng

## 1. Giới Thiệu TypeScript
TypeScript là một ngôn ngữ lập trình mã nguồn mở do Microsoft phát triển, mở rộng từ JavaScript với hệ thống kiểu tĩnh (static typing). Nó giúp viết mã dễ bảo trì hơn và giảm lỗi khi làm việc với dự án lớn.

### **Ưu điểm của TypeScript**:
- **Kiểu tĩnh (Static Typing)**: Giúp phát hiện lỗi trong quá trình biên dịch.
- **Hỗ trợ OOP**: Hỗ trợ class, interface, inheritance, v.v.
- **Tương thích với JavaScript**: Có thể dùng với các thư viện JavaScript.
- **Cải thiện Developer Experience**: IntelliSense, Autocomplete mạnh mẽ.

---
## 2. Cài Đặt TypeScript
### **Cài đặt TypeScript qua NPM**
```sh
npm install -g typescript
```

### **Kiểm tra phiên bản**
```sh
tsc --version
```

---
## 3. Viết Code TypeScript Cơ Bản
### **Khai báo biến với kiểu dữ liệu**
```ts
let message: string = "Hello, TypeScript!";
let age: number = 25;
let isDeveloper: boolean = true;
```

### **Union Type (Một biến có thể có nhiều kiểu dữ liệu)**
```ts
let myValue: string | number;
myValue = "Hello";
myValue = 100; // ✅ Hợp lệ
```

### **Interface và Object**
```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Thuộc tính không bắt buộc
}

const user: User = {
  name: "Alice",
  age: 30
};
```

### **Hàm với kiểu dữ liệu**
```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // 15
```

### **Class trong TypeScript**
```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("John", 25);
person.introduce();
```

---
## 4. Biên Dịch TypeScript Thành JavaScript
### **Dịch file `.ts` sang `.js`**
```sh
tsc example.ts
```
File `example.ts` sẽ được biên dịch thành `example.js`.

### **Chạy file TypeScript bằng Node.js**
```sh
node example.js
```

---
## 5. TypeScript Config (`tsconfig.json`)
TypeScript cho phép cấu hình thông qua file `tsconfig.json`. Ví dụ:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true
  }
}
```
Sau khi có `tsconfig.json`, có thể biên dịch toàn bộ dự án bằng:
```sh
tsc
```

---
## 6. Tổng Kết
- TypeScript là phiên bản nâng cấp của JavaScript với hệ thống kiểu tĩnh.
- Giúp phát hiện lỗi sớm và làm cho code dễ đọc hơn.
- Hỗ trợ lập trình hướng đối tượng, interface, generic, module v.v.
- Có thể dùng với nhiều framework như React, Angular, Node.js.

👉 **Khuyến nghị**: Nếu bạn đang phát triển dự án lớn, hãy sử dụng TypeScript để cải thiện chất lượng mã nguồn! 🚀

