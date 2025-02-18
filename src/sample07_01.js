/**
 * 07_01. 배열(Array)
 * push() : 뒤에 삽입
 * pop() : 뒤에 삭제
 * unshift() : 앞에 삽입
 * shift() : 앞에 삭제
  */

/**
 * 1-1. arr.splice(n,m) : 특정 요소 지움 * 
 * 1-2. arr.splice(n,m,x) : 특정 요소 지우고 추가
 * n : 시작, m : 갯수, x : 추가
  */
let arr = [1,2,3,4,5];
let result = arr.splice(1,2);
console.log("1-1. arr.splice(n,m)>>>", arr);
console.log("1-1. arr.splice(n,m)>>>", result);

arr = [1,2,3,4,5];
arr.splice(1,3, 100, 200)
console.log("1-2. arr.splice(n,m,x)>>>", arr);

arr = ["나는", "철수", "입니다."];
arr.splice(1,0, "대한민국", "소방관")
console.log("1-2. arr.splice(n,m,x)>>>", arr);

/**
 * 2-1. arr.slice(n,m) : n부터 m까지 반환
 * 2-2. arr.splice() : 배열복사
 * n : 시작, m : 갯수
  */
arr = [1,2,3,4,5];
console.log("2-1. arr.slice(n,m)>>>", arr.slice(1,4));
arr = [1,2,3,4,5];
console.log("2-1. arr.slice(n,m)>>>", arr.slice());

/**
 * 3-1. arr.concat(arr2, arr3, ...) : 합쳐서 새배열 반환
  */
arr = [1,2];
console.log("3-1. arr.concat(arr2, arr3, ...)>>>", arr.concat([3,4]));
console.log("3-1. arr.concat(arr2, arr3, ...)>>>", arr.concat([3,4],[5,6]));
console.log("3-1. arr.concat(arr2, arr3, ...)>>>", arr.concat([3,4],5,6));


/**
 * 4-1. arr.forEach(fn) : 배열 반복
 * arr.forEach(item, index, arr)
  */
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((item, index, arr) => {
  console.log("4-1. arr.forEach>>>", `${index+1}. ${item}`);
});

/**
 * 5-1. arr.indexOf(n, m) : n의 첫번째 위치 / m부터 n의 시작 위치
 * 5-2. arr.lastIndexOf(n) : 끝에서 n의 첫번째 위치
  */
arr = [1,2,3,4,5,1,2,3];
console.log("5-1. arr.indexOf(n)>>>", arr.indexOf(3));
console.log("5-1. arr.indexOf(n,m)>>>", arr.indexOf(3,3));
console.log("5-2. arr.lastIndexOf(n)>>>", arr.lastIndexOf(3));


/**
 * 6-1. arr.includes() : 포함하는지 확인
  */
arr = [1,2,3];
console.log("6-1. arr.includes()>>>", arr.includes(2));
console.log("6-1. arr.includes()>>>", arr.includes(8));


/**
 * 7-1. arr.find(fn) : fn의 내용을 찾아 값을 반환
 * 7-2. arr.findIndex(fn) : fn의 내용을 찾아 index를 반환
 * 
 * 첫번째 true값만 반환
 * find : 없으면 undefined를 반환
 * findIndex : 없으면 -1를 반환
  */
arr = [1,2,3,4,5];
result = arr.find((item) => {
  return item % 2 === 0;
});
console.log("7-1. arr.find(fn)>>>", result);

result = arr.findIndex((item) => {
  return item % 2 === 0;
});
console.log("7-2. arr.findIndex(fn)>>>", result);

let userList = [
  {name : "Mike", age : 30},
  {name : "Jane", age : 27},
  {name : "Tom", age : 10},
]

result = userList.find((user) => {
  if(user.age < 19){
    return true;
  }
});
console.log("7-1. arr.find(fn)>>>", result);


/**
 * 8-1. arr.filter(fn) : fn의 내용에 맞는 모든 요소를 배열로 반환
  */
arr = [1,2,3,4,5];
result = arr.filter((item) => {
  return item % 2 === 0;
});
console.log("8-1. arr.filter(fn)>>>", result);


/**
 * 9-1. arr.reverse() : 역순으로 재정렬
  */
arr = [1,2,3,4,5];
console.log("9-1. arr.reverse()>>>", arr.reverse());

/**
 * 10-1. arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
  */
userList = [
  {name : "Mike", age : 30},
  {name : "Jane", age : 27},
  {name : "Tom", age : 10},
]

result = userList.map((user, index) => {
  return Object.assign({}, user, {
    id : index +1,
    isAdult : user.age > 19,
  });
});
console.log("10-1. arr.map(fn)>>>", result);


/**
 * 11-1. arr.join(delim) : 배열을 delimeter를 연결하여 string으로
  */
arr = [1,2,3,4,5];
console.log("11-1. arr.join(delim)>>>", arr.join());
console.log("11-1. arr.join(delim)>>>", arr.join("-"));

/**
 * 12-1. arr.split(delim) : string을 delimeter를 구분하여 배열로
  */
arr = "1,2,3,4,5";
console.log("12-1. arr.split(delim)>>>", arr.split(","));

/**
 * 13-1. Array.isArray() : 배열은 객체이므로 배열인지 구분하는 메소드
  */

user = {name : "Mike", age : 30};
arr = [1,2,3,4,5];
console.log("13-1. Array.isArray()>>>", typeof user);
console.log("13-1. Array.isArray()>>>", typeof arr);
console.log("13-1. Array.isArray()>>>", Array.isArray(user));
console.log("13-1. Array.isArray()>>>", Array.isArray(arr));
