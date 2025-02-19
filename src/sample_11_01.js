/**
 * 11_01. 클로저(Closer)
  */

/**
 * 1-1. 클로저(Closer)
 * 함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
  */
function makeAdder(x){
  return function(y){
    return x+y;
  }
}

const add3 = makeAdder(3);
console.log("1-1. 클로저(Closer)>>>", add3(2));
// add3함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

const add10 = makeAdder(10);
console.log("1-1. 클로저(Closer)>>>", add10(5));
console.log("1-1. 클로저(Closer)>>>", add3(1));

/**
 * 1-2. 은닉화
  */
function makeCounter(){
	let num = 0;

	return function(){
		return num++;
	}
}

let counter = makeCounter();

let counter1 = makeCounter();

console.log("1-2. 은닉화>>>counter", counter());
console.log("1-2. 은닉화>>>counter", counter());
console.log("1-2. 은닉화>>>counter", counter());
console.log("1-2. 은닉화>>>counter1", counter1());
console.log("1-2. 은닉화>>>counter1", counter1());