// 변수 : 프로그램이 실행되는 도중에 계속해서 바뀌는 값

let age = 25;
console.log(age); // 25

age = 30;
console.log(age); // 30

// 어떠한 값을 이름을 붙여 부르는 것을 '변수' (이름 붙은 저장소)

// 변수명 규칙
// 1. 변수명 앞에 기호를 붙일 수 없다. ex +, ^ (사용 가능한 기호 : _(언더스코어), $)
// 2. 변수명은 반드시 숫자가 아닌 문자로 시작해야한다.
// 3. 예약어(자바스크립트 미리 사용하기로 약속한 키워드)를 사용하지 못한다.(if)

// var
// let과 동일하게 변수를 선언하는 방식, 값을 바꿀 수 있는 점도 같다.
var number = 25;
var number = 25; // Error가 발생하지 않음 > 변수를 중복 선언 시 문제 발생

// const
// 변하지 않는 값 '상수'
// const read-only 값을 바꿀 수 없다.
const num = 25;
