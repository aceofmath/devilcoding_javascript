/**
 * 05_01. 숫자, 수학 method(Number, Math)
  */

/**
 * 1. toString() : 10진수 → 2진수/16진수
 */ 
let num = 10;
console.log("1. toString()>>>>>", num.toString());
console.log("1. toString()>>>>>", num.toString(2));
console.log("1. toString()>>>>>", num.toString(16));

let num2 = 255;
console.log("1. toString()>>>>>", num2.toString(16));


/**
 * 2. Math상수 : PI
 */ 
console.log("2. Math상수>>>>>", Math.PI);

/**
 * 3. Math 메소드
 * Math.ceil() : 올림
 * Math.floor() : 내림
 * Math.round() : 반올림
 * Math.random() : 0~1 사이의 램덤숫자
 * Math.max()
 * Math.min()
 * Math.abs() : 절대값
 * Math.pow(n,m) : n의 m승
 * Math.sqrt() : 양의 제곱근
 */ 
let num31 = 5.1;
let num32 = 5.7;

console.log("3. Math 메소드(ceil)>>>", Math.ceil(num31));
console.log("3. Math 메소드(ceil)>>>", Math.ceil(num32));

console.log("3. Math 메소드(floor)>>>", Math.floor(num31));
console.log("3. Math 메소드(floor)>>>", Math.floor(num32));

console.log("3. Math 메소드(round)>>>", Math.round(num31));
console.log("3. Math 메소드(round)>>>", Math.round(num32));

let userRate = 30.1234;
// 요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림) ← 30.12
console.log("3. Math 메소드(round)>>>",Math.round(userRate *100)/100);
console.log("3.소수점 자릿수toFixed()>>>",userRate.toFixed(2));
console.log("3.소수점 자릿수toFixed()>>>",userRate.toFixed(0));
console.log("3.소수점 자릿수toFixed()>>>",userRate.toFixed(6));

console.log("3.Math.random()>>>", Math.floor(Math.random()*100)+1);
console.log("3.Math.max()>>>", Math.max(1,4,-1,5,10,9,5.54));
console.log("3.Math.min()>>>", Math.min(1,4,-1,5,10,9,5.54));
console.log("3.Math.abs()>>>", Math.abs(-10.5));
console.log("3.Math.pow()>>>", Math.pow(2,10));
console.log("3.Math.sqrt()>>>", Math.sqrt(16));

// 4.isNaN()
let x = Number('x');
console.log("4.isNaN()>>>", x == NaN);
console.log("4.isNaN()>>>", x === NaN);
console.log("4.isNaN()>>>", NaN == NaN);
console.log("4.isNaN()>>>", isNaN(x));
console.log("4.isNaN()>>>", isNaN(3));

// 5.parseInt()
let margin = '10px';
console.log("5.parseInt()>>>", parseInt(margin));
console.log("5.parseInt()>>>", Number(margin));

let redColor = 'f3';
console.log("5.parseInt()>>>", parseInt(redColor));
console.log("5.parseInt()>>>", parseInt(redColor,16));
console.log("5.parseInt()>>>", parseInt('11',2));

// 5.parseFloat()
let padding = '18.5%';
console.log("5.parseInt()>>>", parseInt(padding));
console.log("5.parseInt()>>>", parseFloat(padding));