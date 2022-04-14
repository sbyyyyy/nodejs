let num1 = 30;
let num2 = 20;

const sum = function () {
  return num1 + num2;
};
const sub = function () {
  return num1 - num2;
};

console.log(sum, sub);

function Obj() {
  const intNum1 = 10;
  let intNum2 = 5;

  this.sum = () => {
    console.log(intNum1 + intNum2);
  };
  this.sub = () => {
    console.log(intNum1 - intNum2);
  };
}

const obj = new Obj();

obj.sum();
obj.sub();

const trees = ["redwood", "bay", "cedar", "oak"];

const student = {
  이름: "홍길동",
  주소: "서울시",
  전화번호: "010-111",
  나이: "33",
};

console.log("이름" in student);

let title1;
const title2 = null;
const title3 = "";
const title4 = 0;
const title5 = NaN;
const title6 = undefined;

console.log(obj instanceof Obj);

/*논리적 false인 변수와 or 연산자를 조합하면 
상당히 편리한 코드 구현이 가능하다*/

const bYes = title1 || title2 || title3 || title4 || title5 || title6;

let bTitle;
// if(title2 != null){
//     bTitle = title2
// } else {
//     bTitle = "대한민국"
// } // 자바
const nation = "대한민국";
bTitle = title2 || nation; // JS

const b = 10 < 2;

for (let i = 0; i < nation.length; i++) {
  console.log(nation[i]);
}
console.log(bTitle);
