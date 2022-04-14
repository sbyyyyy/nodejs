const student = () => {
  return ["홍길동", "서울시", "33"];
};

/*js는 함수에서 여러개의 데이터를 return할 수 있다. */

//함수가 여러개의 값을 return하면

//다음과 같이 각각 변수에 값을 받아서 저장 할 수 있다

const nations = ([한글, 영문] = ["대한민국", "Republic of Korea"]);

console.log("한글 : ", 한글, "영문", 영문);
// 배열의 요소 값을 각각 개별변수에 복사하기
console.log(nations[0]);
console.log(nations[1]);

let set = new Set([1, 2, 3, 4, 5]);
console.log(...set);

let [q, w, e, r, t] = set;
console.log(q, w);

const dog = { 이름: "몽", 나이: 11, 성별: "남" };
const jDog = JSON.stringify(dog);
console.log(jDog);
const reDog = JSON.parse(jDog);
console.log(reDog);
//////////////////////////////////////////////////
const { 이름 } = dog;
console.log(이름);

const studentFun = () => {
  return {
    name: "이몽룡",
    주소: "남원시",
    age: 20,
  };
};
const { name, age } = studentFun();

console.log(name, age);
