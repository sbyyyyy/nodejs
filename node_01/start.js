const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(sum);

const student = {
  이름: "홍길동",
  주소: "서울시",
  전화번호: "010-111",
  나이: "33",
};

console.table(student);

const intKor = [30, 40, 50, 60, 70, 80, 90, 100];
console.table(intKor);

const intEng = Array();
let number = 0;
for (let index = 0; index < 100; index++) {
  number += 100;
  intEng[index] = number;
}
console.table(intEng);

const intMath = Array();
for (let i = 0; i < 10; i++) {
  intMath[i] = Math.floor(Math.random() * (100 - 50) + 50);
}

console.table(intMath);

student.이름 = "이몽룡";
student.국적 = "대한민국";
console.table(student);

class Obj {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  hi() {
    console.log("─".repeat(100));
    console.log("hi");
    console.log("─".repeat(100));
  }
  hello() {
    console.log("─".repeat(100));
    console.log("hello");
    console.log("─".repeat(100));
  }
}

const obj = new Obj(1, 2, 3, 4);
obj.hi();
obj.hello();
