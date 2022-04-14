/* 변수의 선언
var : java에서 static 변수 선언하기
const : 불변변수 //java의 final
let : 가변변수, JS에서는 변수의 type을 지어하지 않는다
 = 변수에 대한 문제가 발생할 수 있다.
 = 동적 타입 변수
*/
var num = 10;
num = "대한민국";
console.log(num);

let num1 = 10;
num1 = "우리나라";
console.log(num1);

var num = "KOREA";
intNum = 100;
console.log(intNum);
let i = 12;

for (let i = 0; i < 10; i++) {
  console.log(i);
}
function Obj() {
  this.m = "hi";
  this.b = "hello";

  this.ss = function () {
    console.log("Hi");
  };
}

const obj = new Obj();

obj.ss();
console.log(obj.m, obj.b);
