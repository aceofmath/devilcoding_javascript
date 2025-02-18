/**
 * 09_01. 구조 분해 할당(Destructuring assignment)
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
  */

/**
 * 1-1. 배열 구조 분해
  */
let [x, y] = [1,2];
console.log("1-1. 배열 구조 분해>>>", x, y);

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
console.log("1-1. 배열 구조 분해>>>", user1, user2, user3);
// let user1 = users[0]
let str = "Mike-Tom-Jane";
[user1, user2, user3] = str.split("-");
console.log("1-1. 배열 구조 분해>>>", user1, user2, user3);

/**
 * 1-2. 배열 구조 분해 : 기본값 예시
  */
let [a=1,b=2,c=3] = [1,2];
let [usr1, , usr2] = ['Mike', 'Tom', 'Jane', 'Tony'];

/**
 * 1-3. 배열 구조 분해 : 바꿔치기
  */
[x, y] = [y,x];
console.log("1-3. 배열 구조 분해>>>", x, y);


/**
 * 2-1. 객체 구조 분해
  */
let user = {name : 'Mike', age : 30};
let {name, age} = user;
console.log("2-1. 객체 구조 분해>>>", name, age);
// let name = user.name
// let {name, age} =  {age, name} = users
let {name:userName, age:userAge} = user;
console.log("2-1. 객체 구조 분해>>>", userName, userAge);

/**
 * 2-2. 객체 구조 분해 : 기본값
  */
let user22 = {name : 'Mike', age : 30};
//let {name2, age2, gender} = user2;
let {name2, age2, gender = 'male'} = user2;

let user23 = {name23 : 'Mike', age23 : 30, gender23 : 'female'};
let {name23, age23, gender23 = 'male'} = user23;
console.log("2-1. 객체 구조 분해>>>", gender23);