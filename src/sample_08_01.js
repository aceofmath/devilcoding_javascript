/**
 * 08_01. 배열(Array) 메소드2
  */

/**
 * 1-1. arr.sort() : 배열 재정렬
 * 배열 자체가 변경되니 주의
 * 인수로 정렬 로직을 담은 함수를 받음
  */
let arr = [1,5,4,3,2];
// console.log("1-1. arr.sort()>>>", arr.sort());

arr = [27,8,5,13];
// console.log("1-1. arr.sort()>>>", arr.sort());

arr = [27,8,5,13,55,30];
arr.sort((a,b) => {
  // console.log(b, a);
  return a - b; 
});
console.log("1-1. arr.sort()>>>", arr);

/**
 * 2-1. arr.reduce() : 
 * 인수로 함수를 받음
 * (누적 계산값, 현재값) => {return 계산값};
  */
arr = [1,5,4,3,2];
// for, for of, forEach
let result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log("2-1. arr.reduce()>>>", result);

let userList = [
  {name : "Mike", age : 30},
  {name : "Jane", age : 27},
  {name : "Tom", age : 10},
]

result = userList.reduce((prev, cur) => {
  if(cur.age > 19){
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log("2-1. arr.reduce()>>>", result);