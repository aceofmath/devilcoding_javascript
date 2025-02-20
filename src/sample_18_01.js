/**
 * 18_01. Generator
 * 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
 * 함수 옆에 * 표시를 하며 함수 내부는 정지구간에 yield 키워드를 사용
 * function* fn(){
 * }
 *
 * 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
 * next(), return(), throw()
 */

/**
 * 1-1. Generator함수
 *
 * iterable
 * -Symbol.iterator 메소드가 존재
 * -Symbol.iterator 는 iterator를 반환해야 한다.
 *
 * iterator
 * - next 메서드를 가진다.
 * - next 메소드는 value와 done 속성을 가진 객체를 반환한다.
 * - 작업이 끝나면 done은 true가 된다.
 */
console.log("18_01. Generator>>>> 시작");
function* fn() {
    try {
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

const a = fn();

// ===========================================

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
// console.log(it.next());

function* fn1() {
    yield 4;
    yield 5;
    yield 6;
}
const a1 = fn1();
console.log(a1[Symbol.iterator]() === a1);

for (let num of a1) {
    console.log(num);
}

const str = "hello";
const str1 = str[Symbol.iterator]();
console.log(str1.next());
console.log(str1.next());
console.log(str1.next());
console.log(str1.next());
console.log(str1.next());
console.log(str1.next());

// ===========================================

// Generator는 외부에서 값을 입력 받을 수도 있음.
// 브라우저에서 실행
function* fn2() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}

const a2 = fn2();

// ===========================================
// 그 때 그 때 생성함.
// 브라우저에서 실행

function* fn3() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const a3 = fn3();

// ===========================================
// yield*을 이용
// 브라우저에서 실행
// console.log(...get2());

function* get1() {
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* get2() {
    yield "Hello,";
    yield* get1();
    yield "!";
}

// ===========================================
// Generator는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분부터 이어서 실행
// ex) Redux Saga
